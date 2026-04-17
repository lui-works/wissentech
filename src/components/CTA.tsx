'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section className="py-32 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-container z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-primary/20 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-primary tracking-widest uppercase mb-6">Sonraki Adımınız</p>
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 text-white leading-[1.05]">
            Geleceğinizi Kodlamaya
            <br />
            Hazır mısınız?
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-body leading-relaxed">
            Sınırlı kontenjana sahip yeni dönem eğitimlerimizde yerinizi ayırtın.
            Danışmanımız en kısa sürede sizinle iletişime geçecek.
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-md mx-auto text-center bg-surface-container-low rounded-2xl p-12 border border-outline-variant/15">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined icon-filled text-primary text-[32px]">check_circle</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-3">Başvurunuz Alındı!</h3>
            <p className="text-on-surface-variant">
              Danışmanımız 24 saat içinde sizinle iletişime geçecek.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/15 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Ad Soyad */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-on-surface-variant">Ad Soyad</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Adınız Soyadınız"
                className="bg-surface-container border-b-2 border-outline-variant/20 focus:border-primary outline-none px-0 py-3 text-white placeholder:text-on-surface-variant/40 transition-colors text-sm"
              />
            </div>

            {/* E-posta */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-on-surface-variant">E-posta</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="ornek@email.com"
                className="bg-surface-container border-b-2 border-outline-variant/20 focus:border-primary outline-none px-0 py-3 text-white placeholder:text-on-surface-variant/40 transition-colors text-sm"
              />
            </div>

            {/* Telefon */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-on-surface-variant">Telefon</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+90 5XX XXX XX XX"
                className="bg-surface-container border-b-2 border-outline-variant/20 focus:border-primary outline-none px-0 py-3 text-white placeholder:text-on-surface-variant/40 transition-colors text-sm"
              />
            </div>

            {/* Program */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-on-surface-variant">İlgilendiğiniz Program</label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="bg-surface-container border-b-2 border-outline-variant/20 focus:border-primary outline-none px-0 py-3 text-white transition-colors text-sm appearance-none"
              >
                <option value="" className="bg-surface-container">Program seçin</option>
                <option value="fullstack" className="bg-surface-container">Full Stack Development</option>
                <option value="ai" className="bg-surface-container">Yapay Zeka & Veri Bilimi</option>
                <option value="backend" className="bg-surface-container">Backend & .NET / Java</option>
                <option value="frontend" className="bg-surface-container">Frontend Development</option>
                <option value="sql" className="bg-surface-container">Veritabanı & SQL</option>
                <option value="corporate" className="bg-surface-container">Kurumsal Eğitim</option>
              </select>
            </div>

            {/* Mesaj */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-on-surface-variant">Mesajınız (opsiyonel)</label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Kendinizden kısaca bahsedin..."
                className="bg-surface-container border-b-2 border-outline-variant/20 focus:border-primary outline-none px-0 py-3 text-white placeholder:text-on-surface-variant/40 transition-colors text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-12 py-4 rounded-full hover:scale-95 transition-transform duration-300 glow-hover text-base tracking-tight flex items-center gap-3 disabled:opacity-70 disabled:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <span className="material-symbols-outlined icon-filled text-[20px] animate-spin">progress_activity</span>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Hemen Başvur
                    <span className="material-symbols-outlined icon-filled text-[20px]">rocket_launch</span>
                  </>
                )}
              </button>
              <p className="text-on-surface-variant/50 text-xs">
                Ücretsiz danışmanlık · Bağlayıcı değil
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
