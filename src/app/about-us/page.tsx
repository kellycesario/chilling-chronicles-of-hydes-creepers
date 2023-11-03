import { AboutUs } from '@/components/organisms/AboutUs'
import { Advertising } from '@/components/organisms/Advertising'
import { Authors } from '@/components/organisms/Authors'
import { Hallmarks } from '@/components/organisms/Hallmarks'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function About() {
  return (
    <main>
      <MainHeader image='/hero-about.png' />
      <AboutUs />
      <Authors />
      <Advertising
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-slot='6765860573'
      />
      <Hallmarks image='/hallmarks-bg.png' location='about' />
    </main>
  )
}
