import React, { useState, useEffect, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

const NavBar = React.lazy(() => import('./components/NavBar'));
const Footer = React.lazy(() => import('./components/Footer'));
const Slider = React.lazy(() => import('./components/landingMainPage/Slider'));
const ScheduleSection = React.lazy(() => import('./components/landingMainPage/ScheduleSection'));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <header className="bg-white shadow-lg">
            <Suspense fallback={<div>Loading...</div>}>
              <NavBar />
            </Suspense>
          </header>
          <main className="main-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Slider />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <ScheduleSection />
            </Suspense>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </Suspense>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
