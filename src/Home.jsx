import React, { useEffect } from 'react'
import Herosection from './components/Herosection'
import Contact from './Contact';
import { useGlobalContext } from './Context'
import Services from './Services';
const Home = () => {


  const {updateHomePage} = useGlobalContext();
  useEffect(()=>{
    updateHomePage();
  }, []);
  return (
    <>
    <Herosection/>
    <Services/>
    <Contact/>
    
    </>
  )
}

export default Home