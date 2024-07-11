import React, { useEffect } from 'react'
import '../../styles/banner.scss'
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div id='banner-section'>
        <div className='container-banner'>
            <p className='banner-title'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere quos molestias, 
                quia vel at ullam dolore sit nullaa.
            </p>
        </div>
        <p className='banner-desc'>
            "Expecteur sint accaecat cupidatat non proident"
        </p>
        <img className='img-banner' src='/images/image-1.svg' alt='image-1' />

        <div className='shape-2'></div>
    </div>
  )
}

export default Banner