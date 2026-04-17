'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <span className="text-xl font-black text-white tracking-tighter font-headline">
          Wissentech
        </span>

        <div className="hidden md:flex items-center space-x-1">
          {['Bootcamps', 'Başarı Hikayeleri', 'Kariyer Yolu'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface-variant font-medium hover:text-white transition-colors hover:bg-white/5 px-3 py-2 rounded-lg duration-300 text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-6 py-2.5 rounded-full hover:scale-95 transition-transform duration-300 glow-hover text-sm tracking-tight hidden sm:block">
            Başvur
          </button>
          <button
            className="md:hidden text-on-surface-variant hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/10 px-6 py-4 flex flex-col gap-2">
          {['Bootcamps', 'Başarı Hikayeleri', 'Kariyer Yolu'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface-variant hover:text-white py-2 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-6 py-3 rounded-full text-sm tracking-tight">
            Başvur
          </button>
        </div>
      )}
    </nav>
  )
}
