import Image from 'next/image'
import Logotype from './components/logotype'
import CoverPhoto from './components/coverPhoto'
import CaptionedPhoto from './components/captionedPhoto'
import CtaButton from './components/ctaButton'

import coverImage from '../public/images/home/coverFrame@2x.jpg'
import qerosImage from './home/cover@2x.jpg'
import expeditionsImage from './home/expeditions.jpg'
import Parallax from './components/Parallax'

import ColorChangingText from './components/colorChangingText'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import ParallaxProvider from './components/ParallaxProvider'
const twConfig = resolveConfig(tailwindConfig)

const Home: React.FC = () => {

  let whiteColor = twConfig.theme?.colors?.white as string ?? ""
  let hotPinkColor = twConfig.theme?.colors?.hotPink as string ?? ""

  console.log("hey hey hey")
  console.log("oop", whiteColor, hotPinkColor)

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
          <Logotype horizontal className="fill-cloud block w-[55%] mx-auto"/>
          <hr className="h-[1.5px] bg-cloud my-16 w-2/3 mx-auto"/>
          <h2 className="text-center">Empowering the Q’eros Nation of Peru</h2>
          <div className="w-full h-50 mt-6"></div>
        </CoverPhoto>
        

        <section className='-mt-[20rem]'>
          <ParallaxProvider>
          <ColorChangingText colors={[whiteColor, hotPinkColor]}>
          <p className="text-center mt-80">
            Willka Yachay is a nonprofit organization dedicated to helping indigenous communities thrive in the modern world.
          </p>
          <p>
            We are empowering the next generation of the indigenous Q’eros Nation of Peru to become leaders who elevate their standard of living, guide their community toward sustainable modernity and revitalize their cultural identity.u
          </p>
            </ColorChangingText>
            </ParallaxProvider>
        </section>


          <section className="min-h-screen mb-[30vh]">
            <CaptionedPhoto imageSrc={qerosImage}>
            <CtaButton text='Q’eros' caption="Who we support" href="/qeros" />
              <p>Considered Peru’s last Inkan community, the Q’eros people are the wisdom keepers of the Andes.</p>
            </CaptionedPhoto>
          </section>
          <section className="min-h-screen mb-[30vh]">
            <CaptionedPhoto imageSrc={expeditionsImage}>
            <CtaButton text='Expeditions' caption="Visit Q’eros" href="/expeditions" />
              <p>Willka Yachay would love to collaborate with you in meeting the goals of contributing to and learning from the Q’eros.</p>
            </CaptionedPhoto>
          </section>

        

      </section>



    </>
  )
}

export default Home