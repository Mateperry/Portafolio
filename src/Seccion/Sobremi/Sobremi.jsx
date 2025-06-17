import React from "react";
import {
  FaMapMarkerAlt,
  FaCode,
  FaFootballBall,
  FaEnvelope,
  FaGraduationCap,
  FaJava,
  FaLaptopCode,
  FaRocket,
  FaTools,
  FaGamepad,
  FaBrain,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiPython,
  SiFlutter,
  SiAngular,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import img1 from "../../Images/fondosobremi.webp"
import img2 from "../../Images/Mateo.avif"
const SobreMi = () => {
  return (
    <section className=" text-[#c1c0c0]">
      {/* Fondo superior */}
      <div className="relative bg-gradient-to-b from-[#111827] to-[#1f2937] h-[500px] flex items-center justify-center">
        <img
          src={img1}
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={img2}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1tXaFm_hypzpdSgO2e_MatFUv_0J2a2bd/view"
              target="_blank"
              className="bg-white text-black font-medium px-4 py-1 rounded hover:bg-gray-200 transition"
            >
              CV
            </a>
            <a
              href="https://github.com/Mateperry"
              target="_blank"
              className="bg-black text-white font-medium px-4 py-1 rounded hover:bg-gray-800 transition"
            >
              Proyecto GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="py-12 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg text-[#c1c0c0] mb-10 max-w-3xl mx-auto">
          ¡Hola! Soy <span className="font-semibold text-white">Deiner Mateo Castro Useche</span>, desarrollador en formación y creador de ideas funcionales. Me enfoco en aprender constantemente y en aportar valor con tecnología.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaMapMarkerAlt className="text-red-500" /> Origen
            </h3>
            <p>Bogotá, Colombia. Orgullosamente colombiano y soñador global.</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaGraduationCap className="text-blue-500" /> Educación
            </h3>
            <p>Estudiante de Ingeniería de Software en la Universidad Manuela Beltrán.</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaTools className="text-yellow-600" /> Experiencia
            </h3>
            <p>He trabajado en atención al cliente, lo cual fortaleció mi empatía, organización y capacidad de resolver problemas.</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaRocket className="text-pink-500" /> Objetivo profesional
            </h3>
            <p>Crear aplicaciones accesibles, intuitivas y potentes que marquen una diferencia positiva en la vida de los usuarios.</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaCode className="text-green-600" /> Tecnologías que manejo
            </h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <SiJavascript className="hover:scale-110 transition text-yellow-500" title="JavaScript" />
              <SiReact className="hover:scale-110 transition text-cyan-500" title="React" />
              <SiTailwindcss className="hover:scale-110 transition text-sky-500" title="Tailwind CSS" />
              <SiMysql className="hover:scale-110 transition text-blue-700" title="MySQL" />
              <SiAngular className="hover:scale-110 transition text-red-600" title="Angular" />
              <SiFlutter className="hover:scale-110 transition text-blue-400" title="Flutter" />
              <SiPython className="hover:scale-110 transition text-yellow-600" title="Python" />
              <FaJava className="hover:scale-110 transition text-red-500" title="Java" />
              <SiMongodb className="hover:scale-110 transition text-green-700" title="MongoDB" />
              <SiNodedotjs className="hover:scale-110 transition text-green-600" title="Node.js" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaLaptopCode className="text-indigo-600" /> Proyectos personales
            </h3>
            <p>
              He creado sistemas de conversión de unidades, calculadoras científicas, componentes interactivos en React y clones funcionales como Netflix UI.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaBrain className="text-indigo-700" /> Filosofía
            </h3>
            <p>Aprender no es una opción, es mi estilo de vida. Cada línea de código es una oportunidad de mejorar.</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaLightbulb className="text-yellow-500" /> Curiosidades
            </h3>
            <p>
              Me fascina la neurociencia, el diseño UX/UI, y sueño con crear una IA personalizada para cada persona.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaFootballBall className="text-orange-500" /> Intereses personales
            </h3>
            <p>
              Disfruto el fútbol y el baloncesto. También me relajo jugando videojuegos y viendo documentales de ciencia.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaEnvelope className="text-purple-600" /> Contacto
            </h3>
            <p className="text-white font-semibold mb-2">
              castromateo0204@gmail.com
            </p>
            <a
              href="mailto:castromateo0204@gmail.com"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              ¡Mándame un correo!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;


