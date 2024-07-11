import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MainTemplate = ({ children }) => (
  <div className='flex-center'>
    <div>
      <Header />
      <main className='container-content'>{children}</main>
      <Footer />
    </div>
  </div>
);

export default MainTemplate;
