import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import courses from '../../data/courses.json';
import { courses as cursosData } from '../../data/cursosData';
import Link from 'next/link';
import { User, Calendar, BookOpen } from 'lucide-react';
import teacherPhotos from '../../data/teachersphotos.json';

// Small modal (no external deps)
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose} role="dialog" aria-modal="true">
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 max-h-[85vh] overflow-auto z-10" onClick={(e) => e.stopPropagation()}>
				<button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 text-xl">✕</button>
				{children}
			</div>
		</div>
	);
}

const normalizeKey = (s = '') => s.replace(/[^A-Za-z0-9]/g, '').toUpperCase();

export default function CourseDetail() {
	const router = useRouter();
	const { cod } = router.query as { cod?: string };
	const [detailsText, setDetailsText] = useState<string>('');
	const [loading, setLoading] = useState(false);
	const [bioOpen, setBioOpen] = useState(false);
	const [bioContent, setBioContent] = useState(''); // biography text
	const [modalHeader, setModalHeader] = useState<{ name?: string; titles?: string[]; formation?: string; school?: string } | null>(null);

	// find course data from both sources
	const [course, cursoData] = useMemo(() => {
		if (!cod) return [null, null];
		const key = normalizeKey(String(cod));
		
		const courseMatch = courses.find((c) => normalizeKey(c.cod) === key) ||
			courses.find((c) => normalizeKey(c.title).includes(key));
			
		const cursoMatch = cursosData.find((c) => normalizeKey(c.cod) === key) ||
			cursosData.find((c) => normalizeKey(c.title).includes(key));
		
		return [courseMatch, cursoMatch];
	}, [cod]);

	// fetch details and sanitize separators
	useEffect(() => {
		if (!cod) return;
		let cancelled = false;
		setLoading(true);
		fetch(`/api/courseDetails?cod=${encodeURIComponent(String(cod))}`)
			.then((r) => r.json())
			.then((data) => {
				if (cancelled) return;
				if (data.details) {
					// remove long hyphen separators and stray "Read bio" inline labels
					const cleaned = String(data.details)
						.replace(/^-{3,}.*$/gm, '')
						.replace(/Read\s*bio[\s\-:\u2013\u2014].*/gi, '')
						.replace(/\n{3,}/g, '\n\n')
						.trim();
					setDetailsText(cleaned);
				} else setDetailsText('Details not found.');
			})
			.catch(() => {
				if (cancelled) return;
				setDetailsText('Error loading details.');
			})
			.finally(() => !cancelled && setLoading(false));
		return () => { cancelled = true; };
	}, [cod]);

	// extract meta fields from detailsText
	const meta = useMemo(() => {
		if (!detailsText) return {};
		const get = (label: string) => {
			const re = new RegExp(label + '\\s*[:]?\\s*(.*)', 'i');
			const m = detailsText.match(re);
			return m ? m[1].trim() : undefined;
		};
		return {
			credits: get('Credits') || course?.credits,
			length: get('Length') || course?.length,
			cost: get('Cost'),
			nextStart: get('Next start date') || course?.nextStartDate,
			subject: (detailsText.split(/\r?\n/)[1] || '').trim(),
		};
	}, [detailsText, course]);

	// combine any faculty or biography sections into single blocks (some courses have multiple blocks)
	// (removed unused 'sections' parsing; using text directly elsewhere)

	return (
		<>
			<Header />
			<main className="min-h-screen bg-gray-50">
				{/* Course Header with larger Image and centered info card over image */}
				<div className="relative w-full h-[72vh] md:h-[76vh] lg:h-[80vh]">
					{cursoData?.image ? (
						<Image src={cursoData.image} alt={cursoData.title} fill style={{ objectFit: 'cover' }} priority />
					) : (
						<div className="bg-gradient-to-r from-orange-400 to-red-500 w-full h-full" />
					)}
					<div className="absolute inset-0 bg-black/25" />

					{/* Centered rectangular info card (rounded) above the image bottom */}
					<div className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 w-[94%] md:w-10/12 lg:w-8/12">
						<div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
							<div className="flex-1">
								<div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 text-[#2e2b70] font-semibold rounded-full shadow-md ring-1 ring-gray-200 mb-2">
									<span className="text-sm md:text-base tracking-wider">{cursoData?.cod || course?.cod || String(cod || '')}</span>
								</div>
								<h1 className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: '#2e2b70' }}>{cursoData?.title || course?.title || 'Course Title'}</h1>
								<p className="text-sm text-gray-700 mb-2">{cursoData?.subtitle || course?.subject || ''}</p>

								{/* meta badges inline; cost hidden */}
								<div className="flex flex-wrap gap-3 items-center mt-2 text-sm text-gray-700">
									{meta.subject && <span className="text-sm text-gray-600">{meta.subject}</span>}
									{meta.credits && <span className="px-3 py-1 rounded bg-gray-100 text-sm font-medium">Credits: {meta.credits}</span>}
									{meta.length && <span className="px-3 py-1 rounded bg-gray-100 text-sm font-medium">Length: {meta.length}</span>}
									{meta.nextStart && <span className="px-3 py-1 rounded bg-gray-100 text-sm font-medium flex items-center gap-2"><Calendar className="w-4 h-4" />{meta.nextStart}</span>}
								</div>
							</div>

							{/* actions - aligned inline */}
							<div className="flex gap-3 items-center">
								{cursoData?.syllabus && (
									<a href={cursoData.syllabus} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-[#ff141f] hover:bg-red-700 text-white rounded-lg text-sm font-medium">
										View Syllabus
									</a>
								)}
								{cursoData?.video && (
									<button onClick={() => window.open(cursoData.video, '_blank', 'noopener,noreferrer')} className="inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-gray-800 rounded-lg text-sm">
										Watch Video
									</button>
								)}
								<Link href="/courseCatalog" legacyBehavior>
									<a className="inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:underline">← Back</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="max-w-6xl mx-auto px-6 py-8">
					{loading ? (
						<div className="text-center py-12">Loading details...</div>
					) : detailsText ? (
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Left Column - Main Content */}
							<div className="lg:col-span-2 space-y-6">
                                {/* Overview Section */}
                                {course?.overview && (
                                    <div className="bg-white rounded-lg shadow-sm border p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
                                        <div className="text-gray-700 leading-relaxed">{course.overview}</div>
                                    </div>
                                )}

                                {/* What You'll Learn Section */}
                                {course?.whatYouLearn && Array.isArray(course.whatYouLearn) && (
                                    <div className="bg-white rounded-lg shadow-sm border p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <BookOpen className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-900">What You&apos;ll Learn</h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {course.whatYouLearn.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Prerequisites Section */}
                                {course?.prerequisites && (
                                    <div className="bg-white rounded-lg shadow-sm border p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-4">Course prerequisites and requirements</h2>
                                        <div className="text-gray-700 leading-relaxed">{course.prerequisites}</div>
                                    </div>
                                )}
							</div>

							{/* Right Column - Sidebar */}
							<div className="space-y-6">
                                {/* Course Requirements */}
                                {course?.grading && Array.isArray(course.grading) && course.grading.length > 0 && (
                                    <div className="bg-white rounded-lg shadow-sm border p-6">
                                        <h3 className="text-lg font-bold" style={{ color: '#2e2b70' }}>Exams and grading</h3>
                                        <div className="mt-4 grid grid-cols-1 gap-3">
                                            {course.grading.map((item: string, idx: number) => {
                                                const pctMatch = item.match(/^(\d+)%\s*(.*)$/);
                                                const ptsMatch = item.match(/^(\d+)\s*pts\s*(.*)$/i);
                                                if (pctMatch) {
                                                    return (
                                                        <div key={idx} className="flex items-center gap-4">
                                                            <div className="min-w-[4rem] w-auto h-16 px-3 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-800 font-bold text-xs sm:text-sm border border-indigo-100 whitespace-nowrap">
                                                                {pctMatch[1]}%
                                                            </div>
                                                            <div className="text-sm text-gray-700 flex-1">{pctMatch[2].trim()}</div>
                                                        </div>
                                                    );
                                                }
                                                if (ptsMatch) {
                                                    return (
                                                        <div key={idx} className="flex items-center gap-4">
                                                            <div className="min-w-[4.5rem] w-auto h-16 px-3 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-800 font-bold text-xs sm:text-sm border border-indigo-100 whitespace-nowrap">
                                                                {ptsMatch[1]} pts
                                                            </div>
                                                            <div className="text-sm text-gray-700">{ptsMatch[2].trim()}</div>
                                                        </div>
                                                    );
                                                }
                                                return <div key={idx} className="text-sm text-gray-700">{item}</div>;
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Transcript */}
                                {course?.transcript && (
                                    <div className="bg-white rounded-lg shadow-sm border p-6">
                                        <h3 className="text-lg font-bold mb-3" style={{ color: '#2e2b70' }}>Transcript</h3>
                                        <div className="text-sm text-gray-700">{course.transcript}</div>
                                    </div>
                                )}
							</div>
						</div>
					) : (
						<div className="text-center py-12 text-gray-600">No details found for this course.</div>
					)}
				</div>

{/* Faculty Section with dark background */}
{course?.faculty && course.faculty.length > 0 && (
	<div className="mt-16 mx-20 rounded-2xl bg-gray-900 text-white py-16 mb-10">
		<div className="max-w-5xl mx-auto px-6">
			<h2 className="text-3xl font-bold text-center mb-16">Faculty and course staff</h2>
			
			{/* Container with grid to maintain row alignment */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[160rem] mx-auto px-4">
				{course.faculty.map((member, idx) => (
					<div 
						key={idx} 
						className="bg-white rounded-xl p-6 flex-none cursor-pointer hover:bg-gray-50 transition-colors duration-200 shadow-xl"
						onClick={() => {
							if (member.bio) {
								setModalHeader({
									name: member.name,
									titles: member.role ? [member.role] : [],
									school: 'school' in member ? member.school : undefined
								});
								setBioContent(member.bio);
								setBioOpen(true);
							}
						}}
					>
						<div className="flex items-start gap-4">
							<div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 ring-4 ring-gray-200 overflow-hidden shadow-xl">
								{teacherPhotos.find(t => t.nome.toLowerCase() === member.name?.toLowerCase())?.image ? (
									<Image 
										src={teacherPhotos.find(t => t.nome.toLowerCase() === member.name?.toLowerCase())?.image || ''} 
										alt={member.name || ''} 
										width={128} 
										height={128} 
										className="w-full h-full object-cover"
									/>
								) : (
									<User className="w-12 h-12 text-gray-400" />
								)}
							</div>
							<div className="flex-1 min-w-0 pt-1">
								{member.name && (
									<h3 className="text-xl font-bold text-white mb-2 bg-yellow-400 px-3 py-1 rounded inline-block">
										{member.name}
									</h3>
								)}
								{member.role && (
									<p className="text-gray-700 font-semibold text-base mb-2">
										{member.role}
									</p>
								)}
								{'school' in member && member.school && (
									<p className="text-gray-600 text-sm mb-3">
										{member.school}
									</p>
								)}
								{member.bio && (
									<button
										onClick={(e) => {
											e.stopPropagation();
											setModalHeader({
												name: member.name,
												titles: member.role ? [member.role] : [],
												school: 'school' in member ? member.school : undefined
											});
											setBioContent(member.bio);
											setBioOpen(true);
										}}
										className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors px-3 py-1.5 bg-gray-100 rounded-lg"
									>
										Read bio
									</button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
)}

{/* Rodapé com imagem */}
<div className="w-full flex justify-center bg-transparent mt-0 mb-10">
    <div className="w-full max-w-7xl">
        <Image src="/rodapeImg.png" alt="Rodapé" width={1920} height={180} style={{ width: '100%', height: 'auto' }} priority />
    </div>
</div>
			</main>
 
			{/* Bio Modal: structured header then biography */}
			<Modal open={bioOpen} onClose={() => setBioOpen(false)}>
				<div className="flex items-start gap-6 mb-6">
					<div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 ring-4 ring-gray-200 overflow-hidden">
						{(teacherPhotos.find(t => t.nome.toLowerCase() === (modalHeader?.name || '').toLowerCase())?.image) ? (
							<Image
								src={teacherPhotos.find(t => t.nome.toLowerCase() === (modalHeader?.name || '').toLowerCase())?.image || ''}
								alt={modalHeader?.name || 'Instructor'}
								width={112}
								height={112}
								className="w-full h-full object-cover"
							/>
						) : (
							<User className="w-12 h-12 text-gray-600" />
						)}
					</div>
					<div className="flex-1">
						{modalHeader?.name && (
							<h3 className="text-xl font-bold text-gray-900 mb-1">{modalHeader.name}</h3>
						)}
						{modalHeader?.titles?.map((title, i) => (
							<div key={i} className="text-sm text-gray-600">{title}</div>
						))}
						{modalHeader?.school && (
							<div className="text-sm text-gray-600 mt-1">{modalHeader.school}</div>
						)}
					</div>
				</div>
				<h4 className="text-lg font-semibold text-gray-900 mb-3">Biography</h4>
				<div className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{bioContent}</div>
			</Modal>
 
 			<Footer />
 		</>
 	);
}