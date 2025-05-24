import React from "react";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
}) => {
  return (
    <div className="bg-white flex flex-col justify-between dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] group">
      <div className="p-6 ">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="mb-3 text-xl font-bold text-center text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 bg-blue-50 dark:bg-blue-900/30 dark:border-gray-800">
        <button className="w-full py-2 font-medium text-blue-700 transition-colors dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          Más información
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
