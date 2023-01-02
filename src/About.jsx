import React, { useEffect } from 'react';
import Herosection from './components/Herosection'
import { useGlobalContext } from './Context'
const About = () => {
 
  // const data = {
  //   name: "Vinad Thapa",
  //   image: "./Images/about1.svg",
  // }
  const {updateAboutPage} = useGlobalContext();
  useEffect(()=>{
    updateAboutPage();
  }, []);
  return (
    <>
      <Herosection/>
    </>
  )
}

export default About