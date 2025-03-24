import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Code, Briefcase, GraduationCap, Heart, Award, User } from 'lucide-react';

type TabType = 'overview' | 'education' | 'experience' | 'interests';

const aboutData = {
  overview: {
    title: "Who I Am",
    description: "I'm a passionate software engineer with a strong foundation in full-stack development. I specialize in crafting intuitive web applications that solve real-world problems with elegance and efficiency. With a keen eye for detail and a commitment to clean code, I strive to create exceptional digital experiences.",
    keypoints: [
      "6+ years of experience in web development",
      "Expertise in modern JavaScript frameworks and libraries",
      "Strong background in responsive design and user experience",
      "Passionate about writing clean, scalable, and maintainable code"
    ],
    image: "/profile.jpg"
  },
  education: {
    timeline: [
      {
        year: "2022",
        degree: "Master of Science in Computer Science",
        institution: "North Carolina State University",
        description: "Specialized in Web Technologies and Artificial Intelligence. Graduated with a 9.9 GPA."
      },
      {
        year: "2018",
        degree: "Bachelor of Technology in Computer Science",
        institution: "JNTU Hyderabad",
        description: "Focused on Software Engineering and Database Management. Graduated with distinction."
      },
      {
        year: "2014",
        degree: "High School Diploma",
        institution: "Sri Chaitanya Junior College",
        description: "Specialized in Mathematics and Computer Science."
      }
    ]
  },
  experience: {
    timeline: [
      {
        year: "2022 - Present",
        role: "Software Engineer",
        company: "Tech Innovations Inc.",
        description: "Lead front-end development for multiple client projects using React, Next.js, and TailwindCSS."
      },
      {
        year: "2020 - 2022",
        role: "Frontend Developer",
        company: "WebSolutions Co.",
        description: "Developed responsive web applications and improved user experiences with modern JavaScript frameworks."
      }
    ]
  },
  interests: {
    personal: [
      "Open source contribution",
      "Tech blogging",
      "Hiking and outdoor adventures",
      "Photography",
      "Reading science fiction novels"
    ],
    professional: [
      "Web performance optimization",
      "Accessibility in web development",
      "Machine learning applications in web",
      "Serverless architectures",
      "Progressive Web Applications"
    ]
  }
};

export function About() {
  const [activeTab, setActiveTab] = React.useState<TabType>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'interests', label: 'Interests', icon: Heart },
  ];

  return (
    // Update the section declaration
    <section id="about" className="py-10 w-full relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background decoration remains the same */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 dark:bg-purple-900/20 rounded-tr-full opacity-50 blur-3xl" />
      
      {/* Update container to have less horizontal padding */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full max-w-[95%]">
        <SectionTitle>About Me</SectionTitle>
        
        {/* Update tabs container to take more width and have less bottom margin */}
        <div className="max-w-7xl mx-auto mb-5 w-full">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Update content container to take more width */}
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-500 w-full">
          {/* Overview Tab with increased spacing between description and highlights */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 sm:p-5">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{aboutData.overview.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {aboutData.overview.description}
                </p>
                
                {/* Adding a visible separator and much more space */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-10 space-y-2 mb-4">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" /> Highlights
                  </h4>
                  <ul className="space-y-1">
                    {aboutData.overview.keypoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-blue-600 dark:text-blue-400">
                          <Code className="w-4 h-4" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                {/* Image container - made larger */}
                <div className="relative rounded-lg p-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mx-auto lg:mx-0 max-w-full overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 m-[3px] rounded-lg" />
                  <img 
                    src={aboutData.overview.image} 
                    alt="Profile" 
                    className="relative rounded-md w-full h-auto object-cover aspect-[4/3] z-10"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/30 rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/30 rounded-full blur-xl" />
                </div>
                
                {/* Badges - adjusted position */}
                <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-700 py-1 px-3 rounded-full shadow-lg text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-gray-600">
                  React Expert
                </div>
                <div className="absolute -top-3 -right-3 bg-white dark:bg-gray-700 py-1 px-3 rounded-full shadow-lg text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-gray-600">
                  Full-Stack Dev
                </div>
              </div>
            </div>
          )}
          
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="p-5 sm:p-8 space-y-5">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" /> Education Journey
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 sm:left-[15px] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-70" />
                
                <div className="space-y-8">
                  {aboutData.education.timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 sm:pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 shadow-md flex items-center justify-center text-white transform transition-transform duration-300 hover:scale-110">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      
                      <div className="flex flex-col space-y-2 sm:space-y-3">
                        <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm font-medium">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h4>
                        <p className="text-lg text-gray-700 dark:text-gray-200">{item.institution}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="p-6 sm:p-8 space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" /> Professional Journey
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 sm:left-[15px] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-70" />
                
                <div className="space-y-12">
                  {aboutData.experience.timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 sm:pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-500 shadow-md flex items-center justify-center text-white transform transition-transform duration-300 hover:scale-110">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      
                      <div className="flex flex-col space-y-2 sm:space-y-3">
                        <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-sm font-medium">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">{item.role}</h4>
                        <p className="text-lg text-gray-700 dark:text-gray-200">{item.company}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Interests Tab */}
          {activeTab === 'interests' && (
            <div className="p-6 sm:p-8 space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <Heart className="w-6 h-6 text-blue-600" /> Passions & Interests
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Professional Interests
                  </h4>
                  <ul className="space-y-3">
                    {aboutData.interests.professional.map((interest, index) => (
                      <li key={index} className="flex items-center gap-2 group">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {interest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Personal Interests
                  </h4>
                  <ul className="space-y-3">
                    {aboutData.interests.personal.map((interest, index) => (
                      <li key={index} className="flex items-center gap-2 group">
                        <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {interest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-center text-gray-600 dark:text-gray-300 italic">
                  "I believe that the best work happens at the intersection of passion and expertise. 
                  I'm constantly exploring new technologies and approaches to create better solutions."
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}