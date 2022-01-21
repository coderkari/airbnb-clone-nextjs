import image from '../helper'
import Image from 'next/image'

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${image.banner})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] xl-h[90vh]"
    >
      <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center">
        <p className="text-2xl font-semibold">Not sure where to go? Perfect.</p>
        <button className="font-semibold text-2xl px-10 py-5 shadow-lg mt-4 hover:shadow-2xl hover:ring-1 bg-white rounded-full">
          <span className="colorText whitespace-nowrap">I’m flexible</span>
        </button>
      </div>
    </div>
  )
}

export default Banner
