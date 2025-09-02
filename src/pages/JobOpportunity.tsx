'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, Clock, Monitor, TrendingUp, Building2, GraduationCap, UserPlus } from 'lucide-react';
import Footer from '../components/Footer';
import {Header} from '../components/Header';
import Image from 'next/image';
import { HardHat } from 'lucide-react';
import SEO from '../components/SEO';

export default function JobOpportunities() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

const departments = [
  {
    id: 'sales-marketing',
    name: 'Sales, Marketing and Communication',
    icon: TrendingUp,
    formLink: 'https://forms.office.com/pages/responsepage.aspx?id=wNuPfy2YcUaXmcfHnzAB7O7vuTTLIy5Ej6log-esdNtUQlNERURQNlVBWlA3UjFFSlRFREIzOExWOC4u&route=shorturl',
    jobs: [
      {
        id: 1,
        title: 'Marketing Coordinator',
        description:
          'Develop and implement marketing strategies, manage social media presence, and coordinate promotional campaigns.',
        tags: ['Marketing', 'Social Media', 'Campaigns', 'Strategy'],
        type: 'Full-Time',
      },
      {
        id: 2,
        title: 'Sales Representative',
        description:
          'Promote educational services, engage with prospective families, and support enrollment processes.',
        tags: ['Sales', 'Communication', 'Enrollment', 'Customer Service'],
        type: 'Full-Time',
      },
      {
        id: 3,
        title: 'Communications Specialist',
        description:
          'Manage internal and external communications, create content, and maintain brand consistency.',
        tags: ['Communications', 'Content', 'Brand', 'Writing'],
        type: 'Full-Time',
      },
    ],
  },
  {
    id: 'support-services',
    name: 'Support Services',
    icon: HardHat,
    formLink: 'https://forms.office.com/pages/responsepage.aspx?id=wNuPfy2YcUaXmcfHnzAB7O7vuTTLIy5Ej6log-esdNtUMlVJQk5ZVkdUUEtRSTBNTFpOSFJTU0JZTC4u&route=shorturl',
    jobs: [
      {
        id: 4,
        title: 'Maintenance Technician',
        description:
          "Responsible for preventive and corrective maintenance of the institution's facilities and equipment.",
        tags: ['Maintenance', 'Repair', 'Facilities', 'Equipment'],
        type: 'Full-Time',
      },
      {
        id: 5,
        title: 'Cleaning Specialist',
        description:
          'Maintain cleanliness and hygiene standards throughout the school facilities.',
        tags: ['Cleaning', 'Hygiene', 'Facilities', 'Standards'],
        type: 'Full-Time',
      },
      {
        id: 6,
        title: 'Security Guard',
        description:
          'Ensure campus safety and security, monitor access points, and maintain security protocols.',
        tags: ['Security', 'Safety', 'Monitoring', 'Protocols'],
        type: 'Full-Time',
      },
      {
        id: 7,
        title: 'Driver',
        description:
          'Safe transportation of students and staff, following all safety regulations and schedules.',
        tags: ['Transportation', 'Safety', 'Schedule', 'Responsibility'],
        type: 'Full-Time',
      },
    ],
  },
  {
    id: 'it-project',
    name: 'I.T and Project Management',
    icon: Monitor,
    formLink: 'https://forms.office.com/pages/responsepage.aspx?id=wNuPfy2YcUaXmcfHnzAB7O7vuTTLIy5Ej6log-esdNtUOTA3QU9CSEdOR0ZEMUEyUkZTRFkzVkc4Qi4u&route=shorturl',
    jobs: [
      {
        id: 8,
        title: 'IT Support Specialist',
        description:
          'Provide technical support for hardware, software, and network systems across the institution.',
        tags: ['IT Support', 'Hardware', 'Software', 'Networks'],
        type: 'Full-Time',
      },
      {
        id: 9,
        title: 'Project Manager',
        description:
          'Lead and coordinate various institutional projects, ensuring timely delivery and quality outcomes.',
        tags: ['Project Management', 'Coordination', 'Leadership', 'Planning'],
        type: 'Full-Time',
      },
      {
        id: 10,
        title: 'Systems Administrator',
        description:
          'Manage and maintain IT infrastructure, servers, and ensure system security and performance.',
        tags: ['Systems', 'Infrastructure', 'Security', 'Performance'],
        type: 'Full-Time',
      },
    ],
  },
  {
    id: 'business-commercial',
    name: 'Business and Commercial Support',
    icon: Building2,
    formLink: 'https://forms.office.com/pages/responsepage.aspx?id=wNuPfy2YcUaXmcfHnzAB7O7vuTTLIy5Ej6log-esdNtUMjFQUTlYTEtVMllTUUNISEZZTFhMSllSVS4u&route=shorturl',
    jobs: [
      {
        id: 11,
        title: 'Business Development Associate',
        description:
          'Identify new business opportunities, develop partnerships, and support commercial growth initiatives.',
        tags: ['Business Development', 'Partnerships', 'Growth', 'Strategy'],
        type: 'Full-Time',
      },
      {
        id: 12,
        title: 'Finance Assistant',
        description:
          'Support financial operations, manage accounts, prepare reports, and assist with budget planning.',
        tags: ['Finance', 'Accounts', 'Reports', 'Budget'],
        type: 'Full-Time',
      },
      {
        id: 13,
        title: 'Commercial Coordinator',
        description:
          'Coordinate commercial activities, manage vendor relationships, and support procurement processes.',
        tags: ['Commercial', 'Vendors', 'Procurement', 'Coordination'],
        type: 'Full-Time',
      },
    ],
  },
  {
    id: 'academics',
    name: 'Academics',
    icon: GraduationCap,
    formLink: 'https://forms.office.com/pages/responsepage.aspx?id=wNuPfy2YcUaXmcfHnzAB7O7vuTTLIy5Ej6log-esdNtUMTgwUDdXNlpOUFgyNEUwOTAzTVpFUThMUS4u&origin=lprLink&route=shorturl',
    jobs: [
      {
        id: 14,
        title: 'Academic Coordinator',
        description:
          'Coordinate academic programs, support curriculum development, and ensure educational quality standards.',
        tags: ['Academic', 'Curriculum', 'Quality', 'Coordination'],
        type: 'Full-Time',
      },
      {
        id: 15,
        title: 'Educational Support Specialist',
        description:
          'Provide specialized support for students with diverse learning needs and academic challenges.',
        tags: ['Education', 'Support', 'Learning', 'Students'],
        type: 'Full-Time',
      },
      {
        id: 16,
        title: 'Research Assistant',
        description:
          'Support academic research initiatives, data collection, and contribute to educational improvement projects.',
        tags: ['Research', 'Data', 'Analysis', 'Education'],
        type: 'Part-Time',
      },
    ],
  },
  {
    id: 'admissions',
    name: 'Admissions',
    icon: UserPlus,
    formLink: 'https://forms.office.com/pages/responsepage.aspx?id=wNuPfy2YcUaXmcfHnzAB7O7vuTTLIy5Ej6log-esdNtUNUlDMUE5M1FIMVNGNVNNQ1lPVlFKOE9DNC4u',
    jobs: [
      {
        id: 17,
        title: 'Admissions Counselor',
        description:
          'Guide prospective students through the admissions process, conduct interviews, and evaluate applications.',
        tags: ['Admissions', 'Counseling', 'Interviews', 'Applications'],
        type: 'Full-Time',
      },
      {
        id: 18,
        title: 'Enrollment Specialist',
        description:
          'Manage enrollment processes, maintain student records, and ensure compliance with admission requirements.',
        tags: ['Enrollment', 'Records', 'Compliance', 'Requirements'],
        type: 'Full-Time',
      },
    ],
  },
];

