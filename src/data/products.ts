import { Product } from '../types';

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDERRXRrm4sspoq_CFENhz2dRsUAdSwSvQf-aiswUkcdd2QyeQqgRsfkEj4RlrQ8OgfVEvlSzDQttmZp0ekaVXBrup4tbAecgbltPV_MU0WbHokbkbqe1By4Q8evWuHdItklo4hcZpRFYvdkF3fXdXwdKUmbap8H2sqt1mFB2VknX6FcjOi3NOpxU0-VWJC5k4xbrnIOMjhEGakOrDXGhZMfqX7Qkv79Xuwb9TG-Xk4EpFBGtCsRlcx';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    code: 'CB-8842-M',
    name: 'Mikuni VM36 Round Slide',
    price: 245,
    category: 'Carburetion',
    modelFit: ['Panhead', 'Shovelhead', 'Cafe Racer'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKvgOOTBTkDkxPt07exjpKqgyS0JGqgSIkgo-o2vcY5QxI2hF81VwF-d70qTo8l_kHQXQoPKAdYzozEM8mivTF1utcS_knyRJPjNxpc_edjRJyRxAgdhNXubSZdjLNzFQ5YLHzBxkmdASXt31xB2T0SIappHAQCQoHkhrkYWb4_S090DLzr4EhmodFAjx30epkRe-cqsq-7PY5I33tmZs8nlUHr-4CW-_uDgaayPERbgYjxa9fMNsY',
    altText:
      'Vintage restored dual-throat carburetor resting on a dark slate workbench with brass fittings and machined aluminum body.',
    description:
      'Precision flow-bench tuned 36mm round slide carburetor. Restored with aircraft-grade brass jetting and custom turned velocity stack mating flange for unmatched throttle response.',
    specs: {
      'Bore Diameter': '36mm Round Slide',
      'Spigot OD': '43mm',
      'Main Jet': '#310 Pre-installed',
      'Pilot Jet': '#35 Pre-installed',
      'Material': 'Die-cast Aluminum with Brass Fittings'
    },
    condition: 'Precision Restored',
    inStock: true,
    yearRange: '1965 – 1984'
  },
  {
    id: 'prod-2',
    code: 'SD-9910-B',
    name: 'Bates Style Tuck & Roll Seat',
    price: 320,
    category: 'Saddles',
    modelFit: ['Panhead', 'Shovelhead', 'Bobber'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMwsgZg65BMKP2eC2K1f9GgNDf4_wK9nwtNUYSFyyS8As3DV7IbhyQ5vk_ZNUnrJNDzL0qhZ66uiNjnV4RACsnRzxFAeLyQ14csRC-MdUGCXEQwcb5IQRS6kqLhtFB22Qw6mux1-CQJpjx_EJgjkaRohNXBBAw_Xbvm8aKvBaW3NmqgJoyyFAKbqT5bePcfR6-dbY816NhUo88zsf4_G_BIZ-e_DPeVJLn7FrPwJGA3yF9Vi5mr9Ss',
    altText:
      'Hand-stitched distressed dark brown leather motorcycle solo seat on rugged steel grate surface.',
    description:
      'Faithful recreation of the iconic 1960s Bates solo pan. Hand-stitched with waxed linen cord over high-density closed cell foam on a 10-gauge stamped steel base plate.',
    specs: {
      'Base Pan': '10-Gauge Stamped Mild Steel',
      'Leather': '4.5oz Full-Grain Pull-Up Cowhide',
      'Mounting': 'Dual rear 5/16-18 weld studs (7" center-to-center)',
      'Dimensions': '13.5" Length x 9.5" Width x 3.2" Rise'
    },
    condition: 'Artisan Handcrafted',
    inStock: true,
    yearRange: '1948 – 1979'
  },
  {
    id: 'prod-3',
    code: 'FL-2204-C',
    name: 'Solid Copper Fuel Line Kit 5/16"',
    price: 85,
    category: 'Plumbing',
    modelFit: ['Panhead', 'Shovelhead', 'Cafe Racer', 'Bobber'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Y7Jokv9xA3B8XWmzqzc6vRNteP1ZPIs6NDbWI_W9AosNInZuksu5lVPglAciw0g6mHfhnv8C2K0dRClBV-xBRu5POc5_O0mETrEhyUyQUnqgE4U8_9h_B07AW3fmjKnfkFcTrwPpxpVcyeZPNZZHLQ5y75Oqp0x7ZyDYtE10q972fr1s9FvBFyaRY01juUer-wJ-gXvQQzrPNWW4fWu7LJhJ_Nem4iuTTIQVKVRC29xbxe53T7Cc',
    altText:
      'Raw oxidized copper fuel lines coiled artfully next to a vintage brass petcock valve.',
    description:
      'Hand-annealed seamless C12200 copper fuel tubing pre-coiled for vibration damping. Includes cast brass compression unions and knurled fuel petcock adapter.',
    specs: {
      'Tubing Size': '5/16" Outer Diameter (.032" Wall Thickness)',
      'Total Length': '36" Annealed Coil (bendable by hand)',
      'Fittings': '2x Brass 5/16" Inverted Flare / Compression Nuts',
      'Pressure Rating': 'Up to 250 PSI burst pressure'
    },
    condition: 'Artisan Handcrafted',
    inStock: true,
    yearRange: 'Universal Classic'
  },
  {
    id: 'prod-4',
    code: 'EN-4412-A',
    name: 'Finned Aluminum Rocker Boxes',
    price: 450,
    category: 'Engine Top-End',
    modelFit: ['Shovelhead'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvz6jBbwCmoQwWIkWcSakeRoDaFmtoFTm_mixvolKDbIFdDDP79ebdjE6cH-LmnZ-XDs_mKnc7rY2IDbkdefUmSRYAKvI0UipKEhcSlsYVUN2Z49DdArkXYLhVN4b8pmua-v6mDlxr_nBvUhfU_D74XBfF2G05hHIxSlRDXjv-BEwyUtpPHoczLzyEcifLVmTRFa0_AeSZpjhozce8uXJnudOazSe7-yF7ENoQu01tZtlVzic4dXaC',
    altText:
      'Pair of classic finned aluminum rocker boxes for vintage motorcycle engine resting on oil-stained canvas.',
    description:
      'Cast from aircraft A356 aluminum and tumbled in walnut shells for a matte satin patina. Deep-depth cooling fins drop oil temperatures by up to 18°F under heavy load.',
    specs: {
      'Compatibility': '1966–1984 HD Shovelhead 74ci / 80ci Motors',
      'Casting': 'High-Density Gravity Die Cast A356-T6',
      'Hardware': '12-point stainless fastener kit & copper washers included',
      'Finish': 'Natural As-Cast Tumbler Satin'
    },
    condition: 'Precision Restored',
    inStock: true,
    yearRange: '1966 – 1984'
  }
];

export const EXTENDED_PRODUCTS: Product[] = [
  {
    id: 'prod-5',
    code: 'CT-5102-B',
    name: 'Hand-Forged Brass Kickstart Pedal',
    price: 165,
    category: 'Controls',
    modelFit: ['Panhead', 'Shovelhead', 'Bobber'],
    image:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    altText: 'Solid cast brass motorcycle kickstart pedal with knurled grip surface.',
    description:
      'Sand-cast solid brass kicker pedal with traditional diamond knurling. Fits standard 5/8" spline kicker arms. Aged with liver of sulfur for instant heritage character.',
    specs: {
      'Material': 'Solid C83600 Leaded Red Brass',
      'Spline Fitment': '5/8" Heavy-duty standard kicker shaft',
      'Hardware': 'Grade 8 cadmium-plated pinch bolt'
    },
    condition: 'Artisan Handcrafted',
    inStock: true,
    yearRange: '1936 – 1985'
  },
  {
    id: 'prod-6',
    code: 'EX-7719-C',
    name: 'Cerakoted High-Pipe Heat Shield',
    price: 190,
    category: 'Exhaust',
    modelFit: ['Panhead', 'Shovelhead', 'Cafe Racer'],
    image:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    altText: 'Perforated exhaust heat shield with deep matte finish and hose clamps.',
    description:
      'Staggered drill-hole vintage racing heat shield. Coated in 1800°F rated Glacier Black Cerakote with stainless worm-drive mounting collars for 1.75" to 2.0" header pipes.',
    specs: {
      'Length': '8.75 inches (222mm)',
      'Curvature Radius': 'Fits 1.75" – 2.25" Exhaust Pipes',
      'Finish': 'Cerakote Glacier Ceramic'
    },
    condition: 'Artisan Handcrafted',
    inStock: true,
    yearRange: 'Universal Classic'
  },
  {
    id: 'prod-7',
    code: 'EN-9321-R',
    name: 'Ribbed Cast Primary Cover',
    price: 520,
    category: 'Engine Top-End',
    modelFit: ['Panhead', 'Shovelhead'],
    image:
      'https://images.unsplash.com/photo-1571646034647-529a0b4c1ae8?auto=format&fit=crop&w=800&q=80',
    altText: 'Heavy-ribbed aluminum outer primary cover with polished highlights.',
    description:
      'Historic ripple-rib casting patterned directly after 1950s dry-clutch race primaries. Provides superior rigidity and rapid heat dissipation.',
    specs: {
      'Application': 'Tin-type inner replacement or open-belt companion',
      'Material': 'A356 Aluminum alloy',
      'Weight': '4.2 lbs'
    },
    condition: 'NOS (New Old Stock)',
    inStock: true,
    yearRange: '1955 – 1969'
  },
  {
    id: 'prod-8',
    code: 'CT-3301-D',
    name: 'Bates Desert Sled Handlebars',
    price: 140,
    category: 'Controls',
    modelFit: ['Cafe Racer', 'Bobber'],
    image:
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
    altText: 'Seamless 1-inch chromoly handlebars with welded crossbar.',
    description:
      'True 1960s desert competition bend with welded bracing bar. Fabricated from .120" wall seamless 4130 Chromoly tubing with dimpled cable clearance.',
    specs: {
      'Diameter': '1" O.D.',
      'Width': '33.5"',
      'Rise': '4.25"',
      'Pullback': '5.0"'
    },
    condition: 'Artisan Handcrafted',
    inStock: true,
    yearRange: '1960 – Present'
  }
];

export const WORKSHOP_LOGS = [
  {
    id: 'log-1',
    title: 'The 1951 Panhead Barnfind: Teardown & Bottom-End Blueprinting',
    date: 'August 18, 2026',
    author: 'Elias Thorne, Master Fabricator',
    readTime: '6 min read',
    image: HERO_IMAGE,
    snippet:
      'Discovered buried under decades of dry Oklahoma dust, this genuine 1951 ELFL case had mismatched timing gears and frozen main bearings. Follow our meticulous revival methodology.'
  },
  {
    id: 'log-2',
    title: 'Precision Machining: Reclaiming Warped Shovelhead Rocker Surfaces',
    date: 'July 29, 2026',
    author: 'Marcus Vance, Chief Machinist',
    readTime: '4 min read',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvz6jBbwCmoQwWIkWcSakeRoDaFmtoFTm_mixvolKDbIFdDDP79ebdjE6cH-LmnZ-XDs_mKnc7rY2IDbkdefUmSRYAKvI0UipKEhcSlsYVUN2Z49DdArkXYLhVN4b8pmua-v6mDlxr_nBvUhfU_D74XBfF2G05hHIxSlRDXjv-BEwyUtpPHoczLzyEcifLVmTRFa0_AeSZpjhozce8uXJnudOazSe7-yF7ENoQu01tZtlVzic4dXaC',
    snippet:
      'Cast aluminum rocker covers often suffer oil leakage due to 50 years of uneven thermal expansion. Here is how we true mating faces to within .0005" on a granite surface plate.'
  },
  {
    id: 'log-3',
    title: 'Hand-Annealing Solid Copper Fuel Plumbing for Extreme Vibration',
    date: 'July 11, 2026',
    author: 'Clara Bennett, Metal Shaper',
    readTime: '5 min read',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Y7Jokv9xA3B8XWmzqzc6vRNteP1ZPIs6NDbWI_W9AosNInZuksu5lVPglAciw0g6mHfhnv8C2K0dRClBV-xBRu5POc5_O0mETrEhyUyQUnqgE4U8_9h_B07AW3fmjKnfkFcTrwPpxpVcyeZPNZZHLQ5y75Oqp0x7ZyDYtE10q972fr1s9FvBFyaRY01juUer-wJ-gXvQQzrPNWW4fWu7LJhJ_Nem4iuTTIQVKVRC29xbxe53T7Cc',
    snippet:
      'Rigid copper line can fracture if work-hardened. We walk through the exact torch temperature thresholds, water-quench cycles, and vibration loop bends.'
  }
];

export const ARCHIVE_BLUEPRINTS = [
  {
    id: 'arc-1',
    code: 'DOC-1948-FL',
    name: '1948–1965 Wishbone Rigid Frame Geometry Spec',
    category: 'Chassis & Frame',
    year: '1954 Edition',
    pages: '14 technical plates'
  },
  {
    id: 'arc-2',
    code: 'DOC-1966-GEN',
    name: 'Generator-to-Alternator Shovelhead Timing Chest Schematics',
    category: 'Electrical & Ignition',
    year: '1969 Factory Bulletin',
    pages: '8 technical plates'
  },
  {
    id: 'arc-3',
    code: 'DOC-1936-KNK',
    name: 'OHV Knucklehead Rocker Arm Oil Line Metering Orifice Guide',
    category: 'Lubrication',
    year: '1941 Service Record',
    pages: '6 technical plates'
  }
];
