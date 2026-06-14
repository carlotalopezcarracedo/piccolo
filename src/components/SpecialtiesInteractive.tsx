/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const specialties = [
  {
    num: '01',
    name: 'Antipasti',
    title: 'Para empezar.',
    desc: 'Bresaola laminada fina, parmesano, calamares fritos y bufala. Platos pensados para abrir mesa y compartir.',
    image: assetPath('carpaccio.png')
  },
  {
    num: '02',
    name: 'La Pasta',
    title: 'Recetas de siempre.',
    desc: 'Spaghetti carbonara antica y tagliatelle al pesto. Pasta elaborada con paciencia y salsas italianas clásicas.',
    image: assetPath('pasta.png')
  },
  {
    num: '03',
    name: 'Il Forno',
    title: 'Pizzas artesanales.',
    desc: 'Amasadas a diario, con tomate italiano y mozzarella. Desde la clásica Margherita a la especialidad de la casa.',
    image: assetPath('horno.png') 
  }
];

export default function SpecialtiesInteractive() {
  return (
    <section className="py-24 md:py-40 bg-ivory overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="text-center mb-24 md:mb-32">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-tomato-red font-bold mb-6 block">
            Especialidades
          </span>
          <h2 className="font-serif text-5xl md:text-7xl leading-none text-onyx mb-8 font-medium">
            La firma<br/>
            <span className="italic font-light text-tomato-red">de Il Piccolo</span>
          </h2>
          <div className="w-px h-16 bg-tomato-red/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {specialties.map((item, idx) => (
            <motion.div 
               key={item.num}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: idx * 0.2 }}
               className="flex flex-col group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="text-center px-4">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-tomato-red font-medium mb-3 block">
                  {item.title}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-onyx mb-4 font-medium">
                  {item.name}
                </h3>
                <p className="font-sans text-base text-onyx-muted leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20 md:mt-32">
          <a href="#carta" className="inline-block border border-onyx text-onyx py-4 px-10 font-sans text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-onyx hover:text-white transition-all">
            Ver carta completa
          </a>
        </div>
      </div>
    </section>
  );
}
