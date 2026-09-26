import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_BANNERS,
  INITIAL_OFFERS,
  INITIAL_ORDERS
} from '../data/initialData.js';

export const STORAGE_KEYS = {
  PRODUCTS: 'ropoint_products_v2',
  CATEGORIES: 'ropoint_categories_v2',
  BANNERS: 'ropoint_banners_v2',
  OFFERS: 'ropoint_offers_v2',
  ORDERS: 'ropoint_orders_v2',
  CART: 'ropoint_cart_v2',
  WISHLIST: 'ropoint_wishlist_v2',
  ADMIN_AUTH: 'ropoint_admin_session_v2'
};

export const getStoredData = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return fallback;
  }
};

export const saveStoredData = (key, data) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${key} to storage:`, err);
  }
};

export const storageService = {
  getProducts: () => getStoredData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS),
  saveProducts: (products) => saveStoredData(STORAGE_KEYS.PRODUCTS, products),

  getCategories: () => getStoredData(STORAGE_KEYS.CATEGORIES, INITIAL_CATEGORIES),
  saveCategories: (categories) => saveStoredData(STORAGE_KEYS.CATEGORIES, categories),

  getBanners: () => getStoredData(STORAGE_KEYS.BANNERS, INITIAL_BANNERS),
  saveBanners: (banners) => saveStoredData(STORAGE_KEYS.BANNERS, banners),

  getOffers: () => getStoredData(STORAGE_KEYS.OFFERS, INITIAL_OFFERS),
  saveOffers: (offers) => saveStoredData(STORAGE_KEYS.OFFERS, offers),

  getOrders: () => getStoredData(STORAGE_KEYS.ORDERS, INITIAL_ORDERS),
  saveOrders: (orders) => saveStoredData(STORAGE_KEYS.ORDERS, orders),

  getCart: () => getStoredData(STORAGE_KEYS.CART, []),
  saveCart: (cart) => saveStoredData(STORAGE_KEYS.CART, cart),

  getWishlist: () => getStoredData(STORAGE_KEYS.WISHLIST, []),
  saveWishlist: (wishlist) => saveStoredData(STORAGE_KEYS.WISHLIST, wishlist),

  getAdminAuth: () => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  },
  setAdminAuth: (val) => {
    if (typeof window === 'undefined') return;
    if (val) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
  },

  resetAllToDefaults: () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    localStorage.setItem(STORAGE_KEYS.BANNERS, JSON.stringify(INITIAL_BANNERS));
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(INITIAL_OFFERS));
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(INITIAL_ORDERS));
  },

  exportDatabaseJSON: () => {
    const data = {
      products: storageService.getProducts(),
      categories: storageService.getCategories(),
      banners: storageService.getBanners(),
      offers: storageService.getOffers(),
      orders: storageService.getOrders(),
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  },

  importDatabaseJSON: (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.products) storageService.saveProducts(parsed.products);
      if (parsed.categories) storageService.saveCategories(parsed.categories);
      if (parsed.banners) storageService.saveBanners(parsed.banners);
      if (parsed.offers) storageService.saveOffers(parsed.offers);
      if (parsed.orders) storageService.saveOrders(parsed.orders);
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  }
};
