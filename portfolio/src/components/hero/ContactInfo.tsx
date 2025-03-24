import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<Phone className="w-5 h-5" />}
        text="+1 (919) 521 6582"
        href="tel:+919133456789"
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="nukarapusreeja14@gmail.com"
        href="mailto:nukarapusreeja14@gmail.com"
      />
      <ContactItem
        icon={<MapPin className="w-5 h-5" />}
        text="Raleigh, NC, USA"
      />
    </div>
  );
}

<div className="space-y-4">
  <h4 className="text-lg font-medium text-gray-800 dark:text-white text-center">Connect with me</h4>
  <SocialLinks />
</div>