

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  /* ---------------- Scroll Effect ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------------- Body Scroll Lock ---------------- */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isMobileMenuOpen]);

  /* ---------------- ESC Close ---------------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/#home' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: isHomePage ? '#experience' : '/#experience' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const renderLink = (link, onClick) => {
    if (link.href.startsWith('/') && !link.href.includes('#')) {
      return (
        <Link
          key={link.name}
          to={link.href}
          onClick={onClick}
          className="nav-link text-base lg:text-lg font-medium"
        >
          {link.name}
        </Link>
      );
    }

    return (
      <a
        key={link.name}
        href={link.href}
        onClick={onClick}
        className="nav-link text-base lg:text-lg font-medium"
      >
        {link.name}
      </a>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-heading text-3xl lg:text-4xl font-bold gradient-text"
            >
              AK
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => renderLink(link))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button asChild size="default">
                <a href={isHomePage ? '#contact' : '/#contact'}>Let’s Talk</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                aria-label="Toggle navigation menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ---------------- Mobile Menu ---------------- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-medium">
            {navLinks.map((link) =>
              renderLink(link, () => setIsMobileMenuOpen(false))
            )}

            <Button asChild size="lg" className="mt-6 text-lg">
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let’s Talk
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
