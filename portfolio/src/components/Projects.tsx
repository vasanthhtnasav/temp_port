import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'E_COMMERCE',
    description: 'A full-featured online shopping platform with cart and payment integration',
    image: '/images/projects/ecommerce.jpg', // Added image path
    link: 'https://ecommerce-demo.vercel.app',
    github: 'https://github.com/Sreeja-Nukarapu/E_COMMERCE', // Added GitHub link
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Driver-Drowsiness-Detection-System',
    description: 'A real-time system to detect driver drowsiness using computer vision',
    image: '/images/projects/drowsiness-detection.jpg', // Added image path
    link: 'https://github.com/Sreeja-Nukarapu/Driver-Drowsiness-Detection-System',
    github: 'https://github.com/Sreeja-Nukarapu/Driver-Drowsiness-Detection-System',
    tags: ['Python', 'OpenCV', 'Machine Learning'],
  },
  {
    title: 'Brain-Tumor-Detection',
    description: 'AI-powered system for detecting brain tumors from medical images',
    image: '/images/projects/brain-tumor.jpg', // Added image path
    link: 'https://github.com/Sreeja-Nukarapu/Brain-Tumor-Detection',
    github: 'https://github.com/Sreeja-Nukarapu/Brain-Tumor-Detection',
    tags: ['Python', 'Deep Learning', 'Computer Vision'],
  },
  {
    title: 'Automatic-Image-Captioning',
    description: 'Neural network model that generates descriptive captions for images',
    image: '/images/projects/image-captioning.jpg', // Added image path
    link: 'https://github.com/Sreeja-Nukarapu/Automatic-Image-Captioning-using-PyTorch-on-COCO-Dataset',
    github: 'https://github.com/Sreeja-Nukarapu/Automatic-Image-Captioning-using-PyTorch-on-COCO-Dataset',
    tags: ['PyTorch', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Multistep-AI-Chatbot',
    description: 'Conversational AI chatbot with multi-step reasoning capabilities',
    image: '/images/projects/chatbot.jpg', // Added image path
    link: 'https://github.com/Sreeja-Nukarapu/Multistep-AI-Chatbot',
    github: 'https://github.com/Sreeja-Nukarapu/Multistep-AI-Chatbot',
    tags: ['Python', 'NLP', 'Machine Learning'],
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging application with user authentication',
    image: '/images/projects/chat-app.jpg', // Added image path
    link: 'https://chat-app-demo.vercel.app',
    github: 'https://github.com/Sreeja-Nukarapu/chat-application',
    tags: ['Socket.io', 'Express', 'MongoDB'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 w-full bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}