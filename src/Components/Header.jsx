import { useState } from "react";
/*Importamos los iconos que vamos a utilizar para mas adelante*/
/*Aqui importamos el icono de Github y uno de un hoja pra poder usarlos */
import { FaGithub, FaFileAlt } from "react-icons/fa";
/* Importamos para el menú movil */
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/sobremi", label: "Sobre mí" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
  /*El header tiene los siguientes estilos puestos 
    Un bg-transparente: Tiene el fondo en este caso transparente
    text-white: Aqui ponemos lo que en este caso seria el color del texto en blanco 
    shadow-md: ponemos una sombra mediana para este header 
    sticky: Una posición en la cual siempre sera visible manteniendo sus estilos   
    top-0: Aqui dice que no va a tener ninguna altitud diferente, por lo cual nos permite que este al principio 
    z-50: Esta seria la capa que va a tener para poder decir en que punto esta, en este caso estaria por encima de todo
    */
    <header className="bg-transparent text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-purple-500 text-3xl">⚡</span>
          <div className="leading-tight">
            <h1 className="text-white font-bold text-xl">Mateo Castro</h1>
            <p className="text-gray-400 text-xs">Desarrollador de software</p>
          </div>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl focus:outline-none"
        >
          <FiMenu />
        </button>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex space-x-6 items-center text-sm md:text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive ? "text-purple-400 font-semibold" : "hover:text-purple-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* GitHub */}
          <a
            href="https://github.com/Mateperry"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-white transition"
          >
            <FaGithub /> GitHub
          </a>

          {/* CV actualizado */}
          <a
            href="https://drive.google.com/file/d/1tXaFm_hypzpdSgO2e_MatFUv_0J2a2bd/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-white transition"
          >
            <FaFileAlt /> CV
          </a>
        </nav>
      </div>

      {/* Overlay y Sidebar para móviles */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="md:hidden fixed top-0 left-0 w-64 h-full bg-[#0d0b1f] z-50 p-6 space-y-6 transition-all duration-300 shadow-lg">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl absolute top-4 right-4"
            >
              <FiX />
            </button>

            <div className="flex flex-col gap-5 mt-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block transition ${
                      isActive ? "text-purple-400 font-semibold" : "hover:text-purple-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* GitHub móvil */}
              <a
                href="https://github.com/Mateperry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded text-white transition"
              >
                <FaGithub /> GitHub
              </a>

              {/* CV móvil */}
              <a
                href="https://drive.google.com/file/d/1tXaFm_hypzpdSgO2e_MatFUv_0J2a2bd/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded text-white transition"
              >
                <FaFileAlt /> CV
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
