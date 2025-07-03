import React, { useState } from "react";

const ContactSection = () => {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwdewja";
  const [estado, setEstado] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setEstado("success");
        e.target.reset();
      } else {
        const data = await response.json();
        alert(
          `Error al enviar: ${
            data.errors ? data.errors.map((err) => err.message).join(", ") : "Error desconocido"
          }`
        );
        setEstado("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setEstado("error");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br  py-20 px-6 md:px-32 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Hablamos? 📬</h2>
        <p className="text-gray-300">
          Si tienes un proyecto, idea o simplemente deseas saludar, no dudes en enviarme un mensaje.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#252323] p-8 rounded-xl shadow-lg space-y-6 max-w-3xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-500">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-white"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-500">
              Correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-white"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-blue-500">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="mt-1 block w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-white"
            placeholder="¿En qué te puedo ayudar?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={estado === "sending"}
          className={`w-full py-3 px-6 rounded-md font-semibold transition duration-300 ${
            estado === "success"
              ? "bg-green-600 text-white"
              : estado === "error"
              ? "bg-red-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {estado === "sending"
            ? "Enviando..."
            : estado === "success"
            ? "¡Enviado!"
            : estado === "error"
            ? "Error al enviar"
            : "Enviar mensaje"}
        </button>
      </form>

      <div className="mt-12 text-center text-gray-400">
        <p>O también puedes escribirme directamente a:</p>
        <a
          href="mailto:castromateo2004@gmail.com"
          className="text-blue-400 hover:underline"
        >
          castromateo2004@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
