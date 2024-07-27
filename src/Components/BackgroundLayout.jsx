import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import sun from '../assets/images/sun.jpg'
import fog from '../assets/images/fog.png'
import overcast from '../assets/images/overcast.jpg'
import rain from '../assets/images/rain.gif'
import snow from '../assets/images/snow.jpg'
import storm from '../assets/images/storm.jpg'
import partially_cloudy from '../assets/images/partially_cloudy.webp'

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState()

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('thunder')) {
        setImage(storm)
      } else if (imageString.toLowerCase().includes('rain')) {
        setImage(rain)
      } else if (imageString.toLowerCase().includes('overcast')) {
        setImage(overcast)
      } else if (imageString.toLowerCase().includes('partially cloudy')) {
        setImage(partially_cloudy)
      } else if (imageString.toLowerCase().includes('clear')) {
        setImage(sun)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(fog)
      }else if (imageString.toLowerCase().includes('snow')) {
        setImage(snow)
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout