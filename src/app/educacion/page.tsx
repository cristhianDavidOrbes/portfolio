"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Educacion() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const educationData = [
    {
      year: "2018",
      title: "INTRODUCCIÓN A LA PROGRAMACIÓN",
      decorationColor: "#FBDFDF",
      institution: "Universidad Tecnológica",
      description: "Curso introductorio a los conceptos básicos de programación y algoritmos."
    },
    {
      year: "2019",
      title: "DESARROLLO WEB BÁSICO",
      decorationColor: "#D8FFFA",
      institution: "Academia Digital",
      description: "Fundamentos de HTML, CSS y JavaScript para desarrollo de sitios web estáticos."
    },
    {
      year: "2020",
      title: "HERRAMIENTAS AVANZADAS DE HOJA DE CALCULO",
      decorationColor: "#9CF9FC",
      institution: "SENA",
      description: "Curso orientado al dominio de funciones complejas en hojas de cálculo. Se abordaron temas como tablas dinámicas y aplicación de herramientas para el análisis y la visualización de datos."
    },

  ];

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const progress = (currentScroll / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (stickyRef.current) {
        stickyRef.current.getBoundingClientRect();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cristhian David - Educación</title>
        <meta name="description" content="Educación de Cristhian David, Ingeniero de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background elements */}
      <section className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]"></section>
      <section className="fixed w-[300px] h-[300px] rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%] bg-gradient-to-br from-[rgba(52,152,219,0.3)] to-[rgba(41,128,185,0.1)] top-[-50px] right-[-100px] animate-float z-[-1]"></section>
      <section className="fixed w-[200px] h-[200px] rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%] bg-gradient-to-tr from-[rgba(41,128,185,0.2)] to-[rgba(52,152,219,0.05)] bottom-[50px] left-[-50px] animate-float animation-direction-reverse animation-duration-10s z-[-1]"></section>
      <section className="fixed w-[150px] h-[150px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-[rgba(46,204,113,0.2)] to-[rgba(39,174,96,0.05)] top-[40%] left-[20%] animate-float animation-duration-12s z-[-1]"></section>
      <section className="fixed w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(231,76,60,0.15)] to-[rgba(192,57,43,0.05)] top-[30%] right-[20%] animate-float animation-duration-6s z-[-1]"></section>
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] top-[10%] right-[5%]"></section>
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] bottom-[10%] left-[5%]"></section>

      {/* Navigation */}
      <nav ref={stickyRef} className="flex justify-between w-full items-center p-4 px-8 bg-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
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

      {/* Info icon */}
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
            <h1 className="ml-6 mt-2 text-2xl text-[#0A1B58]">Educación</h1>
          </motion.section>
        </AnimatePresence>

        {/* Sección de línea de tiempo */}
        <section className="pt-32 pb-16 px-0 max-w-full">
          {/* Versión Desktop - Horizontal (sin cambios) */}
          <div className="hidden lg:block">
            <div className="relative h-[500px] w-full overflow-hidden">
              <div className="absolute left-0 right-0 top-[30%] h-2 bg-gray-300 z-0">
                <div 
                  className="h-full bg-[#48E7FF] transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              <div
                ref={timelineContainerRef}
                className="absolute top-0 left-0 right-0 h-full overflow-x-auto overflow-y-hidden pb-12 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="inline-flex items-center h-full space-x-8">
                  <div className="inline-block h-full w-[calc(50vw-240px)]" />
                  
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className="inline-block w-96 h-64 relative"
                    >
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col cursor-pointer relative z-20"
                        style={{ backgroundColor: item.decorationColor }}
                      >
                        <span className="text-lg w-20 text-center bg-white rounded-full font-bold text-[#2c3e50] mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{item.institution}</p>
                        <p className="text-sm text-gray-700 flex-grow">{item.description}</p>
                      </motion.div>
                    </div>
                  ))}
                  
                  <div className="inline-block h-full w-[calc(50vw-240px)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Versión Móvil - Vertical */}
          <div className="lg:hidden">
            <div className="relative flex justify-center">
              {/* Línea de tiempo vertical (centrada pero desplazada a la izquierda) */}
              <div className="absolute left-[calc(50%-80px)] top-0 h-full w-1 bg-gray-300 z-0">
                <div 
                  className="w-full bg-[#48E7FF] transition-all duration-300"
                  style={{ height: `${scrollProgress}%` }}
                />
              </div>

              {/* Contenedor de tarjetas vertical (centrado) */}
              <div className="relative w-70 z-10 space-y-8  sm:w-full px-4">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 mx-auto"
                    style={{ 
                      backgroundColor: item.decorationColor,
                      width: '100%' // Tamaño de las cards en móvil (ocuparán el ancho disponible menos el padding)
                    }}
                  >
                    <span className="text-lg w-20 text-center bg-white rounded-full font-bold text-[#2c3e50] mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{item.institution}</p>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed social media icons at bottom center */}
<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-[100] sm:left-30">
  <a 
    href="https://github.com/cristhianDavidOrbes" 
    target="_blank" 
    rel="noopener noreferrer"
    title="GitHub"
    className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] group"
  >
    <FaGithub className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#333] group-hover:text-white" />
    <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0" />
  </a>

  <a 
    href="https://www.facebook.com/profile.php?id=61566351822469" 
    target="_blank" 
    rel="noopener noreferrer"
    title="Facebook"
    className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] group"
  >
    <FaFacebookF className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#3b5998] group-hover:text-white" />
    <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0" />
  </a>

  <a 
    href="https://wa.me/573027515644" 
    target="_blank" 
    rel="noopener noreferrer"
    title="WhatsApp"
    className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] group"
  >
    <FaWhatsapp className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#25d366] group-hover:text-white" />
    <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0" />
  </a>
</nav>

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
        
        /* Ocultar scrollbar pero mantener funcionalidad */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}