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
import img1 from "../../Images/pcpeliculas.png";
import img2 from "../../Images/pcdeports.png";
import img3 from "../../Images/pccomparador.png";

// Configuramos cada tecnología con ícono, nombre y color
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
    id: "peliculas",
    titulo: "Página de películas",
    descripcion:
      "Esta página consume la API de The Movie DB para mostrar su catálogo completo de películas. Incluye navegación por secciones temáticas y un motor de búsqueda para acceder rápidamente al contenido deseado.",
    github: "https://github.com/Mateperry/Peliculas",
    demo: "https://peliculas-ashy.vercel.app",
    imagen: img1,
    tecnologias: ["react", "javascript", "tailwind", "html", "css"],
  },
  {
    id: "Deportes",
    titulo: "Página de Deportes",
    descripcion:
      "En la Página Deportes, puedes encontrar historia de deportes como fútbol, baloncesto o F1. Se consumen datos de la API-FOOTBALL.",
    github: "https://github.com/Mateperry/deports",
    demo: "https://deports-amrm.vercel.app",
    imagen: img2,
    tecnologias: ["react", "javascript", "tailwind", "html", "css"],
  },
  {
    id: "Comparadormovil",
    titulo: "Página para comparar móviles",
    descripcion:
      "En esta página puedes comparar diferentes modelos de móviles. La información proviene de una base de datos propia.",
    github: "https://github.com/Mateperry/Front-cel",
    demo: "https://front-cel.vercel.app",
    imagen: img3,
    tecnologias: ["react", "javascript", "tailwind", "mysql", "html", "css","node"],
  },
];

const Proyectos = () => {
  return (
    <section className="text-white py-20 px-6 md:px-16 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos 🚀</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-[#1f1f2e] border border-purple-500 p-5 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
            <p className="text-sm text-gray-300 mb-4">{proyecto.descripcion}</p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-3 mb-4">
              {proyecto.tecnologias.map((key) => {
                const tecnologia = TECNOLOGIAS[key];
                if (!tecnologia) return null; // Previene errores si hay una clave vacía
                const { icon: Icono, color, nombre } = tecnologia;
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

            <div className="flex gap-3 flex-wrap">
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 text-white px-3 py-1 rounded hover:bg-purple-800 transition"
              >
                GitHub
              </a>
              {proyecto.demo && (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  Página
                </a>
              )}
              <Link
                to={`/proyecto/${proyecto.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
