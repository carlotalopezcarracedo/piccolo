/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function EditorialMarquee() {
  const items = [
    'ANTIPASTI', 'PRIMI PIATTI', 'PIZZAS', 'SECONDI PIATTI', 'INSALATE', 'DOLCI',
    'SIN GLUTEN DISPONIBLE', 'PONTEVEDRA'
  ];

  return (
    <div className="bg-onyx py-6 md:py-8 overflow-hidden border-y border-white/5 relative z-20">
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-16 md:gap-24">
            <span className="font-sans text-[11px] md:text-[13px] uppercase tracking-[0.5em] font-bold text-white/40">
              {item}
            </span>
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-tomato-red rounded-full opacity-60"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
