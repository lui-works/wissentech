'use client'

import { useEffect, useState } from 'react'

type FormState = 'idle' | 'loading' | 'success'

export default function ApplyModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-apply-modal', handler)
    return () => window.removeEventListener('open-apply-modal', handler)
  }, [])

  function close() {
    setOpen(false)
    setTimeout(() => setStatus('idle'), 400)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-surface-container-low border border-outline-variant/20 rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)] z-10 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/15 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-xs font-medium text-primary tracking-widest uppercase mb-2">Ücretsiz Danışmanlık</p>
              <h2 className="font-headline text-2xl font-bold text-white">Başvuru Formu</h2>
            </div>
            <button
              onClick={close}
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined icon-filled text-primary text-[32px]">check_circle</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-3">Başvurunuz Alındı!</h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Danışmanımız 24 saat içinde sizinle iletişime geçecek.
              </p>
              <button
                onClick={close}
                className="px-8 py-3 rounded-full border border-outline-variant/20 text-white font-medium hover:bg-surface-container-high transition-colors text-sm"
              >
                Kapat
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">Ad Soyad</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    className="bg-transparent border-b-2 border-outline-variant/20 focus:border-primary outline-none py-3 text-white placeholder:text-on-surface-variant/30 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">E-posta</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    className="bg-transparent border-b-2 border-outline-variant/20 focus:border-primary outline-none py-3 text-white placeholder:text-on-surface-variant/30 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">Telefon</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="bg-transparent border-b-2 border-outline-variant/20 focus:border-primary outline-none py-3 text-white placeholder:text-on-surface-variant/30 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">Program</label>
                  <select
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    className="bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary outline-none py-3 text-white transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-surface-container-low">Seçin</option>
                    <option value="fullstack" className="bg-surface-container-low">Full Stack Development</option>
                    <option value="ai" className="bg-surface-container-low">Yapay Zeka & Veri Bilimi</option>
                    <option value="backend" className="bg-surface-container-low">Backend & .NET / Java</option>
                    <option value="frontend" className="bg-surface-container-low">Frontend Development</option>
                    <option value="sql" className="bg-surface-container-low">Veritabanı & SQL</option>
                    <option value="corporate" className="bg-surface-container-low">Kurumsal Eğitim</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">Mesaj (opsiyonel)</label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Kendinizden kısaca bahsedin..."
                  className="bg-transparent border-b-2 border-outline-variant/20 focus:border-primary outline-none py-3 text-white placeholder:text-on-surface-variant/30 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-8 py-4 rounded-full hover:scale-95 transition-transform duration-300 glow-hover text-base tracking-tight flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100 w-full"
              >
                {status === 'loading' ? (
                  <>
                    <span className="material-symbols-outlined icon-filled text-[20px] animate-spin">progress_activity</span>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Başvuruyu Gönder
                    <span className="material-symbols-outlined icon-filled text-[20px]">rocket_launch</span>
                  </>
                )}
              </button>

              <p className="text-center text-on-surface-variant/40 text-xs">
                Ücretsiz danışmanlık · Bağlayıcı değil · 24 saat içinde yanıt
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
