import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
// import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import { useState, useEffect } from "react";

const App = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        // Apply the light-mode class to the body when light mode is enabled
        if (isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [isLightMode]);

    return (
        <main className={`w-full mx-auto`}>
            <Navbar toggleTheme={() => setIsLightMode(!isLightMode)} isLightMode={isLightMode} />
            <Hero isLightMode={isLightMode} />
            <About isLightMode={isLightMode} />
            <Projects isLightMode={isLightMode} />
            <Experience isLightMode={isLightMode} />
            <Contact isLightMode={isLightMode} />
            <Footer isLightMode={isLightMode} />
        </main>
    );
}

export default App;