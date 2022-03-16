import Navbar from "./components/Navbar";
import Homepage from './pages/Homepage'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeBackground from './assets/home/background-home-desktop.jpg'
import HomeBackgroundTablet from './assets/home/background-home-tablet.jpg'
import CrewBackground from './assets/crew/background-crew-desktop.jpg'
import DestinationBackground from './assets/destination/background-destination-desktop.jpg'
import TechnologyBackground from './assets/technology/background-technology-desktop.jpg'
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";


function App() {
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [background, setBackground] = useState(window.innerWidth >= 665 ? HomeBackground : HomeBackgroundTablet)
  
  function handleCrew() {
    setBackground(CrewBackground);
  }
  const handleDestination = () => {
    setBackground(DestinationBackground)
  }
  const handleTechnology = () => {
    setBackground(TechnologyBackground)
  }
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);

    }
  }, [])

  return (

    <div className='w-full m-0 p-0 overflow-hidden bg-cover text-primary' style={{ backgroundImage: ` url(${background})` }}>
      <Router>
        <Navbar background={background} crew={handleCrew} destination={handleDestination} technology={handleTechnology} />
        <Routes>
          <Route path='/'  element={<Homepage/>}/>
          <Route path='/destination/' element={<Destination/>}/>
          <Route path='/crew/' element={<Crew/>}/>
          <Route path='/technology/' element={<Technology/>}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
