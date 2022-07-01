import React from 'react'
import AboutSection from '../../Components/AboutSection/AboutSection';
import CustomCursor from '../../Components/CustomCursor/CustomCursor';
import HeroSection from '../../Components/HeroSection/HeroSection';
import NavBar from '../../Components/Navbar/Navbar';
import WorkSection from '../../Components/WorkSection/WorkSection';
import styles from './MainPage.module.scss';
const MainPage = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </div>
  )
}

export default MainPage