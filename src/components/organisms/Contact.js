import React, { useEffect } from 'react'
import '../../styles/contact.scss'
import Card from '../molecules/Card'
import data from '../../utilis/data.json'
import TitleSection from '../atoms/TitleSection'
import Label from '../molecules/Label'
import { useLocation } from 'react-router-dom';

const Contact = () => {
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
    <div id='contact-section'>
      <TitleSection title="Contact" />

      <div className='container-introduction'>
        <div className="flex-center">
          <Card>
            <Label field="Name" value={data?.contacts.name}/>
            <Label field="Email" value={data?.contacts.email}/>
            <Label field="Phone" value={data?.contacts.phone}/>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact