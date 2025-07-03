import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs, FaJava
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiFlutter, SiAngular, SiPython
} from "react-icons/si";

const lenguajesData = [
  {
    icon: <FaHtml5 className="text-orange-600 text-3xl" />,
    title: "HTML5 y CSS3",
    author: "@Mateo Castro",
    description: "Base sólida para construir interfaces web semánticas y estilos responsivos.",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    title: "JavaScript (ES6+)",
    author: "@Mateo Castro",
    description: "Para crear interactividad y funcionalidades dinámicas en las aplicaciones.",
  },
  {
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    title: "React",
    author: "@Mateo Castro",
    description: "Desarrollo de interfaces dinámicas, reutilizables y eficientes.",
  },
  {
    icon: <SiAngular className="text-red-500 text-3xl" />,
    title: "Angular (en proceso)",
    author: "@Mateo Castro",
    description: "Explorando nuevas formas de desarrollar aplicaciones escalables con TypeScript.",
    upcoming: true,
  },
  {
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    title: "Tailwind CSS",
    author: "@Mateo Castro",
    description: "Sistema de clases utilitarias para interfaces modernas y eficientes.",
  },
  {
    icon: <SiPython className="text-yellow-200 text-3xl" />,
    title: "Python (Próximo)",
    author: "@Mateo Castro",
    description: "Automatización de tareas, análisis de datos, IA y más.",
    upcoming: true,
  },
  {
    icon: <FaJava className="text-orange-400 text-3xl" />,
    title: "Java (Próximo)",
    author: "@Mateo Castro",
    description: "Desarrollo de aplicaciones web y móviles robustas.",
    upcoming: true,
  },
  {
    icon: <SiMongodb className="text-green-400 text-3xl" />,
    title: "MongoDB (Próximo)",
    author: "@Mateo Castro",
    description: "NoSQL para estructuras más flexibles.",
    upcoming: true,
  },
  {
    icon: <SiMysql className="text-blue-500 text-3xl" />,
    title: "MySQL",
    author: "@Mateo Castro",
    description: "Gestión de bases de datos relacionales.",
  },
  {
    icon: <FaGitAlt className="text-red-600 text-3xl" />,
    title: "Git - Github",
    author: "@Mateo Castro",
    description: "Control de versiones para un desarrollo colaborativo eficaz.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    title: "Node.js (Próximo)",
    author: "@Mateo Castro",
    description: "Desarrollo de aplicaciones del lado del servidor.",
    upcoming: true,
  },
  {
    icon: <SiFlutter className="text-blue-400 text-3xl" />,
    title: "Flutter (Próximo)",
    author: "@Mateo Castro",
    description: "Framework de código abierto para apps móviles y web.",
    upcoming: true,
  },
];

const Lenguajes = () => {
  return (
    <section className="w-full px-4 py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Lenguajes y Tecnologías</h2>

      {/* Slider para móviles */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={false}
        >
          {lenguajesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-800 rounded-xl shadow-md w-11/12 mx-auto h-48 px-4 py-4 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.author}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mt-2">{item.description}</p>

                <span className={`mt-2 inline-block px-2 py-0.5 text-xs font-semibold rounded-full self-start 
                  ${item.upcoming ? "bg-yellow-500 text-black" : "bg-green-500 text-black"}`}>
                  {item.upcoming ? "Próximo" : "Aprendido"}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid para pantallas grandes */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {lenguajesData.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-xl p-5 shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div>{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.author}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{item.description}</p>
            <span className={`mt-3 inline-block px-2 py-0.5 text-xs font-semibold rounded-full 
              ${item.upcoming ? "bg-yellow-500 text-black" : "bg-green-500 text-black"}`}>
              {item.upcoming ? "Próximo" : "Aprendido"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lenguajes;
