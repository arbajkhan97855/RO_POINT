import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService.js';
import { BUSINESS_INFO } from '../data/initialData.js';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Application Data States
  const [products, setProducts] = useState(() => storageService.getProducts());
  const [categories, setCategories] = useState(() => storageService.getCategories());
  const [banners, setBanners] = useState(() => storageService.getBanners());
  const [offers, setOffers] = useState(() => storageService.getOffers());
  const [orders, setOrders] = useState(() => storageService.getOrders());
  const [cart, setCart] = useState(() => storageService.getCart());
  const [wishlist, setWishlist] = useState(() => storageService.getWishlist());

  // Search & Navigation States
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderProduct, setOrderProduct] = useState(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);

  // Toast Notification
  const [toast, setToast] = useState(null);

  // Admin Auth
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => storageService.getAdminAuth());

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync state when storage changes in other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (!e.key || e.key.startsWith('ropoint_')) {
        setProducts(storageService.getProducts());
        setCategories(storageService.getCategories());
        setBanners(storageService.getBanners());
        setOffers(storageService.getOffers());
        setOrders(storageService.getOrders());
        setCart(storageService.getCart());
        setWishlist(storageService.getWishlist());
        setIsAdminLoggedIn(storageService.getAdminAuth());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Save Cart to Storage
  useEffect(() => {
    storageService.saveCart(cart);
  }, [cart]);

  // Save Wishlist to Storage
  useEffect(() => {
    storageService.saveWishlist(wishlist);
  }, [wishlist]);

  // --- PRODUCT CRUD ---
  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: `prod-${Date.now()}`,
      slug: productData.slug || productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const updated = [newProduct, ...products];
    setProducts(updated);
    storageService.saveProducts(updated);
    showToast(`Product "${newProduct.name}" added successfully!`);
    return newProduct;
  };

  const updateProduct = (id, updatedFields) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, ...updatedFields, updatedAt: new Date().toISOString() } : p
    );
    setProducts(updated);
    storageService.saveProducts(updated);
    showToast('Product updated successfully!');
  };

  const deleteProduct = (id) => {
    const target = products.find((p) => p.id === id);
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    storageService.saveProducts(updated);
    showToast(`Product "${target?.name || ''}" removed.`, 'info');
  };

  // --- CATEGORY CRUD ---
  const addCategory = (categoryData) => {
    const newCat = {
      ...categoryData,
      id: `cat-${Date.now()}`,
      slug: categoryData.slug || categoryData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      active: categoryData.active !== undefined ? categoryData.active : true
    };
    const updated = [...categories, newCat];
    setCategories(updated);
    storageService.saveCategories(updated);
    showToast(`Category "${newCat.name}" created!`);
  };

  const updateCategory = (id, updatedFields) => {
    const updated = categories.map((c) => (c.id === id ? { ...c, ...updatedFields } : c));
    setCategories(updated);
    storageService.saveCategories(updated);
    showToast('Category updated!');
  };

  const deleteCategory = (id) => {
    const updated = categories.filter((c) => c.id !== id);
    setCategories(updated);
    storageService.saveCategories(updated);
    showToast('Category removed.', 'info');
  };

  // --- BANNER CRUD ---
  const addBanner = (bannerData) => {
    const newBanner = {
      ...bannerData,
      id: `banner-${Date.now()}`,
      order: bannerData.order ? parseInt(bannerData.order) : banners.length + 1,
      active: bannerData.active !== undefined ? bannerData.active : true
    };
    const updated = [...banners, newBanner];
    setBanners(updated);
    storageService.saveBanners(updated);
    showToast('New Promotional Banner added to Home Page!');
  };

  const updateBanner = (id, updatedFields) => {
    const updated = banners.map((b) => (b.id === id ? { ...b, ...updatedFields } : b));
    setBanners(updated);
    storageService.saveBanners(updated);
    showToast('Banner updated successfully!');
  };

  const deleteBanner = (id) => {
    const updated = banners.filter((b) => b.id !== id);
    setBanners(updated);
    storageService.saveBanners(updated);
    showToast('Banner removed.', 'info');
  };

  // --- OFFER CRUD ---
  const addOffer = (offerData) => {
    const newOffer = {
      ...offerData,
      id: `offer-${Date.now()}`,
      active: offerData.active !== undefined ? offerData.active : true
    };
    const updated = [newOffer, ...offers];
    setOffers(updated);
    storageService.saveOffers(updated);
    showToast('New Offer published!');
  };

  const updateOffer = (id, updatedFields) => {
    const updated = offers.map((o) => (o.id === id ? { ...o, ...updatedFields } : o));
    setOffers(updated);
    storageService.saveOffers(updated);
    showToast('Offer updated successfully!');
  };

  const deleteOffer = (id) => {
    const updated = offers.filter((o) => o.id !== id);
    setOffers(updated);
    storageService.saveOffers(updated);
    showToast('Offer deleted.', 'info');
  };

  // --- CART OPERATIONS ---
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const updateCartQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + (item.product.discountPrice || item.product.price) * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- WISHLIST OPERATIONS ---
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Wishlist.`, 'info');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to Wishlist!`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((p) => p.id === productId);
  };

  // --- ORDER MODAL & WHATSAPP GENERATION ---
  const openOrderModal = (product = null) => {
    setOrderProduct(product);
    setOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setOrderModalOpen(false);
    setOrderProduct(null);
  };

  /**
   * Creates an order record locally, saves it for the Admin,
   * generates formatted WhatsApp message and triggers WhatsApp redirect!
   */
  const processOrderAndWhatsApp = (formData, customProduct = null, isCartCheckout = false) => {
    const isCart = isCartCheckout || !customProduct;
    let orderItemsSummary = '';
    let totalPrice = 0;
    let primaryProductName = '';

    if (isCart) {
      orderItemsSummary = cart
        .map((item, idx) => `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - ₹${((item.product.discountPrice || item.product.price) * item.quantity).toLocaleString('en-IN')}`)
        .join('\n');
      totalPrice = cartTotal;
      primaryProductName = `Cart Order (${cart.length} items)`;
    } else {
      const price = customProduct.discountPrice || customProduct.price;
      const qty = formData.quantity || 1;
      totalPrice = price * qty;
      primaryProductName = customProduct.name;
      orderItemsSummary = `1. ${customProduct.name} (Code: ${customProduct.productCode || 'ROP'}) - Qty: ${qty} - ₹${totalPrice.toLocaleString('en-IN')}`;
    }

    const newOrder = {
      id: `ord-${Date.now()}`,
      customerName: formData.customerName,
      mobile: formData.mobile,
      whatsapp: formData.whatsapp || formData.mobile,
      address: formData.address,
      city: formData.city || 'Chomu',
      pincode: formData.pincode || '303702',
      productName: primaryProductName,
      quantity: formData.quantity || (isCart ? cartCount : 1),
      price: customProduct ? (customProduct.discountPrice || customProduct.price) : totalPrice,
      total: totalPrice,
      message: formData.message || 'Please confirm delivery and installation.',
      status: 'New',
      date: new Date().toISOString()
    };

    // Save order in persistence layer
    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    storageService.saveOrders(updatedOrders);

    // Format WhatsApp message with professional spacing and emojis
    const waText = encodeURIComponent(
`*💧 NEW ORDER / ENQUIRY - RO POINT*
────────────────────
👤 *Customer Name:* ${formData.customerName}
📞 *Mobile:* ${formData.mobile}
💬 *WhatsApp:* ${formData.whatsapp || formData.mobile}

📍 *Delivery Address:*
${formData.address}, ${formData.city || 'Chomu'} - ${formData.pincode || '303702'}

🛍️ *Order Items:*
${orderItemsSummary}

💰 *Total Amount:* ₹${totalPrice.toLocaleString('en-IN')}

📝 *Customer Note:*
${formData.message || 'Direct Order via RO POINT Website'}
────────────────────
_Sent via RO POINT Chomu Website (Raju: 9660063962 | Ajahar: 7792901409)_`
    );

    // Clear cart if it was a cart checkout
    if (isCart) {
      clearCart();
    }

    closeOrderModal();
    showToast('Order details prepared! Opening WhatsApp...', 'success');

    // Open WhatsApp
    const primaryPhone = BUSINESS_INFO.primaryPhone; // 9660063962
    const waUrl = `https://wa.me/91${primaryPhone}?text=${waText}`;
    
    // Smooth popup or redirect
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);

    return newOrder;
  };

  /**
   * Quick WhatsApp enquiry URL generator for individual products
   */
  const getProductWhatsAppUrl = (product) => {
    const text = encodeURIComponent(
`Hello RO Point!
I am interested in *${product.name}* (Price: ₹${(product.discountPrice || product.price).toLocaleString('en-IN')}).
Please share complete details, stock availability, and installation support in Chomu/Jaipur.`
    );
    return `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${text}`;
  };

  // --- ADMIN ORDER STATUS UPDATE ---
  const updateOrderStatus = (orderId, newStatus) => {
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
    setOrders(updated);
    storageService.saveOrders(updated);
    showToast(`Order status updated to "${newStatus}"`);
  };

  // --- ADMIN AUTH ---
  const adminLogin = (username, password) => {
    // Verified local credentials for RO Point administration
    if ((username === 'admin' || username === 'ropoint' || username === 'raju') && (password === 'admin123' || password === 'ropoint@2026' || password === '9660063962')) {
      setIsAdminLoggedIn(true);
      storageService.setAdminAuth(true);
      showToast('Admin login successful. Welcome to RO POINT Control Center!');
      return true;
    }
    showToast('Invalid Username or Password. Please try again.', 'error');
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    storageService.setAdminAuth(false);
    showToast('Logged out of Admin successfully.');
  };

  // --- RESET & BACKUP UTILS ---
  const resetToDefaultData = () => {
    storageService.resetAllToDefaults();
    setProducts(storageService.getProducts());
    setCategories(storageService.getCategories());
    setBanners(storageService.getBanners());
    setOffers(storageService.getOffers());
    setOrders(storageService.getOrders());
    showToast('Reset all products, banners, and categories to default catalogue!', 'info');
  };

  const exportDatabase = () => {
    const jsonStr = storageService.exportDatabaseJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ropoint-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    showToast('Database exported successfully as JSON file!');
  };

  const importDatabase = (jsonStr) => {
    const ok = storageService.importDatabaseJSON(jsonStr);
    if (ok) {
      setProducts(storageService.getProducts());
      setCategories(storageService.getCategories());
      setBanners(storageService.getBanners());
      setOffers(storageService.getOffers());
      setOrders(storageService.getOrders());
      showToast('Database imported successfully!');
      return true;
    } else {
      showToast('Failed to import database file. Please verify JSON format.', 'error');
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        // Data
        products,
        categories,
        banners,
        offers,
        orders,
        cart,
        wishlist,
        searchQuery,
        setSearchQuery,
        cartTotal,
        cartCount,

        // Modals & UI
        orderModalOpen,
        orderProduct,
        openOrderModal,
        closeOrderModal,
        cartDrawerOpen,
        setCartDrawerOpen,
        wishlistModalOpen,
        setWishlistModalOpen,
        toast,
        showToast,

        // Cart & Wishlist
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        isInWishlist,

        // Order & WhatsApp
        processOrderAndWhatsApp,
        getProductWhatsAppUrl,

        // Admin Management
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        addBanner,
        updateBanner,
        deleteBanner,
        addOffer,
        updateOffer,
        deleteOffer,
        updateOrderStatus,
        resetToDefaultData,
        exportDatabase,
        importDatabase
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
