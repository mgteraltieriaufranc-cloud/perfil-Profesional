
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, bg = 'bg-white' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bg} border-b border-slate-100`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="serif text-3xl md:text-4xl text-slate-800 mb-10 border-l-4 border-blue-600 pl-4">
          {title}
        </h2>
        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
};
