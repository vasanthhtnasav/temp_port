import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Link({ href, className, children, onClick }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Handle smooth scrolling for anchor links
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // For external links
      window.location.href = href;
    }
    
    // Execute additional onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
