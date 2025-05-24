import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">TechServ</h3>
            <p className="mb-6 text-gray-400">
              Ofrecemos soluciones de software adaptadas a tus necesidades.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Desarrollo de Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Asesoramiento Técnico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Gestión de Cuentas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Reinstalación de Sistemas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+53 56891294</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  moreirahernandezwilliam@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  La Habana del Este, Cojimar
                  <br />
                  Pasaje Central E/G y H
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              &copy; {currentYear} TechServ. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
