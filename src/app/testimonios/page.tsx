"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { FaGithub, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Testimonios() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const testimonios = [
    {
      nombre: "Miguel Felipe Ceballos Ramirez",
      opinion: "El ingeniero orbes es una gran persona que busca la ayuda hacia los demás sin buscar algo a cambio, un gran profesional el cual ayuda a su círculo en diferentes problemas que tengan que ver con la ingeniería de software, un profesional muy completo el cual sabe exactamente lo necesario para resolver cualquier duda",
      imagen: "/testimonio1.png"
    },
    {
      nombre: "Johan Steven Muñoz Enriquez",
      opinion: "Yo recomiendo al joven Cristian orbes, porque gracias a el he aprendido muchas cosas que me han servido para aprender sobre la ingeniería, me ha ayudado de manera increíble para aprender mucho sobre diferentes temas que en un principio no conocía pero gracias a el los tengo claros, lo recomiendo mucho y de igual forma le agradezco mucho por toda la ayuda que me ha brindado a lo largo de este tiempo",
      imagen: "/testimonio2.png"
    },
    {
      nombre: "samuel vallejo rodriges",
      opinion: "Cristian orbes ha sido una persona que me ha enseñado nuevas cosas y que me ha ayudado a comprender los temas de programación de una forma más sencilla, es una buena persona y alguien con el que puedo tener un apoyo en cualquier momento porque siempre va a estar disponible para ayudar a los demás, yo lo recomiendo mucho aparte porque tiene muchos conocimientos en distintas áreas y que domina muy bien los temas",
      imagen: "/testimonio3.png"
    }
  ];

  const formas = [
    "rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%]",
    "rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%]",
    "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
  ];

  return (
    <>
      <Head>
        <title>Cristhian David - Testimonios</title>
        <meta name="description" content="Testimonios sobre Cristhian David, Ingeniero de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <section className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]" />
      <section className="fixed w-[300px] h-[300px] rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%] bg-gradient-to-br from-[rgba(52,152,219,0.3)] to-[rgba(41,128,185,0.1)] top-[-50px] right-[-100px] animate-float z-[-1]" />
      <section className="fixed w-[200px] h-[200px] rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%] bg-gradient-to-tr from-[rgba(41,128,185,0.2)] to-[rgba(52,152,219,0.05)] bottom-[50px] left-[-50px] animate-float animation-direction-reverse animation-duration-10s z-[-1]" />
      <section className="fixed w-[150px] h-[150px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-[rgba(46,204,113,0.2)] to-[rgba(39,174,96,0.05)] top-[40%] left-[20%] animate-float animation-duration-12s z-[-1]" />
      <section className="fixed w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(231,76,60,0.15)] to-[rgba(192,57,43,0.05)] top-[30%] right-[20%] animate-float animation-duration-6s z-[-1]" />
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] top-[10%] right-[5%]" />
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] bottom-[10%] left-[5%]" />


      <nav className="flex justify-between w-full items-center p-4 px-8 bg-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
        <Link href="/" className="text-2xl font-bold text-[#3498db] relative z-[1] no-underline">
          cris<span className="text-[#2c3e50] font-normal">Developer</span>
          <span className="absolute w-full h-2 bottom-[2px] left-0 bg-[rgba(52,152,219,0.2)] z-[-1]" />
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
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>


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
                <div className="w-64 bg-gray-200 h-0.5 absolute top-20" />
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

      <main>
        <motion.section
          key="testimonios-header"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed right-0 top-22 w-[250px] h-[50px] items-start bg-white flex rounded-s-4xl shadow-md z-[20]"
          style={{ boxShadow: 'inset 0 -8px 8px rgba(0, 149, 255, 0.2)' }}
        >
          <h1 className="ml-6 mt-2 text-2xl text-[#0A1B58]">Testimonios</h1>
        </motion.section>


        <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {/* Contenedor de forma irregular con imagen */}
                  <div className={`w-64 h-64 ${formas[index]} bg-gradient-to-br from-[rgb(255,255,255)] to-[rgb(255,255,255)] relative overflow-hidden shadow-lg mb-6 animate-float`}
                       style={{ animationDuration: `${8 + index * 2}s` }}>
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <div className="relative w-full h-full">
                        <Image 
                          src={testimonio.imagen} 
                          alt={testimonio.nombre}
                          fill
                          className="object-cover rounded-inherit"
                          style={{
                            borderRadius: 'inherit'
                          }}
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+PC9zdmc+"
                        />
                      </div>
                    </div>
                  </div>
                  
          
                  <div className="text-center max-w-xs">
                    <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{testimonio.nombre}</h3>
                    <p className="text-gray-700 italic">&quot;{testimonio.opinion}&quot;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Fixed social media icons at bottom center */}
<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-[100] sm:left-10">
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
    </>
  );
}