// Calcular estatísticas dinamicamente
const totalPositions = departments.reduce((sum, dept) => sum + dept.jobs.length, 0);
const totalDepartments = departments.length;

const stats = [
  { number: totalPositions.toString(), label: 'Open Positions' },
  { number: totalDepartments.toString(), label: 'Departments' },
  { number: '156', label: 'Active Employees' },
  { number: '98%', label: 'Satisfaction Rate' },
];


  const handleDepartmentClick = (departmentId: string) => {
    setSelectedDepartment(departmentId);
  };

  const handleBackClick = () => {
    setSelectedDepartment(null);
  };

  const handleApplyClick = (formLink: string) => {
    window.open(formLink, '_blank');
  };

  const selectedDepartmentData = departments.find(dept => dept.id === selectedDepartment);

  
    const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  
    useEffect(() => {
      // Trigger header animations after component mounts
      const timer = setTimeout(() => {
        setIsHeaderLoaded(true);
      }, 200);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
            <SEO 
        title="Career Opportunities"
        description="Join our team at American Schools of Angola. Explore teaching, administrative, and support staff positions in an international educational environment."
        keywords="teaching jobs Angola, international school careers, education jobs Luanda, school staff positions"
        canonical="https://asangola.com/JobOpportunity"
      />
            <Header />
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center w-screen left-1/2 right-1/2 -translate-x-1/2">
              <div className="absolute inset-0 z-0">
                <Image
              src="/FundoJob.webp"
              alt="Gallery background"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
                />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-gray-200/10" />
              </div>
      
              <div className="relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-24">
                <h1
                  className={`text-4xl font-bold mb-4 leading-tight transition-all duration-1200 ease-out ${
                  isHeaderLoaded
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-16 translate-y-6"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Join our team and be part of something extraordinary!
                </h1>
                <p
                  className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
                    isHeaderLoaded
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : "opacity-0 -translate-x-12 translate-y-4"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Join our team and help shape the future of education. Discover open positions across departments and take the next step in your professional journey.
                </p>
              </div>
      
              {/* Cloud effect at the bottom */}
            <div className="pointer-events-none absolute bottom-[-2px] left-0 w-full z-20 overflow-hidden">
            {/* First cloud, left to right, lower opacity */}
            <svg
              viewBox="0 0 1440 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[250px] min-w-full"
              style={{ 
                display: "block",
                width: "100vw",
                minWidth: "100vw"
              }}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
                fill="white"
                opacity="0.35"
              />
              <path
                d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
                fill="white"
                opacity="0.18"
              />
            </svg>
            {/* Second cloud, right to left, higher opacity, mirrored */}
            <svg
              viewBox="0 0 1440 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[270px] absolute left-0 top-0 min-w-full"
              style={{ 
                display: "block", 
                transform: "scaleX(-1)",
                width: "100vw",
                minWidth: "100vw"
              }}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
                fill="white"
                opacity="0.65"
              />
              <path
                d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
                fill="white"
                opacity="0.35"
              />
            </svg>
          </div>
            </div>
      <div className="max-w-7xl mx-auto p-5">
        {/* Header */}
        <div className="text-center mb-10 p-10 bg-white rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-4xl font-bold mb-3 text-[#2e2b70]">Job Opportunities</h1>
            <p className="text-lg text-slate-600">
            Discover available opportunities by department.<br />
            <span className="text-sm text-slate-500">
              <strong>Note:</strong> At least basic English proficiency is required for all positions.
            </span>
            </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <div className="text-3xl font-bold mb-2 text-indigo-600">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        {selectedDepartment && (
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 mb-5 px-5 py-3 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors font-medium"
          >
            <ChevronLeft size={20} />
            Back to Departments
          </button>
        )}

        {/* Departments Grid */}
        {!selectedDepartment && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => {
              const IconComponent = department.icon;
              const jobCount = department.jobs.length; // Calcula dinamicamente
              return (
                <div
                  key={department.id}
                  onClick={() => handleDepartmentClick(department.id)}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-indigo-300 relative"
                >
                  {/* Vacancy Badge - Circle */}
                  {jobCount > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {jobCount}
                    </div>
                  )}
                  
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    <IconComponent size={32} />
                  </div>
                  <div className="text-lg font-semibold text-slate-800 mb-2">{department.name}</div>
                  <div className="text-slate-600 text-sm">
                    {jobCount > 0 ? `${jobCount} positions available` : 'No positions available'}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Jobs Grid */}
        {selectedDepartment && selectedDepartmentData && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
              Positions - {selectedDepartmentData.name}
            </h2>
            
            {selectedDepartmentData.jobs.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-slate-200">
                <div className="w-20 h-20 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  <selectedDepartmentData.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">No positions available</h3>
                <p className="text-slate-600">
                  There are currently no positions available in the {selectedDepartmentData.name} department.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedDepartmentData.jobs.map((job) => {
                  const IconComponent = selectedDepartmentData.icon;
                  return (
                    <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-lg">{job.title}</div>
                          <div className="text-indigo-600 font-medium">{selectedDepartmentData.name}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-slate-600 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.type}
                        </div>
                      </div>
                      
                      <div className="text-slate-700 leading-relaxed mb-5">
                        {job.description}
                      </div>
                      
                      <div className="flex gap-2 flex-wrap mb-5">
                        {job.tags.map((tag, index) => (
                          <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => handleApplyClick(selectedDepartmentData.formLink)}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors hover:-translate-y-0.5 duration-200"
                      >
                        Apply
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}