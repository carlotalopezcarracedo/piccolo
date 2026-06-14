/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface SpecialDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
