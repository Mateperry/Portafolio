import { useParams, Link } from "react-router-dom";
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
import { useState, useEffect } from "react";

import img1 from "../../Images/pcpeliculas.png";
import img2 from "../../Images/pcdeports.png";
import img3 from "../../Images/pccomparador.png";

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
    descripcion: [
      "Esta aplicación fue desarrollada con el objetivo de practicar y perfeccionar el consumo de APIs externas utilizando React.js. Se conecta con la API de The Movie DB para mostrar un catálogo dinámico y actualizado de películas, permitiendo al usuario navegar entre categorías, buscar títulos específicos y explorar información detallada de cada película.",
      "La estructura del proyecto está completamente modularizada usando componentes reutilizables como tarjetas de películas, botones, encabezados y formularios. Se utilizó Tailwind CSS para aplicar un diseño moderno, elegante y totalmente responsivo, optimizado tanto para dispositivos móviles como de escritorio.",
      "Incluye una barra de navegación adaptable, un footer con secciones informativas como términos y condiciones, política de privacidad, y un formulario de contacto funcional. El sistema de navegación está implementado con React Router, permitiendo transiciones fluidas entre vistas sin recargar la página.",
      "Entre las funcionalidades destacadas se incluyen:",
      "- Consumo de API con manejo de estados y errores.",
      "- Búsqueda dinámica de películas.",
      "- Renderizado de tarjetas de películas con datos en tiempo real.",
      "- Paginación automática.",
      "- Diseño Mobile First y accesibilidad básica.",
      "Este proyecto demuestra la integración de tecnologías modernas como React y Tailwind CSS, y aplica buenas prácticas de desarrollo front-end como separación de lógica, código limpio y reutilización eficiente de componentes.",
    ],
    github: "https://github.com/Mateperry/Peliculas",
    demo: "https://peliculas-ashy.vercel.app",
    video: "https://www.youtube.com/watch?v=vragRLCSECA",
    tecnologias: ["react", "javascript", "tailwind", "html", "css"],
    documentacion: "https://github.com/Mateperry/Peliculas#readme",
    imagenPrincipal: img1,
  },
  {
    id: "Deportes",
    titulo: "Página de Deportes",
    descripcion: [
  "Esta aplicación web fue desarrollada para centralizar información sobre diversos deportes, ofreciendo una experiencia informativa e interactiva. Se conecta con una API especializada (API-FOOTBALL) que provee datos en tiempo real y estadísticas históricas de disciplinas como fútbol, baloncesto y Fórmula 1.",
  "El propósito principal de este proyecto es consolidar habilidades en el consumo de APIs REST con React y presentar los datos de manera organizada y atractiva utilizando Tailwind CSS. La interfaz está diseñada para adaptarse a todo tipo de dispositivos, aplicando principios Mobile First y diseño modular.",
  "Los datos se visualizan mediante tablas, tarjetas y secciones de navegación que facilitan al usuario consultar información por categoría o evento deportivo. La aplicación está estructurada con componentes reutilizables para mantener la escalabilidad del código.",
  "Entre las funcionalidades más destacadas se encuentran:",
  "- Integración con API externa para obtener datos deportivos en tiempo real.",
  "- Interfaz modular y organizada con componentes reutilizables.",
  "- Diseño responsivo y enfocado en usabilidad.",
  "- Navegación fluida entre secciones usando React Router.",
  "Este proyecto evidencia el uso eficiente de React y Tailwind CSS, así como buenas prácticas en el consumo de servicios externos y presentación visual de datos.",
],
    github: "https://github.com/Mateperry/deports",
    demo: "https://deports-amrm.vercel.app",
    
    tecnologias: ["react", "javascript", "tailwind", "html", "css"],
    imagenPrincipal: img2,
  },
  {
    id: "Comparadormovil",
    titulo: "Página para comparar móviles",
descripcion: [
  "Este proyecto permite comparar las especificaciones técnicas de distintos modelos de teléfonos móviles, con el objetivo de ayudar a los usuarios a tomar decisiones informadas antes de realizar una compra. La aplicación está desarrollada con React para el frontend, y utiliza una base de datos propia consultada mediante Node.js y MySQL en el backend.",
  "Se ha implementado una arquitectura cliente-servidor que separa completamente la lógica de presentación del acceso a datos, lo que permite escalar y mantener el proyecto con mayor facilidad. Tailwind CSS fue utilizado para diseñar una interfaz clara, limpia y adaptable a móviles y pantallas de escritorio.",
  "El usuario puede seleccionar hasta 4 modelos diferentes y visualizar sus especificaciones técnicas lado a lado, facilitando una comparación directa de aspectos como batería, pantalla, cámara, almacenamiento, etc.",
  "Las principales funcionalidades incluyen:",
  "- Comparación múltiple de modelos de móviles.",
  "- Interfaz dinámica y responsiva.",
  "- Backend con API REST construida en Node.js y consultas SQL con MySQL.",
  "- Filtrado y selección de modelos desde una base de datos organizada.",
  "- Modularización de componentes para visualización y consulta.",
  "Este proyecto demuestra integración full-stack utilizando tecnologías modernas, manejo de datos en tiempo real y diseño centrado en la experiencia del usuario.",
],
    github: "https://github.com/Mateperry/Front-cel",
    demo: "https://front-cel.vercel.app",
   
    tecnologias: ["react", "javascript", "tailwind", "mysql", "html", "css", "node"],
    imagenPrincipal: img3,
  },
];

