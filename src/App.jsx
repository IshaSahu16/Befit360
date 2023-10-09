import React from 'react';
import { Hero, Navbar, Whyus, Workflow, Testimonial, Cta, Footer } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whyus />
      <Workflow />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
