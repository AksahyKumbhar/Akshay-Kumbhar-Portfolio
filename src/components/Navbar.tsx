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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/#home' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: isHomePage ? '#experience' : '/#experience' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-2xl font-bold gradient-text">
            AK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link key={link.name} to={link.href} className="nav-link text-sm font-medium">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
                  {link.name}
                </a>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="default" size="sm" asChild>
              <a href={isHomePage ? '#contact' : '/#contact'}>Let's Talk</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button variant="default" size="sm" className="mt-4 w-fit" asChild>
                <a href={isHomePage ? '#contact' : '/#contact'}>Let's Talk</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;