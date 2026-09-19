"use client";

import { useState } from "react";

const destinations = [
  "Norteamérica",
  "Caribe",
  "Centroamérica",
  "Sudamérica",
  "Europa",
  "África",
  "Asia",
  "Oceanía",
  "Antártida",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-semibold tracking-[0.15em] text-slate-900"
        >
          ARIS
          <span className="ml-1 text-sm font-normal tracking-normal text-amber-600">
            TRAVEL
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          
          {/* Destinations */}
          <div className="relative">
            <button
              onClick={() => setDestinationsOpen(!destinationsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-amber-600"
            >
              Destinos
              <span className="text-xs">⌄</span>
            </button>

            {destinationsOpen && (
              <div className="absolute left-0 top-10 w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                {destinations.map((destination) => (
                  <a
                    key={destination}
                    href="#"
                    className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-amber-50 hover:text-amber-700"
                  >
                    {destination}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#packages"
            className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
          >
            Paquetes
          </a>

          <a
            href="#cruises"
            className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
          >
            Cruceros
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
          >
            Nosotros
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
          >
            Contacto
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-600"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-900 md:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            
            <button
              onClick={() => setDestinationsOpen(!destinationsOpen)}
              className="text-left text-sm font-medium text-slate-700"
            >
              Destinos
            </button>

            {destinationsOpen && (
              <div className="ml-4 flex flex-col gap-3 border-l border-slate-200 pl-4">
                {destinations.map((destination) => (
                  <a
                    key={destination}
                    href="#"
                    className="text-sm text-slate-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {destination}
                  </a>
                ))}
              </div>
            )}

            <a href="#packages" className="text-sm font-medium text-slate-700">
              Paquetes
            </a>

            <a href="#cruises" className="text-sm font-medium text-slate-700">
              Cruceros
            </a>

            <a href="#about" className="text-sm font-medium text-slate-700">
              Nosotros
            </a>

            <a href="#contact" className="text-sm font-medium text-slate-700">
              Contacto
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}