import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import { wakeUpBackend } from './services/api'

function App() {
  const [toastPosition, setToastPosition] = useState(
    window.innerWidth < 768 ? 'top-center' : 'bottom-right'
  );

  useEffect(() => {
    // Wake up backend to prevent cold start delays on form submission
    wakeUpBackend();

    const handleResize = () => {
      setToastPosition(window.innerWidth < 768 ? 'top-center' : 'bottom-right');
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <Toaster 
        position={toastPosition} 
        toastOptions={{
          style: {
            borderRadius: '12px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </BrowserRouter>
  )
}

export default App
