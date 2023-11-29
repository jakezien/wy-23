'use client'
import CoverPhoto from "../components/coverPhoto";
import CtaButton from "../components/ctaButton";
import PageTitle from "../components/pageTitle";
import { Franklin } from "../components/localFonts";
import ProjectsSection from "../components/ProjectsSection";
import FullscreenVideo from "../components/FullscreenVideo";
import { useRef } from "react";

export default function Projects() {

  let videoContainerRef = useRef(null)

  return (
    <>
      <div ref={videoContainerRef}>
      <div className="fixed top-0 left-0 h-full w-full -z-10 " >
        {/* BG */}
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/schools_l9lb47" data-animation-id="video-schools"/>
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/energy_da3pdc" data-animation-id="video-energy"/>
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/food_bz2d7g" data-animation-id="video-food"/>
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/culture_c8bioe" data-animation-id="video-culture"/>
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/medicine_gjpuv0" data-animation-id="video-medicine"/>
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/music_qmpm31" data-animation-id="video-music"/>
        <FullscreenVideo className="w-full h-full absolute top-0 left-0 opacity-0" src="WY/weaving_klpa5q" data-animation-id="video-weaving"/>
      </div>

      <CoverPhoto fixed className="">
        <PageTitle title="Projects" className="text-brown"></PageTitle>
        <p className="text-brown">
          Willka Yachay is helping Q’eros obtain the tools they need to sustain
          their culture and thrive in the modern world.
        </p>
      </CoverPhoto>

      <ProjectsSection title="Schools" slug="schools" videoContainerRef={videoContainerRef}>
        <p>
          Willka Yachay builds and sustains a culturally and ecologically based
          school system high in the Andes. We founded and built the first
          preschool, primary schools, high school and adult learning center in
          the Q’eros villages of Ch’allmachimpana and Qocha Moqo.
        </p>
        <p>
          Our schools teach the children to read and write in both their native
          Quechua and in Spanish, and prepare them to interact with the modern
          world while fostering their soulful and intelligent culture. We
          provide an education that enables young Q’eros to direct their
          community’s future.
        </p>
        <CtaButton text="Learn about our schools" href="/schools" />
      </ProjectsSection>

      <ProjectsSection title="Alternative Energy" slug="energy" videoContainerRef={videoContainerRef}>
        <p>
          The alternative energy projects we support are designed to teach
          mathematics, physics and engineering and to improve the quality of
          life in Q’eros. Willka Yachay’s first successful energy project was a
          hydroelectric generator hand built and deployed by our high school
          students and their teacher.
        </p>

        <p>
          We have supplied and installed nine solar panel systems for schools
          and our health center in Q’eros.
        </p>

        <p>
          Willka Yachay manages a solar light/textile exchange program for
          Q’eros families. We trade solar-powered d.lights for small handmade
          weavings. We sell these weavings and reinvest the returns in our
          schools and development projects.
        </p>
      </ProjectsSection>

      <ProjectsSection title="Food & Water Security" slug="food" videoContainerRef={videoContainerRef}>
        <p>Willka Yachay is tackling food security in Q’eros.</p>
        <p>
          Our ethnic high school’s first educational community development
          project was building a masonry oven that bakes bread and heats water
          for Qocha Moqo. Every week our students make Andean grain (quinoa or
          kiwicha) bread from scratch for the village.
        </p>
        <p>
          Willka Yachay and our high school students built the first of several
          trout ponds that will supplement the local diet of potatoes and alpaca
          with fresh fish. Our students and their parents also built a
          greenhouse for raising guinea pigs and other small animals, as well as
          vegetables.
        </p>
        <p>
          We have partnered with individuals to install clean water systems for
          three Q’eros villages.
        </p>
      </ProjectsSection>

      <ProjectsSection title="Cultural Preservation" slug="culture" videoContainerRef={videoContainerRef}>
        <p>
          The Q’eros people are the wisdom keepers of the Andes. The Q’eros
          Nation has been designated by Peru’s Ministry of Culture as a
          “national living cultural patrimony” for the continuity of its ancient
          Andean traditions. Considered to be the <em>último ayllu inka,</em> or
          the last Inkan community of Peru, the Q’eros strive to preserve and
          promote their indigenous ethnic and cultural identity.
        </p>
        <p>
          Their wisdom is expressed in their daily lives through their ancient
          customs of weaving, farming, music, plant medicine and spirituality.
          Moms, dads and elders teach all of these and more in our schools.
        </p>
      </ProjectsSection>

      <ProjectsSection title="Music Preservation" slug="music" videoContainerRef={videoContainerRef}>
        <p>
          Student musicians are working to recover, preserve, and record
          traditional songs based on their own ethnographic research. They
          perform at community events throughout the region and outside of Peru.
        </p>
      </ProjectsSection>

      <ProjectsSection title="Traditional & Western Medicine" slug="medicine" videoContainerRef={videoContainerRef}>
        <p>
          Working with traditional Q’eros healers, or <em>curanderos</em>,
          primary and secondary students are learning about native medicinal
          plants and their uses.
        </p>
        <p>
          Willka Yachay provides emergency health care support, including
          transportation from Q’eros to city hospitals, rehabilitation care and
          patient/family social services.
        </p>
        <p>
          Q’eros has a high child mortality rate. Willka Yachay provides
          nutritious food, warm blankets, wool clothing, emergency care and
          medications for moms and babies.
        </p>
        <p>
          In 2015, we built a community health center, or <em>Hampi Wasi</em>,
          home of healing, that combines modern first aid medicine and ancient
          healing wisdom in bringing care to the underserved community.
        </p>
      </ProjectsSection>

      <ProjectsSection title="Weaving Cooperative" slug="weaving" videoContainerRef={videoContainerRef}>
        <p>
          Willka Yachay and Q’eros mothers and fathers have formed a cooperative
          to sell their traditional weavings at a just price locally and abroad.
          The celebration of this ancient and extraordinarily beautiful
          tradition at the heart of Q’eros culture is promoting its perpetuation
          by younger generations while enhancing community and family economic
          security.
        </p>
        <CtaButton text="Visit our weaving shop" href="/shop"></CtaButton>
        </ProjectsSection>
        </div>
    </>
  );
}
