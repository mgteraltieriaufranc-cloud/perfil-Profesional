
import React from 'react';
import { DATA } from '../types';

export const LegalBlock: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 border-t border-slate-800 pt-10">
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Registro Profesional</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Matrícula Nacional: <span className="text-white font-medium">{DATA.nationalLicense}</span></li>
              <li>Matrículas Privadas y Provinciales: <span className="text-white font-medium">{DATA.privateLicenses.join(' y ')}</span></li>
              <li>Propietario de la marca: <span className="text-white font-medium italic">{DATA.brand}</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Respaldo y Seguridad</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Seguro de mala praxis: <span className="text-white font-medium">Vigente</span></li>
              <li>Compañía: <span className="text-white font-medium">{DATA.insurance.company}</span></li>
              <li>Póliza N.º: <span className="text-white font-medium">{DATA.insurance.policy}</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed text-center italic">
          <p>
            <strong>Disclaimer Sanitario:</strong> La información proporcionada en este sitio web tiene carácter exclusivamente institucional e informativo. 
            No constituye asesoramiento médico, diagnóstico ni sustituye la consulta profesional personalizada. 
            No se realizan promesas de curación ni se ofrecen servicios de emergencia a través de este canal.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Álvaro Altieri Aufranc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
