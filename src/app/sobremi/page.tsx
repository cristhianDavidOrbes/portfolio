"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Sobremi() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileSticky, setIsMobileSticky] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const basketballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowTitle(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 100);
      }

      if (basketballRef.current && window.innerWidth < 768) {
        const scrollPosition = window.scrollY;
        const triggerPosition = 200;
        setIsMobileSticky(scrollPosition > triggerPosition);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      setShowTitle(false);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cristhian David - Sobre mí</title>
        <meta name="description" content="Información sobre Cristhian David, Ingeniero de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background elements with original positions and animations */}
      <section className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]"></section>
      <section className="absolute w-[300px] h-[300px] rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%] bg-gradient-to-br from-[rgba(52,152,219,0.3)] to-[rgba(41,128,185,0.1)] top-[-50px] left-[-100px] animate-float z-[-1]"></section>
      <section className="absolute w-[200px] h-[200px] rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%] bg-gradient-to-tr from-[rgba(41,128,185,0.2)] to-[rgba(52,152,219,0.05)] bottom-[50px] left-[-50px] animate-float animation-direction-reverse animation-duration-10s z-[-1] block md:hidden"></section>      
      <section className="absolute w-[150px] h-[150px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-[rgba(46,204,113,0.2)] to-[rgba(39,174,96,0.05)] top-[40%] left-[20%] animate-float animation-duration-12s z-[-1] block md:hidden"></section>
      <section className="absolute w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(231,76,60,0.15)] to-[rgba(192,57,43,0.05)] top-[200px] animate-float animation-duration-6s z-[-1] left-[270px] sm:left-340"></section>
      <section className="absolute w-[300px] h-[200px] rotate-[20deg] bg-[radial-gradient(circle,#444_3px,transparent_3px)] bg-[length:15px_15px] opacity-10 z-[-1] top-[100px] left-[-20px]"></section>
      <section className="absolute w-[300px] h-[200px] bg-[radial-gradient(circle,#444_3px,transparent_3px)] rounded-4xl bg-[length:15px_15px] opacity-10 z-[-1] top-[500] left-[70px] sm:left-100"></section>

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

      {mobileMenuOpen && (
        <aside 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[105] transition-opacity duration-300 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></aside>
      )}

      <aside 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg rounded-tl-4xl transform transition-transform duration-300 ease-in-out z-[110] lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
      </aside>

      <figure className="fixed w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-[0_3px_10px_rgba(0,0,0,0.1)] top-23 left-4 z-[10]">
        <FaInfoCircle className="text-[#3498db] text-2xl" />
      </figure>

      <main className="relative pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <section 
          ref={basketballRef}
          className={`${isMobileSticky ? 'fixed' : 'absolute'} adsolute xl:fixed md:adsolute top-40 right-0 z-[5] w-40 h-auto md:w-40 transition-all duration-300 ${isMobileSticky ? 'animate-fadeIn scale-90' : ''}`}
        >
          <Image
            src="/basketball1.png"
            alt="Baloncesto"
            width={400}
            height={250}
            className="w-full h-full object-contain"
            priority
          />
        </section>

        <AnimatePresence>
          {showTitle && pathname === '/sobremi' && (
            <motion.section
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed right-0 top-22 w-[250px] h-[50px] items-start bg-white flex rounded-s-4xl shadow-md z-[20]"
              style={{ boxShadow: 'inset 0 -8px 8px rgba(0, 149, 255, 0.2)' }}
            >
              <h1 className="ml-6 mt-2 text-2xl text-[#0A1B58]">Sobre mi</h1>
            </motion.section>
          )}
        </AnimatePresence>

        <article className="flex flex-col md:flex-row gap-8 items-start mt-8 md:mt-0 w-full">
          <figure className="w-full md:w-auto md:flex-shrink-0 md:mr-8">
            <section className="w-64 h-[400px] bg-white rounded-xl mx-auto md:mx-0">
              <Image
                src="/prueba1.png"
                alt="Mi rostro"
                width={400}
                height={250}
                className="w-full h-full object-cover"
                priority
              />
            </section>
          </figure>

          <section className="flex-1 text-[#34495e] text-lg space-y-6 w-full">
            <p>
              Soy estudiante de quinto semestre de ingeniería de Software, con experiencia en Python, Java, JavaScript y Arduino. Actualmente, estoy aprendiendo C++ para fortalecer mis conocimientos en programación a bajo nivel. Me apasiona la tecnología y disfruto crear soluciones que combinen software y hardware.
            </p>
            
            <p>
              Fuera del ámbito académico, me gusta mantenerme activo: juego baloncesto con frecuencia y en mi tiempo libre practico guitarra, lo que me ayuda a desarrollar disciplina y creatividad.
            </p>
            
            <p>
              Soy una persona curiosa, siempre interesada en descubrir cómo funcionan las cosas. Esa curiosidad me motiva a asumir retos más allá del aula. Me gusta salir de mi zona de confort y aprender de nuevas experiencias.
            </p>
            
            <section 
              ref={stickyRef}
              className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 ${
                isSticky ? 'fixed top-20 left-1/2 transform -translate-x-1/2 w-3/4 z-50' : 'relative'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-5xl text-center items-center">
                <figure className="flex flex-col items-center">
                  <span className="text-6xl">🏀</span>
                  <figcaption className="mt-2 text-sm text-gray-600">Baloncesto</figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                  <span className="text-6xl">🚴‍♂️</span>
                  <figcaption className="mt-2 text-sm text-gray-600">Ciclismo</figcaption>
                </figure>
                <figure className="flex flex-col items-center col-span-2 md:col-span-1">
                  <span className="text-6xl">🎸</span>
                  <figcaption className="mt-2 text-sm text-gray-600">Guitarra</figcaption>
                </figure>
              </div>
            </section>
          </section>
        </article>
      </main>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-[2] sm:left-30">
        <a 
          href="#" 
          title="GitHub"
          className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] group"
        >
          <FaGithub className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#333] group-hover:text-white" />
          <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0"></span>
        </a>

        <a 
          href="#" 
          title="Facebook"
          className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] group"
        >
          <FaFacebookF className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#3b5998] group-hover:text-white" />
          <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0"></span>
        </a>

        <a 
          href="#" 
          title="WhatsApp"
          className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] group"
        >
          <FaWhatsapp className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#25d366] group-hover:text-white" />
          <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0"></span>
        </a>
      </nav>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
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