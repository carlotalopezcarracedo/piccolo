/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    items: [
      { id: 'a1', name: 'Prosciutto e Melone', description: 'Serrano con melón.', price: 14.50 },
      { id: 'a2', name: 'Prosciutto e Mozzarella Bufala', description: 'Serrano con mozzarella.', price: 16.00 },
      { id: 'a3', name: 'Antipasto all’Italiano', description: 'Selección de embutidos y quesos italianos.', price: 17.00 },
      { id: 'a4', name: 'Parmiggiana de Melenzane', description: 'Berenjena, tomate, mozzarella, ajo y parmesano.', price: 14.50 },
      { id: 'a5', name: 'Calamari Fritti', description: 'Calamares fritos.', price: 16.00 },
      { id: 'a6', name: 'Calamari alla Genovese', description: 'Calamares, tomate, ajo, alcaparras, vino blanco, perejil y cebolla.', price: 16.00 },
      { id: 'a7', name: 'Avocado e Gamberetti', description: 'Aguacate, gambas peladas y salsa cóctel.', price: 15.50 },
      { id: 'a8', name: 'Formaggi Misti', description: 'Selección de quesos italianos.', price: 17.00 },
      { id: 'a9', name: 'Cozze alla Napoletana', description: 'Mejillones, tomate, ajo y vino blanco.', price: 12.50 },
      { id: 'a10', name: 'Vitello Tonnato', description: 'Ternera con atún, alcaparras, mayonesa y pepinillo.', price: 16.50 },
      { id: 'a11', name: 'Provolone alla Plancia', description: 'Quesos especiales a la plancha.', price: 17.00 },
    ]
  },
  {
    id: 'carpaccio',
    name: 'Carpaccio',
    items: [
      { id: 'c1', name: 'Solomillo', description: 'Marinado con limón, aceite de oliva, rúcula, parmesano y champiñones frescos.', price: 17.50 },
      { id: 'c2', name: 'Salmone', description: 'Marinado con limón, aceite de oliva, caviar y vodka.', price: 17.50 },
      { id: 'c3', name: 'Di Bresaola', description: 'Bresaola laminada muy fina con limón, aceite de oliva virgen extra, trufa, rúcula y parmesano.', price: 17.50 },
    ]
  },
  {
    id: 'zuppe',
    name: 'Zuppe',
    items: [
      { id: 'z1', name: 'Minestrone', description: 'Sopa de verduras.', price: 10.00 },
      { id: 'z2', name: 'Stracciatella alla Romana', description: 'Caldo de pollo con fideos, clara de huevo y parmesano.', price: 10.00 },
      { id: 'z3', name: 'Crema di Zucca', description: 'Crema de calabaza.', price: 10.00 },
      { id: 'z4', name: 'Pane e Aglio', description: 'Pan y ajo.', price: 5.00 },
    ]
  },
  {
    id: 'primi-piatti',
    name: 'Primi Piatti',
    items: [
      { id: 'pp1', name: 'Crepes al Tonno', description: 'Tomate, atún y cebolla.', price: 13.00 },
      { id: 'pp2', name: 'Crepes Vegetales', description: 'Brécol, tomate cherry y ricota.', price: 13.00 },
      { id: 'pp3', name: 'Tagliatelle alla Domus Flaminia', description: 'Gambas, langostinos, ajo, perejil, tomate cherry y vino blanco.', price: 16.00 },
      { id: 'pp4', name: 'Tagliatelle Timbalo di Taormina', description: 'Berenjenas, queso, tomate y pesto de albahaca.', price: 13.50 },
      { id: 'pp5', name: 'Tagliatelle al Pesto', description: 'Albahaca, piñones, queso de cabra, parmesano y aceite de oliva.', price: 13.50 },
      { id: 'pp6', name: 'Tagliatelle al Salmone', description: 'Salmón ahumado, coñac, nata y tomate.', price: 15.00 },
      { id: 'pp7', name: 'Tagliatelle Sotto-Bosco', description: 'Trufa de temporada, paté de canard y nata, servido con virutas de parmesano.', price: 17.50 },
      { id: 'pp8', name: 'Spaghetti Carbonara', description: 'Nata, panceta, yema de huevo y parmesano.', price: 13.50 },
      { id: 'pp9', name: 'Spaghetti Vongole', description: 'Almejas, tomate, vino blanco, perejil y ajo.', price: 16.00 },
      { id: 'pp10', name: 'Spaghetti Marinara', description: 'Ajo, tomate, calamares, almejas, mejillones, gambas, langostinos y vino blanco.', price: 16.00 },
      { id: 'pp11', name: 'Spaghetti al Piccolo', description: 'Tomate, jamón, champiñones, ajo y nata.', price: 13.50 },
      { id: 'pp12', name: 'Spaghetti Carbonara Antica', description: 'Guanciale, yema de huevo y parmesano.', price: 14.00 },
      { id: 'pp13', name: 'Risotto Lampedusa', description: 'Arroz, nata, taleggio, espárragos trigueros y salmón.', price: 15.00 },
      { id: 'pp14', name: 'Risotto alla Marinara', description: 'Tomate en trozos, almejas, mejillones, calamares, langostinos, gambas, vino blanco, ajo y perejil.', price: 16.00 },
      { id: 'pp15', name: 'Risotto alla Giuseppe Verdi', description: 'Arroz, mejillones, almejas, espárragos, tomate y boletus.', price: 16.00 },
    ]
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    items: [
      { id: 'pz1', name: 'Margherita', description: 'Tomate, mozzarella y albahaca.', price: 10.00 },
      { id: 'pz2', name: 'Napoletana', description: 'Tomate, mozzarella, anchoas, aceitunas y alcaparras.', price: 12.00 },
      { id: 'pz3', name: 'Prosciutto e Funghi', description: 'Tomate, mozzarella, jamón york y champiñones.', price: 12.50 },
      { id: 'pz4', name: 'American Hot', description: 'Tomate, mozzarella, pimientos y chorizo.', price: 13.00 },
      { id: 'pz5', name: 'Pugliese', description: 'Tomate, mozzarella, atún y cebolla.', price: 13.50 },
      { id: 'pz6', name: 'Marinara', description: 'Tomate, calamares, almejas, mejillones, gambas, ajo y perejil.', price: 16.50 },
      { id: 'pz7', name: 'Capricciosa', description: 'Tomate, mozzarella, pimientos, champiñones, alcachofas, huevo, aceitunas y jamón york.', price: 14.00 },
      { id: 'pz8', name: '4 Stagioni', description: 'Tomate, mozzarella, jamón york, champiñones, alcachofas y anchoas.', price: 14.00 },
      { id: 'pz9', name: '4 Formaggi', description: 'Tomate, mozzarella, gorgonzola, pecorino y parmiggiano.', price: 14.50 },
      { id: 'pz10', name: 'Papalina', description: 'Tomate, mozzarella, jamón serrano y huevo.', price: 15.00 },
      { id: 'pz11', name: 'Calzone', description: 'Tomate, mozzarella, jamón york, champiñones y pimientos.', price: 14.00 },
      { id: 'pz12', name: 'Parmiggiana', description: 'Tomate, mozzarella, berenjenas y parmesiano.', price: 13.00 },
      { id: 'pz13', name: 'Salmonata', description: 'Tomate, mozzarella, salmón ahumado y nata.', price: 16.50 },
      { id: 'pz14', name: 'Al Piccolo', description: 'Tomate, mozzarella, langostinos y ajo.', price: 18.50 },
      { id: 'pz15', name: 'Vegetariana', description: 'Tomate cherry, mozzarella, brécol, calabacín, berenjenas y espárrago triguero.', price: 13.50 },
      { id: 'pz16', name: 'Vulcano', description: 'Pizza especial para dos personas con tomate, mozzarella, alcachofas, champiñones, jamón york, chorizo, pimientos y espárragos.', price: 28.00 },
      { id: 'pz17', name: 'Al Duomo', description: 'Mozzarella, rúcula, parmesano y jamón serrano.', price: 15.00 },
      { id: 'pz18', name: 'Al Pesto', description: 'Mozzarella, tomate fresco y pesto.', price: 14.50 },
      { id: 'pz19', name: 'Toscana', description: 'Boletus, alcachofa, ajo, tomate y mozzarella.', price: 15.00 },
      { id: 'pz20', name: 'Primavera', description: 'Espárrago triguero, pollo, tomate a la plancha y queso de cabra.', price: 15.00 },
      { id: 'pz21', name: 'Parigina', description: 'Jamón serrano, queso de cabra y miel.', price: 15.50 },
    ]
  },
  {
    id: 'secondi-piatti-carnes',
    name: 'Secondi Piatti - Carnes',
    items: [
      { id: 'sp1', name: 'Filetto Griglia', description: 'Solomillo de ternera a la plancha.', price: 22.50 },
      { id: 'sp2', name: 'Filetto Pepe Verde', description: 'Pimienta verde, nata, coñac y demiglace.', price: 24.00 },
      { id: 'sp3', name: 'Filetto Gorgonzola', description: 'Nata, gorgonzola y queso.', price: 24.00 },
      { id: 'sp4', name: 'Filetto Funghi Porcini', description: 'Setas silvestres, cebolla, coñac, nata y demiglace.', price: 24.00 },
      { id: 'sp5', name: 'Filetto Rossini', description: 'Coñac, paté de hígado, demiglace y nata.', price: 26.50 },
      { id: 'sp6', name: 'Filetto Puccini', description: 'Solomillo en salsa de vino blanco y Marsala, boletus y jamón serrano.', price: 26.50 },
      { id: 'sp7', name: 'Controfiletto al San Carlo', description: 'Mostaza, nata y coñac.', price: 21.50 },
      { id: 'sp8', name: 'Controfiletto al Piccolo', description: 'Nata, gorgonzola y rúcula.', price: 22.50 },
      { id: 'sp9', name: 'Scaloppine al Marsala', description: 'Salsa de vino Marsala.', price: 18.00 },
      { id: 'sp10', name: 'Scaloppine al Limone', description: 'En salsa de limón.', price: 18.00 },
      { id: 'sp11', name: 'Scaloppine alla Romana', description: 'Vino blanco, jamón serrano, salvia y demiglace.', price: 18.00 },
      { id: 'sp12', name: 'Pollo alla Milanese', description: 'Empanado con huevo y pan rallado, servido con espaguetis con tomate.', price: 17.00 },
      { id: 'sp13', name: 'Pollo al Piccolo', description: 'Beicon, gorgonzola, espinacas, nata, coñac y vino blanco.', price: 17.00 },
    ]
  },
  {
    id: 'insalate',
    name: 'Insalate',
    items: [
      { id: 'in1', name: 'Al Piccolo', description: 'Lechuga, tomate, cebolla, aguacate, remolacha, pollo y aceitunas.', price: 14.00 },
      { id: 'in2', name: 'Caprese Bufala', description: 'Tomate, mozzarella y albahaca.', price: 14.50 },
      { id: 'in3', name: 'Tricolore Bufala', description: 'Tomate, mozzarella, aguacate y albahaca.', price: 15.50 },
      { id: 'in4', name: 'Tropicale', description: 'Manzana, aguacate, piña, lechuga, zanahoria, tomate y nata.', price: 15.00 },
      { id: 'in5', name: 'Sorrentina', description: 'Lechuga, pasta, pollo, tomate, aguacate, cebolla, pimiento y rúcula.', price: 15.00 },
      { id: 'in6', name: 'Alla Grega', description: 'Lechuga, radicchio, tomate, pimiento, berenjena a la plancha, feta, ternera laminada y nata.', price: 16.50 },
      { id: 'in7', name: 'Nordica', description: 'Hoja de roble, escarola, salmón ahumado, piñones, tomates cherry, croutons, cebolla, jamón crujiente y vinagre balsámico de Módena.', price: 17.50 },
      { id: 'in8', name: 'Italica', description: 'Mezcla de verdes con tomate a la plancha, pechuga de pollo, aguacate y nueces con vinagre y mostaza.', price: 17.50 },
      { id: 'in9', name: 'Tavola di Vegetali', description: 'Tabla de verduras a la plancha servida con frutos secos picados.', price: 17.50 },
    ]
  },
  {
    id: 'dolci',
    name: 'Dolci',
    items: [
      { id: 'do1', name: 'Tiramisú', description: 'Postre italiano de crema de mascarpone y café.', price: 6.50 },
      { id: 'do2', name: 'Tiramisú Frutti del Bosco', description: 'Copa de crema de mascarpone, bizcocho, champagne y frutos del bosque.', price: 7.00 },
      { id: 'do3', name: 'Mousse al Limone', description: 'Mousse de limón con salsa de fresa.', price: 6.50 },
      { id: 'do4', name: 'Mousse al Chioccolato', description: 'Mousse de chocolate.', price: 5.70 },
      { id: 'do5', name: 'Banoffi', description: 'Tarta de dulce de leche, plátano y nata sobre base de galleta.', price: 6.50 },
      { id: 'do6', name: 'Blanca e Nera', description: 'Tarta de mousse de chocolate con base de bizcocho ligero de almendra y chocolate.', price: 6.50 },
      { id: 'do7', name: 'Bigne', description: 'Profiteroles rellenos de nata servidos con chocolate caliente.', price: 6.50 },
      { id: 'do8', name: 'Tarta Emiliana', description: 'Tarta de mousse de turrón y chocolate, bizcocho fino de almendras y canela, almendras tostadas picadas, chocolate-cream y nata.', price: 6.50 },
      { id: 'do9', name: 'Tarta de Mango', description: 'Tarta de queso fresco de cabra, mermelada de frutos rojos, frambuesa, mousse de mango y cobertura de chocolate blanco.', price: 6.50 },
    ]
  },
  {
    id: 'gelati',
    name: 'Gelati',
    items: [
      { id: 'g1', name: 'Helados Artesanales', description: 'Consulta con nuestro equipo los sabores disponibles.', price: 0 }
    ]
  }
];
