'use client';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    title: "Software Engineer",
    company: "TicketsOg",
    period: "July 2024 - Present",
    description: "Developing event ticket sale web application using Java, Spring Boot, Angular, and MySQL. Implemented features like authentication and payment gateways.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Associate Software Developer",
    company: "Epic Lanka",
    period: "July 2023 - July 2024",
    description: "Worked on Internet and Mobile Banking Application for Union Bank and NDB, focusing on user onboarding, fund transfers, and transaction history.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Intern Software Engineer",
    company: "Epic Lanka Ltd.",
    period: "Oct 2022 - July 2023",
    description: "Contributed to First Capital Investment online Banking platform focusing on customer onboarding and investments.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Diploma in Software Engineering",
    company: "Institute of Software Engineering",
    period: "Jan 2022 - Jan 2024",
    description: "",
    icon: <FaGraduationCap />,
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          My Journey
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-blue-500 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center z-10 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                {exp.icon}
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-blue-50 dark:bg-gray-700'}`}>
                  <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company} • {exp.period}</p>
                  {exp.description && (
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}