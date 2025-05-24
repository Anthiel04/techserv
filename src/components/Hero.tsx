import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-[80dvh] flex justify-center pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950"
    >
      <div className="container flex justify-center px-4 md:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-12 text-center md:w-1/2 md:mb-0 md:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-5xl lg:text-6xl dark:text-white">
              Soluciones de software
            </h1>
            <p className="max-w-lg mx-auto mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300 md:mx-0">
              Ofrecemos servicios especializados en tecnología para satisfacer
              tus necesidades.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#servicios"
                className="px-6 py-3 font-medium text-white transition-all transform bg-blue-700 rounded-md shadow-md hover:bg-blue-800 hover:scale-105"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 font-medium text-blue-700 transition-all bg-transparent border-2 border-blue-700 rounded-md dark:text-white dark:border-white hover:bg-blue-50 dark:hover:bg-blue-900"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-5/12">
            <div className="relative">
              <div className="absolute rounded-lg -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-30 animate-pulse"></div>
              <div className="relative p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900">
                    <div className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      Apps
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Instalación
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900">
                    <div className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      Asesoramiento
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Instrucciones/Enseñanza personalizada
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900">
                    <div className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      Cuentas
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Recuperación/Creación
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900">
                    <div className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      Sistemas
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Reinstalaciones limpias de S.O.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
