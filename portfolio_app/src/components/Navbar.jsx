import React from 'react'
import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaStar,
  FaQuoteRight,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar_menu a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              const isActive = link
                .getAttribute("href")
                .substring(1) === entry.target.id;
              link.classList.toggle("active", isActive);
            });
          }
        });
      },
      
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="portfolio">{"</>portfolio"}</div>

      <nav className="navbar_menu" >
        <ul>
          <li>
            <a href="#home">
              <FaHome aria-hidden="true" /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser aria-hidden="true" /> About
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaProjectDiagram aria-hidden="true" /> Projects
            </a>
          </li>
          <li>
            <a href="#experience">
              <FaBriefcase aria-hidden="true" /> Experience
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaStar aria-hidden="true" /> Skills
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <FaQuoteRight aria-hidden="true" /> Testimonials
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope aria-hidden="true" /> Contact
            </a>
          </li>
        </ul>

        <button
          className="toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}
