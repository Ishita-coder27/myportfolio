import React from 'react';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work'; 
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BlurBlob from './BlurBlob';


import './index.css'; // Import the main CSS file





function App() {
 
  return (


    <div className="bg-[#181616]">

<BlurBlob position={{ top: '30%', left: '20%' }} size={{ width: '30%', height: '40%' }}/>




     <div className="absolute inset-0 
  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
  bg-[length:14px_24px] 
  [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)] 
  [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)]
">
    </div>


 
   



        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
           </div>

  </div>

  )
}

export default App


