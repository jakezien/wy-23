import CoverPhoto from '../components/coverPhoto'
import CaptionedPhoto, {CaptionSide} from '../components/captionedPhoto'
import CtaButton from '../components/ctaButton'

import coverImage from './cover@2x.jpg'
import soniaImage from './sonia@2x.jpg'
import skywalkImage from './skywalk@2x.jpg'
import threeMenImage from './three-men@2x.jpg'
import sebImage from './sebastian@2x.jpg'
import whereImage from './where@2x.jpg'
import valleyImage from './valley@2x.jpg'
import alpacasImage from './alpacas@2x.jpg'
import silhouetteImage from './silhouette@2x.jpg'
import PageTitle from '../components/pageTitle'
import { Franklin } from '../components/localFonts'

export default function Qeros() {
  
  return (
    <>
      <CoverPhoto
        imgSrc={coverImage}
        fixed
        parallax={{
          startScroll: 0,
          endScroll: 800,
          opacity: [1,0],
        }}
      >
          <PageTitle title='Q’eros'></PageTitle>
          <p className={"text-center text-5xl tracking-[0.2em] " + Franklin.className}>&quot;KEH-ros&quot;</p> 
        </CoverPhoto>

        <CaptionedPhoto imageSrc={soniaImage}>
          <p>
            The Q’eros people are known as the wisdom keepers of the Andes. Considered to be the “último ayllu inka,” or the last Incan community of Peru, the Q’eros strive to preserve and promote their indigenous ethnic and cultural identity.
          </p>
        </CaptionedPhoto>

        <CaptionedPhoto parallaxH captionSide={CaptionSide.Left} imageSrc={skywalkImage}>          
          <p>
            Peru’s Ministry of Culture designates Q’eros as a “national living cultural patrimony” for the continuity of its ancient Andean traditions.
          </p>
        </CaptionedPhoto>

      
        <CoverPhoto scrim className="qeros-animation-0" imgSrc="">
          <p>
            Q’eros live a hardworking life at one with nature. They perform offerings to Pacha Mama, Mother Earth, and to the Apus, mountain spirits, in exchange for the well-being of their animals, crops and community.
          </p>
        </CoverPhoto>

        <CaptionedPhoto captionSide={CaptionSide.Left} imageSrc={threeMenImage} >
          <p>
            Worldview concepts of ayni, the importance of reciprocal sharing, and animu, awareness of an animated essence in all things, shape their interactions with each other and their environment.       
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto imageSrc={sebImage} >
          <p>
            Love, joy, perseverance, integrity, and contentment suffuse their daily lives.
          </p>  
        </CaptionedPhoto>



        <CoverPhoto imgSrc={whereImage}>

          <h2>Where in the World </h2>
          <p>
            The remote villages of Q’eros are located 14,500 feet above sea level in the snow-capped Cordillera Vilcanota range, the highest mountain chain in southeastern Peru. There are over 2,000 people who live in the nation’s fourteen villages, spread across many river valleys.
          </p>

        </CoverPhoto>



        <CaptionedPhoto captionSide={CaptionSide.Left} imageSrc={valleyImage}> 
          <p>
            Q’eros travel between three different ecosystems that span from 15,500 feet down to 6,000 feet above sea level: from snowy peaks to ceja de selva, “the eyebrow of the jungle.”
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto imageSrc={alpacasImage}>
          <p>
            They raise llamas and alpacas at the highest altitudes; descend to grow potatoes and raise sheep; and descend further to grow corn, squash & other vegetables, and to harvest bamboo and wood for buildings, looms and flutes.
          </p>
        </CaptionedPhoto>



        <CaptionedPhoto captionSide={CaptionSide.Left}  imageSrc={silhouetteImage}>
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