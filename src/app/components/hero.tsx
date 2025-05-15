// pages/index.js

'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profileImage from '../../../public/profile.png';

export default function Home() {
  const [activeTab, setActiveTab] = useState('projects');
  const [activeProjectTab, setActiveProjectTab] = useState('professional');
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const professionalProjects = [
    {
      title: "Event Tickets Sale Web Application",
      company: "TicketsOg",
      period: "July 2024 - Present",
      description: "Dynamic Software Developer with hands-on experience in full-stack development, specializing in backend systems and frontend API integration.",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Docker", "REST APIs"],
      highlights: [
        "Developed landing pages, authentication systems (sign-in/sign-up)",
        "Implemented payment gateway integration",
        "Containerized application using Docker for scalability",
        "Designed and developed REST APIs for system integration"
      ],
      link: "https://ticketsog.com" // Example link
    },
    {
      title: "Internet & Mobile Banking Application",
      company: "Union Bank (via Epic Lanka)",
      period: "July 2023 - July 2024",
      description: "Results-driven Software Developer revamping an online banking platform with focus on core banking features.",
      technologies: ["Java", "Spring Boot", "Microservices", "Oracle", "Docker", "Kubernetes"],
      highlights: [
        "Implemented user onboarding flows",
        "Developed fund transfer functionality",
        "Created transaction history modules",
        "Optimized database queries for performance",
        "Collaborated with third-party vendors"
      ],
      link: "https://unionbank.com" // Example link
    },
    {
      title: "NDB Internet Banking Mobile Application",
      company: "NDB Bank (via Epic Lanka)",
      period: "July 2023 - July 2024",
      description: "Enhanced online banking platform with financial integrations and payment features.",
      technologies: ["Java", "Oracle", "WebSocket", "REST APIs"],
      highlights: [
        "Implemented CRIB Integration for credit scoring",
        "Developed Just Pay payment system",
        "Created LPOPP (Loan Payment Order Processing Platform)",
        "Designed robust database architecture"
      ],
      link: "https://ndbbank.com" // Example link
    },
    {
      title: "First Capital Investment Online Banking",
      company: "Academic Project (via Epic Lanka)",
      period: "Oct 2022 - July 2023",
      description: "Contributed to an online investment platform focusing on core financial features as part of academic coursework.",
      technologies: ["Java", "Spring Boot", "Oracle", "Monolithic Architecture"],
      highlights: [
        "Developed customer onboarding flows",
        "Implemented investment tracking features",
        "Created transaction history modules",
        "Designed and developed REST APIs"
      ],
      link: "https://github.com/yourusername/first-capital-project" // Example GitHub link
    },
  ];

  const academicProjects = [
    {
      title: "Electronic Health Record System (EHR) - Backend",
      company: "Academic Project (Final project)",
      period: "MAR 2025 - Aug 2025",
      description: "This project Developing ",
      technologies: ["Java", "Spring Boot","GO","MYSQL","MongoDb","Microservice Architecture", "Kafka","JWT", "Docker","Spring security"],
      highlights: [
        "Developed Patient,Staff members onboarding flows and login",
        "Implemented appointment features",
        "Patient dashbord features",
        "Implemented Notification module with GO",
        "Designed and developed REST APIs "
      ],
      link: "https://github.com/TharinduShantha98/EHR_System" // Example GitHub link
    },
    {
      title: "University Management System",
      company: "Academic Project",
      period: "Jan 2022 - June 2022",
      description: "Developed a comprehensive university management system as part of diploma coursework.",
      technologies: ["Java", "Spring Boot", "MySQL", "React"],
      highlights: [
        "Student registration system",
        "Course management module",
        "Grade tracking system",
        "Faculty dashboard"
      ],
      link: "https://github.com/yourusername/university-management" // Example GitHub link
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) Computing",
      institution: "Buckinghamshire New University",
      period: "2024 - Present",
      description: "Currently pursuing degree in Computing",
      status: "Ongoing"
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "Institute of Software Engineering",
      period: "Jan 2022 - Jan 2024",
      description: "Specialized in software development methodologies"
    },
    {
      degree: "G.C.E Advanced Level Examination",
      institution: "K/Gnanodaya Maha Vidyalaya, Kalutara",
      period: "Mathematics Stream",
      description: "Achieved 1C 2S results"
    }
  ];

  const skills = [
    { title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'HTML/HTML5', 'CSS 3'] },
    { title: 'Frameworks', items: ['Spring Boot', 'React', 'jQuery', 'Angular'] },
    { title: 'Technologies', items: ['API (REST)', 'JSON', 'Bootstrap', 'Microservice'] },
    { title: 'Database Servers', items: ['MySQL', 'Oracle'] },
    { title: 'Application Servers', items: ['Tomcat', 'WebLogic'] },
    { title: 'Concepts', items: ['OOP', 'OOAD', 'AOP', 'SOLID design principles'] },
    { title: 'Processes', items: ['Agile software process', 'Test-driven development (TDD)'] },
    { title: 'Tools', items: ['Docker', 'Kubernetes', 'Git', 'JIRA', 'SonarQube', 'Swagger'] }
  ];


  const achievements = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "June 2023",
    description: "Demonstrated ability to develop and maintain applications on AWS",
    image: "https://learn.ibm.com/files/analytics/DAELL/DAELL-Badge-Program/cloud_pak_for_data/IBM_20Cloud_20Pak_20for_20Data_205_200_20Administration.png", // Replace with your actual image path
    link: "https://www.credly.com/badges/...",
    skills: ["AWS", "Cloud Computing", "Serverless Architecture"]
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "March 2023",
    description: "Certified in designing and building data processing systems on GCP",
    image: "/gcp-data-engineer-badge.png",
    link: "https://www.credential.net/...",
    skills: ["Data Engineering", "BigQuery", "Cloud Dataflow"]
  },
  {
    title: "Hackathon Winner - TechInnovate 2022",
    issuer: "Tech Community SL",
    date: "November 2022",
    description: "Won first place in the annual innovation hackathon with a healthcare solution",
    image: "/hackathon-winner-badge.png",
    link: "https://example.com/hackathon",
    skills: ["React", "Node.js", "Machine Learning"]
  }
  ];

