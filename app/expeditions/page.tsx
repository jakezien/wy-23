'use client'
import Image from 'next/image'
import CoverPhoto from '../components/coverPhoto'
import ExpeditionsHero from './ExpeditionsHero'
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <ParallaxBanner className="relative h-[200px]">
          <ParallaxBannerLayer className='relative h-full' speed={0}>
            <img alt="" src='../../public/images/expeditions/top.jpg'/>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        
        <div className="relative z-1 bg-white">    
          <section className="max-w-prose mx-auto py-8 px-2 md:px-0 text-brown">
          <div className="mb-4 text-xl -tracking-[0.01em]">
            <p className="mb-2">Few have the opportunity to visit Q’eros. Those who are invited to meet them and travel to their out-of-this world beautiful home are changed forever. Willka Yachay would love to collaborate with you in meeting the goals of contributing to and learning from the Q’eros.</p>
            <p>Our team will make expedition arrangements, coordinate with the Q’eros community and accompany you on your visit to Q’eros. We also offer trip planning services in Cusco, the Sacred Valley and visits to sacred sites with wonderful, wise guides. All proceeds support Willka Yachay schools and programs in Q’eros.</p>
          </div>
          
          <div className="mb-4">
            <h2>Support</h2>
            <p>We will arrange a sustainable community development project that you may support. Past visitors have painted a school, built clean stoves, and helped maintain greenhouses, among other activities.</p>
          </div>
          <div className="mb-4">
            <h2>Participate</h2>
            <p>Our travelers may experience Inkan weaving and farming, and to participate in traditional spiritual ceremonies.</p>
            <p>Our guides, translators, cooks, and horse wranglers are all from Q’eros and take pride in sharing their culture and community with visitors. This work is one of the main ways they make a living.</p>
          </div>
          <div className="mb-4 p-4 bg-pink-100 rounded text-hotPink">
            <p>All of our expeditions and retreats are being postponed until 2022 or 2023, until a time when our beloved travelers can be in Q’eros without fear of hugging, holding hands and caring for one another and our compadres there... until a time when it’s clear that everyone is safe.</p>
          </div>
          {/* TODO: these ctabuttons */}
          <p><a>Join our next expedition to Q’eros</a></p>
          <p><a>Contact us about a private journey</a></p>
          </section>
        </div>
        </ParallaxProvider>
    </>
  )
}