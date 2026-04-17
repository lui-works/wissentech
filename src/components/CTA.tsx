import ApplyButton from './ApplyButton'

export default function CTA() {
  return (
    <section className="py-32 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-container z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-primary/20 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="text-xs font-medium text-primary tracking-widest uppercase mb-6">Sonraki Adımınız</p>
        <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 text-white leading-[1.05]">
          Geleceğinizi Kodlamaya
          <br />
          Hazır mısınız?
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-body leading-relaxed">
          Sınırlı kontenjana sahip yeni dönem eğitimlerimizde yerinizi ayırtın.
          Danışmanımız en kısa sürede sizinle iletişime geçecek.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ApplyButton className="bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-12 py-5 rounded-full hover:scale-95 transition-transform duration-300 glow-hover text-lg tracking-tight flex items-center gap-3">
            Hemen Başvur
            <span className="material-symbols-outlined icon-filled text-[24px]">rocket_launch</span>
          </ApplyButton>
          <ApplyButton className="px-8 py-5 rounded-full border border-outline-variant/15 text-on-surface font-semibold hover:bg-surface-container-high transition-colors duration-300 text-base">
            Demo Talep Et
          </ApplyButton>
        </div>
        <p className="text-on-surface-variant/50 text-sm mt-6">
          Ücretsiz danışmanlık görüşmesi · Bağlayıcı değil
        </p>
      </div>
    </section>
  )
}
