import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { courses } from '../data/cursosData';
import Image from 'next/image';
import { Search, Clock, Calendar, Monitor, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CourseCatalog() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');
	const PAGE_SIZE = 9;
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const sentinelRef = useRef<HTMLDivElement | null>(null);
	const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsHeaderLoaded(true), 200);
		return () => clearTimeout(timer);
	}, []);

	// filter
	const filteredCourses = courses.filter(
		(course) =>
			course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			course.cod.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// reset visibleCount when search changes
	useEffect(() => setVisibleCount(PAGE_SIZE), [searchTerm]);

	// auto-load more when sentinel becomes visible
	useEffect(() => {
		const sentinel = sentinelRef.current;
		if (!sentinel) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredCourses.length));
					}
				});
			},
			{ root: null, rootMargin: '200px', threshold: 0.1 }
		);
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [filteredCourses.length]);

	const visibleCourses = filteredCourses.slice(0, visibleCount);

	const CourseImage = ({ src, alt }: { src: string; alt: string }) => {
		const [imgSrc, setImgSrc] = useState(src);
		const [isLoading, setIsLoading] = useState(true);

		return (
			<div className="relative h-48 bg-gray-100 overflow-hidden">
				{isLoading && (
					<div className="absolute inset-0 flex items-center justify-center z-10 bg-white/30">
						<div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin" />
					</div>
				)}

				<Image
					src={imgSrc}
					alt={alt}
					fill
					style={{ objectFit: 'cover' }}
					className="object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
					onLoad={() => setIsLoading(false)}
					onError={() => {
						setImgSrc('/placeholder-course.webp');
						setIsLoading(false);
					}}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		);
	};

	const sanitizeDescription = (text?: string) => {
		if (!text) return '';
		return text
			.replace(/Course duration:[^\.\n]*[.\n]?/gi, '')
			.replace(/Credits available:[^\.\n]*[.\n]?/gi, '')
			.replace(/Session-based:[^\n]*[\n]?/gi, '')
			.replace(/On-demand:[^\n]*[\n]?/gi, '')
			.replace(/Session-based:\s*Next start date:[^\.\n]*[.\n]?/gi, '')
			.replace(/\s{2,}/g, ' ')
			.trim();
	};

	const CourseCard = ({ course }: { course: typeof courses[number] }) => {
		const description = sanitizeDescription(course.description);
		return (
			<div 
				className="relative bg-white rounded-lg shadow-lg overflow-hidden transform-gpu transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer group"
				onClick={() => handleShowDetails(course.cod)}
			>
				<div className="relative">
					<CourseImage src={course.image} alt={course.title} />
					<div className="absolute top-3 left-3 bg-white/90 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
						{course.cod}
					</div>
				</div>

				<div className="p-6 pb-20">
					<div className="mb-2">
						<h3 className="text-xl font-bold text-gray-900 leading-tight">{course.title}</h3>
					</div>

					<p className="text-sm text-black font-semibold mb-3">{course.subtitle || '—'}</p>

					<p className="text-gray-700 text-sm mb-4 line-clamp-3">{description || 'No description available.'}</p>

					<div className="mt-2 mb-1 text-sm text-gray-700 font-semibold">Credits available: {course.credits}</div>

					<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
						{course.duration && (
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4 text-gray-400" />
								<span>{course.duration}</span>
							</div>
						)}

						{course.modality && (
							<div className="flex items-center gap-2">
								<Monitor className="w-4 h-4 text-gray-400" />
								<span>{course.modality}</span>
							</div>
						)}

						{course.nextStartDate && (
							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4 text-gray-400" />
								<span>{course.nextStartDate}</span>
							</div>
						)}
					</div>

					<div className="absolute right-4 bottom-5">
						<button
							onClick={(e) => {
								e.stopPropagation();
								handleShowDetails(course.cod);
							}}
							className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center group-hover:underline transition-colors"
							aria-label={`Learn more about ${course.title}`}
							title="Learn more"
						>
							Learn more
							<ArrowRight className="w-4 h-4 ml-2" />
						</button>
					</div>
				</div>

				<div className="absolute left-0 bottom-0 w-full">
					<div className="h-1 w-full bg-[#ff9f00] rounded-b-lg shadow-sm" />
				</div>
			</div>
		);
	};

	// navigate to course page
	const handleShowDetails = (cod: string) => {
		router.push(`/course/${encodeURIComponent(cod)}`);
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<div className="relative h-[70vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/fundoCatalog.webp"
						alt="Course catalog background"
						fill
						sizes="100vw"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						quality={95}
						priority
						placeholder="blur"
						blurDataURL="data:image/jpeg;base64,..."
					/>
					<div
						className="absolute inset-0"
						style={{
							background:
								'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)',
						}}
					/>

  {/* Cloud effect positioned at the bottom edge of the hero image */}
  <svg
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 bottom-0 w-full h-[100px] min-w-full pointer-events-none"
    style={{ 
      display: "block",
      width: "100vw",
      minWidth: "100vw",
      zIndex: 2
    }}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0,80 Q360,120 720,80 T1440,80 V120 H0 Z"
      fill="white"
      opacity="0.35"
    />
    <path
      d="M0,100 Q360,140 720,100 T1440,100 V120 H0 Z"
      fill="white"
      opacity="0.18"
    />
  </svg>

  {/* Mirrored cloud, also at bottom */}
  <svg
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 bottom-0 w-full h-[120px] min-w-full pointer-events-none"
    style={{ 
      display: "block", 
      transform: "scaleX(-1)",
      width: "100vw",
      minWidth: "100vw",
      zIndex: 3
    }}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0,80 Q360,120 720,80 T1440,80 V120 H0 Z"
      fill="white"
      opacity="0.65"
    />
    <path
      d="M0,100 Q360,140 720,100 T1440,100 V120 H0 Z"
      fill="white"
      opacity="0.35"
    />
  </svg>
				</div>

				<div className="relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-24">
					<h1 className={`text-4xl font-extrabold mb-4 leading-tight transition-all duration-1200 ease-out ${isHeaderLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-16 translate-y-6'}`} style={{ transitionDelay: '300ms' }}>
						Courses that accelerate your future
					</h1>
					<p className={`text-xl text-white text-left transition-all duration-1000 ease-out ${isHeaderLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-12 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
						Discover curated courses to build real skills. Learn, grow, and advance your career.
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="relative mb-12">
					<div className="relative w-full max-w-3xl mx-auto">
						<div className="mb-3">
							<h4 className="text-lg font-semibold text-gray-800">Find your course</h4>
							<p className="text-sm text-gray-600">Type a course code or name to filter by subject, duration, or modality.</p>
						</div>

						<div className="relative">
							<div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/90 rounded-full shadow-sm">
								<Search className="text-gray-600 w-5 h-5" />
							</div>
							<input
								type="text"
								placeholder="e.g.: BIO 100 or Biology"
								value={searchTerm}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
								className="w-full pl-16 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff9f00] focus:shadow-md transition"
								aria-label="Search courses"
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{visibleCourses.map((course) => (
						<CourseCard key={course.id} course={course} />
					))}
				</div>

				{filteredCourses.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-600 text-lg">No courses found matching your search.</p>
					</div>
				)}

				{visibleCount < filteredCourses.length && (
					<div ref={sentinelRef} className="h-20 flex items-center justify-center mt-8">
						<div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
}
