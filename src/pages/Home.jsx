// src/components/Home.js
import React from 'react';
import Hero from '../components/Hero'; // Import the Hero component
import Whyus from '../components/Whyus'; // Import the Whyus component
import Workflow from '../components/Workflow'; // Import the Workflow component
import Testimonial from '../components/Testimonial'; // Import the Testimonial component
import Cta from '../components/Cta'; // Import the Cta component


const Home = () => {
  return (
    <div>
      <Hero />
      <Whyus />
      <Workflow />
      <Testimonial />
      <Cta />
    </div>
  );
}

export default Home;
