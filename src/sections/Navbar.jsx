// import {useState} from "react";
// import {navLinks} from "../constants/index.js";

// const NavItems = () => {
//     return (
//         <ul className="nav-ul">
//             {navLinks.map(({id, href, name})=> (
//                 <li key={id} className="nav-li">
//                     <a href={href} className="nav-li_a"
//                     onClick={() =>{}}>
//                         {name}
//                     </a>
//                 </li>
//             ))}
//         </ul>)
// }

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = ()=> setIsOpen((prevIsOpen) => !prevIsOpen);

//     return (
//         <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex justify-between items-center py-5 mx-auto c-space">
//                     <a href="/" className="text-neutral-400
//                     font-bold text-xl hover:text-white transition-colors">
//                         Samuel
//                     </a>

//                     <button onClick={toggleMenu}
//                             className='text-neutral-400 hover:text-white
//                             focus:outline-none sm:hidden flex' aria-label="Toggle menu">
//                         <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
//                         alt="toggle" className="w-6 h-6"/>
//                     </button>
//                     <nav className="sm:flex hidden">
//                         <NavItems/>
//                     </nav>
//                 </div>
//             </div>
//             <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
//                 <nav className="p-5">
//                     <NavItems />
//                 </nav>
//             </div>
//         </header>
//     )
// }
// export default Navbar
import React, { useState } from "react"; // Import React
import PropTypes from 'prop-types';
import { navLinks } from "../constants/index.js";

// NavItems component remains the same
const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

// Navbar Component with displayName added
const Navbar = React.memo(({ toggleTheme, isLightMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <header className={`fixed top-0 left-0 font-medium right-0 z-50 ${isLightMode ? "bg-white" : "bg-black"} transition-colors`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className={`font-bold text-xl ${isLightMode ? "text-black" : "text-neutral-400"} hover:text-white transition-colors`}>
                        Samuel   
                    </a>

                    {/* Theme toggle button */}
                    
                    <button
                        onClick={toggleTheme}
                        className={`px-2 rounded-lg font-normal ${isLightMode ? "bg-black text-white" : "bg-white text-black"} transition-colors`}
                    >
                        {isLightMode ? "Dark Mode" : "Light Mode"}
                    </button>
                   

                    <button
                        onClick={toggleMenu}
                        className={`sm:hidden flex ${isLightMode ? "bg-black" : "text-black"} rounded-lg hover:text-white `}
                        aria-label="Toggle menu"
                    >
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/* Dropdown for mobile view */}
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} ${isLightMode ? "bg-slate-300" : "bg-black"} transition-max-height duration-300`}>
                <nav className="p-5">
                    <ul className="space-y-2">
                        {navLinks.map(({ id, href, name }) => (
                            <li key={id}>
                                <a href={href} className={`${isLightMode ? "text-black" : "text-white"} block`}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
});

// Adding PropTypes validation
Navbar.propTypes = {
    toggleTheme: PropTypes.func.isRequired, // Ensures toggleTheme is a function
    isLightMode: PropTypes.bool.isRequired, // Ensures isLightMode is a boolean
};

// Set displayName for the component (useful for debugging)
Navbar.displayName = "Navbar";

export default Navbar;
