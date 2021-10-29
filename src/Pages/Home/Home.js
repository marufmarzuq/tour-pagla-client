import React from 'react';
import Cover from './Cover/Cover';
import './Home.css'
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
     return (
          <main id="home">
               <Cover></Cover>
               <WhyUs></WhyUs>
          </main>
     );
};

export default Home;