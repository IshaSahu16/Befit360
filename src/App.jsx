import React from 'react';
import { Hero, Navbar, Whyus, Workflow, Homefood, Cta, Footer } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whyus />
      <Workflow />
      <Homefood />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