// Add sample blog posts data
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Spring Boot",
      date: "May 2023",
      excerpt: "Learn how to design and implement scalable microservices architecture using Spring Boot and Docker.",
      image: "/microservices-article.jpg",
      link: "https://medium.com/yourblog/microservices-spring-boot",
      tags: ["Backend", "Microservices", "Java"]
    },
    {
      title: "Getting Started with React Hooks",
      date: "March 2023",
      excerpt: "A beginner's guide to using React Hooks to simplify your functional components.",
      image: "/react-hooks-article.jpg",
      link: "https://medium.com/yourblog/react-hooks",
      tags: ["Frontend", "React", "JavaScript"]
    }
  ];





  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Head>
        <title>Tharindu Shantha | Backend Developer</title>
        <meta name="description" content="Software Developer with 3 years of experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Modern Profile Header */}
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 md:mb-16 overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg md:shadow-2xl"
          >
            {/* Decorative elements - simplified for mobile */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-48 w-48 md:h-64 md:w-64 rounded-full bg-purple-600/20 blur-xl md:blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 h-48 w-48 md:h-64 md:w-64 rounded-full bg-blue-600/20 blur-xl md:blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center p-6 md:p-12">
              {/* Profile Image - centered on mobile */}
              <motion.div 
                className="relative w-28 h-28 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-8 rounded-full border-4 border-white/10 shadow-md md:shadow-lg overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 z-10"></div>
                <Image 
                  src={profileImage}
                  alt="Tharindu Shantha"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
              </motion.div>

              {/* Profile Content - centered on mobile */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 bg-300% animate-gradient">
                    Tharindu Shantha
                  </h1>
                  <motion.p 
                    className="text-lg md:text-xl mt-1 md:mt-2 text-gray-300 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Backend Software Developer
                  </motion.p>
                </motion.div>

                {/* Professional Summary - adjusted for mobile */}
                <motion.div
                  className="mt-4 md:mt-6 max-w-2xl mx-auto md:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm md:text-base leading-relaxed text-gray-300">
                    Software Developer with 3 years of experience designing and building 
                    scalable solutions using Java, Spring Boot, and microservices. Proficient in 
                    Docker, Agile methodologies, and cross-functional collaboration.
                  </p>
                </motion.div>

                {/* Contact Info - stacked on mobile */}
                <motion.div 
                  className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-6 md:mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <a href="tel:0769773032" className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0769773032
                  </a>
                  <a href="mailto:tharindushantha4@gmail.com" className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                  <a href="https://github.com/TharinduShantha98" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                </motion.div>
              </div>
            </div>
        </motion.header>

    
        {/* Navigation Tabs */}
        <motion.div 
          className="flex border-b border-gray-700 mb-6 md:mb-8 overflow-x-auto pb-1" // Added pb-1 for scrollbar space
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-2.5 md:px-4 md:py-3 font-medium flex items-center flex-shrink-0 text-sm md:text-base ${activeTab === 'projects' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Projects
          </button>
          
          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 py-2.5 md:px-4 md:py-3 font-medium flex items-center flex-shrink-0 text-sm md:text-base ${activeTab === 'education' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </button>
          
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-3 py-2.5 md:px-4 md:py-3 font-medium flex items-center flex-shrink-0 text-sm md:text-base ${activeTab === 'achievements' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Achievements
          </button>
          
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-2.5 md:px-4 md:py-3 font-medium flex items-center flex-shrink-0 text-sm md:text-base ${activeTab === 'skills' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Skills
          </button>
        </motion.div>


        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.section
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={container}
          >
            {/* Projects Navigation Tabs - Mobile Optimized */}
            <motion.div 
              className="flex border-b border-gray-700 mb-6 md:mb-8 overflow-x-auto pb-1"
              variants={item}
            >
              <button
                onClick={() => setActiveProjectTab('professional')}
                className={`px-4 py-2.5 md:px-6 md:py-3 font-medium flex items-center flex-shrink-0 text-sm md:text-base ${activeProjectTab === 'professional' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="whitespace-nowrap">Professional</span>
              </button>
              <button
                onClick={() => setActiveProjectTab('academic')}
                className={`px-4 py-2.5 md:px-6 md:py-3 font-medium flex items-center flex-shrink-0 text-sm md:text-base ${activeProjectTab === 'academic' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="whitespace-nowrap">Academic</span>
              </button>
            </motion.div>

            {/* Professional Projects Section - Mobile Optimized */}
            {activeProjectTab === 'professional' && (
              <motion.div variants={item}>
                <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                  {professionalProjects.map((project, index) => (
                    <motion.div 
                      key={index}
                      variants={item}
                      className="bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300 group"
                      whileHover={{ y: -3 }}
                    >
                      <div className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3 md:mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-purple-300 text-sm md:text-base">{project.company} • {project.period}</p>
                          </div>
                          <span className="px-2 py-1 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs md:text-sm text-blue-300 self-start md:self-auto">
                            {project.technologies[0]} • {project.technologies[1]}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
                        
                        <div className="mb-3 md:mb-4">
                          <h4 className="font-medium text-gray-400 text-sm md:text-base mb-1 md:mb-2">Key Contributions:</h4>
                          <ul className="space-y-1.5 md:space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-400 mt-0.5 md:mt-1 mr-1.5 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300 text-sm md:text-base">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-3 md:mt-4">
                          <div className="order-2 md:order-1">
                            <h4 className="font-medium text-gray-400 text-sm md:text-base mb-1 md:mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs md:text-sm group-hover:bg-gray-600 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="order-1 md:order-2 flex items-center justify-center md:justify-start px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 rounded-md md:rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                          >
                            <span>View Project</span>
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Academic Projects Section - Mobile Optimized */}
            {activeProjectTab === 'academic' && (
              <motion.div variants={item}>
                <div className="space-y-6 md:space-y-8">
                  {academicProjects.map((project, index) => (
                    <motion.div 
                      key={index}
                      variants={item}
                      className="bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300 group"
                      whileHover={{ y: -3 }}
                    >
                      <div className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3 md:mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-purple-300 text-sm md:text-base">{project.company} • {project.period}</p>
                          </div>
                          <span className="px-2 py-1 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs md:text-sm text-blue-300 self-start md:self-auto">
                            {project.technologies[0]} • {project.technologies[1]}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
                        
                        <div className="mb-3 md:mb-4">
                          <h4 className="font-medium text-gray-400 text-sm md:text-base mb-1 md:mb-2">Key Features:</h4>
                          <ul className="space-y-1.5 md:space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-400 mt-0.5 md:mt-1 mr-1.5 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300 text-sm md:text-base">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-3 md:mt-4">
                          <div className="order-2 md:order-1">
                            <h4 className="font-medium text-gray-400 text-sm md:text-base mb-1 md:mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs md:text-sm group-hover:bg-gray-600 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="order-1 md:order-2 flex items-center justify-center md:justify-start px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 rounded-md md:rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                          >
                            <span>View Project</span>
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.section>
        )}

        
       {/* Achievements Tab */}
        {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <motion.section
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
          variants={container}
        >
          <motion.h2 
            className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-blue-400 flex items-center"
            variants={item}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            My Achievements
          </motion.h2>

          <motion.div variants={item} className="space-y-4 md:space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-md md:shadow-lg hover:shadow-md md:hover:shadow-xl transition-all duration-300 group border-l-4 border-blue-500"
                whileHover={{ x: 3 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <div className="flex flex-wrap items-center mt-1 gap-x-2">
                      <span className="text-purple-300 text-xs md:text-sm">{achievement.issuer}</span>
                      <span className="text-gray-500 hidden md:block">•</span>
                      <span className="text-gray-400 text-xs md:text-sm">{achievement.date}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs md:text-sm text-blue-300 self-start md:self-auto">
                    {achievement.skills[0]}
                  </span>
                </div>
                
                <p className="text-gray-300 mt-2 md:mt-3 mb-3 md:mb-4 text-sm md:text-base">
                  {achievement.description}
                </p>
                
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <div className="order-2 md:order-1">
                      <h4 className="font-medium text-gray-400 mb-1 md:mb-2 text-xs md:text-sm">SKILLS DEMONSTRATED</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {achievement.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs group-hover:bg-gray-600 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="order-1 md:order-2 inline-flex items-center justify-center md:justify-start px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 rounded-md md:rounded-lg hover:bg-blue-700 transition-colors text-sm w-full md:w-auto"
                    >
                      <span>View Credential</span>
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ),
            )}
          </motion.div>
        </motion.section>
      )}


        {/* Education Tab */}
        {activeTab === 'education' && (
          <motion.section
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={container}
          >
            <motion.h2 
              className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-blue-400 flex items-center"
              variants={item}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </motion.h2>

            <motion.div variants={item} className="space-y-3 md:space-y-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                    className="w-full text-left p-4 md:p-6 focus:outline-none"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-purple-300 text-sm md:text-base">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mt-1 md:mt-2 md:text-base">{edu.description}</p>
                      </div>
                      <div className="flex items-center justify-between md:justify-end mt-1 md:mt-0">
                        <span className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm ${
                          edu.status === "Ongoing" 
                            ? "bg-blue-900/30 text-blue-400" 
                            : "bg-gray-700 text-gray-300"
                        }`}>
                          {edu.period}
                        </span>
                        <svg 
                          className={`w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 transform transition-transform duration-300 ${
                            expandedEducation === index ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: expandedEducation === index ? 1 : 0,
                      height: expandedEducation === index ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t border-gray-700">
                      {/* Course Content */}
                      <h4 className="font-medium text-gray-400 text-sm md:text-base mb-2 md:mb-3">Course Content:</h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        {edu.degree === "BSc (Hons) Computing" && (
                          <>
                            <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg">
                              <h5 className="font-medium text-blue-300 text-sm md:text-base">Year 1</h5>
                              <ul className="mt-1 md:mt-2 space-y-1 text-xs md:text-sm text-gray-300">
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Advanced Programming</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Knowledge-Based Systems In AI</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Quality Assurance And Testing</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Data Structures And Algorithms</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg">
                              <p className="text-xs md:text-sm text-gray-300 flex items-start">
                                <span className="mr-1">•</span>
                                <span>Final Project</span>
                              </p>
                            </div>
                          </>
                        )}
                        {edu.degree === "Diploma in Software Engineering" && (
                          <>
                            <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg">
                              <h5 className="font-medium text-blue-300 text-sm md:text-base">Core Modules</h5>
                              <ul className="mt-1 md:mt-2 space-y-1 text-xs md:text-sm text-gray-300">
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Object-Oriented Programming</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Web Application Development</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Database Management Systems</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg">
                              <h5 className="font-medium text-blue-300 text-sm md:text-base">Advanced Modules</h5>
                              <ul className="mt-1 md:mt-2 space-y-1 text-xs md:text-sm text-gray-300">
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Enterprise Application Development</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-1">•</span>
                                  <span>Mobile Application Development</span>
                                </li>
                              </ul>
                            </div>
                          </>
                        )}
                        {edu.degree === "G.C.E Advanced Level Examination" && (
                          <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg">
                            <h5 className="font-medium text-blue-300 text-sm md:text-base">Subjects</h5>
                            <ul className="mt-1 md:mt-2 space-y-1 text-xs md:text-sm text-gray-300">
                              <li className="flex items-start">
                                <span className="mr-1">•</span>
                                <span>Combined Mathematics</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">•</span>
                                <span>Physics</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">•</span>
                                <span>Chemistry</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Results section */}
                      {edu.degree === "G.C.E Advanced Level Examination" && (
                        <div className="mt-3 md:mt-4">
                          <h5 className="font-medium text-gray-400 text-sm md:text-base mb-1 md:mb-2">Results:</h5>
                          <p className="text-xs md:text-sm text-gray-300">Achieved 1C (Physics) and 2S (Combined Mathematics, Chemistry) results</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}



        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <motion.section
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={container}
          >
            <motion.h2 
              className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-blue-400 flex items-center"
              variants={item}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Technical Expertise
            </motion.h2>

            <motion.div variants={item}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {skills.map((category, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -3 }}
                    className="bg-gray-800 rounded-lg p-4 md:p-5 shadow-md md:shadow-lg hover:shadow-md md:hover:shadow-xl transition-shadow group"
                  >
                    <h3 className="font-medium text-base md:text-lg text-purple-300 mb-2 md:mb-3 group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {category.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-0.5 md:px-3 md:py-1 bg-gray-700 rounded-full text-xs md:text-sm group-hover:bg-gray-600 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Footer */}
        <motion.footer 
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p>© {new Date().getFullYear()} Tharindu Shantha. All rights reserved.</p>
        </motion.footer>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
}