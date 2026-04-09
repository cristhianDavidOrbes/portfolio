"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaVolumeUp, FaVolumeMute, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
 
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  

  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowChallengeModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWhoAmIClick = () => {
    setVideoEnded(false);
    setTimeout(() => {
      setShowVideo(true);
      videoRef.current?.play().catch(console.error);
    }, 500);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Control del video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.disablePictureInPicture = true;

    const handleEnded = () => {
      setShowVideo(false);
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <>
      <Head>
        <title>Cristhian David - Ingeniero de Software</title>
        <meta name="description" content="Portfolio profesional de Cristhian David" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <div aria-hidden="true" className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]" />
      <div aria-hidden="true" className="fixed w-[300px] h-[300px] rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%] bg-gradient-to-br from-[rgba(52,152,219,0.3)] to-[rgba(41,128,185,0.1)] top-[-50px] right-[-100px] animate-float z-[-1]" />
      <div aria-hidden="true" className="fixed w-[200px] h-[200px] rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%] bg-gradient-to-tr from-[rgba(41,128,185,0.2)] to-[rgba(52,152,219,0.05)] bottom-[50px] left-[-50px] animate-float animation-direction-reverse animation-duration-10s z-[-1]" />
      <div aria-hidden="true" className="fixed w-[200px] h-[200px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-[rgba(46,204,113,0.2)] to-[rgba(39,174,96,0.05)] top-[40%] left-[20%] animate-float animation-duration-12s z-[-1]" />
      <div aria-hidden="true" className="fixed w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(231,76,60,0.15)] to-[rgba(192,57,43,0.05)] top-[30%] right-[20%] animate-float animation-duration-6s z-[-1]" />
      <div aria-hidden="true" className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] top-[10%] right-[5%]" />
      <div aria-hidden="true" className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] bottom-[10%] left-[5%]" />

    
      <nav
        aria-label="Navegación principal"
        className="flex justify-between w-full items-center p-4 px-8 bg-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-[100]"
      >
        <Link href="/" className="text-2xl font-bold text-[#3498db] relative z-[1] no-underline">
          cris<span className="text-[#2c3e50] font-normal">Developer</span>
          <span className="absolute w-full h-2 bottom-[2px] left-0 bg-[rgba(52,152,219,0.2)] z-[-1]" />
        </Link>
        
        <ul className="hidden lg:flex gap-2" role="list">
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
        </ul>
        
        <button 
          type="button"
          className="lg:hidden text-[#34495e] text-2xl z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
          aria-expanded={mobileMenuOpen}
          aria-controls="menu-movil-principal"
        >
          {mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>


      {mobileMenuOpen && (
        <aside 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[105] transition-opacity duration-300 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside 
        id="menu-movil-principal"
        aria-label="Menú móvil principal"
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg rounded-tl-4xl transform transition-transform duration-300 ease-in-out z-[110] lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-10 relative">
          <div className="w-64 bg-gray-200 h-0.5 absolute top-20" aria-hidden="true" />
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#3498db] pl-4 mb-4">cris<span className='text-[#2c3e50]'>Developer</span></h2>
          </div>
          
          <ul className="space-y-4">
            {['casa', 'sobre mi', 'Habilidades', 'Proyectos', 'Educacion', 'Testimonios', 'Contacto'].map((item) => {
              const path = item.toLowerCase().replace(/\s+/g, '');
              const href = path === 'casa' ? '/' : `/${path}`;
              return (
                <li key={item}>
                  <Link
                    href={href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="block text-[#34495e] whitespace-nowrap no-underline font-medium transition-all duration-300 py-2 px-4 pl-10 hover:bg-[#3498db]/10 hover:text-[#3498db]"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Botón de activación del modo desafío */}
      <button
        type="button"
        className="fixed w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-[0_3px_10px_rgba(0,0,0,0.1)] top-28 left-4 z-[10] cursor-pointer hover:scale-110 transition-transform"
        onClick={() => setShowChallengeModal(true)}
        aria-label="Información del modo desafío"
        title="Información del modo desafío"
      >
        <FaInfoCircle aria-hidden="true" className="text-2xl text-[#3498db]" />
      </button>

      {/* Modal del modo desafío */}
      {showChallengeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-desafio"
            aria-describedby="descripcion-modal-desafio"
            className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-md animate-scale-in"
          >
            <div className="bg-gradient-to-r from-[#3498db] to-[#4fa3e0] p-6 text-white">
              <h3 id="titulo-modal-desafio" className="text-2xl font-bold">Modo Desafío</h3>
              <p className="mt-1 opacity-90">
                Esta función está en pausa para priorizar la navegación accesible.
              </p>
            </div>
            
            <div className="p-6">
              <p id="descripcion-modal-desafio" className="text-gray-600 mb-6">
                Todas las secciones del menú superior se encuentran habilitadas.
              </p>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowChallengeModal(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      <main id="contenido-principal" tabIndex={-1} className="relative p-10 sm:pt-25 pt-5">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto p-8 relative z-10">
          <section className="flex flex-col md:flex-row items-center justify-between w-full mt-8 relative">
            <header className="flex-col pr-0 md:pr-8 mb-12 md:mb-0 relative z-[2] text-center md:text-left">
              <p className="text-[#0067B8] text-xl mb-2 font-medium tracking-[1px] relative inline-block">
                hola, soy Cristhian David
                <span className="absolute w-10 h-[2px] bg-[#0067B8] bottom-[-5px] left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 md:translate-x-0" />
              </p>
              <h1 className="text-4xl md:text-6xl whitespace-nowrap lg:text-7xl font-bold mb-6 text-[#2c3e50] leading-tight relative">
                ingeniero<br />de <span className="text-[#0067B8] relative inline-block">software</span>
              </h1>
              <button
                type="button"
                onClick={handleWhoAmIClick}
                aria-controls="video-presentacion"
                aria-expanded={showVideo}
                disabled={showVideo && !videoEnded}
                className="inline-flex items-center justify-center py-3 px-8 bg-[#0b67b3] text-white rounded-full no-underline font-medium transition-all duration-300 border-none cursor-pointer shadow-[0_5px_15px_rgba(52,152,219,0.4)] relative overflow-hidden group hover:bg-[#095799] hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(52,152,219,0.5)] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_5px_15px_rgba(52,152,219,0.4)]"
              >
                <span className="relative z-10">¿quién soy?</span>
                {!(showVideo && !videoEnded) && (
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]"
                  />
                )}
              </button>
            </header>
            
          
            <div 
              ref={mediaContainerRef}
              className={`relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-3xl bg-white overflow-hidden shadow-xl transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'
              }`}
            >
              <figure 
                ref={imageRef}
                className={`absolute inset-0 ${showVideo ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/prueba1.png"
                    alt="Fotografía de Cristhian David"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                  />
                </div>
              </figure>
              
              <figure className={`absolute inset-0 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
                <video
                  id="video-presentacion"
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  controls={showVideo}
                  preload="auto"
                  onContextMenu={(e) => e.preventDefault()}
                  muted={isMuted}
                  aria-describedby="descripcion-video-presentacion"
                >
                  <source src="/presentation-video.mp4" type="video/mp4" />
                  <track
                    kind="captions"
                    srcLang="es"
                    src="/presentation-video.es.vtt"
                    label="Español"
                    default
                  />
                  Tu navegador no soporta el elemento de video.
                </video>
                <p id="descripcion-video-presentacion" className="sr-only">
                  Video de presentación personal con subtítulos en español.
                </p>

                {showVideo && (
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted ? (
                      <FaVolumeMute aria-hidden="true" className="text-lg" />
                    ) : (
                      <FaVolumeUp aria-hidden="true" className="text-lg" />
                    )}
                  </button>
                )}
              </figure>
            </div>
          </section>
        </div>
      </main>

<nav aria-label="Redes sociales" className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-[100] sm:left-30">
  <a 
    href="https://github.com/cristhianDavidOrbes" 
    target="_blank" 
    rel="noopener noreferrer"
    title="GitHub"
    aria-label="Abrir perfil de GitHub en una pestana nueva"
    className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] hover:bg-[#1f2937] hover:border-[#1f2937] group"
  >
    <FaGithub aria-hidden="true" className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#1f2937] group-hover:text-white" />
  </a>

  <a 
    href="https://www.facebook.com/profile.php?id=61566351822469" 
    target="_blank" 
    rel="noopener noreferrer"
    title="Facebook"
    aria-label="Abrir perfil de Facebook en una pestana nueva"
    className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] hover:bg-[#1456B8] hover:border-[#1456B8] group"
  >
    <FaFacebookF aria-hidden="true" className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#3b5998] group-hover:text-white" />
  </a>

  <a 
    href="https://wa.me/573027515644" 
    target="_blank" 
    rel="noopener noreferrer"
    title="WhatsApp"
    aria-label="Abrir chat de WhatsApp en una pestana nueva"
    className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex justify-center items-center relative overflow-hidden hover:-translate-y-[5px] hover:rotate-[5deg] hover:shadow-[0_8px_20px_rgba(52,152,219,0.3)] hover:bg-[#0D7A40] hover:border-[#0D7A40] group"
  >
    <FaWhatsapp aria-hidden="true" className="w-[22px] h-[22px] relative z-[1] transition-all duration-300 text-[#0D7A40] group-hover:text-white" />
  </a>
</nav>

      {/* Animaciones CSS */}
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
        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}

