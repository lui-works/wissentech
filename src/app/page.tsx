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
        <HeroSection />
        <TrustedBy />
        <BootcampGrid />
        <SuccessStories />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
