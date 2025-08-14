// Imports
import { useEffect } from 'react';
import profilePic from './assets/image/Codevine.png'
import { Link } from "react-router-dom";

// Header component

function Header(){

    useEffect(() => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    const toggleMenu = () => {
      navMenu.classList.toggle("active");

      // Animate hamburger to X
      const bars = document.querySelectorAll(".bar");
      bars.forEach((bar) => bar.classList.toggle("active"));
    };

    const closeMenu = (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        const bars = document.querySelectorAll(".bar");
        bars.forEach((bar) => bar.classList.remove("active"));
      }
    };

    hamburger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);

    // Cleanup when component unmounts
    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

    return(

        <header>

                {/* Left Header Side */}
                <div className="left-section">
            <img src={profilePic} alt="logo"></img>
            <h2>CODEVINE</h2>
           </div>

<nav>
<ul>
  <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link className="button" to="/contact">
            Contact Me
          </Link>
</ul>


<div class="hamburger-menu">
<div class="bar"></div>
<div class="bar"></div>
<div class="bar"></div>
</div>
</nav>

        </header>

    );

}

export default Header