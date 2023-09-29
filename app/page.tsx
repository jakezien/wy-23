import Image from 'next/image'
import Logotype from './components/logotype'
import CoverPhoto from './components/coverPhoto'
import CoverImage from '../public/images/home/cover@2x.jpg'

export default function Home() {
  return (
    <>
      <section className="min-h-screen mb-[30vh]">
        <CoverPhoto imgSrc={CoverImage} imgAlt='' >
          <Logotype horizontal className="fill-cloud block w-[55%] mx-auto"/>
          <hr className="h-[1.5px] bg-cloud my-16 w-2/3 mx-auto"/>
          <h2 className="text-center">Empowering the Q’eros Nation of Peru</h2>
          <div className="w-full h-50 mt-6"></div>
        </CoverPhoto>
      </section>



    </>
  )
}
