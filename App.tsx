
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
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className={`serif font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-blue-900' : 'text-slate-800'}`}>
            AA
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide">
            <a href="#presentacion" className="hover:text-blue-600 transition-colors">Perfil</a>
            <a href="#enfoque" className="hover:text-blue-600 transition-colors">Enfoque</a>
            <a href="#academico" className="hover:text-blue-600 transition-colors">Academia</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </div>
          <button className="md:hidden text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero / Header */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Especialista en Salud
          </div>
          <h1 className="serif text-4xl md:text-6xl text-slate-900 font-bold mb-6">
            {DATA.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-8 max-w-2xl">
            {DATA.degrees.join(' | ')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <div className="flex items-center text-slate-500 text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                Mat. Nac. {DATA.nationalLicense}
             </div>
             <div className="flex items-center text-slate-500 text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                {DATA.role}
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        <Section id="presentacion" title="Presentación Profesional">
          <p>
            Mi labor profesional se fundamenta en la integración de la Musicoterapia y la Psicología como pilares para el abordaje de la salud desde una perspectiva humana e institucional. Con una sólida trayectoria en el ámbito clínico, me dedico al desarrollo de estrategias terapéuticas que respeten la singularidad de cada persona.
          </p>
          <p>
            Entiendo la práctica clínica no solo como una intervención técnica, sino como un compromiso ético y humano, donde el respaldo académico y el marco legal vigente garantizan un entorno de seguridad y confianza para quienes transitan procesos de salud.
          </p>
        </Section>

        <Section id="enfoque" title="Enfoque Terapéutico" bg="bg-slate-50">
          <p className="font-medium text-slate-800">
            Un abordaje integrativo, ético y centrado en la persona.
          </p>
          <p>
            Mi propuesta terapéutica articula las herramientas de la psicología con la potencia expresiva de la musicoterapia. Este enfoque permite una comprensión multidimensional del bienestar, integrando aspectos emocionales, cognitivos y relacionales.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Integración Clínica:</strong> Sinergia entre marcos teóricos psicológicos y modelos musicoterapéuticos.</li>
            <li><strong>Ética Profesional:</strong> Práctica alineada con las normativas sanitarias y el respeto por la autonomía del paciente.</li>
            <li><strong>Actualización Permanente:</strong> Incorporación de evidencia científica y producción académica propia.</li>
          </ul>
        </Section>

        <Section id="academico" title="Perfil Académico">
          <div className="space-y-8">
            <div>
              <h4 className="text-blue-700 font-semibold mb-3 text-sm uppercase">Posgrados y Especializaciones</h4>
              <ul className="space-y-4">
                {DATA.postgraduate.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-blue-600 w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg border border-slate-200">
              <h4 className="text-slate-800 font-semibold mb-2">Producción Científica</h4>
              <p className="text-sm mb-4">Registro de publicaciones científicas y contribuciones académicas.</p>
              <a 
                href={`https://orcid.org/${DATA.orcid}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                ORCID: {DATA.orcid}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>
        </Section>

        <Section id="contacto" title="Información de Contacto" bg="bg-blue-900 text-white">
          <div className="text-white">
            <p className="mb-8 opacity-90">
              Para consultas institucionales o solicitud de información sobre el marco de atención, puede establecer contacto a través de los canales oficiales.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h4 className="font-bold mb-4">Institucional</h4>
                <p className="text-sm opacity-80 mb-2">Ámbito:</p>
                <p className="font-medium">{DATA.brand}</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h4 className="font-bold mb-4">Referencia Legal</h4>
                <p className="text-sm opacity-80 mb-2">Matriculación Nacional:</p>
                <p className="font-medium">{DATA.nationalLicense}</p>
              </div>
            </div>
            <p className="mt-10 text-sm opacity-70 italic text-center">
              Nota: Este espacio no constituye un canal de atención de emergencias sanitarias.
            </p>
          </div>
        </Section>

      </main>

      {/* Ethical-Legal Footer */}
      <LegalBlock />

      {/* Floating Action Button (Mobile QR / Print ready) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
          title="Descargar Ficha Institucional"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
