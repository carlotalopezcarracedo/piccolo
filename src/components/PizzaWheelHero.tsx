/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const PIZZAS = [
  { 
    name: 'Margherita Verace', 
    price: '11,50', 
    desc: 'La clásica: tomate San Marzano D.O.P., mozzarella di bufala y albahaca fresca.',
    image: assetPath('margherita.png') 
  },
  { 
    name: 'Diavola Piccante', 
    price: '13,50', 
    desc: 'Para los amantes del picante: salame piccante della Calabria y olivas negras.',
    image: assetPath('diavola.png') 
  },
  { 
    name: 'Prosciutto e Funghi', 
    price: '12,50', 
    desc: 'Un equilibrio perfecto de jamón cocido de calidad y champiñones frescos.',
    image: assetPath('prosciutto.png') 
  },
  { 
    name: 'Quattro Formaggi', 
    price: '14,00', 
    desc: 'Gorgonzola, Parmigiano, Pecorino y Mozzarella. La intensidad del queso italiano.',
    image: assetPath('formaggi.png') 
  },
  { 
    name: 'Tartufo e Funghi', 
    price: '16,50', 
    desc: 'La elegancia en mesa: crema de trufa negra, mozzarella y setas de temporada.',
    image: assetPath('tartufo.png') 
  },
];

