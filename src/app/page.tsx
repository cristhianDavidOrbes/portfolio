"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { FaInfoCircle, FaGithub, FaFacebookF, FaWhatsapp, FaVolumeUp, FaVolumeMute, FaBars, FaTimes, FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
 
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [challengeMode, setChallengeMode] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  

  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

 
  const isPageLocked = (path: string) => {
    return challengeMode && !['casa', 'sobremi'].includes(path);
  };


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

  const toggleChallengeMode = () => {
    setChallengeMode(prev => !prev);
    setShowChallengeModal(false);
  };

  const handleLockedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowChallengeModal(true);
  };

  // Control del video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

  
      <section className="fixed inset-0 bg-gradient-to-br from-[#EBF8FF] to-[#e6f7ff] z-[-2]" />
      <section className="fixed w-[300px] h-[300px] rounded-[53%_47%_52%_48%_/_36%_41%_59%_64%] bg-gradient-to-br from-[rgba(52,152,219,0.3)] to-[rgba(41,128,185,0.1)] top-[-50px] right-[-100px] animate-float z-[-1]" />
      <section className="fixed w-[200px] h-[200px] rounded-[30%_70%_70%_30%_/_30%_52%_48%_70%] bg-gradient-to-tr from-[rgba(41,128,185,0.2)] to-[rgba(52,152,219,0.05)] bottom-[50px] left-[-50px] animate-float animation-direction-reverse animation-duration-10s z-[-1]" />
      <section className="fixed w-[200px] h-[200px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-[rgba(46,204,113,0.2)] to-[rgba(39,174,96,0.05)] top-[40%] left-[20%] animate-float animation-duration-12s z-[-1]" />
      <section className="fixed w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(231,76,60,0.15)] to-[rgba(192,57,43,0.05)] top-[30%] right-[20%] animate-float animation-duration-6s z-[-1]" />
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] top-[10%] right-[5%]" />
      <section className="fixed w-[200px] h-[200px] bg-[radial-gradient(circle,#444_1px,transparent_1px)] bg-[length:15px_15px] opacity-10 z-[-1] bottom-[10%] left-[5%]" />

    
      <nav className="flex justify-between w-full items-center p-4 px-8 bg-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
        <a href="#" className="text-2xl font-bold text-[#3498db] relative z-[1] no-underline">
          cris<span className="text-[#2c3e50] font-normal">Developer</span>
          <span className="absolute w-full h-2 bottom-[2px] left-0 bg-[rgba(52,152,219,0.2)] z-[-1]" />
        </a>
        
        <menu className="hidden lg:flex gap-2">
          {['casa', 'sobre mi', 'Habilidades', 'Proyectos', 'Educacion', 'Testimonios', 'Contacto'].map((item) => {
            const path = item.toLowerCase().replace(/\s+/g, '');
            const href = path === 'casa' ? '/' : `/${path}`;
            const locked = isPageLocked(path);
            
            return (
              <li key={item}>
                <Link
                  href={href}
                  onClick={(e) => locked && handleLockedClick(e)}
                  className={`text-[#34495e] whitespace-nowrap no-underline font-medium transition-all duration-300 py-2 px-4 rounded-full ${
                    locked 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:text-white hover:bg-[#3498db] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(52,152,219,0.3)]'
                  }`}
                >
                  {item}
                  {locked && <FaLock className="ml-1 inline-block text-xs" />}
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
        />
      )}

      <aside 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg rounded-tl-4xl transform transition-transform duration-300 ease-in-out z-[110] lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <section className="pt-10 relative">
          <menu className="w-64 bg-gray-200 h-0.5 absolute top-20" />
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#3498db] pl-4 mb-4">cris<span className='text-[#2c3e50]'>Developer</span></h2>
          </section>
          
          <ul className="space-y-4">
            {['casa', 'sobre mi', 'Habilidades', 'Proyectos', 'Educacion', 'Testimonios', 'Contacto'].map((item) => {
              const path = item.toLowerCase().replace(/\s+/g, '');
              const href = path === 'casa' ? '/' : `/${path}`;
              const locked = isPageLocked(path);
              
              return (
                <li key={item}>
                  <Link
                    href={href}
                    onClick={(e) => {
                      if (locked) {
                        e.preventDefault();
                        handleLockedClick(e);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-[#34495e] whitespace-nowrap no-underline font-medium transition-all duration-300 py-2 px-4 pl-10 ${
                      locked 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-[#3498db]/10 hover:text-[#3498db]'
                    }`}
                  >
                    {item}
                    {locked && <FaLock className="ml-2 inline-block text-xs" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>

      {/* Botón de activación del modo desafío */}
      <figure 
        className="fixed w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-[0_3px_10px_rgba(0,0,0,0.1)] top-28 left-4 z-[10] cursor-pointer hover:scale-110 transition-transform"
        onClick={() => setShowChallengeModal(true)}
        title={challengeMode ? "Modo desafío activado" : "Modo desafío desactivado"}
      >
        <FaInfoCircle className={`text-2xl ${challengeMode ? 'text-red-500' : 'text-[#3498db]'}`} />
      </figure>

      {/* Modal del modo desafío */}
      {showChallengeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-md animate-scale-in"
          >
            <div className="bg-gradient-to-r from-[#3498db] to-[#4fa3e0] p-6 text-white">
              <h3 className="text-2xl font-bold">Modo Desafío</h3>
              <p className="mt-1 opacity-90">
                {challengeMode 
                  ? "Actualmente activado - ¿Quieres desactivarlo?" 
                  : "¿Activar el modo desafío?"}
              </p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                {challengeMode 
                  ? "Al desactivarlo, todas las secciones estarán disponibles sin restricciones."
                  : "Al activarlo, solo podrás acceder a 'Casa' y 'Sobre mí'. Las demás secciones requerirán completar desafíos."}
              </p>
              
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowChallengeModal(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={toggleChallengeMode}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    challengeMode
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-[#3498db] hover:bg-[#2980b9] text-white'
                  }`}
                >
                  {challengeMode ? 'Desactivar' : 'Activar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      <main className="relative p-10 sm:pt-25 pt-5">
        <article className="flex flex-col items-center max-w-[1200px] mx-auto p-8 relative z-10">
          <section className="flex flex-col md:flex-row items-center justify-between w-full mt-8 relative">
            <header className="flex-col pr-0 md:pr-8 mb-12 md:mb-0 relative z-[2] text-center md:text-left">
              <p className="text-[#3498db] text-xl mb-2 font-medium tracking-[1px] relative inline-block">
                hola, soy Cristhian David
                <span className="absolute w-10 h-[2px] bg-[#3498db] bottom-[-5px] left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 md:translate-x-0" />
              </p>
              <h1 className="text-4xl md:text-6xl whitespace-nowrap lg:text-7xl font-bold mb-6 text-[#2c3e50] leading-tight relative">
                ingeniero<br />de <span className="text-[#3498db] relative inline-block">software</span>
              </h1>
              <button 
                onClick={handleWhoAmIClick}
                disabled={showVideo && !videoEnded}
                className={`inline-block py-3 px-8 ${
                  showVideo && !videoEnded 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#3498db] to-[#4fa3e0] hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(52,152,219,0.5)]'
                } text-white rounded-full no-underline font-medium transition-all duration-300 border-none cursor-pointer shadow-[0_5px_15px_rgba(52,152,219,0.4)] relative overflow-hidden group`}
              >
                ¿quién soy?
                {!(showVideo && !videoEnded) && (
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]" />
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
                    alt="Mi rostro"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                  />
                </div>
              </figure>
              
              <figure className={`absolute inset-0 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  preload="auto"
                  onContextMenu={(e) => e.preventDefault()}
                  muted={isMuted}
                >
                  <source src="/presentation-video.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>

                {showVideo && (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted ? (
                      <FaVolumeMute className="text-lg" />
                    ) : (
                      <FaVolumeUp className="text-lg" />
                    )}
                  </button>
                )}
              </figure>
            </div>
          </section>
        </article>
      </main>

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