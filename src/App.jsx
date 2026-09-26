import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import AllProductsPage from './pages/AllProductsPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import OffersPage from './pages/OffersPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import {
  PrivacyPolicyPage,
  TermsPage,
  ShippingPage,
  ReturnsPage
} from './pages/PolicyPages.jsx';

// Admin Pages
import AdminLoginPage from './admin/pages/AdminLoginPage.jsx';
import AdminDashboardPage from './admin/pages/AdminDashboardPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Store Layout Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="domestic-ro" element={<CategoryPage targetCategory="Domestic RO" />} />
          <Route path="commercial-ro" element={<CategoryPage targetCategory="Commercial RO Plants" />} />
          <Route path="geyser" element={<CategoryPage targetCategory="Geyser" />} />
          <Route path="ro-parts" element={<CategoryPage targetCategory="RO Spare Parts" />} />
          <Route path="product/:slug" element={<ProductDetailsPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="returns" element={<ReturnsPage />} />
        </Route>

        {/* Dedicated Admin Portal Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
