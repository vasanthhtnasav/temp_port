import React, { useState, useRef } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Send, Phone, Mail, MapPin, Github, Linkedin, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { SocialLinks } from './hero/SocialLinks';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      // Simulate form submission
      // In a real application, you would send this data to your backend or a form service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear the form
      formRef.current?.reset();
      setFormStatus('success');
      
      // Reset success status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('There was an error submitting your message. Please try again.');
    }
  };

  return (
    // Change the section declaration (around line 54):
<section id="contact" className="py-20 w-full bg-white dark:bg-gray-900 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-50 dark:bg-blue-900/10 rounded-br-full opacity-50 -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-50 dark:bg-purple-900/10 rounded-tl-full opacity-50 translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 order-2 lg:order-1 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send me a message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                    placeholder="Your name"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                    placeholder="your.email@example.com"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  placeholder="How can I help you?"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
                  placeholder="Your message here..."
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg flex items-center justify-center transition-all ${
                    formStatus === 'submitting'
                      ? 'bg-blue-400 cursor-wait'
                      : formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : formStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Error
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {formStatus === 'error' && (
                  <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>
                )}
                
                {formStatus === 'success' && (
                  <p className="mt-2 text-green-600 text-sm">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="order-1 lg:order-2 flex flex-col justify-between space-y-12"> {/* Added space-y-12 here */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                    <a
                      href="mailto:nukarapusreeja14@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      nukarapusreeja14@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                    <a
                      href="tel:+19195216582"
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      +1 (919) 521 6582
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full text-teal-600 dark:text-teal-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Raleigh, North Carolina, USA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Connect with me</h4>
                <SocialLinks />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 backdrop-blur-sm mt-6 lg:mt-6"> {/* Fixed mt-8 lg:mt-0 to be consistent mt-6 on all screens */}
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Looking to hire?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm currently open to new opportunities and would love to discuss how I can contribute to your team.
              </p>
              <a
                href="/SANGOJI_VASANTH_KUMAR_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                View my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}