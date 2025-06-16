import React from "react";
import { Download } from "lucide-react";

export function Legend() {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Legend</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#0083cb] bg-opacity-10 border border-[#0083cb] rounded"></div>
            <span className="text-sm text-gray-600">Holiday</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-50 border border-red-200 rounded"></div>
            <span className="text-sm text-gray-600">Last Day of Term</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#fdaf17] bg-opacity-20 border border-[#fdaf17] rounded"></div>
            <span className="text-sm text-gray-600">Graduation Day</span>
          </div>
        </div>
      </div>
      <a
        href="https://dl.dropboxusercontent.com/scl/fi/res2em40rq4fh4gjbxl6s/Academic-Calendar-25-26-3.pdf?rlkey=j6hr94iqs6v0xwi5teafc93s3&st=4cmz5dvf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="mt-4 md:mt-0 bg-[#ff141f] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors duration-200 flex items-center gap-2"
          type="button"
        >
          <Download className="w-5 h-5" />
          Download
        </button>
      </a>
    </div>
  );
}
