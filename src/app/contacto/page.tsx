"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaBars, FaTimes, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function Contacto() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const redesSociales = [
    { icon: <FaGithub className="text-2xl" />, nombre: "GitHub", url: "#" },
    { icon: <FaFacebookF className="text-2xl" />, nombre: "Facebook", url: "#" },
    { icon: <FaWhatsapp className="text-2xl" />, nombre: "WhatsApp", url: "#" }
  ];

  return (
    <>
      <Head>
        <title>Cristhian David - Contacto</title>
        <meta name="description" content="Información de contacto de Cristhian David" />
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
            <h1 className="ml-6 mt-2 text-2xl text-[#0A1B58]">Contacto</h1>
          </motion.section>
        </AnimatePresence>

        {/* Sección de Contacto */}
        <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Columna izquierda - Contacto social + Mapa */}
            <div className="space-y-8">
              {/* Contacto social */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Conectemos</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                  {redesSociales.map((red, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      href={red.url}
                      className="w-16 h-16 rounded-full bg-[#3498db] text-white flex flex-col items-center justify-center shadow-md"
                    >
                      {red.icon}
                      <span className="text-xs mt-1">{red.nombre}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Mapa */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-64 md:h-80 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.800708234131!2d-77.28183792571147!3d1.208746398719251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed3e8a0e5a9a5%3A0x3a95a7c8d8d8d8d8!2sPasto%2C%20Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Mapa de Pasto, Nariño"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            {/* Columna derecha - Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 h-fit"
            >
              <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Información de contacto</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-[#3498db] text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#34495e]">Dirección</h3>
                    <p className="text-gray-700">Torres de Mariluz Etapa 1</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-[#3498db] text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#34495e]">Email</h3>
                    <p className="text-gray-700">cristiandavidl1232@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-[#3498db] text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#34495e]">Teléfono</h3>
                    <p className="text-gray-700">+57 302 751 5644</p>
                  </div>
                </li>
              </ul>
            </motion.div>
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