import Map from "./map"
import Image from "next/image"

const globalMap = () => {
  return (
    
<div className="my-20 text-center">
    <h1 className="text-4xl font-semibold text-gray-800 mb-5">Huge Global Network of Fast VPN</h1>
    <p className="text-base font-normal text-gray-600">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
    <div className="my-20 flex justify-center w-full overflow-x-auto">
      <Map />
    </div>
    <div className="flex my-20 flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
      <Image src={'/img/netflix_logo.png'} alt="netflix" height={60} width={180} />
      <Image src={'/img/raddit_logo.png'} alt="netflix" height={60} width={180} />
      <Image src={'/img/amazon_logo.png'} alt="netflix" height={60} width={180} />
      <Image src={'/img/discord_logo.png'} alt="netflix" height={60} width={180} />
      <Image src={'/img/spotify_logo.png'} alt="netflix" height={60} width={180} />
    </div>
</div>
    
  )
}

export default globalMap