import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Principles } from '@/components/sections/Principles'
import { Projects } from '@/components/sections/Projects'
import { Studio } from '@/components/sections/Studio'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Principles />
      <Projects />
      <Studio />
      <Contact />
      <Footer />
    </main>
  )
}
