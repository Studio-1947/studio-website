import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TalkToUsModal from './TalkToUsModal';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Initiatives', href: '/initiative' },
  { name: 'Products & Services', href: '/products-and-services' },
];

const linkStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: 'normal',
};

export default function Navbar() {
  const location = useLocation();
  const isHomepage = location.pathname === '/' || location.pathname === '/v2';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenModal = () => setModalOpen(true);
    window.addEventListener('open-talk-modal', handleOpenModal);
    return () => window.removeEventListener('open-talk-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    setModalOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-10 left-0 right-0 z-50 hidden lg:flex justify-center px-4"
      >
        <motion.div
          animate={
            scrolled
              ? {
                  background: '#FFF7F7',
                  boxShadow: '0 0 14px 3px rgba(174, 59, 59, 0.10), inset 0 0 0 1px rgba(174, 59, 59, 0.10)',
                  borderRadius: '50px',
                  paddingLeft: '20px',
                  paddingRight: '36px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  minHeight: '60px',
                  minWidth: '75vw',
                }
              : {
                  background: 'rgba(255, 247, 247, 0.78)',
                  boxShadow: '0 1px 10px rgba(174, 59, 59, 0.07), inset 0 0 0 1.5px rgba(174, 59, 59, 0.18)',
                  borderRadius: '50px',
                  paddingLeft: '32px',
                  paddingRight: '36px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  minHeight: '60px',
                  minWidth: 0,
                }
          }
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex items-center"
        >
          {/* Logo / Home Link — slides in from the left */}
          <AnimatePresence mode="popLayout">
            {scrolled ? (
              <motion.div
                key="logo"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Link to="/">
                  <motion.img
                    src="/studio_nav_logo.svg"
                    alt="Studio 1947"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    className="h-10 w-auto"
                  />
                </Link>
              </motion.div>
            ) : (
              !isHomepage && (
                <motion.div
                  key="home"
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="pr-[56px]"
                >
                  <Link
                    to="/"
                    style={linkStyle}
                    className="whitespace-nowrap transition-colors duration-200 text-[#8C8484] hover:text-[#D80000]"
                  >
                    Home
                  </Link>
                </motion.div>
              )
            )}
          </AnimatePresence>

          {/* Links */}
          <motion.div
            layout
            animate={{ gap: scrolled ? '32px' : '56px' }}
            transition={{ duration: 0.4, ease: 'easeInOut', layout: { duration: 0.4, ease: 'easeInOut' } }}
            className={`flex items-center ${scrolled ? 'ml-auto' : ''}`}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === link.href ||
                (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  style={{ ...linkStyle, color: isActive ? '#D80000' : '#8C8484' }}
                  className={`whitespace-nowrap transition-colors duration-200 hover:text-primary ${
                    isActive ? 'underline decoration-2 underline-offset-8' : ''
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => setModalOpen(true)}
              style={{ ...linkStyle, color: '#8C8484' }}
              className="transition-colors duration-200 hover:text-primary"
            >
              Say Hello
            </button>
          </motion.div>
        </motion.div>
      </nav>

      {/* ── Mobile nav ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
      >
        <motion.div
          animate={
            scrolled
              ? { background: '#FFF7F7', boxShadow: '0 0 14px 3px rgba(174, 59, 59, 0.10)' }
              : { background: 'rgba(255, 247, 247, 0.78)', boxShadow: '0 1px 10px rgba(174, 59, 59, 0.07)' }
          }
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex items-center justify-between px-5 py-4"
        >
          <AnimatePresence mode="popLayout">
            {scrolled ? (
              <motion.div
                key="logo"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Link to="/">
                  <motion.img
                    src="/studio_nav_logo.svg"
                    alt="Studio 1947"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    className="h-8 w-auto"
                  />
                </Link>
              </motion.div>
            ) : (
              <div key="placeholder" className="h-8" />
            )}
          </AnimatePresence>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-[#383649] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[1.5px] bg-[#383649]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-[#383649] origin-center"
            />
          </button>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col items-center justify-center px-8 pb-8 pt-4 gap-6"
              style={{ background: '#FFF7F7', boxShadow: '0 8px 24px rgba(174, 59, 59, 0.10)' }}
            >
              <Link
                to="/"
                style={{ ...linkStyle, fontSize: '18px', color: isHomepage ? '#D80000' : '#8C8484' }}
                className={`transition-colors duration-200 text-center ${
                  isHomepage ? 'underline decoration-2 underline-offset-8' : ''
                }`}
              >
                Home
              </Link>
              {NAV_LINKS.map((link) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.href !== '/' && location.pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    style={{ ...linkStyle, fontSize: '18px', color: isActive ? '#D80000' : '#8C8484' }}
                    className={`transition-colors duration-200 text-center ${
                      isActive ? 'underline decoration-2 underline-offset-8' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                style={{ ...linkStyle, fontSize: '18px', color: '#8C8484' }}
                className="text-center transition-colors duration-200"
              >
                Say Hello
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <TalkToUsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
