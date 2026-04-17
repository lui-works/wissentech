export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 px-6 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="lg:w-1/2 flex flex-col items-start z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-on-surface-variant tracking-wide uppercase">
            Yeni Dönem Kayıtları Başladı
          </span>
        </div>

        <h1 className="font-headline text-[3rem] md:text-[3.5rem] leading-[1.1] font-extrabold tracking-[-0.02em] mb-6 text-white text-balance">
          Kariyerinizi <br />
          <span className="text-gradient">Kodla Yeniden İnşa Edin</span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-body">
          Sıfırdan zirveye uzanan yoğun teknoloji eğitimleriyle geleceğin mimarı olun.
          18+ yıllık deneyim ve 3.000'den fazla mezunla Türkiye'nin en güçlü kariyer
          dönüşüm ekosistemine katılın.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#basvuru"
            className="bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-8 py-4 rounded-full hover:scale-95 transition-transform duration-300 glow-hover text-base tracking-tight flex items-center justify-center gap-2"
          >
            Başvurunu Yap
            <span className="material-symbols-outlined icon-filled text-[20px]">arrow_forward</span>
          </a>
          <a
            href="#bootcamps"
            className="px-8 py-4 rounded-full border border-outline-variant/15 text-on-surface font-semibold hover:bg-surface-container-high transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            Programları İncele
          </a>
        </div>

        <div className="flex items-center gap-8 mt-12">
          {[
            { value: '%92', label: 'İşe Yerleşme' },
            { value: '3K+', label: 'Mezun' },
            { value: '18+', label: 'Yıl Deneyim' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-headline font-bold text-white">{stat.value}</p>
              <p className="text-xs text-on-surface-variant mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 relative w-full aspect-square max-w-[560px] z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-surface to-transparent z-10 pointer-events-none rounded-3xl" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0SkNM8uzH7jKQrZuQ9LKBd0J24HWOWUzdgVvx5AYXCLpAzcYfjGbq4sW48o0w5Z3Nc-BwYtH1X_G2b94GNf5RGN2dX66skIZjkkf7wd6JqfnVYh2eA922-ibSgrVlgArK4b-Ae2VNmBi4dFJHLdVbXXiPS9s7o3hkyNJxURcJW-04u6lD_m3W7x7OJmirmphQSEvJeZ0fqDaborsIZ9rF2cKbGQGkEy3NfFOCt44PZ5uwCH6ryPUDtSZ-fp3DxQB4reiKfsrrVxpL"
          alt="Modern teknoloji eğitim ortamı"
          className="w-full h-full object-cover rounded-3xl opacity-80 mix-blend-luminosity border border-outline-variant/10"
        />
        <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-surface-container-highest/80 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-outline-variant/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined icon-filled text-primary text-[24px]">school</span>
            </div>
            <div>
              <p className="text-3xl font-headline font-bold text-white">%92</p>
              <p className="text-sm text-on-surface-variant font-medium">İşe Yerleşme Oranı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
