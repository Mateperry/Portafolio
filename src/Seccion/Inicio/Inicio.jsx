import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Images/Mateo.avif";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Lenguajes from "./Lenguajes"; // Asegúrate de que esté bien el nombre
import ProyectosInicio from "./ProyectosInicio"
import SobreMiInicio from "./SobreMiInicio";
const Inicio = () => {
  return (
    <>
      <section id="inicio" className="w-full px-6 py-12 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col md:block">
            <div className="flex flex-row items-center gap-4 md:block mx-6 md:mx-20">
              <div>
                <h1 className="text-3xl font-bold">
                  Hola! <span className="animate-wave inline-block">👋</span>
                </h1>
                <h2 className="text-2xl font-extrabold text-purple-500">
                  Soy Mateo Castro
                </h2>
              </div>

              <Tilt>
                <img
                  src={myImg}
                  alt="avatar"
                  className="w-40 sm:w-28 rounded-2xl md:hidden"
                />
              </Tilt>
            </div>

            <div className="space-y-6 mt-2 mx-6 md:mx-20">
              <h3 className="text-lg md:text-xl">Desarrollador Front-End</h3>
              <div className="text-base md:text-xl text-gray-300 h-3">
                <Typewriter
                  options={{
                    strings: [
                      "React.js",
                      "Tailwind CSS",
                      "Node.js & Express",
                      "MySQL y MongoDB",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>

              <p className="text-gray-400 text-base leading-relaxed">
                Apasionado por crear experiencias interactivas con tecnologías modernas.
                Me encanta construir interfaces intuitivas, limpias y potentes.
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <Tilt>
              <img
                src={myImg}
                alt="avatar"
                className="w-72 md:w-80 lg:w-96 rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
              />
            </Tilt>
          </div>
        </div>
      </section>

      <Lenguajes />
      <ProyectosInicio/>
      <SobreMiInicio/>
    </>
  );
};

export default Inicio;
