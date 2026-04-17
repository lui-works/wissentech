const companies = ['TECHCORP', 'INNOVATEX', 'GLOBALNET', 'NEXUS', 'AERODYNE', 'DATASPHERE']

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-outline-variant/10 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-center text-xs font-medium text-on-surface-variant tracking-widest uppercase mb-10">
          Mezunlarımızın Çalıştığı Kurumlar
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-70 transition-opacity duration-500">
          {companies.map((name) => (
            <span key={name} className="font-headline font-bold text-xl md:text-2xl tracking-tighter text-white">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
