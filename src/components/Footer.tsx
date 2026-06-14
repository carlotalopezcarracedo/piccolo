/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="w-full bg-onyx border-t border-white/5 py-8 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 gap-8 text-center lg:text-left w-full">
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 w-full lg:w-auto">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-sans font-medium">Sin gluten disponible</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-sans font-medium">Pontevedra</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-sans font-medium">Cucina italiana</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-tomato-red font-sans font-medium w-full lg:w-auto text-center hidden lg:block">
          Il Piccolo
        </div>
        <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-sans font-light w-full lg:w-auto lg:text-right">
          © {new Date().getFullYear()} Il Piccolo · Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
