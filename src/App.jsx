import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "API de tareas",
    description:
      "Microservicio REST para gestion de tareas (Java + Spring Boot + MongoDB).",
    highlights: ["Autenticación JWT"],
    code: "https://github.com/Elian-Cordone7/task-api",
    demo: "",
    tags: ["Java", "Spring Boot", "MongoDB"],
  },
  {
    title: "Sistema ATM",
    description:
      "Servicio RESTful para operaciones bancarias a traves de cajeros automaticos (ATM). Sistema multi-modulo que incluye un backend Spring Boot y una aplicacion de consola Java.",
    highlights: ["MyBatis", "JUnit"],
    code: "https://github.com/Elian-Cordone7/atm-service",
    demo: "",
    tags: ["Java", "Spring Boot", "H2"],
  }
];

function Pill({ children }) {
  return (
    <span className="rounded-full border px-3 py-1 text-sm bg-white/70 backdrop-blur border-neutral-300">
      {children}
    </span>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-8 border-b border-gray-300 pb-2">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  const email = "eliancordonee@gmail.com";
  const linkedin = "https://www.linkedin.com/in/elian-cordone";
  const github = "https://github.com/Elian-Cordone7";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="relative overflow-hidden bg-gray-50 shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 w-full md:w-auto"
          >
            {/* Contenedor que evita que la imagen se encoja */}
            <div className="flex-shrink-0">
              <img
                src="/yop.jpg"
                alt="Foto de Elian Cordone"
                className="w-24 h-24 rounded-full border-4 border-gray-700 object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold text-black">Elian Cordone</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-auto"
          >
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-900 hover:text-white transition w-full sm:w-auto"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-900 hover:text-white transition w-full sm:w-auto"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-900 hover:text-white transition w-full sm:w-auto"
              aria-label="Copiar email"
            >
              <FaEnvelope size={18} />
              {copied ? "¡Copiado!" : "eliancordonee@gmail.com"}
            </button>
          </motion.div>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="Sobre mi">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl text-gray-700 leading-relaxed"
        >
          Soy desarrollador backend con <strong>3 años de experiencia</strong> construyendo
          APIs y servicios con Java + Spring Boot. 
          Experiencia en integraciones, seguridad, y
          despliegues en contenedores
          Me gusta involucrarme en todo el ciclo:
          diseño, desarrollo, pruebas y soporte productivo.
        </motion.p>
      </Section>

      {/* Stack */}
      <Section id="stack" title="Stack principal">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <Pill>Java 8/11/17</Pill>
          <Pill>Spring Boot</Pill>
          <Pill>Spring MVC / JPA / Hibernate</Pill>
          <Pill>REST / SOAP</Pill>
          <Pill>JWT</Pill>
          <Pill>MySQL</Pill>
          <Pill>SQLServer</Pill>
          <Pill>Oracle / PL/SQL</Pill>
          <Pill>Docker</Pill>
          <Pill>Kubernetes</Pill>
          <Pill>Git / GitFlow</Pill>
          <Pill>OpenShift (basico)</Pill>
          <Pill>Fuse</Pill>
        </motion.div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Proyectos">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="rounded-xl border border-gray-300 bg-white p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700">{p.description}</p>
              <ul className="mt-3 text-sm list-disc list-inside space-y-1">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-blue-600 hover:text-blue-800"
                  >
                    Codigo
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-blue-600 hover:text-blue-800"
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contacto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-xl border border-gray-300 bg-white p-6 shadow"
        >
          <p className="text-gray-800">
            Escribime por{" "}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>{" "}
            o enviame un correo a{" "}
            <button
              onClick={handleCopy}
              className="font-mono underline text-blue-600 hover:text-blue-800"
              aria-label="Copiar email"
            >
              {copied ? "¡Copiado!" : email}
            </button>
            
          </p>
        </motion.div>
      </Section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Elian Cordone — Portfolio
      </footer>
    </div>
  );
}

