import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.JSX'

function App() {
  const [devicesize, setDevicesize] = useState(window.innerWidth);
  const [mobileLobby, setMobileLobby] = useState(devicesize < 1000);
  useEffect(() => {
    const handleResize = () => {
      const newDeviceSize = window.innerWidth;
      setDevicesize(newDeviceSize);
      setMobileLobby(newDeviceSize < 960);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {mobileLobby ?
        (<Navbar />) :
        (<div>Dekstop</div>)}

    </>
  )
}

export default App
