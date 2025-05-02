import { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'; // Adjust path as needed

const Navbar = lazy(() => import('./components/Navbar.JSX'));

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
      {mobileLobby ? (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div>Desktop</div>
      )}
    </>
  );
}

export default App;
