import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTopButton from "./components/scrollToTopButton";
import ScrollProgress from "./components/scrollbarvertical";
import { Particles } from "./components/ui/particles";
import { Meteors } from "./components/ui/Meteors";
import { Preloader } from "./components/ui/Preloader";
import { FloatingArtPiece } from "./components/ui/FloatingArtPiece";
import { ClickSparkle } from "./components/ui/ClickSparkle";
import { initSound } from "./lib/sound";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initSound();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [mode]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      {/* Interactive Micro Click Sparkles */}
      <ClickSparkle />

      {/* Website Opening Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Layout Wrapper */}
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col relative overflow-hidden">
        
        {/* Particles Background — visible */}
        <Particles
          className="fixed inset-0 z-0"
          quantity={80}
          ease={80}
          color={mode === "dark" ? "#ffffff" : "#000000"}
          refresh
        />

        {/* Ambient Abstract Art Piece drifting across the screen */}
        <FloatingArtPiece />

        {/* Shooting Stars / Meteors */}
        <div className="fixed inset-0 z-[1] pointer-events-none opacity-20 dark:opacity-40">
          <Meteors number={25} />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollProgress />
          <Navbar />
        
          {/* Main Content — ~90% width */}
          <main className="flex-grow w-[92%] max-w-6xl mx-auto px-2 pt-24 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>

          <Footer />
          <ScrollToTopButton />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
