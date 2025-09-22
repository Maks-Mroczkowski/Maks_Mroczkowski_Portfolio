import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen.1";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/sections/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import { Contact } from "./components/sections/contact";
import "./index.css";

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return isloaded ? (
    <div className="min-h-screen transition-opacity duration-700 opacity-100 bg-black text-white">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  ) : (
    <LoadingScreen onComplete={() => setIsLoaded(true)} />
  );
}


export default App
