import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import Service from './component/Service';
import Experience from './component/Experience';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
import { BrowserRouter, Routes, Route } from 'react-router';
import AOS from 'aos';
import { useEffect } from 'react';


function App() {
  
  useEffect(() => {
    AOS.init();
  }, [])

 
  return (
    <div className="App">
     
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/about' exact element={<About />} />
          <Route path='/Project' exact element={<Project />} />
          <Route path='/Contact' exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Banner />
      <About />
      <Service />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
