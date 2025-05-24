import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold text-blue-900 dark:text-white"
            >
              TechServ
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <a
              href="#inicio"
              className="text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Contacto
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 transition-colors rounded-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={
                theme === "dark"
                  ? "Cambiar a modo claro"
                  : "Cambiar a modo oscuro"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 transition-colors rounded-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={
                theme === "dark"
                  ? "Cambiar a modo claro"
                  : "Cambiar a modo oscuro"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-md absolute left-0 right-0 transition-all duration-300 ${
          isMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col space-y-4">
            <a
              href="#inicio"
              className="py-2 text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="py-2 text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="py-2 text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="py-2 text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
