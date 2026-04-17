import ApplyButton from './ApplyButton'

type Bootcamp = {
  icon: string
  title: string
  description: string
  duration: string
  accentClass: string
  borderHoverClass: string
  bgHoverClass: string
  textClass: string
}

const bootcamps: Bootcamp[] = [
  {
    icon: 'code_blocks',
    title: 'Full Stack Development',
    description: 'React, Node.js ve veritabanı mimarileriyle uçtan uca uygulama geliştirme yetkinliği kazanın. Gerçek dünya projeleriyle portföyünüzü oluşturun.',
    duration: '6 Ay • Yoğun Kamp',
    accentClass: 'text-primary',
    borderHoverClass: 'group-hover:border-primary/30',
    bgHoverClass: 'group-hover:bg-primary',
    textClass: 'text-primary',
  },
  {
    icon: 'analytics',
    title: 'Yapay Zeka & Veri Bilimi',
    description: 'Python, TensorFlow ve makine öğrenmesi modelleriyle büyük veriyi anlamlandırın. AI sektörünün talep ettiği yetkinliklere sahip olun.',
    duration: '5 Ay • Hafta Sonu',
    accentClass: 'text-secondary',
    borderHoverClass: 'group-hover:border-secondary/30',
    bgHoverClass: 'group-hover:bg-secondary',
    textClass: 'text-secondary',
  },
  {
    icon: 'terminal',
    title: 'Backend & .NET / Java',
    description: '.NET, Java ve Python teknolojileriyle güçlü backend sistemleri tasarlayın. SQL ve API mimarileri konusunda uzmanlaşın.',
    duration: '4 Ay • Akşam Programı',
    accentClass: 'text-tertiary',
    borderHoverClass: 'group-hover:border-tertiary/30',
    bgHoverClass: 'group-hover:bg-tertiary',
    textClass: 'text-tertiary',
  },
  {
    icon: 'web',
    title: 'Frontend Development',
    description: 'Modern arayüzler geliştirip kullanıcı deneyimini şekillendirin. React, TypeScript ve responsive tasarım prensipleriyle öne çıkın.',
    duration: '3 Ay • Yoğun',
    accentClass: 'text-primary',
    borderHoverClass: 'group-hover:border-primary/30',
    bgHoverClass: 'group-hover:bg-primary',
    textClass: 'text-primary',
  },
  {
    icon: 'storage',
    title: 'Veritabanı & SQL',
    description: 'İlişkisel ve NoSQL veritabanı yönetiminde ustalaşın. Veri modelleme, performans optimizasyonu ve güvenlik konularını kavrayın.',
    duration: '2 Ay • Temel–İleri',
    accentClass: 'text-secondary',
    borderHoverClass: 'group-hover:border-secondary/30',
    bgHoverClass: 'group-hover:bg-secondary',
    textClass: 'text-secondary',
  },
  {
    icon: 'corporate_fare',
    title: 'Kurumsal Eğitimler',
    description: 'Şirketinizin ihtiyaçlarına özel tasarlanmış eğitim programları. Ekibinizi sektörün en güncel teknolojileriyle donatın.',
    duration: 'Özel Program • Esnek',
    accentClass: 'text-tertiary',
    borderHoverClass: 'group-hover:border-tertiary/30',
    bgHoverClass: 'group-hover:bg-tertiary',
    textClass: 'text-tertiary',
  },
]

export default function BootcampGrid() {
  return (
    <section className="py-32 px-6 md:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="mb-16 md:mb-20">
        <p className="text-xs font-medium text-primary tracking-widest uppercase mb-4">Eğitim Programları</p>
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
          Kariyer Yolunuzu Seçin
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Sektörün ihtiyaçlarına göre şekillenmiş, proje odaklı ve yoğun eğitim modülleriyle uzmanlaşın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {bootcamps.map((camp) => (
          <div
            key={camp.title}
            className="group bg-surface-container-low rounded-xl p-8 hover:bg-surface-container-highest transition-colors duration-300 border border-transparent hover:border-outline-variant/15 flex flex-col h-full"
          >
            <div className={`w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center mb-8 border border-outline-variant/10 ${camp.borderHoverClass} transition-colors`}>
              <span className={`material-symbols-outlined icon-filled ${camp.accentClass} text-[28px]`}>
                {camp.icon}
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold text-white mb-3">{camp.title}</h3>
            <p className="text-on-surface-variant mb-8 flex-grow text-sm leading-relaxed">{camp.description}</p>
            <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
              <span className={`text-sm font-medium ${camp.textClass}`}>{camp.duration}</span>
              <ApplyButton className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center ${camp.bgHoverClass} group-hover:text-on-primary transition-all duration-300`}>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </ApplyButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
