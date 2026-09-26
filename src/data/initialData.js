/**
 * Initial Seed Data for RO POINT - Water Purifier & RO Solutions
 * Location: Hanuman Ji Ke Mandir Ke Samne, Dholi Mandi, Renwal Road, Chomu, Jaipur, Rajasthan – 303702
 * Contacts: Raju (9660063962), Ajahar (7792901409)
 * Brands Available: RO POINT, Kent, Aquaguard (Eureka Forbes), Livpure, Aqua Tejas, Pureit
 */

export const INITIAL_CATEGORIES = [
  {
    id: "cat-domestic-ro",
    name: "Domestic RO",
    slug: "domestic-ro",
    description: "All top brand water purifiers: Kent, Aquaguard, Livpure, Aqua Tejas & RO POINT heavy-TDS purifiers.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    itemCount: "Kent, Aquaguard, Livpure",
    featured: true,
    active: true
  },
  {
    id: "cat-commercial-ro",
    name: "Commercial RO Plants",
    slug: "commercial-ro",
    description: "Industrial & institutional RO plants from 25 LPH up to 10,000 LPH with Stainless Steel 304 skid and vertical multistage pumps.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    itemCount: "25 LPH - 10,000 LPH",
    featured: true,
    active: true
  },
  {
    id: "cat-geyser",
    name: "Geyser & Water Heaters",
    slug: "geyser",
    description: "Instant 3L and 10L, 15L, 25L storage electric geysers with titanium glassline anti-scaling tanks.",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
    itemCount: "3L, 10L, 15L, 25L",
    featured: true,
    active: true
  },
  {
    id: "cat-ro-parts",
    name: "RO Spare Parts",
    slug: "ro-parts",
    description: "100% original RO membranes (Dow Filmtec), copper booster pumps, SMPS, inline filters, UV chambers, and valves.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80",
    itemCount: "Wholesale & Retail",
    featured: true,
    active: true
  }
];

export const INITIAL_BANNERS = [
  {
    id: "banner-store-visit",
    title: "RO POINT Showroom in Chomu",
    subtitle: "Complete Water Purifier & RO Solutions Hub",
    offerText: "All leading brands under one roof: Kent, Aquaguard, Livpure, Aqua Tejas & Commercial Plants. Visit our shop opposite Hanuman Ji Mandir, Dholi Mandi.",
    buttonText: "Visit Store / Get Directions",
    buttonLink: "/contact",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1200&q=80",
    badge: "📍 Chomu Showroom",
    order: 1,
    active: true
  }
];

export const INITIAL_OFFERS = [
  {
    id: "offer-free-tds",
    title: "Free Doorstep Water TDS & Hardness Audit",
    subtitle: "Bring your water sample or call us",
    description: "Get your borewell or tanker water tested free of charge in our Chomu shop or at your doorstep. We recommend the right purifier based on exact TDS readings.",
    discount: "100% Free Service",
    category: "Domestic RO",
    validTill: "Always Available for Local Customers",
    code: "FREE-TDS",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    active: true,
    highlight: true
  }
];

