import React from "react";
import { Link } from "react-router-dom";
const SobreMiInicio = () => {
  return (
    <section className="text-white py-16 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Texto de presentación */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mateo Castro Useche</h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-400">
            Soy alumno de Ingeniería de Software en la Universidad Manuela Beltrán,
            entusiasta del aprendizaje constante y el progreso tecnológico.
            Integro mis estudios formales con una perspectiva de autoaprendizaje,
            colaborando en proyectos que potencian mis capacidades en front-end,
            back-end y diseño de sitios web operativos e interactivos.
            Me especializo en tecnologías recientes y me pongo al día a través de
            cursos y certificaciones en programación.
            Además, mi fascinación por la inteligencia artificial y la neurociencia
            alimenta mi objetivo de fabricar soluciones tecnológicas novedosas que
            beneficien a las personas.
            Tengo el propósito de crear aplicaciones útiles y centradas en el usuario
            que hagan una diferencia en el entorno digital.
            Mencionado anteriormente, con proyectos en las tecnologías citadas.
          </p>
        </div>

        {/* Sección de contacto */}
        <div className="w-full lg:w-1/3 bg-neutral-800 p-6 rounded-xl shadow-lg mt-5">
          <h3 className="text-2xl font-bold text-center mb-6">Contacto</h3>
          <p className="text-sm text-center text-gray-300">
            <strong>Nombre:</strong> Deiner Mateo Castro Useche (Edad: 20)<br />
            <strong>Ciudad de residencia:</strong> Mosquera, Cundinamarca (Código postal: 250040)<br />
            <strong>Correo electrónico:</strong><br />
            castromateo2004@gmail.com
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
            href="https://drive.google.com/file/d/1tXaFm_hypzpdSgO2e_MatFUv_0J2a2bd/view">
              CV
            </a>
          <Link to="/sobremi">
             <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:opacity-90 transition">
                Saber más de mí
             </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMiInicio;