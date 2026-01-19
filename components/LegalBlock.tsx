
import React from 'react';
import { DATA } from '../types';

export const LegalBlock: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 py-16 px-6 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="serif text-2xl text-slate-800 mb-8 border-l-4 border-blue-600 pl-4">Transparencia Legal y Ética</h2>
        
        <div className="grid md:grid-cols-2 gap-12 pt-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-slate-900 font-bold mb-3 uppercase tracking-wider text-xs">Registro Profesional</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Matrícula Nacional:</span>
                  <span className="font-bold text-slate-900">{DATA.nationalLicense}</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Matrículas Prov/Priv:</span>
                  <span className="font-bold text-slate-900">{DATA.privateLicenses.join(' y ')}</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Marca Registrada:</span>
                  <span className="font-medium italic text-slate-900">{DATA.brand}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-slate-900 font-bold mb-3 uppercase tracking-wider text-xs">Aseguramiento y Respaldo</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Estado del Seguro:</span>
                  <span className="font-bold text-green-600">VIGENTE</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Compañía Aseguradora:</span>
                  <span className="font-bold text-slate-900">{DATA.insurance.company}</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Número de Póliza:</span>
                  <span className="font-bold text-slate-900">{DATA.insurance.policy}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-relaxed italic shadow-sm">
          <p className="mb-2">
            <strong>Disclaimer Sanitario:</strong> La información proporcionada en este sitio web tiene carácter exclusivamente institucional e informativo. 
            No constituye asesoramiento médico, diagnóstico ni sustituye la consulta profesional personalizada. 
            La práctica se encuentra debidamente asegurada y matriculada bajo la normativa vigente.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Álvaro Altieri Aufranc. Los datos aquí expuestos son de carácter público bajo responsabilidad del profesional.
          </p>
        </div>
      </div>
    </div>
  );
};
