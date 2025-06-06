"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaBars, FaTimes, FaChevronLeft, FaChevronRight, FaCode } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Proyectos() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

 
  const projects = [
    {
      id: 1,
      title: "Reproductor de Música",
      img: "/reproductor_musica.png",
      description: "Una aplicación que te permite escuchar música de tu preferencia con una interfaz intuitiva y personalizable.",
      lines: [
        "Reproductor de música personalizable",
        "Interfaz intuitiva y fácil de usar",
        "Funciones avanzadas de reproducción"
      ],
      githubUrl: "https://github.com/tuusuario/reproductor-musica"
    },
    {
      id: 2,
      title: "Sistema de Reservas",
      img: "/turismo.png",
      description: "Plataforma web para reservar sitios y lugares donde puedes ir a disfrutar de tus actividades favoritas.",
      lines: [
        "Sistema completo de reservas online",
        "Gestión de disponibilidad en tiempo real",
        "Panel de administración integrado"
      ],
      githubUrl: "https://github.com/cristhianDavidOrbes/turismo"
    },
    {
      id: 3,
      title: "Reloj con Alarma",
      img: "/reloj.png",
      description: "Aplicación de reloj con funciones de alarma y temporizador, perfecta para organizar tu día.",
      lines: [
        "Reloj digital con múltiples caras",
        "Sistema de alarmas programables",
        "Temporizador y cronómetro"
      ],
      githubUrl: "https://github.com/tuusuario/reloj-alarma"
    },

  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextProject();
    }

    if (touchStart - touchEnd < -100) {
      prevProject();
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  return (
    <>
      <Head>
        <title>Cristhian David - Proyectos</title>
        <meta name="description" content="Proyectos de Cristhian David, Ingeniero de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <section className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]"></section>
      <section className="fixed w-[300px] h-[300px] rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%] bg-gradient-to-br from-[rgba(52,152,219,0.3)] to-[rgba(41,128,185,0.1)] top-[-50px] right-[-100px] animate-float z-[-1]"></section>
      <section className="fixed w-[200px] h-[200px] rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%] bg-gradient-to-tr from-[rgba(41,128,185,0.2)] to-[rgba(52,152,219,0.05)] bottom-[50px] left-[-50px] animate-float animation-direction-reverse animation-duration-10s z-[-1]"></section>
      <section className="fixed w-[150px] h-[150px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-[rgba(46,204,113,0.2)] to-[rgba(39,174,96,0.05)] top-[40%] left-[20%] animate-float animation-duration-12s z-[-1]"></section>
      <section className="fixed w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(231,76,60,0.15)] to-[rgba(192,57,43,0.05)] top-[30%] right-[20%] animate-float animation-duration-6s z-[-1]"></section>
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] top-[10%] right-[5%]"></section>
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] bottom-[10%] left-[5%]"></section>

     
      <nav className="flex justify-between w-full items-center p-4 px-8 bg-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
        <Link href="/" className="text-2xl font-bold text-[#3498db] relative z-[1] no-underline">
          cris<span className="text-[#2c3e50] font-normal">Developer</span>
          <span className="absolute w-full h-2 bottom-[2px] left-0 bg-[rgba(52,152,219,0.2)] z-[-1]"></span>
        </Link>
        
        <menu className="hidden lg:flex gap-2">
          {['casa', 'sobre mi', 'Habilidades', 'Proyectos', 'Educacion', 'Testimonios', 'Contacto'].map((item) => {
            const path = item.toLowerCase().replace(/\s+/g, '');
            const href = path === 'casa' ? '/' : `/${path}`;
            
            return (
              <li key={item}>
                <Link
                  href={href}
                  className="text-[#34495e] whitespace-nowrap no-underline font-medium transition-all duration-300 py-2 px-4 rounded-full bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:text-white hover:bg-[#3498db] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(52,152,219,0.3)]"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </menu>
        
        <button 
          className="lg:hidden text-[#34495e] text-2xl z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[105]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside 
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg rounded-tl-4xl z-[110] lg:hidden"
            >
              <section className="pt-10 relative">
                <menu className="w-64 bg-gray-200 h-0.5 absolute top-20"></menu>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#3498db] pl-4 mb-4">cris<span className='text-[#2c3e50]'>Developer</span></h2>
                </section>
                
                <ul className="space-y-4">
                  {['casa', 'sobre mi', 'Habilidades', 'Proyectos', 'Educacion', 'Testimonios', 'Contacto'].map((item) => {
                    const path = item.toLowerCase().replace(/\s+/g, '');
                    const href = path === 'casa' ? '/' : `/${path}`;
                    
                    return (
                      <li key={item}>
                        <Link
                          href={href}
                          className="block text-[#34495e] whitespace-nowrap no-underline font-medium transition-all duration-300 py-2 px-4 pl-10 hover:bg-[#3498db]/10 hover:text-[#3498db]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    
      <figure className="fixed w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-[0_3px_10px_rgba(0,0,0,0.1)] top-28 left-4 z-[10]">
        <FaInfoCircle className="text-[#3498db] text-2xl" />
      </figure>

      <main>
        <AnimatePresence mode="wait">
          <motion.section
            key={pathname}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-22 w-[250px] h-[50px] items-start bg-white flex rounded-s-4xl shadow-md z-[20]"
            style={{ boxShadow: 'inset 0 -8px 8px rgba(0, 149, 255, 0.2)' }}
          >
            <h1 className="ml-6 mt-2 text-2xl text-[#0A1B58]">Proyectos</h1>
          </motion.section>
        </AnimatePresence>

       
        <section className="pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto">
          <div className="relative w-full h-[600px] overflow-hidden">
            
            <button 
              onClick={prevProject}
              className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#3498db] hover:text-white transition-colors duration-300"
              aria-label="Proyecto anterior"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextProject}
              className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#3498db] hover:text-white transition-colors duration-300"
              aria-label="Siguiente proyecto"
            >
              <FaChevronRight />
            </button>

           
            <div 
              ref={projectsRef}
              className="relative w-full h-full flex items-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence>
                {projects.map((project, index) => {
                  const position = ((index - currentIndex + projects.length) % projects.length) - 1;
                  
                  if (Math.abs(position) > 1) return null;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ x: position * 300, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        x: position * 200, 
                        opacity: position === 0 ? 1 : 0.6, 
                        scale: position === 0 ? 1 : 0.9,
                        filter: position === 0 ? 'blur(0px)' : 'blur(2px)'
                      }}
                      exit={{ x: position * 300, opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className={`absolute w-full max-w-md mx-auto left-0 right-0 ${
                        position === 0 ? 'z-10' : 'z-0'
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl overflow-hidden mx-4 transform transition-all duration-300">
                       
                        <div className="relative h-48 w-full flex items-center justify-center bg-gray-100">
                          <Image 
                            src={project.img} 
                            alt={project.title}
                            width={300}
                            height={200}
                            className="object-contain max-h-full max-w-full p-4"
                          />
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-[#2c3e50] mb-4 text-center">
                            {project.title}
                          </h3>
                          <div className="text-[#34495e] mb-6 text-center">
                            {project.lines.map((line, i) => (
                              <p key={i} className="mb-2">{line}</p>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 text-center mb-4">
                            {project.description}
                          </p>
                          
                        
                          <div className="flex justify-center">
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-[#2c3e50] text-white rounded-lg hover:bg-[#3498db] transition-colors duration-300"
                            >
                              <FaCode />
                              Ver código en GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Indicadores de posición */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#3498db] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Fixed social media icons at bottom center */}
      <motion.nav 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="fixed bottom-4 left-1/2 md:left-30 transform -translate-x-1/2 flex gap-5 z-[2]"
      >
        <motion.a 
          whileHover={{ y: -5, rotate: 5 }}
          href="#" 
          title="GitHub"
          className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden group"
        >
          <FaGithub className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#333] group-hover:text-white" />
          <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0"></span>
        </motion.a>
        <motion.a 
          whileHover={{ y: -5, rotate: 5 }}
          href="#" 
          title="Facebook"
          className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden group"
        >
          <FaFacebookF className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#3b5998] group-hover:text-white" />
          <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0"></span>
        </motion.a>
        <motion.a 
          whileHover={{ y: -5, rotate: 5 }}
          href="#" 
          title="WhatsApp"
          className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden group"
        >
          <FaWhatsapp className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#25d366] group-hover:text-white" />
          <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0"></span>
        </motion.a>
      </motion.nav>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animation-duration-10s {
          animation-duration: 10s;
        }
        
        .animation-duration-12s {
          animation-duration: 12s;
        }
        
        .animation-duration-6s {
          animation-duration: 6s;
        }
        
        .animation-direction-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </>
  );
}