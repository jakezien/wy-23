import Image from 'next/image'
import Logotype from './components/logotype'

export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col justify-center">
        <div className="mx-auto px-4 text-center ">
          <Logotype className='fill-hotPink max-w-[12rem] mx-auto h-auto mb-4'/>
          <p className="text-2xl text-brown opacity-50">New website coming soon</p>
          <p className="text-2xl text-brown underline"><a href="mailto:info@willkayachay.org">Contact us about expeditions to&nbsp;Q&rsquo;eros</a></p>
        </div>
      </div>
    </>
  )
}
