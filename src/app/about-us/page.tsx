import { AboutUs } from '@/components/organisms/AboutUs'
import { Authors } from '@/components/organisms/Authors'
import { Hallmarks } from '@/components/organisms/Hallmarks'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function About() {
  return (
    <main>
      <MainHeader image='/hero-about.png' />
      <AboutUs />
      <Authors />
      <Hallmarks image='/hallmarks-bg.png' location="about"/>
    </main>
  )
}
