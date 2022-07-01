import React from 'react'
import CustomCursor from '../../Components/CustomCursor/CustomCursor';
import HeroSection from '../../Components/HeroSection/HeroSection';
import NavBar from '../../Components/Navbar/Navbar';
import styles from './MainPage.module.scss';
const MainPage = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default MainPage