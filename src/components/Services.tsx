import React from "react";
import ServiceCard from "./ServiceCard";
import { Smartphone, HelpCircle, UserCheck, HardDrive } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Instalación de Apps",
      description:
        "Instalamos las aplicaciones que necesitas para satisfacer tus necesidades",
      icon: (
        <Smartphone className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      features: [
        "Aplicaciones restringidas en la región",
        "Aplicaciones piratas",
        "Aplicaciones de iOS",
        "Aplicaciones de Android",
      ],
    },
    {
      id: 2,
      title: "Asesoramiento",
      description:
        "Ofrecemos consultoría para ayudarle a estar informado de su tecnología o instruimos para que opere en su app favorita.",
      icon: (
        <HelpCircle className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      features: [
        "Mini cursos de seguridad en redes",
        "Instrucciones de uso de aplicaciones",
        "Análisis de seguridad",
        "Uso eficiente de apps",
      ],
    },
    {
      id: 3,
      title: "Gestión de Cuentas",
      description:
        "Recuperamos y creamos cuentas de redes sociales o Apple ID.",
      icon: (
        <UserCheck className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      features: [
        "Creacion de cuentas",
        "Configuración de autenticación multifactor",
        "Recuperación de cuentas",
        "Cuenta de Apple ID",
        "Configuración de iCloud",
      ],
    },
    {
      id: 4,
      title: "Reinstalaciones de Sistemas",
      description:
        "Realizamos reinstalaciones limpias de sistemas operativos, optimizando el rendimiento y eliminando problemas.",
      icon: (
        <HardDrive className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      features: [
        "Instalaciones limpias de Windows, macOS y Linux",
        "Migración de datos",
        "Optimización post-instalación",
        "Eliminación de software malicioso",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 mt-4 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Servicios
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Soluciones de software adaptadas a las necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