export const INITIAL_PRODUCTS = [
  // --- KENT RO ---
  {
    id: "prod-kent-grand",
    name: "Kent Grand Plus RO+UV+UF+Alkaline Water Purifier",
    slug: "kent-grand-plus-ro-uv-uf-alkaline",
    category: "Domestic RO",
    subcategory: "Kent RO",
    brand: "KENT",
    productCode: "KENT-GRP-001",
    price: 18500,
    discountPrice: 14499,
    discountPercentage: 22,
    stock: 12,
    capacity: "9 Litres Storage (20 LPH Flow)",
    warranty: "1 Year Manufacturer Warranty + 3 Years Service",
    description: "Original Kent Grand Plus water purifier with patented Mineral RO technology, UV in-tank disinfection, and Alkaline balance. Retains essential natural minerals in drinking water.",
    features: [
      "Original Kent patented Mineral ROTM technology",
      "Multiple purification by RO+UV+UF+Alkaline+TDS Control",
      "In-tank UV disinfection keeps stored water 100% pure",
      "High purification capacity of up to 20 Litres/Hour",
      "Auto-flushing system prevents membrane scaling"
    ],
    specifications: {
      "Brand": "KENT",
      "Purification Technology": "RO + UV + UF + Alkaline + TDS Controller",
      "Storage Capacity": "9 Litres",
      "Purification Rate": "20 Litres / Hour",
      "Mounting": "Wall Mount",
      "Input TDS": "Up to 2000 PPM"
    },
    images: [
      "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Authorized Store Supply in Chomu",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 42,
    createdAt: "2026-01-10T10:00:00.000Z"
  },

  // --- AQUAGUARD / EUREKA FORBES ---
  {
    id: "prod-aquaguard-marvel",
    name: "Aquaguard Marvel Active Copper RO+UV+Taste Adjuster",
    slug: "aquaguard-marvel-active-copper",
    category: "Domestic RO",
    subcategory: "Aquaguard",
    brand: "Aquaguard",
    productCode: "AQG-MRV-002",
    price: 17000,
    discountPrice: 12999,
    discountPercentage: 24,
    stock: 10,
    capacity: "8 Litres Storage",
    warranty: "1 Year Comprehensive Warranty",
    description: "Aquaguard Marvel features Active Copper and Zinc Booster technology with Mineral Guard to provide healthy mineralized drinking water from any borewell, tanker, or municipal source.",
    features: [
      "Active Copper & Zinc booster cartridge",
      "Taste Adjuster (MTDS) technology for sweet tasting water",
      "High performance multi-stage filtration",
      "Compact premium glossy black front design",
      "Smart LED indicators for tank full and service alert"
    ],
    specifications: {
      "Brand": "Aquaguard (Eureka Forbes)",
      "Technology": "RO + UV + MTDS + Active Copper",
      "Tank Capacity": "8 Litres",
      "Body Color": "Glossy Black",
      "Suitable TDS": "Up to 2000 PPM"
    },
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Special Chomu Store Rate",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 35,
    createdAt: "2026-01-12T10:00:00.000Z"
  },

  // --- LIVPURE ---
  {
    id: "prod-livpure-glo",
    name: "Livpure Glo Pro RO+UV+Mineralizer Water Purifier",
    slug: "livpure-glo-pro-ro-uv-mineralizer",
    category: "Domestic RO",
    subcategory: "Livpure",
    brand: "Livpure",
    productCode: "LIV-GLO-003",
    price: 15500,
    discountPrice: 10999,
    discountPercentage: 29,
    stock: 15,
    capacity: "7 Litres Storage (15 LPH Flow)",
    warranty: "1 Year Warranty",
    description: "Livpure Glo Pro provides 6-stage purification with taste enhancer and mineralizer cartridge. Designed specifically for hard groundwater and high sediment conditions.",
    features: [
      "6 Stages of advanced water purification",
      "Mineralizer enhances taste with essential minerals",
      "Insect-proof water storage tank",
      "Operates efficiently on raw water TDS up to 2000 PPM"
    ],
    specifications: {
      "Brand": "Livpure",
      "Purification": "RO + UV + Mineralizer",
      "Storage Capacity": "7 Litres",
      "Installation Type": "Wall Mount / Countertop"
    },
    images: [
      "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Best Seller in Budget Class",
    status: "In Stock",
    rating: 4.7,
    reviewsCount: 29,
    createdAt: "2026-01-14T10:00:00.000Z"
  },

  // --- AQUA TEJAS ---
  {
    id: "prod-aqua-tejas-alkaline",
    name: "Aqua Tejas Copper Alkaline Mineral RO Purifier",
    slug: "aqua-tejas-copper-alkaline-mineral",
    category: "Domestic RO",
    subcategory: "Aqua Tejas",
    brand: "Aqua Tejas",
    productCode: "ATJ-COP-004",
    price: 14500,
    discountPrice: 9499,
    discountPercentage: 34,
    stock: 18,
    capacity: "12 Litres Storage (18 LPH Flow)",
    warranty: "1 Year Full Service Warranty",
    description: "Aqua Tejas provides authentic Copper enriched, 8.5 pH alkaline water with high flow rate. Heavy-duty construction designed for Rajasthan borewell water.",
    features: [
      "Copper cartridge for authentic tamra-jal wellness",
      "Balances water pH between 7.5 to 8.5",
      "12 Litres high capacity transparent food-grade tank",
      "100 GPD high pressure booster pump"
    ],
    specifications: {
      "Brand": "Aqua Tejas",
      "Purification": "RO + UV + UF + Copper + Alkaline",
      "Storage": "12 Litres",
      "Membrane": "80 GPD High Rejection"
    },
    images: [
      "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Includes Pre-Filter Kit Free",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 31,
    createdAt: "2026-01-16T10:00:00.000Z"
  },

  // --- RO POINT CUSTOM HEAVY TDS ---
  {
    id: "prod-ropoint-aquapure",
    name: "RO Point Aqua Pure 12L Multi-Stage Heavy Borewell RO",
    slug: "ro-point-aqua-pure-multistage",
    category: "Domestic RO",
    subcategory: "RO POINT Special",
    brand: "RO POINT",
    productCode: "ROP-DOM-001",
    price: 13500,
    discountPrice: 8499,
    discountPercentage: 37,
    stock: 25,
    capacity: "12 Litres Storage (15 LPH Flow)",
    warranty: "1 Year Comprehensive Local Warranty",
    description: "Custom engineered by RO Point Chomu specifically for high TDS borewell water (up to 2500+ PPM). Built with original Filmtec 80 GPD membrane, heavy pure copper booster pump, and brass TDS controller.",
    features: [
      "Specially tuned for high TDS groundwater in Chomu & Jaipur",
      "Heavy 24V pure copper winding booster pump",
      "Brass manual TDS controller for sweet natural taste",
      "Transparent water level tank with anti-bacterial tap",
      "Doorstep repair & installation service by Raju & Ajahar"
    ],
    specifications: {
      "Brand": "RO POINT",
      "Technology": "RO + UV + UF + TDS Controller + Mineralizer",
      "Storage Tank": "12 Litres",
      "Suitable TDS": "Up to 2500 PPM",
      "Power": "24V DC Stabilized"
    },
    images: [
      "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Top Choice for Chomu Borewell Water",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 58,
    createdAt: "2026-01-18T10:00:00.000Z"
  },

  // --- COMMERCIAL RO PLANTS (25 to 10,000 LPH) ---
  {
    id: "prod-comm-25lph",
    name: "Commercial RO Plant 25 LPH Stainless Steel Skid",
    slug: "commercial-ro-plant-25-lph",
    category: "Commercial RO Plants",
    subcategory: "25 LPH",
    brand: "RO POINT Commercial",
    productCode: "ROP-COM-025",
    price: 24000,
    discountPrice: 17500,
    discountPercentage: 27,
    stock: 8,
    capacity: "25 Litres Per Hour",
    warranty: "1 Year Commercial On-Site Warranty",
    description: "Compact commercial RO plant for small offices, cafes, clinics, and showrooms. Built with an SS304 frame, high pressure booster pump, dual 100 GPD membranes, and dual 20-inch pre-filter jumbo housings.",
    features: [
      "Purifies 25 Litres pure drinking water per hour",
      "Corrosion-resistant SS 304 frame",
      "Dual 100 GPD heavy-duty commercial membranes",
      "Low pressure & high pressure cut-off switch protection"
    ],
    specifications: {
      "Capacity": "25 LPH (Litres Per Hour)",
      "Membranes": "2 x 100 GPD High Rejection",
      "Pumps": "Dual 150 GPD Pumps",
      "Structure": "Stainless Steel 304"
    },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Free Site Delivery & Setup in Chomu",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 12,
    createdAt: "2026-02-01T10:00:00.000Z"
  },
  {
    id: "prod-comm-50lph",
    name: "Commercial RO Plant 50 LPH Heavy Duty Skid",
    slug: "commercial-ro-plant-50-lph",
    category: "Commercial RO Plants",
    subcategory: "50 LPH",
    brand: "RO POINT Commercial",
    productCode: "ROP-COM-050",
    price: 32000,
    discountPrice: 23500,
    discountPercentage: 26,
    stock: 6,
    capacity: "50 Litres Per Hour",
    warranty: "1 Year Commercial Warranty",
    description: "Ideal for coaching centers, restaurants, schools with 100-200 students, and petrol pumps. Features 4 commercial membranes, raw water booster, and digital pressure gauges.",
    features: [
      "50 Litres per hour high recovery rate",
      "Heavy gauge SS skid with vibration dampeners",
      "Pressure gauges for inlet and membrane pressure",
      "Auto flush valve for membrane longevity"
    ],
    specifications: {
      "Capacity": "50 LPH",
      "Membranes": "4 x 100 GPD Commercial",
      "Structure": "SS 304 Rigid Skid",
      "Feed TDS": "Up to 3000 PPM"
    },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Free Water TDS Testing",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 17,
    createdAt: "2026-02-03T10:00:00.000Z"
  },
  {
    id: "prod-comm-100lph",
    name: "Commercial RO Plant 100 LPH with Sand & Carbon Columns",
    slug: "commercial-ro-plant-100-lph",
    category: "Commercial RO Plants",
    subcategory: "100 LPH",
    brand: "RO POINT Commercial",
    productCode: "ROP-COM-100",
    price: 48000,
    discountPrice: 36000,
    discountPercentage: 25,
    stock: 5,
    capacity: "100 Litres Per Hour",
    warranty: "1 Year On-Site Commercial Warranty",
    description: "High performance 100 LPH RO Plant with FRP Vessel, multi-port valve, Sand and Activated Carbon Media filter, and high pressure vertical multistage pump.",
    features: [
      "100 LPH continuous pure water output",
      "FRP Sand Filter & Carbon Filter for turbidity removal",
      "SS 304 High Pressure Vertical Multistage Pump",
      "Digital Auto-Controller panel with dry-run protection"
    ],
    specifications: {
      "Capacity": "100 Litres / Hour",
      "Membranes": "4040 Industrial RO Membrane",
      "FRP Vessels": "10x54 Size with Multiport Valve",
      "Pump Type": "Vertical Multistage SS High Pressure"
    },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Turnkey Installation Support",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 15,
    createdAt: "2026-02-05T10:00:00.000Z"
  },
  {
    id: "prod-comm-250lph",
    name: "Commercial Industrial RO Plant 250 LPH Turnkey",
    slug: "commercial-ro-plant-250-lph",
    category: "Commercial RO Plants",
    subcategory: "250 LPH",
    brand: "RO POINT Commercial",
    productCode: "ROP-COM-250",
    price: 75000,
    discountPrice: 58000,
    discountPercentage: 22,
    stock: 4,
    capacity: "250 Litres Per Hour",
    warranty: "1 Year Complete Warranty",
    description: "Designed for commercial complexes, large marriage gardens, hostels, and institutions. Features dual 4040 membranes, heavy FRP media columns, and electronic control panel.",
    features: [
      "250 LPH continuous reliable output",
      "Twin 4040 industrial membranes with FRP housings",
      "High grade quartz sand & activated carbon filtration",
      "SS Skid with anti-vibration rubber pads"
    ],
    specifications: {
      "Capacity": "250 LPH",
      "Membranes": "2 x 4040 Industrial Grade",
      "Vessels": "Dual 12x48 FRP Vessels",
      "Pump": "1.5 HP Multistage"
    },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Factory Direct Pricing",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 11,
    createdAt: "2026-02-07T10:00:00.000Z"
  },
  {
    id: "prod-comm-500lph",
    name: "Industrial RO Plant 500 LPH with Dosing System",
    slug: "industrial-ro-plant-500-lph",
    category: "Commercial RO Plants",
    subcategory: "500 LPH",
    brand: "RO POINT Commercial",
    productCode: "ROP-COM-500",
    price: 120000,
    discountPrice: 94000,
    discountPercentage: 21,
    stock: 3,
    capacity: "500 Litres Per Hour",
    warranty: "1 Year Comprehensive Warranty",
    description: "Heavy industrial plant for water ATM businesses, factories, schools, and institutions with 500+ daily strength. Includes chemical dosing system, anti-scalant feeder, and automatic backwash valves.",
    features: [
      "500 Litres per hour heavy industrial output",
      "Four 4040 membrane array",
      "Antiscalant dosing pump included to prevent scaling",
      "Fully wired electrical control panel with MCB and indicators"
    ],
    specifications: {
      "Capacity": "500 LPH",
      "Membranes": "4 x 4040 Industrial RO Elements",
      "Vessels": "13x54 FRP Sand & Carbon Columns",
      "High Pressure Pump": "2.0 HP Vertical Multistage"
    },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "On-Site Fabrication & Testing",
    status: "In Stock",
    rating: 5.0,
    reviewsCount: 9,
    createdAt: "2026-02-10T10:00:00.000Z"
  },
  {
    id: "prod-comm-1000lph",
    name: "Industrial RO Plant 1000 LPH (1 KLD) Turnkey Skid",
    slug: "industrial-ro-plant-1000-lph",
    category: "Commercial RO Plants",
    subcategory: "1000 LPH",
    brand: "RO POINT Commercial",
    productCode: "ROP-COM-1000",
    price: 195000,
    discountPrice: 155000,
    discountPercentage: 20,
    stock: 2,
    capacity: "1000 Litres Per Hour",
    warranty: "1 Year Commercial Warranty + Lifetime AMC Support",
    description: "Standard industrial grade 1000 LPH RO Plant with SS skid, precision rotameters, automatic multi-port valves, and high-pressure vertical pump. Engineered for demanding industrial duties.",
    features: [
      "1,000 Litres per hour (24,000 Litres daily capacity)",
      "Suitable for packaged water bottling and industrial boilers",
      "Full digital control panel with overload & dry run protection",
      "Twin 8040 industrial membranes"
    ],
    specifications: {
      "Capacity": "1000 LPH",
      "Membranes": "2 x 8040 Industrial Elements",
      "Vessels": "14x65 Dual Structural FRP Tanks",
      "Pump": "3 HP Three Phase Vertical Pump"
    },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Call Raju (9660063962) for On-Site Consultation",
    status: "In Stock",
    rating: 5.0,
    reviewsCount: 14,
    createdAt: "2026-02-12T10:00:00.000Z"
  },

  // --- GEYSERS ---
  {
    id: "prod-geyser-15l",
    name: "RO Point ThermoShield 15L Glassline Storage Geyser",
    slug: "ro-point-thermoshield-15l-storage-geyser",
    category: "Geyser",
    subcategory: "Storage Geyser",
    brand: "RO POINT",
    productCode: "ROP-GEY-015",
    price: 8990,
    discountPrice: 5799,
    discountPercentage: 35,
    stock: 20,
    capacity: "15 Litres",
    warranty: "5 Years Tank Warranty + 2 Years Heating Element",
    description: "Premium 5-star rated electric storage water geyser with titanium enamel glassline coated inner tank. Features high-density PUF insulation to keep water hot for over 24 hours.",
    features: [
      "15 Litres high capacity glassline tank",
      "5-Star energy efficiency rating with minimum heat loss",
      "8 Bar pressure rating suitable for high-rise buildings",
      "Heavy duty magnesium anode rod prevents hard water scaling"
    ],
    specifications: {
      "Capacity": "15 Litres",
      "Power Rating": "2000 Watts (2 kW)",
      "Tank Coating": "Titanium Enamel Glassline",
      "Pressure Handling": "Up to 8 Bar"
    },
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Free Connection Pipes Included",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 22,
    createdAt: "2026-02-18T10:00:00.000Z"
  },
  {
    id: "prod-geyser-25l",
    name: "RO Point ThermoShield 25L Heavy Storage Geyser",
    slug: "ro-point-thermoshield-25l-heavy-storage-geyser",
    category: "Geyser",
    subcategory: "Storage Geyser",
    brand: "RO POINT",
    productCode: "ROP-GEY-025",
    price: 11500,
    discountPrice: 7499,
    discountPercentage: 34,
    stock: 16,
    capacity: "25 Litres",
    warranty: "5 Years Tank Warranty",
    description: "Heavy capacity 25 litre geyser designed for large joint families. High-grade nickel coated heating element resists hard borewell water scaling in Chomu.",
    features: [
      "25 Litres massive capacity for joint families",
      "Thick CFC-free PUF insulation preserves heat overnight",
      "Multi-function safety valve prevents back-siphoning"
    ],
    specifications: {
      "Capacity": "25 Litres",
      "Wattage": "2000 W",
      "Star Rating": "5 Star",
      "Inner Tank": "Vitreous Enamel Glassline"
    },
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Heavy Family Capacity",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 18,
    createdAt: "2026-02-20T10:00:00.000Z"
  },
  {
    id: "prod-geyser-instant-3l",
    name: "RO Point QuickHot 3L Instant Electric Geyser",
    slug: "ro-point-quickhot-3l-instant-geyser",
    category: "Geyser",
    subcategory: "Instant Geyser",
    brand: "RO POINT",
    productCode: "ROP-GEY-003",
    price: 4500,
    discountPrice: 2899,
    discountPercentage: 35,
    stock: 25,
    capacity: "3 Litres (Instant Heating)",
    warranty: "2 Years Comprehensive Warranty",
    description: "Super fast instant hot water geyser for kitchen sinks, washbasins, and quick bathroom use. Produces hot steaming water within 5 seconds with 3000W copper heating element.",
    features: [
      "Hot steaming water in just 5 seconds",
      "Compact design easily fits under kitchen sink",
      "High grade SS304 inner tank prevents rust"
    ],
    specifications: {
      "Capacity": "3 Litres",
      "Power": "3000 Watts",
      "Tank Material": "Stainless Steel 304"
    },
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Best for Kitchen Sink",
    status: "In Stock",
    rating: 4.7,
    reviewsCount: 31,
    createdAt: "2026-02-22T10:00:00.000Z"
  },

  // --- RO SPARE PARTS ---
  {
    id: "prod-part-membrane-80gpd",
    name: "Original 80 GPD High Rejection RO Membrane (Filmtec Style)",
    slug: "original-80-gpd-high-rejection-membrane",
    category: "RO Spare Parts",
    subcategory: "RO Membrane",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-MEM80",
    price: 2200,
    discountPrice: 1299,
    discountPercentage: 40,
    stock: 45,
    capacity: "80 Gallons Per Day (Up to 2500 PPM)",
    warranty: "Tested 96%+ TDS Rejection Guarantee",
    description: "Original 80 GPD thin film composite (TFC) spiral wound reverse osmosis membrane sheet. Effectively rejects heavy metals, arsenic, fluorides, lead, and salts with 96%+ TDS reduction in Rajasthan groundwater.",
    features: [
      "Handles harsh borewell water up to 2500+ PPM TDS",
      "High salt rejection rate above 96%",
      "Universal size fits standard 1812 domestic RO housings",
      "Compatible with Kent, Aquaguard, Livpure, Aqua Tejas & RO Point"
    ],
    specifications: {
      "Capacity": "80 GPD (Approx. 15 Litres/Hour)",
      "Rejection Rate": "96% - 98%",
      "Max Operating Pressure": "125 PSI"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Wholesale Rate Available in Shop",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 52,
    createdAt: "2026-02-25T10:00:00.000Z"
  },
  {
    id: "prod-part-booster-pump-100gpd",
    name: "RO Point 100 GPD Heavy 100% Copper Booster Pump 24V",
    slug: "ro-point-100-gpd-copper-booster-pump",
    category: "RO Spare Parts",
    subcategory: "Booster Pump",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-PUMP100",
    price: 2800,
    discountPrice: 1650,
    discountPercentage: 41,
    stock: 35,
    capacity: "100 GPD / 125-135 PSI",
    warranty: "1 Year Replacement Warranty",
    description: "100% pure copper winding diaphragm booster pump delivering strong consistent pressure for RO membranes. Ultra-silent operation with heavy anti-vibration rubber base feet.",
    features: [
      "100% Pure copper coil winding prevents overheating",
      "Produces stable 125-135 PSI operating pressure",
      "Universal fit for Kent, Aquaguard, Livpure & custom RO purifiers"
    ],
    specifications: {
      "Operating Voltage": "24V DC / 1.5A",
      "Working Pressure": "80 - 130 PSI",
      "Motor Coil": "100% Copper"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "1 Year Replacement Guarantee",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 44,
    createdAt: "2026-02-28T10:00:00.000Z"
  },
  {
    id: "prod-part-smps-adapter",
    name: "Heavy Duty 24V 2.5A Surge-Proof SMPS Power Supply",
    slug: "ro-point-24v-smps-power-supply",
    category: "RO Spare Parts",
    subcategory: "SMPS",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-SMPS24",
    price: 1100,
    discountPrice: 599,
    discountPercentage: 45,
    stock: 50,
    capacity: "24V DC 2.5 Amp Output",
    warranty: "1 Year Warranty",
    description: "Built-in lightning surge protector and high voltage auto-cutoff. Protects your booster pump and UV system from fluctuating village/city electric power.",
    features: [
      "Protects against voltage fluctuations from 130V to 290V AC",
      "Short-circuit and overload auto-recovery",
      "Flame retardant polycarbonate casing"
    ],
    specifications: {
      "Input": "140V - 280V AC 50Hz",
      "Output": "24V DC Stabilized 2.5A"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Voltage Fluctuation Proof",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 30,
    createdAt: "2026-03-01T10:00:00.000Z"
  },
  {
    id: "prod-part-inline-filter-set",
    name: "RO Point 4-Piece Complete Inline Filter Service Kit",
    slug: "ro-point-complete-inline-filter-kit",
    category: "RO Spare Parts",
    subcategory: "Inline Filter",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-INLINE4",
    price: 1600,
    discountPrice: 899,
    discountPercentage: 43,
    stock: 60,
    capacity: "Standard 10 Inch Inline Set",
    warranty: "Original Sealed Quality Guarantee",
    description: "All-in-one complete annual service kit containing: (1) 5-Micron Spun Sediment Filter, (2) Granular Activated Pre-Carbon Filter, (3) Post Carbon Taste Enhancer, and (4) Mineralizing Alkaline Cartridge with 1/4 push fittings.",
    features: [
      "Removes sand, silt, rust, and chemical chlorine",
      "Restores natural mineral sweetness to drinking water",
      "Compatible with Kent, Aquaguard, Livpure, Aqua Tejas & RO Point"
    ],
    specifications: {
      "Components": "Sediment + Pre-Carbon + Post-Carbon + Alkaline",
      "Cartridge Size": "10 Inch Standard",
      "Service Life": "6 to 12 Months"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    offer: "Annual Overhaul Pack",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 65,
    createdAt: "2026-03-03T10:00:00.000Z"
  },
  {
    id: "prod-part-uv-chamber",
    name: "Stainless Steel UV Chamber with 11W Philips UV Lamp",
    slug: "stainless-steel-uv-chamber-philips-lamp",
    category: "RO Spare Parts",
    subcategory: "UV Chamber",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-UVCHAM",
    price: 1800,
    discountPrice: 999,
    discountPercentage: 44,
    stock: 28,
    capacity: "11 Watt UV Radiation",
    warranty: "1 Year Ballast Warranty",
    description: "Food grade SS 304 ultraviolet disinfection chamber with genuine Philips 11W 4-pin UV lamp and high efficiency quartz glass sleeve. Eradicates 99.99% bacteria, viruses, and microbial cysts.",
    features: [
      "Pure SS304 electropolished chamber resists corrosion",
      "Original Philips 11 Watt UV lamp with long operating life",
      "Electronic choke ballast with audio buzzer alarm"
    ],
    specifications: {
      "Chamber Material": "Stainless Steel 304",
      "Lamp": "11 Watt Philips 4-Pin"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "100% Germ-Free Protection",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 21,
    createdAt: "2026-03-05T10:00:00.000Z"
  },
  {
    id: "prod-part-solenoid-valve",
    name: "Heavy Brass Core Solenoid Valve (SV) 24V DC",
    slug: "ro-point-solenoid-valve-24v",
    category: "RO Spare Parts",
    subcategory: "Solenoid Valve",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-SV24",
    price: 650,
    discountPrice: 349,
    discountPercentage: 46,
    stock: 75,
    capacity: "24V DC / 1/4 Inch Push-fit",
    warranty: "6 Months Replacement Warranty",
    description: "Controls water inlet flow to prevent wastage when power is off. High durability brass core with heat-resistant copper coil.",
    features: [
      "Zero leakage guaranteed under high inlet pressure",
      "Fast response magnetic shut-off in 0.2 seconds",
      "1/4 inch quick push connector fittings"
    ],
    specifications: {
      "Voltage": "24V DC",
      "Port Size": "1/4 Inch Tube Connector"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Heavy Brass Plunger",
    status: "In Stock",
    rating: 4.7,
    reviewsCount: 39,
    createdAt: "2026-03-08T10:00:00.000Z"
  },
  {
    id: "prod-part-tds-controller",
    name: "Precision Solid Brass Manual TDS Controller Valve",
    slug: "precision-brass-manual-tds-controller",
    category: "RO Spare Parts",
    subcategory: "TDS Controller",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-TDSV",
    price: 450,
    discountPrice: 199,
    discountPercentage: 55,
    stock: 80,
    capacity: "Adjustable 50 - 300 PPM TDS",
    warranty: "Lifetime Rust-Proof Body",
    description: "Allows users or technicians to fine-tune the mineral balance and TDS of purified drinking water to optimal sweet taste (100 - 150 PPM).",
    features: [
      "Full brass needle valve for accurate micro adjustment",
      "Push-fit 1/4 inch connections for easy installation",
      "Locks setting securely to avoid unwanted flow changes"
    ],
    specifications: {
      "Material": "Solid Forged Brass",
      "Inlet/Outlet": "1/4 Inch Standard RO Pipe"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Essential for Sweet Taste",
    status: "In Stock",
    rating: 4.8,
    reviewsCount: 29,
    createdAt: "2026-03-10T10:00:00.000Z"
  },
  {
    id: "prod-part-flow-restrictor",
    name: "RO Point Flow Restrictor FR-450 / FR-550",
    slug: "ro-point-flow-restrictor-fr450",
    category: "RO Spare Parts",
    subcategory: "Flow Restrictor",
    brand: "RO POINT Genuine",
    productCode: "ROP-PRT-FR450",
    price: 250,
    discountPrice: 99,
    discountPercentage: 60,
    stock: 90,
    capacity: "450 CC / 550 CC Drain Flow",
    warranty: "Tested Calibration",
    description: "Calibrated drain flow restrictor ensuring optimum back-pressure inside the RO membrane housing for maximum pure water recovery.",
    features: [
      "Maintains essential 60-80 PSI backpressure on membrane",
      "Quick connect push-in joints for leakproof fitting"
    ],
    specifications: {
      "Flow Rating": "450 ml / Minute",
      "Pipe Size": "1/4 Inch Standard"
    },
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    offer: "Best with 80 GPD Membrane",
    status: "In Stock",
    rating: 4.9,
    reviewsCount: 16,
    createdAt: "2026-03-12T10:00:00.000Z"
  }
];

export const INITIAL_ORDERS = [
  {
    id: "ord-101",
    customerName: "Mukesh Sharma",
    mobile: "9829123456",
    whatsapp: "9829123456",
    address: "Ward No 12, Near Bus Stand, Chomu",
    city: "Chomu",
    pincode: "303702",
    productName: "Kent Grand Plus RO+UV+UF+Alkaline Water Purifier",
    productId: "prod-kent-grand",
    quantity: 1,
    price: 14499,
    total: 14499,
    message: "Please deliver with free installation tomorrow morning.",
    status: "Confirmed",
    date: "2026-09-24T11:30:00.000Z"
  },
  {
    id: "ord-102",
    customerName: "Rameshwar Choudhary",
    mobile: "9414567890",
    whatsapp: "9414567890",
    address: "Choudhary Krishi Seva Kendra, Renwal Road",
    city: "Chomu",
    pincode: "303702",
    productName: "Commercial RO Plant 50 LPH Heavy Duty Skid",
    productId: "prod-comm-50lph",
    quantity: 1,
    price: 23500,
    total: 23500,
    message: "Need for coaching institute. Check raw water TDS first.",
    status: "New",
    date: "2026-09-25T14:15:00.000Z"
  }
];

export const FAQS_DATA = [
  {
    id: "faq-1",
    question: "Do you sell and service all leading RO brands like Kent, Aquaguard, Livpure, and Aqua Tejas in Chomu?",
    answer: "Yes! RO POINT is an authorized sales and service dealer for all leading brands including Kent, Aquaguard (Eureka Forbes), Livpure, Aqua Tejas, Pureit, and our custom RO Point heavy-TDS purifiers. We maintain 100% genuine spares for all models."
  },
  {
    id: "faq-2",
    question: "Can I bring my borewell or tap water to your shop in Chomu for free TDS testing?",
    answer: "Absolutely! Bring 500ml of your water sample to our store at Hanuman Ji Ke Mandir Ke Samne, Dholi Mandi, Renwal Road, Chomu. We test TDS, hardness, and fluoride levels in 2 minutes free of charge, and recommend the exact machine suited for your water."
  },
  {
    id: "faq-3",
    question: "Which RO is best for high TDS borewell water in Rajasthan?",
    answer: "For groundwater with TDS between 1000 to 2500+ PPM, we recommend Kent Grand Plus, Aqua Tejas Copper Alkaline, or RO Point Aqua Pure. All are equipped with high-rejection 80/100 GPD membranes and heavy copper booster pumps that prevent choking."
  },
  {
    id: "faq-4",
    question: "What capacity Commercial RO Plant should I buy for school, hostel, or factory?",
    answer: "• 25 LPH: Clinics, cafes, offices (up to 30 people)\n• 50 LPH: Coaching institutes, restaurants (50-100 people)\n• 100 LPH: Schools, hostels, small hotels (100-200 people)\n• 250 to 500 LPH: Marriage halls, large institutions (200-800 people)\n• 1000 to 10000 LPH: Bottling plants, factories, municipal projects.\nCall technical lead Ajahar at 7792901409 for on-site inspection!"
  },
  {
    id: "faq-5",
    question: "Do you supply wholesale RO spare parts to technicians and shops?",
    answer: "Yes! We supply original 80/100 GPD membranes, heavy copper pumps, 24V SMPS adapters, inline filter cartridges, UV chambers, solenoid valves, and push fittings at genuine wholesale prices across Chomu, Jaipur, and Renwal."
  },
  {
    id: "faq-6",
    question: "Do you provide home installation and breakdown repair services?",
    answer: "Yes, we provide same-day or next-day on-site installation, filter replacement, membrane descaling, and emergency breakdown repair across Chomu, Jaipur, Renwal, and nearby villages. Contact Raju at 9660063962 or Ajahar at 7792901409."
  }
];

export const BUSINESS_INFO = {
  name: "RO POINT",
  tagline: "Water Purifier & RO Solutions",
  owners: [
    { name: "Raju", phone: "9660063962", role: "Sales & Domestic RO Specialist" },
    { name: "Ajahar", phone: "7792901409", role: "Commercial Plants & Service Lead" }
  ],
  primaryPhone: "9660063962",
  secondaryPhone: "7792901409",
  whatsappNumber: "9660063962",
  address: "Hanuman Ji Ke Mandir Ke Samne, Dholi Mandi, Renwal Road, Chomu, Jaipur, Rajasthan – 303702",
  city: "Chomu, Jaipur",
  state: "Rajasthan",
  pincode: "303702",
  timing: "Monday to Sunday: 8:00 AM – 9:00 PM",
  email: "ropointchomu@gmail.com",
  brands: ["KENT", "Aquaguard", "Livpure", "Aqua Tejas", "RO POINT", "Pureit"]
};
