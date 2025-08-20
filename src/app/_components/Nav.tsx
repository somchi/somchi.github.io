import { Mail, Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { useContext } from 'react';
import { AppContext } from '../context/provider';
import { SET_RESUME_MODAL_OPEN } from '../context/reducer';

export const Nav = () => {
  const {
    scrollToSection,
    activeSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useScroll();
  const { dispatch } = useContext(AppContext);

  const setIsResumeModalOpen = (isOpen: boolean) => {
    dispatch({
      type: SET_RESUME_MODAL_OPEN,
      payload: { isResumeModalOpen: isOpen },
    });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors ${
                  activeSection === id
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : ''
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
            >
              Resume
            </button>
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-4 space-y-4">
            {[
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsResumeModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
