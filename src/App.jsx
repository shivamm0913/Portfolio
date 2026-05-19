import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTopButton from "./components/scrollToTopButton";
import ScrollProgress from "./components/scrollbarvertical";
import { Meteors } from "./components/ui/Meteors";
import { Particles } from "./components/ui/particles";

function App() {
  const mode = useSelector((state) => state.theme.mode);

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
      {/* Main Layout Wrapper */}
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col relative overflow-hidden">
        
        {/* Particles Background */}
        <Particles
          className="fixed inset-0 z-0"
          quantity={100}
          ease={80}
          color={mode === "dark" ? "#ffffff" : "#000000"}
          refresh
        />

        {/* Subtle background meteors */}
        <div className="fixed inset-0 z-[1] pointer-events-none opacity-20 dark:opacity-40">
          <Meteors number={30} />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollProgress />
          <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
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
