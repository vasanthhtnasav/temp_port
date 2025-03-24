import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
  const roles = [
    "Software Developer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Lifelong Learner",
    "Efficient Coder"
    ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                Welcome to my portfolio <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                SREEJA NUKARAPU
              </h1>
              <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Building modern software solutions with a focus on clean, efficient code, AI & ML integration, and exceptional user experiences.
              </p>
            </div>

            <div className="w-full flex flex-col items-start gap-4">
              <ContactInfo />
              <ActionButtons />
              <SocialLinks />
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative mx-auto max-w-md lg:max-w-lg order-1 lg:order-2">
            {/* Decorative elements */}
            <div className="absolute w-20 h-20 bg-blue-500/70 -top-5 -left-5 rounded-full mix-blend-multiply filter blur animate-floating" />
            <div className="absolute w-20 h-20 bg-purple-500/70 -bottom-5 -right-5 rounded-full mix-blend-multiply filter blur animate-floating delay-150" />
            <div className="absolute w-16 h-16 bg-teal-500/70 top-1/4 -right-10 rounded-full mix-blend-multiply filter blur animate-floating delay-300" />
            <div className="absolute w-16 h-16 bg-amber-500/70 bottom-1/4 -left-10 rounded-full mix-blend-multiply filter blur animate-floating delay-450" />

            {/* Image frame */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl" />
              <img
                src="public\profile1.jpg"
                alt="Sreeja Nukarapu"
                className="relative rounded-xl w-full h-auto shadow-md transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  <Link
    href="#about"
    className="inline-block transition-transform hover:translate-y-1"
  >
    <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400 filter drop-shadow-md" />
  </Link>
</div>
      </div>
    </section>
  );
}