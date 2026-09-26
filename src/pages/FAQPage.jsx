import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { FAQS_DATA, BUSINESS_INFO } from '../data/initialData.js';

export default function FAQPage() {
  const [openId, setOpenId] = useState('faq-1');

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            Water Purification Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto">
            Everything you need to know about water TDS levels, domestic purifiers, commercial RO plants, and genuine spare parts.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-sky-300 shadow-md ring-2 ring-sky-50' : 'border-slate-200/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 whitespace-pre-line bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Callout */}
        <div className="p-6 rounded-3xl bg-sky-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-base sm:text-lg">Still have water queries?</h3>
            <p className="text-xs text-sky-200 mt-1">
              Talk directly with technical specialists Raju or Ajahar for honest guidance.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-4 py-2.5 bg-white text-slate-900 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call {BUSINESS_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