const ProyectoIndividual = () => {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === id);
  const otrosProyectos = proyectos.filter((p) => p.id !== id);
  const [mostrarVideo, setMostrarVideo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMostrarVideo(false);
  }, [id]);

  if (!proyecto)
    return <div className="text-center py-20 text-white">Proyecto no encontrado.</div>;

  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = proyecto.video ? getYoutubeId(proyecto.video) : null;
  const thumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <section className="text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-4">{proyecto.titulo}</h2>
      <img
        src={proyecto.imagenPrincipal}
        alt={proyecto.titulo}
        className="w-full max-w-4xl mx-auto rounded-lg mb-10"
      />

      {/* Descripción */}
      <div className="text-lg text-gray-300 mb-8 space-y-4">
        {proyecto.descripcion.map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}
      </div>

      {/* Tecnologías */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Tecnologías utilizadas</h3>
        <div className="flex flex-wrap gap-4">
          {proyecto.tecnologias.map((key) => {
            const tech = TECNOLOGIAS[key];
            if (!tech) return null;
            const { icon: Icono, color, nombre } = tech;
            return (
              <div
                key={key}
                className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg hover:scale-105 transition"
              >
                <Icono className={`${color} text-xl`} />
                <span>{nombre}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-4 flex-wrap mb-20">
        <a
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
        >
          GitHub
        </a>
        {proyecto.demo && (
          <a
            href={proyecto.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Demo
          </a>
        )}
        {proyecto.documentacion && (
          <a
            href={proyecto.documentacion}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Documentación
          </a>
        )}
      </div>

      {/* Video con miniatura */}
      { /*youtubeId && (
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Video del Proyecto</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            {mostrarVideo ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={proyecto.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> *
            ) : (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setMostrarVideo(true)}
              >
                <img src={thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-4xl bg-red-600 px-6 py-3 rounded-full">▶</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )*/}

      {/* Otros proyectos */}
      <div>
        <h3 className="text-3xl font-bold mb-6 text-center">Otros proyectos</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {otrosProyectos.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#1f1f2e] border border-purple-500 p-5 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={proj.imagenPrincipal}
                alt={proj.titulo}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{proj.titulo}</h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                {proj.descripcion[0]}
              </p>
              <Link
                to={`/proyecto/${proj.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectoIndividual;
