import CoverPhoto from '../components/coverPhoto'
import CaptionedPhoto, {CaptionSide} from '../components/captionedPhoto'
import CtaButton from '../components/ctaButton'
import PageTitle from '../components/pageTitle'

import coverImage from './images/cover.jpg'
import buildingImage from './images/building.jpg'
import topImage from './images/top.jpg'
import chalkImage from './images/chalkboard.jpg'
import girlsImage from './images/girls.jpg'
import pazImage from './images/paz.jpg'
import hsImage from './images/high-school-new.jpg'
import mathImage from './images/math.jpg'
import { Franklin } from '../components/localFonts'



export default function Schools() {
  
  const h2ClassName = `text-4xl uppercase tracking-[0.1em] + ${Franklin.className} border-b-2 pb-2 border-brown mb-4 underline-offset-4`

  return (
    <>
      <CoverPhoto imgSrc={coverImage}>
        <PageTitle title='Schools'></PageTitle>
      </CoverPhoto>

        <CaptionedPhoto captionSide={CaptionSide.Left} imageSrc={buildingImage}>
          <p className="mb-4">
            Willka Yachay builds and sustains culturally and ecologically based schools high in the Andes. We currently support eight schools: three pre-k, three primary schools, one high school and one adult school.
          </p>
          <p className="mb-4">
            Working with Q’eros community members, we have constructed four school buildings for students of all ages.
          </p>
        </CaptionedPhoto>

        <CaptionedPhoto imageSrc={topImage}>          
          <p className="mb-4">
            Willka Yachay collaborates with Q’ero parents and elders, acts as a school system administrator, creates and coordinates curriculum development, hires and supports culturally sensitive teachers, provides all supplies and nutritious food, and plans educational (and fun) national and international educational field trips.
          </p>
        </CaptionedPhoto>

      <CaptionedPhoto captionSide={CaptionSide.Left} imageSrc={chalkImage}>
        <h2 className={h2ClassName}>Modern Inkan Education</h2>
          <p className="mb-4">
            We provide an education that enables young Q’eros to direct their community’s future. Our schools teach the children to read and write in both their native Quechua and in Spanish, and prepare them to interact with the modern world while fostering their soulful and intelligent culture.
          </p>
      </CaptionedPhoto>

      <CaptionedPhoto imageSrc={girlsImage}>
        <p className="mb-4">
        Our schools are innovative because our students are becoming aware of their Inkan origins and using both traditional wisdom and modern knowledge for empowerment in today’s world. They are realizing that they, like their ancestors before them, are capable of achieving greatness by using their own resources and creativity within the context of their indigenous culture and mountain homeland.
        </p>
      </CaptionedPhoto>

      <CaptionedPhoto captionSide={CaptionSide.Left} imageSrc={pazImage}>
        <h2 className={h2ClassName}>
          Preschool & Primary Schools
        </h2>
        <p className="mb-4">
        Willka Yachay coordinates all fundraising and programming for Ima Sumaq Preschool and Kusi Qoyllur Primary School in the village of Qocha Moqo and Inkari Primary School in Ch’allmachimpana. Our qualified and wonderful profesores are providing the warm-hearted and creative children an innovative education that respects and cultivates their culture. We also contribute to schools in the villages of Chua Chua, Munay T’ika and Marcachea.
        </p>
      </CaptionedPhoto>

      

      <CaptionedPhoto imageSrc={hsImage}>
        <h2 className={h2ClassName}>
          Ethnic High School & Adult School
        </h2>
        <p className="mb-4">
        In 2012, we opened Collegio Etnico, an ethnic high school in the village of Qocha Moqo. The school’s community-derived curriculum is the first of its kind in Peru: it both originates in and nurtures a rich indigenous cultural heritage. It teaches language and math through scientific, environmental, and ethnographic projects, all of which improve the lives of its students and their families. Our high school and adult learning center provide an education that will enable young Q’eros to go on to university and ultimately direct their community’s future.
        </p>
        <p className="mb-4">
        In 2016, we built a dormitory for students who had been walking up to three hours each way, every day to attend our high school.
        </p>
      </CaptionedPhoto>


      <CaptionedPhoto captionSide={CaptionSide.Left} imageSrc={mathImage}>
        <h2 className={h2ClassName}>
          Inkan Mathematics
        </h2>
        <p className="mb-4">
          Q’ero high school students are researching the Inkan mathematical device Yupana, an ancient calculator, and Khipu, a rope recording device. They have learned these systems and teach them to younger students within Q’eros and at schools and universities in Cusco.
        </p>
        <p className="mb-4">
          To schedule an online or in person lesson, contact us.
        </p>
      </CaptionedPhoto>
        
      <div className='max-w-prose mx-auto mt-20 mb-24'>
      <CtaButton
        href="/qeros"
        text="Q’eros"
        caption="Meet the people we help"
        next
        
        />
        </div>


    </>
  )
}

