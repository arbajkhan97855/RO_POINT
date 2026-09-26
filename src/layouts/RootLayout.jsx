import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import Toast from '../components/common/Toast.jsx';
import OrderModal from '../components/modals/OrderModal.jsx';
import CartDrawer from '../components/modals/CartDrawer.jsx';
import WishlistModal from '../components/modals/WishlistModal.jsx';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData.js';

export default function RootLayout() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Action Button for Quick WhatsApp Access */}
      <a
        href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello RO POINT! I would like to enquire about your Water Purifiers and Service in Chomu.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Chat with Raju & Ajahar
        </span>
      </a>

      {/* Interactive Global Modals & Drawers */}
      <OrderModal />
      <CartDrawer />
      <WishlistModal />
      <Toast />
    </div>
  );
}
