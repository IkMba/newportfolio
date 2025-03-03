import React, { useState, useEffect, useRef } from 'react';

import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Project from '../sections/Project'
import Blog from '../sections/Blog'
import Footer from '../sections/Footer'
import Cursor from '../components/Cursor';
import Cursor2 from '../components/Cursor2';
import Cursor3 from '../components/Cursor3';

export default function Home() {

  return (
    <div className=' lg:flex lg:h-screen overflow-hidden'>
      <div className='py-8 px-6 lg:pl-24 lg:py-20 lg:pr-0 lg:w-[45%]'>
      <Hero />
      </div>
      <div className='scrollable-content py-8 px-6 lg:w-[55%] lg:pr-12 lg:py-20 lg:h-screen lg:overflow-y-auto'>
        <About />
        <Experience />
        <Project />
        <Blog />
        <Footer />
        <Cursor/>
      </div>
    </div>
  )
}