export default function PizzaWheelHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const segmentAngle = 360 / PIZZAS.length;
  // Rotate the entire wheel based on scroll. Start with 180 (first item at bottom).
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, -(360 - segmentAngle)]);

  const getSafeRange = (index: number, offset: number = 0) => {
    const start = index / PIZZAS.length;
    const end = (index + 1) / PIZZAS.length;
    let range = [
      Math.max(0, start - offset),
      start,
      end,
      Math.min(1, end + offset)
    ];
    for (let i = 1; i < range.length; i++) {
        if (range[i] < range[i-1]) range[i] = range[i-1];
    }
    return range;
  };

  const getOpacityValues = (index: number) =>
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0];

  return (
    <div ref={containerRef} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ivory flex items-center">
        {/* Background Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale mix-blend-multiply" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}>
        </div>

        {/* Decorative elements removed as requested */}

        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col lg:grid lg:grid-cols-12 items-start md:items-center justify-start md:justify-center lg:justify-start gap-4 lg:gap-12 relative z-10 w-full pt-28 md:pt-16 lg:pt-0">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 relative z-30 w-full mt-4 lg:mt-0">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h2 className="font-sans text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-italian-green font-bold mb-3 md:mb-6 block border-l-2 border-tomato-red pl-3 md:pl-4">
                Pizzería · Ristorante Italiano · Pontevedra
              </h2>
              <h1 className="font-serif font-medium tracking-tighter text-5xl md:text-[5.5rem] mb-2 md:mb-6 leading-[0.95]">
                Il Piccolo
              </h1>
              <p className="font-serif text-xl md:text-3xl italic text-tomato-red font-medium mb-6 md:mb-10">
                Una mesa italiana en Pontevedra.
              </p>
              
              <div className="relative h-[90px] md:h-[140px] mb-4 md:mb-8">
                {PIZZAS.map((pizza, idx) => {
                  const start = idx / PIZZAS.length;
                  const end = (idx + 1) / PIZZAS.length;
                  const range = getSafeRange(idx, 0.05);
                  
                  return (
                    <motion.div
                      key={idx}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: useTransform(scrollYProgress, (v) => v >= start && v < end ? 'block' : 'none'),
                        opacity: useTransform(scrollYProgress, range, getOpacityValues(idx))
                      }}
                    >
                      <h3 className="font-serif text-2xl md:text-3xl font-medium text-onyx mb-1 md:mb-3 italic">{pizza.name}</h3>
                      <p className="font-sans text-[11px] md:text-base text-onyx-muted leading-relaxed max-w-sm font-light">
                        {pizza.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-row gap-3 md:gap-5 items-center">
                <a href="#carta" className="bg-onyx text-ivory py-3 px-6 md:py-5 md:px-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-sans font-medium hover:bg-tomato-red transition-all flex items-center gap-2 md:gap-3 group">
                  Ver carta <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:986859999" className="py-3 md:py-5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-sans font-medium text-onyx hover:text-tomato-red transition-colors flex items-center gap-2">
                  <Phone size={14} /> <span className="hidden md:inline">Llamar · </span>986 85 99 99
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Circular Wheel */}
          <div className="lg:col-span-7 absolute md:relative bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto flex justify-center items-center h-[50vh] md:h-[500px] lg:h-screen w-screen md:w-full lg:translate-x-8 xl:translate-x-16 mt-6 lg:mt-0 z-0 md:z-10 pointer-events-none md:pointer-events-auto">
            
            {/* Vertical List of Pizzas Hugging the Curve */}
            <div className="hidden md:flex absolute top-[calc(50%+30px)] md:right-[calc(50%+285px)] lg:right-[calc(50%+300px)] z-40 flex-col gap-3 md:gap-5 pointer-events-none items-end text-right origin-right">
              {PIZZAS.map((pizza, idx) => {
                const range = getSafeRange(idx, 0.05);
                // Exponential offset inward (to the right) to visually hug the pizza's lower-left circular curve
                const baseOffset = [0, 5, 18, 38, 65, 100][idx];

                return (
                  <motion.div 
                    key={idx}
                    className="font-sans text-[9px] md:text-[11px] lg:text-xs uppercase tracking-[0.2em] font-medium drop-shadow-sm whitespace-nowrap"
                    style={{
                      color: useTransform(scrollYProgress, range, ["rgba(28,28,28,0.2)", "#A31D1D", "#A31D1D", "rgba(28,28,28,0.2)"]),
                      // Inactive: hugs the curve. Active: pops slightly left (outwards)
                      x: useTransform(scrollYProgress, range, [baseOffset, baseOffset - 15, baseOffset - 15, baseOffset]),
                      scale: useTransform(scrollYProgress, range, [1, 1.05, 1.05, 1]),
                      transformOrigin: 'right center'
                    }}
                  >
                    {pizza.name}
                  </motion.div>
                );
              })}
            </div>

            {/* Central Pizza Container */}
            <div className="relative w-[180vw] h-[180vw] max-w-[800px] max-h-[800px] sm:w-[500px] sm:h-[500px] lg:w-[540px] lg:h-[540px] z-10 flex items-center justify-center translate-y-[16%] md:translate-y-0">
               {PIZZAS.map((pizza, idx) => {
                 const range = getSafeRange(idx, 0.1);
                 
                 return (
                    <motion.div
                     key={idx}
                     style={{
                       position: 'absolute',
                       opacity: useTransform(scrollYProgress, range, getOpacityValues(idx)),
                       // Constant rotation + scroll-based rotation
                       rotate: useTransform(scrollYProgress, [0, 1], [0, 360]), 
                     }}
                     className="w-full h-full flex items-center justify-center"
                   >
                      <img 
                        src={pizza.image} 
                        alt={pizza.name}
                        className="w-full h-full object-contain select-none pointer-events-none rounded-full"
                        referrerPolicy="no-referrer"
                      />
                   </motion.div>
                 );
               })}
            </div>

             {/* Floating Labels (Glassmorphism) */}
             <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
               className="absolute top-[25%] left-0 z-40 bg-white/60 backdrop-blur-xl p-5 border border-white/50 shadow-2xl rounded-2xl max-w-[170px] hidden md:block"
             >
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-1.5 h-1.5 bg-tomato-red rounded-full"></div>
                   <p className="font-sans text-[10px] font-bold text-tomato-red uppercase tracking-widest">Fresco</p>
                </div>
                <p className="font-serif text-base italic font-bold">100% Organico</p>
             </motion.div>
             
             <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
               className="absolute bottom-[25%] right-[5%] z-40 bg-white/60 backdrop-blur-xl p-5 border border-white/50 shadow-2xl rounded-2xl hidden md:block"
             >
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-1.5 h-1.5 bg-italian-green rounded-full"></div>
                   <p className="font-sans text-[10px] font-bold text-italian-green uppercase tracking-widest">Tradición</p>
                </div>
                <p className="font-serif text-base italic font-bold">Masa Madre</p>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
