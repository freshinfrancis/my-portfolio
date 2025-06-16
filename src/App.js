import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Freshin</div>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <h1>Hi, I’m Freshin Francis.</h1>
        <p>Full Stack Software Engineer turning coffee into code.</p>
      </header>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>
          I’m a passionate <strong>Software Engineer</strong> with a strong focus on
          building secure, scalable web applications using modern JavaScript
          frameworks and cloud platforms.
        </p>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal website to showcase my skills, experience, and projects.</p>
          </div>
          <div className="project-card">
            <h3>E-commerce Store</h3>
            <p>An online store with payment integration and user authentication.</p>
          </div>
          <div className="project-card">
            <h3>Real-time Chat App</h3>
            <p>A socket-powered chat application with instant messaging features.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="https://placekitten.com/300/200" alt="Gallery 1" />
          <img src="https://placekitten.com/301/200" alt="Gallery 2" />
          <img src="https://placekitten.com/302/200" alt="Gallery 3" />
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/mayvlqzp" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">© 2025 Freshin Francis</footer>
    </div>
  );
};

export default App;
