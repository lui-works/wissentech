const links: Record<string, string[]> = {
  Platform: ['Bootcamps', 'Kariyer Yolu', 'Başarı Hikayeleri', 'Demo Talep Et'],
  Şirket: ['Hakkımızda', 'Eğitmenler', 'Kurumsal', 'Blog'],
  Hukuki: ['Gizlilik Politikası', 'Kullanım Şartları', 'KVKK'],
  İletişim: ['info@wissentech.com', 'LinkedIn', 'Instagram'],
}

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-20 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="text-lg font-bold text-white block font-headline mb-3">Wissentech</span>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[200px]">
              Kariyer dönüşümü odaklı yazılım ve teknoloji eğitim platformu.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="text-white font-medium text-sm mb-1">{category}</p>
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-x-1 duration-200 block w-fit"
                >
                  {item}
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
