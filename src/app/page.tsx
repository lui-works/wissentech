import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustedBy from '@/components/TrustedBy'
import BootcampGrid from '@/components/BootcampGrid'
import SuccessStories from '@/components/SuccessStories'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <TrustedBy />
        <section id="bootcamps">
          <BootcampGrid />
        </section>
        <section id="basari-hikayeleri">
          <SuccessStories />
        </section>
        <section id="basvuru">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  )
}
