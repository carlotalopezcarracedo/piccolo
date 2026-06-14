/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 md:py-40 bg-ivory relative border-t border-onyx/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/local.png" 
                alt="Interior Il Piccolo" 
                className="w-full h-full object-cover grayscale-[15%]"
              />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.5 }}
               className="absolute -bottom-8 -right-8 w-40 h-40 bg-tomato-red rounded-full flex items-center justify-center text-center shadow-xl p-6 z-10 hidden md:flex"
            >
              <span className="font-serif italic text-3xl text-ivory leading-tight">Buon<br/>appetito.</span>
            </motion.div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center flex-col w-full">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-tomato-red"></span>
                <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-onyx/60 font-medium">La casa</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-7xl leading-none mb-10 text-onyx font-medium">
                Cocina italiana<br className="hidden md:block"/> <span className="italic text-tomato-red font-normal mt-2 block">para sentarse sin prisa.</span>
              </h2>
              
              <div className="space-y-6 font-sans text-base md:text-lg text-onyx-muted leading-relaxed font-light">
                <p>
                  Il Piccolo combina recetas italianas, una carta amplia y una cocina pensada para compartir alrededor de la mesa.
                </p>
                <p>
                  Antipasti, pastas, risotti, carnes, pizzas y postres para volver sin necesidad de buscar excusas. Un restaurante italiano clásico en Pontevedra, con platos para empezar, compartir, repetir y terminar con algo dulce.
                </p>
              </div>
              
              <motion.div 
                 className="mt-16 pt-8 border-t border-onyx/10"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.4 }}
              >
                 <span className="font-serif italic text-2xl md:text-4xl text-onyx block font-medium">"Un restaurante italiano clásico en Pontevedra."</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
