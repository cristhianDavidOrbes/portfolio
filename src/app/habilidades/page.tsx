"use client";

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  decorationColor?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  description, 
  icon, 
  decorationColor = "#90CAF9"
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative flex flex-col w-70 h-120">
      <div 
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -z-0 opacity-70" 
        style={{ backgroundColor: decorationColor }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-4 flex justify-center">
          <Image
            src={icon}
            alt={title}
            width={128}
            height={128}
            className="w-32 h-32 object-contain"
            priority
          />
        </div>
        <h3 className="text-xl font-bold text-[#2c3e50] mb-3 text-center">
          {title}
        </h3>
        <p className="text-[#34495e] mb-4 text-center flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Habilidades() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      title: "Desarrollo Frontend",
      description: "Experiencia en HTML, CSS, JavaScript, TypeScript, Tailwind CSS y Next.js para crear interfaces modernas y funcionales.",
      icon: "/computador.png",
      decorationColor: "#BBF0FF"
    },
    {
      title: "Lenguajes de Programación",
      description: "Conocimientos en Python, Java, C y Arduino. Actualmente aprendiendo C++ para fortalecer mi lógica de programación.",
      icon: "/arduino.png",
      decorationColor: "#94D1FF"
    },
    {
      title: "Habilidades Complementarias",
      description: "Habilidad en resolución de problemas, trabajo en equipo y uso de herramientas como Git y GitHub para gestión de proyectos.",
      icon: "/compresion.png",
      decorationColor: "#78FBEB"
    }
  ];

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Head>
        <title>Cristhian David - Habilidades</title>
        <meta name="description" content="Habilidades de Cristhian David, Ingeniero de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background elements */}
      <section className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]" />
      {/* ... (resto de elementos de fondo iguales) */}

      {/* Navigation */}
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

      {/* Main content */}
      <main>
        <motion.section
          key="habilidades-header"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed right-0 top-22 w-[250px] h-[50px] items-start bg-white flex rounded-s-4xl shadow-md z-[20]"
          style={{ boxShadow: 'inset 0 -8px 8px rgba(0, 149, 255, 0.2)' }}
        >
          <h1 className="ml-6 mt-2 text-2xl text-[#0A1B58]">Habilidades</h1>
        </motion.section>

        {/* Skills Cards Section */}
        <section className="pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 justify-items-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Social media links */}
      <motion.nav 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="fixed bottom-4 left-1/2 md:left-30 transform -translate-x-1/2 flex gap-5 z-[100]"
      >
        {[
          { icon: FaGithub, href: "#", title: "GitHub" },
          { icon: FaFacebookF, href: "#", title: "Facebook" },
          { icon: FaWhatsapp, href: "#", title: "WhatsApp" }
        ].map((social, index) => (
          <motion.a 
            key={index}
            whileHover={{ y: -5, rotate: 5 }}
            href={social.href}
            title={social.title}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden group"
          >
            <social.icon className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#333] group-hover:text-white" />
            <span className="absolute w-full h-full bg-gradient-to-r from-[#3498db] to-[#4fa3e0] top-full left-0 transition-all duration-500 z-[-1] group-hover:top-0" />
          </motion.a>
        ))}
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
      `}</style>
    </>
  );
}