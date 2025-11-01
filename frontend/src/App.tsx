import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import './App.css'
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(!sessionStorage.getItem('hasSeenSplash'));

  const handleVideoEnd = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setIsSplashVisible(false);
  };

  return (
    <>
      <SplashScreen isVisible={isSplashVisible} onVideoEnd={handleVideoEnd} />

      <video
        src="/BG.mp4"
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      />

      <div>
        <ScrollToTop />
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;