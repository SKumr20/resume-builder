import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Preview from './components/Preview';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Form />
        <Preview />
        
      </div>

    </>
    
  )
}

export default App