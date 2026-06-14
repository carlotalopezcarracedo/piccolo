/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-onyx text-ivory pt-24 md:pt-40 pb-16 relative overflow-hidden border-t border-onyx/5">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-32">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-tomato-red"></span>
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-white/50 font-medium">Reserva</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl leading-none mb-8 font-medium">
              Ven a disfrutar<br/>
              <span className="text-tomato-red italic font-normal">de Il Piccolo.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-white/60 max-w-md mb-12 leading-relaxed font-light">
              Llámanos para reservar o consultar disponibilidad. Te esperamos en Pontevedra con una carta italiana amplia, clásica y pensada para disfrutar.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:986859999"
                className="bg-ivory text-onyx py-4 px-10 font-sans text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-tomato-red hover:text-white transition-all text-center inline-block"
              >
                Llamar ahora
              </a>
              <a href="#carta" className="border border-white/20 text-ivory py-4 px-10 font-sans text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-white/10 transition-all text-center inline-block">
                Ver carta
              </a>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2 }}
             className="lg:w-1/2 bg-white/5 border border-white/10 p-10 md:p-16 relative"
          >
            <div className="space-y-12">
               <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium block mb-4">Contacto</span>
                  <a 
                    href="tel:986859999" 
                    className="font-serif text-4xl md:text-6xl font-medium text-ivory hover:text-tomato-red transition-colors tracking-tighter block"
                  >
                    986 85 99 99
                  </a>
               </div>

               <div>
                 <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium block mb-4">Ubicación</span>
                 <p className="font-serif text-3xl font-normal italic text-ivory mb-2">Pontevedra</p>
                 <p className="font-sans text-[12px] uppercase tracking-widest text-white/50 font-light">
                   Il Piccolo<br />
                   Pizzería · Ristorante
                 </p>
               </div>
               
               <div className="pt-8 border-t border-white/10">
                 <p className="font-sans text-sm text-white/40 italic font-light">
                   Horario pendiente de confirmar.
                 </p>
               </div>
            </div>
          </motion.div>
        </div>


        <div className="border-t border-white/10 pt-16 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
            <div className="lg:col-span-1">
              <span className="font-serif italic text-3xl text-ivory block mb-2 font-medium">Il Piccolo</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-tomato-red block mb-6">Ristorante Italiano</span>
              <p className="font-sans text-sm text-white/40 leading-relaxed sm:pr-6 font-light">
                Cocina italiana, pizzas, pastas, carnes y dolci en Pontevedra.
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 block mb-6">Links</span>
              <ul className="space-y-4">
                <li><a href="#carta" className="font-sans text-sm text-white/60 hover:text-white transition-colors font-light">Carta</a></li>
                <li><a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors font-light">Especialidades</a></li>
                <li><a href="#experiencia" className="font-sans text-sm text-white/60 hover:text-white transition-colors font-light">La Casa</a></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 block mb-6">Directo</span>
              <ul className="space-y-4">
                <li><a href="tel:986859999" className="font-sans text-sm text-white/60 hover:text-white font-light transition-colors">986 85 99 99</a></li>
                <li><span className="font-sans text-sm text-white/60 font-light">Pontevedra</span></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 block mb-6">Aviso</span>
              <p className="font-sans text-xs text-white/40 leading-relaxed font-light">
                Todos nuestros productos pueden contener alérgenos de forma directa o por contaminación cruzada. Consulta siempre con nuestro equipo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
