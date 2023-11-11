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
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import ParallaxProvider from '../components/ParallaxProvider'

const twConfig = resolveConfig(tailwindConfig)
let whiteColor = twConfig.theme?.colors?.white as string ?? ""
let hotPinkColor = twConfig.theme?.colors?.hotPink as string ?? ""

export default function Qeros() {
  
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
        imgClassName='md:w-[110%] '
        className='mt-40'
      >
          <p className='flex align-top bg-cloud relative -left-[6.5rem] pl-8 pb-16 w-[125%]'>
          <span className={'inline-block w-1/5 text-[11em] leading-[0.66em] mr-6 ' + Franklin.className}>T</span>
          <span className='inline  w-4/5'>he Q’eros people are known as the wisdom keepers of the Andes. Considered to be the “último ayllu inka,” or the last Incan community of Peru, the Q’eros strive to preserve and promote their indigenous ethnic and cultural identity.</span>
          </p>
        </CaptionedPhoto>

        <CaptionedPhoto captionSide={CaptionSide.Left} imgSrc={skywalkImage}>          
          <p>
            Peru’s Ministry of Culture designates Q’eros as a “national living cultural patrimony” for the continuity of its ancient Andean traditions.
          </p>
        </CaptionedPhoto>

        
        <CoverPhoto
          bg={<FullscreenVideo src='WY/offering_fuxfzs' className="fixed w-full h-full " />}
          className='h-[200%]'
        >
          <ParallaxProvider>
            <ColorChangingText colors={[whiteColor, hotPinkColor]} className=' px-6'>
              <p className="mt-80 mb-8 text-5xl max-w-2xl leading-tight mx-auto">
                Q’eros live a hardworking life at one with nature. They perform offerings to <em>Pacha Mama</em>, Mother Earth, and to the <em>Apus</em>, mountain spirits, in exchange for the well-being of their animals, crops and community.
              </p>
            </ColorChangingText>
          </ParallaxProvider>
          <div className="w-full h-50 mt-6"></div>
        </CoverPhoto>


        <CaptionedPhoto captionSide={CaptionSide.Left} imgSrc={threeMenImage} >
          <p>
            Worldview concepts of ayni, the importance of reciprocal sharing, and animu, awareness of an animated essence in all things, shape their interactions with each other and their environment.       
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto imgSrc={sebImage} >
          <p>
            Love, joy, perseverance, integrity, and contentment suffuse their daily lives.
          </p>  
        </CaptionedPhoto>


        <CoverPhoto
          bg={<FullscreenVideo src='WY/where_n7tl6r' />}
        >
          <ParallaxProvider>
            <ColorChangingText colors={[whiteColor, hotPinkColor]} className=' px-6'>
            <h2>Where in the World </h2>
          <p>
            The remote villages of Q’eros are located 14,500 feet above sea level in the snow-capped Cordillera Vilcanota range, the highest mountain chain in southeastern Peru. There are over 2,000 people who live in the nation’s fourteen villages, spread across many river valleys.
          </p>
              </ColorChangingText>
          </ParallaxProvider>
          <div className="w-full h-50 mt-6"></div>
        </CoverPhoto>

      
        <CaptionedPhoto captionSide={CaptionSide.Left} imgSrc={valleyImage}> 
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