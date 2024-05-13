"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface FooterProps {
  copyrightText?: string; // Optional copyright text
}

const Footer: React.FC<FooterProps> = ({ copyrightText = '© 2024 Raihan' }) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const footerHeight = footerRef.current?.offsetHeight || 0;
      const availableHeight = window.innerHeight;
      const margin = availableHeight - footerHeight;

      // Ensure margin is non-negative (prevents potential negative values)
      const nonNegativeMargin = Math.max(margin, 0);

      footerRef.current?.style.setProperty('margin-top', `${nonNegativeMargin - 10}px`);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <footer ref={footerRef} className="footer flex  flex-col sm:flex-row justify-between items-center py-4 px-6 bg-gray-800 text-white ">
      <p>{copyrightText}</p>
      <nav className="hidden sm:flex space-x-4">
        <Link className="hover:text-gray-400" href="#">
          About us
        </Link>
        <Link className="hover:text-gray-400" href="#">
          contact
        </Link>
        <Link className="hover:text-gray-400" href="#">
          Terms and Condition
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;

