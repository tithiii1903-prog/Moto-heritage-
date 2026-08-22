export interface Product {
  id: string;
  code: string;
  name: string;
  price: number;
  category: string;
  modelFit: string[];
  image: string;
  altText: string;
  description: string;
  specs: { [key: string]: string };
  condition: 'NOS (New Old Stock)' | 'Precision Restored' | 'Salvaged & Tested' | 'Artisan Handcrafted';
  inStock: boolean;
  yearRange: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type NavigationTab = 'EXPLORE' | 'WORKSHOP' | 'COMMUNITY' | 'ARCHIVE';
