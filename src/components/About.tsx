import React from "react";
import { Shield, Users, Trophy, Clock } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Sobre Nosotros
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Apasionado por la tecnología, dedicado a ofrecer soluciones
            efectivas a los clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Nuestra Misión
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Proporcionar soluciones tecnológicas eficaces y de alta calidad
              que puedan satisfacer a nuestros clientes, aumentar su
              productividad y alcanzar sus objetivos.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Ofrecer un servicio personalizado y eficiente, adaptado a las
              necesidades específicas de cada cliente.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Nuestra Visión
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Ser reconocidos en la provisión de servicios de software,
              destacando por nuestra eficacia y eficiencia.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Aspiramos a establecer relaciones duraderas con nuestros clientes,
              convirtiéndonos en socios estratégicos para su crecimiento y éxito
              tecnológico.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg dark:bg-gray-800 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Confianza
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Construimos relaciones basadas en la transparencia y el
              cumplimiento de nuestros compromisos.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg dark:bg-gray-800 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Trophy className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Excelencia
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nos esforzamos por alcanzar los estándares de cada cliente.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg dark:bg-gray-800 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Colaboración
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Trabajamos estrechamente con nuestros clientes para entender y
              satisfacer sus necesidades.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg dark:bg-gray-800 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Puntualidad
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Respetamos los plazos acordados y valoramos el tiempo de nuestros
              clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
