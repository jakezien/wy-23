import CoverPhoto from "../components/coverPhoto";
import CaptionedPhoto from "../components/captionedPhoto";
import CtaButton from "../components/ctaButton";

import coverImage from "./images/cover@2x.jpg";
import soniaImage from "./images/sonia@2x.jpg";
import skywalkImage from "./images/skywalk@2x.jpg";
import threeMenImage from "./images/three-men@2x.jpg";
import sebImage from "./images/sebastian@2x.jpg";
import whereImage from "./images/where@2x.jpg";
import valleyImage from "./images/valley@2x.jpg";
import alpacasImage from "./images/alpacas@2x.jpg";
import silhouetteImage from "./images/silhouette@2x.jpg";
import PageTitle from "../components/pageTitle";
import { Franklin } from "../components/localFonts";
import FullscreenVideo from "../components/FullscreenVideo";

import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import InterstitialCoverVideo from "../components/InterstitialCoverVideo";
const twConfig = resolveConfig(tailwindConfig);

export default function Qeros() {
  const hParallaxProps: ParallaxProps = {};

  return (
    <>
      <CoverPhoto imgSrc={coverImage} fixed>
        <PageTitle title="Q’eros"></PageTitle>
        <p
          className={
            "text-center text-5xl tracking-[0.2em] " + Franklin.className
          }
        >
          &quot;KEH-ros&quot;
        </p>
      </CoverPhoto>

      <CaptionedPhoto
        imgSrc={soniaImage}
        imgParallaxH={true}
        imgClassName="md:w-[110%] "
        className="md:mt-32"
        delayPhoto={true}
      >
        <p className="flex align-top relative z-[1] md:bg-cloud md:-left-[6.5rem] md:-top-8 p-8 pb-16 w-full md:w-[150%]">
          <span
            className={
              "block w-1/5 text-[11em] leading-[0.66em] mr-6 " +
              Franklin.className
            }
          >
            T
          </span>
          <span className="block w-4/5 md:w-full">
            he Q’eros people are known as the wisdom keepers of the Andes.
            Considered to be the <em>“último ayllu inka,”</em> or the last Incan
            community of Peru, the Q’eros strive to preserve and promote their
            indigenous ethnic and cultural identity.
          </span>
        </p>
      </CaptionedPhoto>

      <CaptionedPhoto
        captionLeft
        imgSrc={skywalkImage}
        className="md:mb-0 bg-cloud"
      >
        <p>
          Peru’s Ministry of Culture designates Q’eros as a “national living
          cultural patrimony” for the continuity of its ancient Andean
          traditions.
        </p>
      </CaptionedPhoto>

      <InterstitialCoverVideo src="WY/offering_fuxfzs">
        <p>
          Q’eros live a hardworking life at one with nature. They perform
          offerings to <em>Pacha Mama</em>, Mother Earth, and to the{" "}
          <em>Apus</em>, mountain spirits, in exchange for the well-being of
          their animals, crops and community.
        </p>
      </InterstitialCoverVideo>

      <CaptionedPhoto
        captionLeft
        imgSrc={threeMenImage}
        className="md:mt-0 bg-cloud"
      >
        <p>
          Worldview concepts of <em>ayni</em>, the importance of reciprocal sharing,
          and <em>animu</em>, awareness of an animated essence in all things, shape their
          interactions with each other and their environment.
        </p>
      </CaptionedPhoto>

      <CaptionedPhoto imgSrc={sebImage} className="md:mb-0 bg-cloud">
        <p>
          Love, joy, perseverance, integrity, and contentment suffuse their
          daily lives.
        </p>
      </CaptionedPhoto>

      <InterstitialCoverVideo src="WY/where_n7tl6r">
        <h2
          className={
            "text-3xl mb-4 uppercase tracking-[0.2em] " + Franklin.className
          }
        >
          Where in the World{" "}
        </h2>
        <p>
          The remote villages of Q’eros are located 14,500 feet above sea level
          in the snow-capped Cordillera Vilcanota range, the highest mountain
          chain in southeastern Peru. There are over 2,000 people who live in
          the nation’s fourteen villages, spread across many river valleys.
        </p>
      </InterstitialCoverVideo>

      <CaptionedPhoto
        captionLeft
        imgSrc={valleyImage}
        className="md:mt-0 bg-cloud "
      >
        <p>
          Q’eros travel between three different ecosystems that span from 15,500
          feet down to 6,000 feet above sea level: from snowy peaks to ceja de
          selva, “the eyebrow of the jungle.”
        </p>
      </CaptionedPhoto>

      <CaptionedPhoto imgSrc={alpacasImage}>
        <p>
          They raise llamas and alpacas at the highest altitudes; descend to
          grow potatoes and raise sheep; and descend further to grow corn,
          squash & other vegetables, and to harvest bamboo and wood for
          buildings, looms and flutes.
        </p>
      </CaptionedPhoto>

      <CaptionedPhoto captionLeft imgSrc={silhouetteImage} imgParallaxH>
        <p>
          Despite the harsh conditions to which they are exposed, and a history
          as targets of discrimination and marginalization, the Q’eros people
          endure. Willka Yachay helps them thrive.
        </p>
      </CaptionedPhoto>

      <CtaButton
        href="/projects"
        text="Projects"
        next
        caption="See how we help"
        className="mt-20 mb-20 md:-mt-40 md:mb-60"
      />
    </>
  );
}
