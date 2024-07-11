import React, { useEffect } from 'react'
import '../../styles/pricing.scss'
import Card from '../molecules/Card'
import data from '../../utilis/data.json'
import TitleSection from '../atoms/TitleSection'
import { useLocation } from 'react-router-dom';

const Pricing = () => {
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
    <div id='pricing-section'>
      <TitleSection title="Pricing" />

      <div className='container-introduction'>
        <div className="grid-cols-3">
          {
            
            data?.products.map((val) => (
              <Card>
                <h3>{val.title}</h3>
                  {
                    val.description.map((desc) => (
                      <div key={desc}>{desc}</div>
                    ))
                  }
                <h4>{val.pricing}</h4>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing