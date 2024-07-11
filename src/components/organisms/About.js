import React, { useEffect } from 'react'
import '../../styles/about.scss'
import Card from '../molecules/Card'
import data from '../../utilis/data.json'
import TitleSection from '../atoms/TitleSection'
import { useLocation } from 'react-router-dom';

const About = () => {
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
    <div id='about-section'>
      <TitleSection title="About Us" />

      <div className='container-introduction'>
        <>
          <h2>The People , Our Community</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cupiditate, repellendus, 
            ex, tenetur qui nisi veniam vero deleniti consectetur fugiat quia voluptas 
            dignissimos sequi. Temporibus, veniam?  dignissimos sequi. Temporibus, veniam?  dignissimos sequi. Temporibus, veniam?
          </p>
        </>

        <div>
          <h2>Our Method</h2>
          <div className="grid-cols-3">
            {
              
              data?.method.map((val) => (
                <Card>
                  <img src={val.image} alt="image" />
                  <h4>{val.title}</h4>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About