import React from 'react';
import Navbar from './pages/navbar';
import Profile from './pages/profile';
import About from './pages/about';
import MyProject from './pages/project';
import Pagination from './pages/pagination';
import Skills from './pages/skills';

function Portfolio() {
  return (
    <div className=" text-black bg-white">
      {/* <Navbar />  */}
      <div className='md:px-20 md:py-10 py-5 px-6'>
        <Profile />
      </div>
      <div className='md:px-20 md:py-10 py-5 px-6 bg-blue-400'>
        <About />
      </div>
      <div className='md:px-20 md:py-10 py-5 px-6'>
        <Skills />
      </div>
      <div className='md:px-20 md:py-10 py-5 px-6 bg-blue-400'>
        <MyProject />
      </div>
      <Pagination />
    </div>
  );
}

export default Portfolio;
