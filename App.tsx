
import React, { useState, useEffect } from 'react';
import { DATA } from './types';
import { Section } from './components/Section';
import { LegalBlock } from './components/LegalBlock';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="serif font-bold text-xl text-blue-900">
            AA
          </span>
          <div className="hidden md:flex space-x-6 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#presentacion" className="hover:text-blue-600 transition-colors">Perfil</a>
            <a href="#academico" className="hover:text-blue-600 transition-colors">Formación</a>
            <a href="#legal" className="hover:text-blue-600 transition-colors">Legal y Seguro</a>
          </div>
        </div>
      </nav>

      {/* Hero / Header - Full Visibility */}
      <header className="pt-28 pb-16 md:pt-40 md:pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            {DATA.role}
          </div>
          <h1 className="serif text-4xl md:text-6xl text-slate-900 font-bold mb-4">
            {DATA.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10">
            {DATA.degrees.join(' • ')}
          </p>
          
          {/* Ficha Técnica Inmediata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center text-slate-700">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center mr-3 shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div className="text-sm">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Matrícula Nacional</p>
                  <p className="font-mono font-bold">{DATA.nationalLicense}</p>
                </div>
              </div>
              <div className="flex items-center text-slate-700">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center mr-3 shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div className="text-sm">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Matrículas Privadas/Provinciales</p>
                  <p className="font-mono font-bold">{DATA.privateLicenses.join(' • ')}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-slate-700">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center mr-3 shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
                <div className="text-sm">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Identificador Académico</p>
                  <a href={`https://orcid.org/${DATA.orcid}`} target="_blank" rel="noopener" className="font-mono font-bold text-blue-600 hover:underline">ORCID: {DATA.orcid}</a>
                </div>
              </div>
              <div className="flex items-center text-slate-700">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center mr-3 shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div className="text-sm">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Seguro Mala Praxis</p>
                  <p className="font-medium text-xs leading-tight">{DATA.insurance.company} | Póliza {DATA.insurance.policy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        <Section id="presentacion" title="Presentación Profesional">
          <p>
            Mi labor profesional se fundamenta en la integración de la Musicoterapia y la Psicología como pilares para el abordaje de la salud mental desde una perspectiva humana e institucional. Con una sólida trayectoria clínica, me dedico al desarrollo de estrategias terapéuticas que respeten la singularidad de cada persona.
          </p>
          <p>
            Entiendo la práctica clínica como un compromiso ético y humano, donde el respaldo académico y el marco legal garantizan un entorno de seguridad y confianza.
          </p>
        </Section>

        <Section id="academico" title="Formación Académica" bg="bg-slate-50">
          <div className="space-y-8">
            <div>
              <h4 className="text-blue-700 font-bold mb-4 text-xs uppercase tracking-widest">Especializaciones de Posgrado</h4>
              <ul className="space-y-4">
                {DATA.postgraduate.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    <span className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-4 shrink-0"></span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

      </main>

      {/* Identificación Legal y Seguro Section (Anchor for direct view) */}
      <div id="legal">
        <LegalBlock />
      </div>

      {/* Footer minimal para Google Sites */}
      <footer className="bg-white py-6 border-t border-slate-100 text-center text-slate-400 text-[10px] uppercase tracking-widest">
        {DATA.name} &bull; Perfil Institucional &bull; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;
