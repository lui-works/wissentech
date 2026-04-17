const links: Record<string, { label: string; href: string }[]> = {
  Platform: [
    { label: 'Bootcamps', href: '#bootcamps' },
    { label: 'Kariyer Yolu', href: '#basvuru' },
    { label: 'Başarı Hikayeleri', href: '#basari-hikayeleri' },
    { label: 'Demo Talep Et', href: '#basvuru' },
  ],
  Şirket: [
    { label: 'Hakkımızda', href: '#hero' },
    { label: 'Eğitmenler', href: '#basari-hikayeleri' },
    { label: 'Kurumsal', href: '#basvuru' },
    { label: 'Blog', href: '#' },
  ],
  Hukuki: [
    { label: 'Gizlilik Politikası', href: '#' },
    { label: 'Kullanım Şartları', href: '#' },
    { label: 'KVKK', href: '#' },
  ],
  İletişim: [
    { label: 'info@wissentech.com', href: 'mailto:info@wissentech.com' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-20 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#hero" className="text-lg font-bold text-white block font-headline mb-3">
              Wissentech
            </a>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[200px]">
              Kariyer dönüşümü odaklı yazılım ve teknoloji eğitim platformu.
            </p>
            <a
              href="#basvuru"
              className="inline-flex items-center gap-2 mt-6 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-5 py-2.5 rounded-full text-sm glow-hover hover:scale-95 transition-transform duration-300"
            >
              Başvur
              <span className="material-symbols-outlined icon-filled text-[16px]">arrow_forward</span>
            </a>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="text-white font-medium text-sm mb-1">{category}</p>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-x-1 duration-200 block w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant/40 font-label">
            © 2024 Wissentech. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-on-surface-variant/40">
            Eğitim değil — kariyer dönüşümü.
          </p>
        </div>
      </div>
    </footer>
  )
}
