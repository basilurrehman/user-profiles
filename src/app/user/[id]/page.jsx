"use client"
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Airtable from 'airtable'; 

 const base = new Airtable({ apiKey: 'patxXaUUP8Gq7p4d1.e5686590bdaefa8f09a99c4b0ab197b65561f1f3243fff28c2fdafc527692712' }).base("app8Pvtc8HMJZpuw0");
  try {
    const record = await base("Candidates").find(id);
    return {
      photo: record.get('Photo')?.[0]?.url || 'https://placehold.co/400x400/27272a/FFF?text=User',
      candidateName: record.get('Candidate Name'),
      currentRole: record.get('Current Role'),
      location: record.get('Location'),
      experience: `${record.get('Experience (Years)')}+ years`,
      preferredRole: record.get('Preferred Role'),
      availability: record.get('Availability'),
      skills: record.get('Skills') ? record.get('Skills').split(',').map(s => s.trim()) : [],
      keyStrengths: record.get('Key Strengths') ? record.get('Key Strengths').split(',').map(s => s.trim()) : [],
      keyAchievements: record.get('Key Achievements') ? record.get('Key Achievements').split(',').map(s => s.trim()) : [],
      certifications: record.get('Certifications'),
      languages: record.get('Languages'),
      currentCompany: record.get('Current Company'),
      currentDates: record.get('Current Dates'),
      currentHighlights: record.get('Current Highlights') ? record.get('Current Highlights').split(',').map(s => s.trim()) : [],
      previousRole: record.get('Previous Role'),
      previousCompany: record.get('Previous Company'),
      previousDates: record.get('Previous Dates'),
      previousLocation: record.get('Previous Location'),
      previousHighlights: record.get('Previous Highlights') ? record.get('Previous Highlights').split(',').map(s => s.trim()) : [],
      education: record.get('Education'),
      educationDetails: record.get('Education Details'),
      introVideo: record.get('Intro Video Link'),
      calendlyLink: record.get('Calendly Link'),
      email: record.get('Email'),
      resume: record.get('Resume'),
      managerRating: record.get('Manager Rating'),
      workHistory: record.get('Work History'),
      profileCreated: record.get('Profile Created'),
      skillCount: record.get('Skill Count'),
      profileSummary: record.get('Profile Summary'),
    };
  } catch (err) {
    return null;
  }

// Reusable components to simulate shadcn/ui styles
const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}
  >
    {children}
  </button>
);

const Tabs = ({ children, className = '' }) => (
  <div className={`flex items-center justify-center space-x-2 w-full ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ children, onClick, active, className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${
      active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
    } ${className}`}
  >
    {children}
  </button>
);

const List = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Inline SVGs for icons (simulating lucide-react)
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
    <path d="M21.43 14.8V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.2M17.43 14.8L12 12 2.57 14.8 12 17.6 21.43 14.8Z"></path>
    <path d="M12 2v10l-9.43 2.8v-4.2a2 2 0 0 1 2-2h14.86a2 2 0 0 1 2 2v4.2Z"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const SkillsSection = ({ skills }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill, index) => (
      <span key={index} className="inline-flex items-center rounded-full border border-gray-700 px-3 py-1 text-sm font-medium text-gray-400">
        {skill}
      </span>
    ))}
  </div>
);
async function ProfilePage ({params})  {
    const { id } = params;
    
  const profileData = await getProfileData(id);
  if (!profileData) return <div className="p-10 text-center text-red-500">Profile not found.</div>;

  const [activeTab, setActiveTab] = useState('about');

  return (
    // Main container with dark mode styling and responsive padding
    <div className="bg-zinc-950 text-white min-h-screen p-4 md:p-8 font-sans">
      {/* Container for the entire profile card */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

        {/* Main Content Area */}
        <div className="lg:col-span-1 space-y-6">

          {/* Header Section */}
          <Card className="flex flex-col md:flex-row items-center gap-6 bg-zinc-900">
            <img
              src={profileData.photo}
              alt="Candidate Photo"
              className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700"
            />
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{profileData.candidateName}</h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-300 mt-1">{profileData.currentRole}</p>
              <div className="flex items-center justify-center md:justify-start text-gray-400 mt-2">
                <GlobeIcon />
                <span className="ml-1 text-sm md:text-base">{profileData.location}</span>
                <span className="mx-2">·</span>
                <BriefcaseIcon />
                <span className="ml-1 text-sm md:text-base">{profileData.experience} Experience</span>
              </div>
            </div>
          </Card>

          {/* Tabbed Content */}
          <Card className="bg-zinc-900">
            <Tabs>
              <TabsTrigger active={activeTab === 'about'} onClick={() => setActiveTab('about')}>
                <UserIcon />
                About
              </TabsTrigger>
              <TabsTrigger active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
                <BriefcaseIcon />
                Experience
              </TabsTrigger>
              <TabsTrigger active={activeTab === 'education'} onClick={() => setActiveTab('education')}>
                <GraduationCapIcon />
                Education
              </TabsTrigger>
            </Tabs>
            <div className="mt-6">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  {/* Intro Video */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-4">Intro Video</h3>
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={profileData.introVideo}
                        title="Introduction Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-4">Skills</h3>
                    <SkillsSection skills={profileData.skills} />
                  </div>

                  {/* Strengths */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-4">Key Strengths</h3>
                    <SkillsSection skills={profileData.keyStrengths} />
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-4">Key Achievements</h3>
                    <List items={profileData.keyAchievements} />
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {/* Current Role */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{profileData.currentRole} at {profileData.currentCompany}</h3>
                    <p className="text-gray-400 mb-4">{profileData.currentDates}</p>
                    <List items={profileData.currentHighlights} />
                  </div>
                  {/* Previous Role */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{profileData.previousRole} at {profileData.previousCompany}</h3>
                    <p className="text-gray-400 mb-4">{profileData.previousDates} · {profileData.previousLocation}</p>
                    <List items={profileData.previousHighlights} />
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{profileData.education}</h3>
                    <p className="text-gray-400">{profileData.educationDetails}</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Sidebar Area */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-zinc-900 space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">Role & Availability</h3>
            <div>
              <p className="text-gray-400">Preferred Role:</p>
              <p className="font-medium text-white">{profileData.preferredRole}</p>
            </div>
            <div>
              <p className="text-gray-400">Availability:</p>
              <p className="font-medium text-white">{profileData.availability}</p>
            </div>
          </Card>

          <Card className="bg-zinc-900 space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">Book a meeting</h3>
            <p className="text-gray-400">Schedule a chat with me to discuss opportunities.</p>
            <Button
              className="w-full"
              onClick={() => window.open(profileData.calendlyLink, '_blank')}
            >
              <CalendarIcon />
              Schedule a Meeting
            </Button>
          </Card>

          <Card className="bg-zinc-900 space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">Languages & Certifications</h3>
            <div>
              <p className="text-gray-400">Languages:</p>
              <p className="font-medium text-white">{profileData.languages}</p>
            </div>
            <div>
              <p className="text-gray-400">Certifications:</p>
              <p className="font-medium text-white">{profileData.certifications}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
