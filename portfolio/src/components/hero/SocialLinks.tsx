import { Github, Linkedin } from 'lucide-react';

// Simplified social links - keeping only GitHub and LinkedIn
const links = [
  {
    href: 'https://github.com/Sreeja-Nukarapu',
    icon: <Github className="w-7 h-7 text-gray-900 dark:text-white" />,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/sreeja-nukarapu',
    icon: <Linkedin className="w-7 h-7 text-[#0077B5]" />,
    label: 'LinkedIn',
  }
];

export function SocialLinks() {
  return (
    <div className="flex gap-6 justify-start w-full -ml-2">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 ml-20 bg-gray-100 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-all duration-300 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}