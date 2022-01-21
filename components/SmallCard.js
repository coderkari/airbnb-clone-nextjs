import Image from 'next/image'

function SmallCard({ name, image, distance }) {
  console.log(image)
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-100 space-x-2 m-4 rounded-2xl group -ml-0">
      <div className="w-16">
        <img
          className="group-hover:scale-[1.09] transform  transition-transform  ease-out duration-150"
          loading="lazy"
          src={image}
          alt={name}
        />
      </div>
      <div className="space-y-1 transform group-hover:translate-x-2 transition-transform duration-150 ease-in pr-1">
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">{distance}</p>
      </div>
    </div>
  )
}

export default SmallCard
