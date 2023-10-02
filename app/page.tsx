import Image from 'next/image'
import Logotype from './components/logotype'
import CoverPhoto from './components/coverPhoto'
import CaptionedPhoto from './components/captionedPhoto'
import CtaButton from './components/ctaButton'
import ParallaxProvider from './components/ParallaxProvider'
import ColorChangingText from './components/colorChangingText'

import coverImage from '../public/images/home/coverFrame@2x.jpg'
import qerosImage from './home/cover@2x.jpg'
import expeditionsImage from './home/expeditions.jpg'
import schoolsImage from './home/schools@2x.jpg'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import { GaramondDisplay } from './components/localFonts'
const twConfig = resolveConfig(tailwindConfig)

const Home: React.FC = () => {

  let whiteColor = twConfig.theme?.colors?.white as string ?? ""
  let hotPinkColor = twConfig.theme?.colors?.hotPink as string ?? ""

  return (
    <>
      <section className="min-h-screen mb-[30vh]">
        <CoverPhoto
          fixed 
          bg={
            <Image src={coverImage} width={2000} height={2000} alt='' className='w-full h-screen z-10 object-cover' />
          }
          parallax={{
            startScroll: 0,
            endScroll: 800,
            opacity: [1,0],
          }}
        >
          <Logotype horizontal className="fill-cloud block w-[70%] md:w-[55%] mx-auto"/>
          <hr className="h-[1.5px] bg-cloud my-8 md:my-16 w-2/3 mx-auto"/>
          <h2 className={"text-center text-3xl " + GaramondDisplay.className}>Empowering the<span className='hidden md:inline'> </span><br className='md:hidden'/>Q’eros&nbsp;Nation of&nbsp;Peru</h2>
          <div className="w-full h-50 mt-6"></div>
        </CoverPhoto>
        

        <section className='-mt-[20rem] text-2xl'>
          <div className='px-6 max-w-prose mx-auto'>
            <ParallaxProvider >
              <ColorChangingText colors={[whiteColor, hotPinkColor]} className=' px-6'>
                <p className="mt-80 mb-8">
                  Willka Yachay is a nonprofit organization dedicated to helping indigenous communities thrive in the modern world.
                </p>
                <p>
                  We are empowering the next generation of the indigenous Q’eros Nation of Peru to become leaders who elevate their standard of living, guide their community toward sustainable modernity and revitalize their cultural&nbsp;identity.
                </p>
              </ColorChangingText>
            </ParallaxProvider>
          </div>
        </section>


        <section className="min-h-screen">
          <CaptionedPhoto imageSrc={expeditionsImage}>
          <CtaButton text='Expeditions' caption="Visit Q’eros" href="/expeditions" />
          <p className='ml-2 leading-snug'>
            Willka Yachay would love to collaborate with you in meeting the goals of contributing to and learning from the&nbsp;Q’eros.
          </p>
          </CaptionedPhoto>
        </section>
        
        <section className="min-h-screen">
          <CaptionedPhoto imageSrc={qerosImage}>
          <CtaButton text='Q’eros' caption="Who we support" href="/qeros" />
          <p className='ml-2 leading-snug'>
            Considered Peru’s last Inkan community, the Q’eros people are the wisdom keepers of the&nbsp;Andes.
          </p>
          </CaptionedPhoto>
        </section>

        <section className="min-h-screen">
          <CaptionedPhoto imageSrc={schoolsImage}>
          <CtaButton text='Schools' caption="Our education initiative" href="/schools" />
          <p className='ml-2 leading-snug'>
            Willka Yachay builds schools high in the Andes. We collaborate with Q’ero parents and elders on construction, administration and curriculum development. We employ culturally sensitive teachers and provide all supplies, nutritious food and national and international field trips.
          </p>
          </CaptionedPhoto>
        </section>
        

        

      </section>



    </>
  )
}

export default Home