import Image from 'next/image'
import ExpeditionsCover from './ExpeditionsCover'
import { Franklin } from '../components/localFonts'
import CtaButton from '../components/ctaButton'

export default function Home() {
  let h2ClassName = `text-3xl uppercase tracking-[0.1em] + ${Franklin.className} `

  return (
    <>
        <ExpeditionsCover/>
        
        <div className="relative z-1 bg-white">    
          <section className="max-w-prose mx-auto py-8 px-2 md:px-0 text-brown pb-20">
          <div className="mb-4 p-4 bg-pink-100 rounded text-hotPink">
            <p>Expeditions are postponed until a time when our beloved travelers can be in Q’eros without fear of hugging, holding hands and caring for one another and our compadres there... until a time when it’s clear that everyone is safe.</p>
          </div>

          <div className="mb-4 text-xl -tracking-[0.01em]">
            <p className="mb-2">Few have the opportunity to visit Q’eros. Those who are invited to meet them and travel to their out-of-this world beautiful home are changed forever. Willka Yachay would love to collaborate with you in meeting the goals of contributing to and learning from the Q’eros.</p>
            <p>Our team will make expedition arrangements, coordinate with the Q’eros community and accompany you on your visit to Q’eros. We also offer trip planning services in Cusco, the Sacred Valley and visits to sacred sites with wonderful, wise guides. All proceeds support Willka Yachay schools and programs in Q’eros.</p>
          </div>
          
          <div className="mb-4">
            <h2 className={h2ClassName}>Support</h2>
            <p>We will arrange a sustainable community development project that you may support. Past visitors have painted a school, built clean stoves, and helped maintain greenhouses, among other activities.</p>
          </div>
          <div className="mb-4">
            <h2 className={h2ClassName}>Participate</h2>
            <p>Our travelers may experience Inkan weaving and farming, and to participate in traditional spiritual ceremonies.</p>
            <p>Our guides, translators, cooks, and horse wranglers are all from Q’eros and take pride in sharing their culture and community with visitors. This work is one of the main ways they make a living.</p>
          </div>
          {/* TODO: these ctabuttons */}

          <CtaButton
            href='mailto:info@willkayachay.org'
            text='Contact us'
            caption='Join our next expedition to Q’eros'
            className='mb-0'
          />

          {/* <p><a>Contact us about a private journey</a></p> */}
          </section>
        </div>

    </>
  )
}