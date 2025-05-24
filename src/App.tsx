import { useEffect, useState } from "react";
import { WavyBackground } from "./components/WavyBackground";

import { useTheme } from "./context/ThemeContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import List from "./components/List";

function App() {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  useEffect(() => {
    console.log("isDark changed to:", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        {isDark && (
          <WavyBackground
            waveWidth={100}
            colors={["#1e3a8a", "#2563eb", "#3b82f6"]}
            backgroundFill="black"
          >
            <Hero />
          </WavyBackground>
        )}
        {!isDark && (
          <WavyBackground waveWidth={100} backgroundFill="white">
            <Hero />
          </WavyBackground>
        )}
        <Services />
        <List />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
