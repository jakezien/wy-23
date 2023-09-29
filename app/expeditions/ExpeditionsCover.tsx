'use client'
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import MountainsSVG from './mountains.svg';
import TentsSVG from './tents.svg';


import skyImage from './sky2x.jpg'
import topImage from './top2xNew.jpg'
import tentsImage from './tents2x.jpg'

// import ReactDOMServer from 'react-dom/server';

// export function encodeSvg(reactElement: any) {
//   return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
// }

// const mountainsBase64 = encodeSvg(<MountainsSVG/>);
// const tentsBase64 = encodeSvg(<TentsSVG/>);

const ExpeditionsCover = () => {

  const skyLayer = (
    <ParallaxBannerLayer
          speed={0}
          className="-z-10"
          style={{position: "fixed"}}
    >
          <Image
            alt=""
            src={skyImage}
            className="w-full h-full object-cover object-bottom"
            width="1200" 
            height="1200"
          />
    </ParallaxBannerLayer>
  )

  const titleLayer = (
    <ParallaxBannerLayer
    speed={-50}
    className=""
  >
    <div className="absolute w-full h-full flex flex-col justify-center">
      <h1 className="text-center mx-auto text-cloud mb-24 text-title tracking-tight">Expeditions</h1>
      {/* <p className="text-cloud max-w-2xl mt-4 mx-auto visibility:hidden">In partnership with Q’ero families, Willka Yachay offers expeditions to individuals and groups who appreciate the Q’eros, support their sustainable development, seek a strong intercultural connection with&nbsp;them, and wish to learn from their teachings.</p> */}
    </div>
  </ParallaxBannerLayer>
  )

  const mountainsLayer = (
    <ParallaxBannerLayer
      speed={-10}
    >
      <Image
        alt=""
        src={topImage}
        className="expeditions-mountain-mask w-full"
        width="1200" 
        height="1200"
      />
    </ParallaxBannerLayer>
  )

  const tentsLayer = (
    <ParallaxBannerLayer
    speed={10}
    // className="w-full h-full" 
    >
      <Image
        alt="A starry sky framed by mountains. At the base of the mountains, several tents glow from lanterns lit within."
        src={tentsImage}
        className="w-full absolute left-0 lg:-bottom-[2rem] object-bottom expeditions-tent-mask"
        // className="w-full absolute left-0 right-0 bottom-[3vh] object-bottom expeditions-tent-mask"
        width="1200" 
        height="1200"
      />
    </ParallaxBannerLayer>
  )

  const subtitleLayer = (
    <ParallaxBannerLayer
      speed={-10}
      opacity={[1, 0]}
      startScroll={0}
      endScroll={240}
      className=""
    >
    <div className="absolute w-full h-full flex flex-col justify-center top-[12rem]">
        <p className="text-cloud max-w-2xl w-5/6 mx-auto mt-28 md:mt-16 text-center text-xl">
          In partnership with Q’ero families, Willka Yachay offers expeditions to individuals and groups who appreciate the Q’eros, support their sustainable development, seek a strong intercultural connection with&nbsp;them, and wish to learn from their teachings.
        </p>
    </div>
  </ParallaxBannerLayer>
  )


  return (
    <div className="relative h-[80vh]">
    <ParallaxProvider>
      <ParallaxBanner className="w-full h-full">
        {skyLayer}
        {titleLayer}
        {mountainsLayer}
        {subtitleLayer}
        {tentsLayer}

      </ParallaxBanner>
      </ParallaxProvider>
    </div>
  )
}
      



export default ExpeditionsCover