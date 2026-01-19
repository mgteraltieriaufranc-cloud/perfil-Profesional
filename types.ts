
export interface ProfessionalData {
  name: string;
  degrees: string[];
  postgraduate: string[];
  role: string;
  orcid: string;
  nationalLicense: string;
  privateLicenses: string[];
  insurance: {
    company: string;
    policy: string;
  };
  brand: string;
}

export const DATA: ProfessionalData = {
  name: "Álvaro Altieri Aufranc",
  degrees: ["Licenciado en Musicoterapia", "Licenciado en Psicología"],
  postgraduate: [
    "Magíster en el Modelo Benenzon",
    "Máster en Musicoterapia – Universidad de Nebrija",
    "Posgrado en Ciencias Forenses – Universidad Siglo 21 (UES21)"
  ],
  role: "Especialista en Salud Mental y Terapias Integrativas",
  orcid: "0009-0006-8012-9817",
  nationalLicense: "N.º 59502/15",
  privateLicenses: ["N.º 217", "N.º 113"],
  insurance: {
    company: "La Segunda Seguros",
    policy: "40.264.697"
  },
  brand: "La Piazza Terapias Integrativas"
};
