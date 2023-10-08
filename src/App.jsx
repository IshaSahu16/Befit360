import React from 'react';
import { Hero, Navbar, Whyus, Workflow, Homefood, Cta } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whyus />
      <Workflow />
      <Homefood />
      <Cta />
    </div>
  )
}

export default App
