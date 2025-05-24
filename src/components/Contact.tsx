import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Contáctenos
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Estamos aquí para ayudarle. Envíenos un mensaje y nos pondremos en
            contacto con usted lo antes posible.
          </p>
        </div>

        <div className="flex flex-col content-center justify-center max-w-xl gap-8 m-auto align-middle">
          <div className="space-y-8 ">
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex items-start">
                <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/50">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Teléfono
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +53 56891294
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex items-start">
                <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/50">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    moreirahernandezwilliam@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex items-start">
                <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/50">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Dirección
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    La Habana del Este, Cojimar
                    <br />
                    Pasaje Central E/G y H
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
