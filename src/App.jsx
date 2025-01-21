import React from 'react';
import Navbar from './components/ui/Navbar';
import Form from './components/Form';
import Preview from './components/Preview';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Form />
        <Preview />
      </div>

    </>
    
  )
}

export default App