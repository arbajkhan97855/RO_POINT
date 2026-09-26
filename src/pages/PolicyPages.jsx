import React from 'react';
import { ShieldCheck, Truck, RotateCcw, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData.js';

export function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">RO POINT Policies</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Privacy Policy</h1>
          <p className="text-xs text-slate-400 mt-1">Last Updated: September 2026</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Customer Information We Collect</h2>
          <p>
            When you place an order or enquiry on the <strong>RO POINT</strong> website, we collect your name, mobile number, WhatsApp number, and delivery address. This information is solely used to process your water purifier order, arrange local delivery, provide on-site installation, and communicate technical updates.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. How Your Data is Used</h2>
          <p>
            We do NOT sell, rent, or trade your personal contact details to any third-party marketing companies. Data is used exclusively by the RO POINT management team in Chomu, Jaipur to fulfill customer service requests and warranty records.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Contact for Privacy Inquiries</h2>
          <p>
            If you have questions about your stored order details, contact Raju at 9660063962 or visit our shop at Hanuman Ji Ke Mandir Ke Samne, Dholi Mandi, Renwal Road, Chomu, Jaipur.
          </p>
        </section>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">RO POINT Legal</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Terms & Conditions</h1>
          <p className="text-xs text-slate-400 mt-1">Last Updated: September 2026</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Pricing & Availability</h2>
          <p>
            All prices listed on <strong>RO POINT</strong> are in Indian Rupees (INR) and include applicable taxes. We strive to maintain accurate stock availability, but prices and festive gift offers (such as the Navratri Electronic Gas Chulha promotion) are subject to stock availability and prior confirmation with our sales team.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Ordering & Payment Mode</h2>
          <p>
            Orders placed via our website generate a direct WhatsApp message to our store. Payment can be made via Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm), or direct bank transfer upon installation and testing of the water purifier.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Warranty Terms</h2>
          <p>
            Domestic RO purifiers include a 1-year warranty on booster pumps and SMPS power units. Consumable items like sediment filters, carbon filters, and membranes have normal operating lifespans that depend on raw water TDS and sediment levels.
          </p>
        </section>
      </div>
    </div>
  );
}

export function ShippingPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">RO POINT Logistics</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Shipping & Delivery Information</h1>
        </div>

        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-start gap-3">
          <Truck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-sky-900 block">Fast Local Service across Jaipur & Chomu:</span>
            <p className="text-sky-800 mt-0.5">
              Same-day delivery and doorstep installation available throughout Chomu municipal area and nearby villages along Renwal Road.
            </p>
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Delivery Zones</h2>
          <p>
            • <strong>Local Chomu Area:</strong> Same-day or within 24 hours.<br />
            • <strong>Jaipur District & Renwal:</strong> Within 24 - 48 hours.<br />
            • <strong>Other Rajasthan Districts:</strong> Commercial plants and bulk spare orders dispatched via local transport.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Free Installation Support</h2>
          <p>
            All standard domestic RO purifiers and storage geysers include free delivery and on-site wall-mounting assistance by our certified technicians in Chomu.
          </p>
        </section>
      </div>
    </div>
  );
}

export function ReturnsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">RO POINT Guarantee</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Return & Replacement Policy</h1>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
          <RotateCcw className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-emerald-900 block">7-Day Free Replacement for Manufacturing Defects:</span>
            <p className="text-emerald-800 mt-0.5">
              If your water purifier or spare component suffers from a manufacturing defect upon installation, we replace it immediately without hassle.
            </p>
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Replacement Process</h2>
          <p>
            Notify our service technician at 9660063962 / 7792901409. Our team will visit your location in Chomu to inspect the issue and replace any faulty electrical component, pump, or membrane free of charge.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Exchange Policy for Old RO Purifiers</h2>
          <p>
            We also offer an attractive trade-in / exchange bonus when you upgrade your old non-working RO unit for a brand new RO POINT system.
          </p>
        </section>
      </div>
    </div>
  );
}
