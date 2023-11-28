import CoverPhoto from '../components/coverPhoto'
import CaptionedPhoto, {CaptionSide} from '../components/captionedPhoto'
import CtaButton from '../components/ctaButton'

import coverImage from './images/cover@2x.jpg'
import soniaImage from './images/sonia@2x.jpg'
import skywalkImage from './images/skywalk@2x.jpg'
import threeMenImage from './images/three-men@2x.jpg'
import sebImage from './images/sebastian@2x.jpg'
import whereImage from './images/where@2x.jpg'
import valleyImage from './images/valley@2x.jpg'
import alpacasImage from './images/alpacas@2x.jpg'
import silhouetteImage from './images/silhouette@2x.jpg'
import PageTitle from '../components/pageTitle'
import { Franklin } from '../components/localFonts'
import FullscreenVideo from '../components/FullscreenVideo'

import ColorChangingText from '../components/colorChangingText'
import ParallaxProvider from '../components/ParallaxProvider'
import Parallax from '../components/Parallax'
import { ParallaxProps } from 'react-scroll-parallax/dist/components/Parallax/types'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import InterstitialCoverVideo from '../components/InterstitialCoverVideo'
const twConfig = resolveConfig(tailwindConfig)
let whiteColor = twConfig.theme?.colors?.white as string ?? ""
let hotPinkColor = twConfig.theme?.colors?.hotPink as string ?? ""

export default function Qeros() {

  const hParallaxProps: ParallaxProps = {
    
  }
  
  return (
    <>
      <CoverPhoto
        imgSrc={coverImage}
        fixed
        parallax={{
          startScroll: 0,
          endScroll: 300,
          opacity: [1,0],
        }}
      >
          <PageTitle title='Q’eros'></PageTitle>
          <p className={"text-center text-5xl tracking-[0.2em] " + Franklin.className}>&quot;KEH-ros&quot;</p> 
        </CoverPhoto>

      <CaptionedPhoto
        imgSrc={soniaImage}
        imgParallaxHorizontal={true}
        imgParallax={{ speed: 10 }}
        imgClassName='md:w-[110%] '
        className='mt-40'
      >
        <p className='flex align-top bg-cloud relative -left-[6.5rem] -top-8 p-8 pb-16 w-[150%]'>
        <span className={'inline-block w-1/5 text-[11em] leading-[0.66em] mr-6 ' + Franklin.className}>T</span>
        <span className='inline w-full'>he Q’eros people are known as the wisdom keepers of the Andes. Considered to be the <em>“último ayllu inka,”</em> or the last Incan community of Peru, the Q’eros strive to preserve and promote their indigenous ethnic and cultural identity.</span>
        </p>
      </CaptionedPhoto>

      <CaptionedPhoto
        imgParallaxHorizontal={true}
        imgParallax={{ speed: 10 }}
        captionSide={CaptionSide.Left}
        imgSrc={skywalkImage}
        className='mb-0'
      >          
        <p>
          Peru’s Ministry of Culture designates Q’eros as a “national living cultural patrimony” for the continuity of its ancient Andean traditions.
        </p>
      </CaptionedPhoto>

      

      <InterstitialCoverVideo src="WY/offering_fuxfzs">
        <p>Q’eros live a hardworking life at one with nature. They perform offerings to <em>Pacha Mama</em>, Mother Earth, and to the <em>Apus</em>, mountain spirits, in exchange for the well-being of their animals, crops and community.</p>
      </InterstitialCoverVideo>

      <CaptionedPhoto captionSide={CaptionSide.Left} imgSrc={threeMenImage}
      className='mt-0'>
          <p>
            Worldview concepts of ayni, the importance of reciprocal sharing, and animu, awareness of an animated essence in all things, shape their interactions with each other and their environment.       
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto imgSrc={sebImage}  className='mb-0'>
          <p>
            Love, joy, perseverance, integrity, and contentment suffuse their daily lives.
          </p>  
        </CaptionedPhoto>


        <InterstitialCoverVideo src="WY/where_n7tl6r">
          <h2>Where in the World </h2>
          <p>
            The remote villages of Q’eros are located 14,500 feet above sea level in the snow-capped Cordillera Vilcanota range, the highest mountain chain in southeastern Peru. There are over 2,000 people who live in the nation’s fourteen villages, spread across many river valleys.
          </p>
        </InterstitialCoverVideo>

      
        <CaptionedPhoto captionSide={CaptionSide.Left} imgSrc={valleyImage} className='mt-0'> 
          <p>
            Q’eros travel between three different ecosystems that span from 15,500 feet down to 6,000 feet above sea level: from snowy peaks to ceja de selva, “the eyebrow of the jungle.”
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto imgSrc={alpacasImage}>
          <p>
            They raise llamas and alpacas at the highest altitudes; descend to grow potatoes and raise sheep; and descend further to grow corn, squash & other vegetables, and to harvest bamboo and wood for buildings, looms and flutes.
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto captionSide={CaptionSide.Left}  imgSrc={silhouetteImage}>
          <p>
            Despite the harsh conditions to which they are exposed, and a history as targets of discrimination and marginalization, the Q’eros people endure. Willka Yachay helps them thrive.
          </p>
        </CaptionedPhoto>
        
      <CtaButton
        href="/projects"
        text="Projects"
        caption="See how we help"
        next
      />


    </>
  )
}