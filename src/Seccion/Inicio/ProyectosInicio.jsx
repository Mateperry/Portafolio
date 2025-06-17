import React from "react";
import { Link } from "react-router-dom";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import img1 from "../../Images/pcdeports.png";
import img2 from "../../Images/pcpeliculas.png";
import img3 from "../../Images/pccomparador.png";

// Configuramos cada tecnología
const TECNOLOGIAS = {
  javascript: { icon: SiJavascript, color: "text-yellow-400", nombre: "JavaScript" },
  react: { icon: SiReact, color: "text-cyan-400", nombre: "React" },
  tailwind: { icon: SiTailwindcss, color: "text-sky-400", nombre: "Tailwind CSS" },
  mysql: { icon: SiMysql, color: "text-blue-600", nombre: "MySQL" },
  node: { icon: SiNodedotjs, color: "text-green-500", nombre: "Node.js" },
  mongodb: { icon: SiMongodb, color: "text-green-700", nombre: "MongoDB" },
  html: { icon: SiHtml5, color: "text-orange-600", nombre: "HTML5" },
  css: { icon: SiCss3, color: "text-blue-500", nombre: "CSS3" },
  express: { icon: SiExpress, color: "text-gray-300", nombre: "Express.js" },
};

const proyectos = [
  {
    id: 1,
    titulo: "Página de Películas",
    descripcion:
      "Esta página consume la API de The Movie DB para mostrar su catálogo completo de películas. Incluye navegación por secciones temáticas y motor de búsqueda.",
    imagen: img2,
    boton1: { texto: "Ver proyecto", link: "/proyecto/peliculas" },
    boton2: { texto: "Ver otros proyectos", link: "/proyectos" },
    invertir: true,
    tecnologias: ["react", "javascript", "tailwind", "html", "css"],
  },
  {
    id: 2,
    titulo: "Página de Deportes",
    descripcion:
      "En la Página Deportes, puedes encontrar historia de deportes como fútbol, baloncesto o F1. Se consumen datos de la API-FOOTBALL.",
    imagen: img1,
    boton1: { texto: "Ver proyecto", link: "/proyecto/Deportes" },
    boton2: { texto: "Ver otros proyectos", link: "/proyectos" },
    invertir: false,
    tecnologias: ["react", "javascript", "tailwind", "html", "css"],
  },
  {
    id: 3,
    titulo: "Comparador móvil",
    descripcion:
      "Un comparador de móviles creado en React y Node.js. Este es un proyecto en el cual se utiliza base de datos en MySQL y un backend en Node.",
    imagen: img3,
    boton1: { texto: "Ver proyecto", link: "/proyecto/Comparadormovil" },
    boton2: { texto: "Ver otros proyectos", link: "/proyectos" },
    invertir: false,
    tecnologias: ["react", "javascript", "tailwind", "mysql", "node", "html", "css"],
  },
];

const ProyectosInicio = () => {
  return (
    <section className="w-full px-4 md:px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Principales proyectos 🚀
        </h2>

        <div className="space-y-16">
          {proyectos.map(({ id, titulo, descripcion, imagen, boton1, boton2, invertir, tecnologias }) => (
            <div
              key={id}
              className={`flex flex-col ${
                invertir ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-6 bg-neutral-800 rounded-xl overflow-hidden shadow-md`}
            >
              {/* Imagen */}
              <div className="w-full md:w-1/2">
                <img
                  src={imagen}
                  alt={titulo}
                  className="w-10/12 h-auto mx-10 object-cover my-9"
                />
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{titulo}</h3>
                <p className="text-sm sm:text-base text-gray-200">{descripcion}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {tecnologias.map((key) => {
                    const tech = TECNOLOGIAS[key];
                    if (!tech) return null;
                    const { icon: Icono, color, nombre } = tech;
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-1 px-2 py-1 rounded bg-gray-800 text-sm hover:scale-105 transition"
                      >
                        <Icono className={`${color} text-xl`} />
                        <span className="text-white">{nombre}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Botones */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    to={boton1.link}
                    className="px-4 py-2 bg-black text-white text-sm rounded hover:opacity-90"
                  >
                    {boton1.texto}
                  </Link>
                  <Link
                    to={boton2.link}
                    className="px-4 py-2 bg-gray-100 text-black text-sm rounded hover:opacity-90"
                  >
                    {boton2.texto}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón final */}
        <div className="mt-12 flex justify-center">
          <Link to="/proyectos">
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:opacity-90">
              Ver más proyectos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProyectosInicio;
