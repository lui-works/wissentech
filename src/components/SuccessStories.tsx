const secondary = [
  {
    name: 'Caner Demir',
    role: 'Data Scientist @ InnovateX',
    quote: 'Sıfır kodlama bilgisiyle başladığım eğitim serüveni, bugün beni veri bilimi ekibinin başına taşıdı.',
    roleClass: 'text-secondary',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3hkYmuD2pIqmlxqcDRVe7DQlOspEm9pA-MGjq7M1zu7sMEm21Yh9eTHCdLBnE3XV0VDacTMyfTOU5Ig8zfcYgQOmYefjTDyAdug4rhJzA4x3oLTEvU3i4ifRGBmpjhVkYXPuXejx2v5Dxhl99CdGgKR57MnnUU_kCp7mEFDxNO-QXhwSKoou3gvSClM8KkpfqXvuSsh3ZX3UGwOf3HZCbaoiwOyCSmbwBXnl0XQzyd4GPyz-mjwc3MUl1kUi692Ydi4yr4_b16TYV',
  },
  {
    name: 'Elif Kılıç',
    role: 'DevOps Engineer @ GlobalNet',
    quote: 'Teorik bilginin ötesinde, sektörde kullanılan gerçek mimarileri kurgulamayı öğrendik.',
    roleClass: 'text-tertiary',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSxLGCXjfIGA5P0P4yQ-J56g5FJUPTcWyAdjosWouSAbgIolZiPQ6yFytfVwBdvx1HOKvsyKVJId6ij6gct6wrV-ZB70X0eishSC0z1XR_-1H4ttvqWoEyXUkQq1HdgFmAHTJRFfDfza0Uctul9D71E89Fkksdry-4jPsgVbAXk7p43CPrsU-omFBCY1gSW8l-PNkjp-Dtf0CmDfZTffNYPtzTdKTYyZ-AQ4jewyGdNxR0Y7dLuAKnLCVKjaQ4ZUvxhRGg7UEGtdPC',
  },
]

export default function SuccessStories() {
  return (
    <section className="py-32 px-6 md:px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-xs font-medium text-primary tracking-widest uppercase mb-4">Başarı Hikayeleri</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Gerçek Sonuçlar
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl">
              Mezunlarımız edindikleri yetkinliklerle sektörün öncü teknoloji şirketlerinde
              kariyerlerini yeniden şekillendiriyor.
            </p>
          </div>
          <button className="shrink-0 px-6 py-3 rounded-full border border-outline-variant/15 text-white font-medium hover:bg-surface-container transition-colors flex items-center gap-2 text-sm">
            Tüm Hikayeler
            <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured story */}
          <div className="relative rounded-2xl overflow-hidden group h-[460px] md:h-[500px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDup9P9DpkfxYCjV7c6ibM3J9UWeGhmWdkxwMZDCD2RdrvX9yyoDA0FLHYuh8q2MiGq-7VbPH6Gc-0w1lNdUsV-eRvmE3mdcVkEqX1OhuG6A0oeyMnA_P5Vz3PY9hcoqiLcdJH0sY37SWn4ickz1xBKGKbZnPtpUQxj8h8r1NO93VMaU3nHwPtKP1eamW6ec1QjWcgEhYanPiDj7aSEiVIqBcwU2WFtmS5znddv6EiPCwlQSgj7B1QsRMoXQEvxd4rTA5EKwGaolzYj"
              alt="Başarı hikayesi - Ayşe Yılmaz"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 cursor-pointer hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined icon-filled text-white text-[28px]">play_arrow</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-1">Ayşe Yılmaz</h3>
              <p className="text-primary font-medium mb-3 text-sm">Senior Frontend Developer @ TechCorp</p>
              <p className="text-on-surface-variant/90 max-w-md text-sm leading-relaxed line-clamp-2">
                "Akademi'deki yoğun tempo, gerçek dünya projelerine olan yaklaşımımı tamamen değiştirdi.
                6 ayda portföyümü oluşturup iş teklifimi aldım."
              </p>
            </div>
          </div>

          {/* Secondary stories */}
          <div className="flex flex-col gap-6 md:gap-8">
            {secondary.map((story) => (
              <div
                key={story.name}
                className="bg-surface-container-low p-6 md:p-8 rounded-2xl flex gap-5 md:gap-6 border border-outline-variant/10 hover:border-outline-variant/30 transition-colors flex-1"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0">
                  <img
                    src={story.src}
                    alt={story.name}
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-headline font-bold text-white mb-1">{story.name}</h4>
                  <p className={`text-sm font-medium mb-3 ${story.roleClass}`}>{story.role}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{story.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
