import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cod } = req.query;
  if (!cod || typeof cod !== 'string') {
    res.status(400).json({ error: 'Missing course code' });
    return;
  }

  const filePath = path.join(process.cwd(), 'src', 'data', 'textData.txt'); // updated file
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Build map of sections keyed by normalized code (e.g. BIO100)
    const lines = content.split(/\r?\n/);
    const sections: { [key: string]: string } = {};
    let currentKey: string | null = null;
    let currentBuffer: string[] = [];

    // header regex: e.g. "BIO 100 - The Living World" or "ASM 246 - Human Origins"
    const headerRegex = /^\s*([A-Za-z]{2,4}\s*\d{1,4})(?:\s*[-–—]\s*(.*))?$/;

    const normalizeKey = (s: string) => s.replace(/[^A-Za-z0-9]/g, '').toUpperCase();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const m = line.match(headerRegex);
      if (m) {
        // flush previous
        if (currentKey && currentBuffer.length) {
          sections[currentKey] = currentBuffer.join('\n').trim();
        }
        // start new section
        const codePart = m[1]; // e.g. "BIO 100"
        currentKey = normalizeKey(codePart);
        currentBuffer = [];
        // include header line as part of section
        currentBuffer.push(line);
      } else {
        if (currentKey) currentBuffer.push(line);
      }
    }
    // flush last
    if (currentKey && currentBuffer.length) {
      sections[currentKey] = currentBuffer.join('\n').trim();
    }

    const lookup = normalizeKey(cod);

    // direct exact lookup
    if (sections[lookup]) {
      res.status(200).json({ details: sections[lookup] });
      return;
    }

    // try more permissive matches: startsWith or contains code
    const exactKey = Object.keys(sections).find((k) => k === lookup || k.startsWith(lookup) || lookup.startsWith(k));
    if (exactKey) {
      res.status(200).json({ details: sections[exactKey] });
      return;
    }

    // fallback: search by substring inside section (title search)
    const lowerQuery = cod.toLowerCase();
    const foundByContentKey = Object.keys(sections).find((k) =>
      sections[k].toLowerCase().includes(lowerQuery)
    );
    if (foundByContentKey) {
      res.status(200).json({ details: sections[foundByContentKey] });
      return;
    }

    // nothing found
    res.status(404).json({ error: 'Course not found' });
  } catch {
    console.error('courseDetails error');
    res.status(500).json({ error: 'Failed to read file' });
  }
}
