/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { menuData } from '../data/menuData';

export default function FullMenu() {
  const [activeCategory] = useState(menuData[0].id);

  return (
    <section id="carta" className="py-24 md:py-40 bg-ivory-dark relative border-t border-onyx/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-tomato-red font-bold mb-6 block">
            La carta
          </span>
          <h2 className="font-serif text-6xl md:text-[7rem] mb-6 tracking-tight leading-none text-onyx">
            Una carta<br />
            <span className="italic font-light opacity-90">italiana</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-onyx-muted mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Explora nuestras especialidades: antipasti, primi piatti, pizzas, carnes, ensaladas y postres.
          </p>
          <div className="w-px h-24 bg-tomato-red/30"></div>
        </div>

        <div className="space-y-32">
          {menuData.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32 max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <h3 className="font-serif text-5xl md:text-6xl text-onyx mb-4 font-medium">
                  {category.name}
                </h3>
                {category.items.length > 0 && category.items[0].description && category.id === 'antipasti' && (
                   <p className="font-sans text-sm text-onyx/50 uppercase tracking-widest">Para abrir mesa</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {category.items.map((item) => (
                  <div key={item.id} className="group relative text-center md:text-left flex flex-col">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-2 md:gap-4">
                      <h4 className="font-serif text-2xl md:text-3xl text-onyx font-medium">
                        {item.name}
                      </h4>
                      <div className="hidden md:block flex-grow border-b border-dotted border-onyx/20 mb-2"></div>
                      {item.price > 0 && (
                        <span className="font-sans text-base font-semibold text-tomato-red shrink-0">
                          {item.price.toFixed(2).replace('.', ',')} €
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-onyx-muted leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

        {/* Disclaimer & Allergens */}
        <div className="mt-32 pt-20 border-t border-onyx/10 text-center max-w-3xl mx-auto">
           <h3 className="font-serif text-3xl md:text-4xl text-onyx mb-8 italic">Sin gluten y alérgenos</h3>
           
           <p className="font-sans text-sm md:text-base text-onyx-muted leading-relaxed mb-12 font-light">
             Disponemos de versiones sin gluten. Consulta con nuestro equipo.
             <br/><br/>
             <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-60">
               Todos nuestros productos son susceptibles de contener de manera directa o a través de contaminación cruzada algún tipo de alérgeno.
             </span>
           </p>
           
           <div className="bg-white/50 p-8 border border-onyx/5">
             <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-onyx/40 block mb-6">Guía de alérgenos</span>
             <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 font-sans text-xs text-onyx-muted font-light">
               <li>1. Contiene gluten</li>
               <li>2. Soja</li>
               <li>3. Lácteos</li>
               <li>4. Pescado</li>
               <li>5. Crustáceos</li>
               <li>6. Dióxido de azufre y sulfitos</li>
               <li>7. Huevos</li>
               <li>8. Cacahuetes</li>
               <li>9. Mostaza</li>
               <li>10. Frutos secos</li>
               <li>11. Apio</li>
               <li>12. Moluscos</li>
             </ul>
           </div>
        </div>

      </div>
    </section>
  );
}
