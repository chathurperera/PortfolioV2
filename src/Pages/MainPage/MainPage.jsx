import React from 'react'
import AboutSection from '../../Components/AboutSection/AboutSection';
import CustomCursor from '../../Components/CustomCursor/CustomCursor';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/HeroSection/HeroSection';
import NavBar from '../../Components/Navbar/Navbar';
import WorkSection from '../../Components/WorkSection/WorkSection';

const MainPage = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <Footer />
    </div>
  )
}

export default MainPage