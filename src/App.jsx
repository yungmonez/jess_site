import React, { useState, useEffect } from 'react';
import { Microscope, Zap, Heart, ArrowRight, ChevronLeft } from 'lucide-react';
import profileImg from './assets/jg_photo.png';

/**
 * JESS GARELIK, MD - PROFESSIONAL PRACTICE
 * Refactored to use Standard CSS (No Tailwind)
 */

const styles = `
  :root {
    --bg: #e9e6e2;
    --text: #1c1917;
    --text-muted: #4b4742;
    --stone-50: #fafaf9;
    --stone-100: #f5f5f4;
    --stone-200: #e7e5e4;
    --stone-300: #a39e97;
    --stone-400: #a8a29e;
    --accent: #000000;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: var(--text);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
  }

  .font-serif {
    font-family: "Georgia", serif;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Navigation */
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.8s ease;
    background: var(--bg);
    padding: 2.5rem 0;
  }

  .nav.scrolled {
    padding: 1rem 0;
    border-bottom: 1px solid var(--stone-100);
    background: rgba(255, 255, 255, 0.98);
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.25rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    font-weight: 300;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
  }

  .nav-links {
    display: flex;
    gap: 3.5rem;
  }

  .nav-links button {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.35em;
    font-weight: 300;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text);
  }

  .nav-links button:hover {
    opacity: 0.4;
  }

  /* Sections */
  .section {
    padding: 5rem 0;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 5rem;
    align-items: center;
  }

  .about-hero-grid {
    grid-template-columns: 1fr 1.5fr;
  }

  .image-box {
    aspect-ratio: 3/4;
    background: var(--bg);
    filter: grayscale(1);
    overflow: hidden;
    transition: filter 1s ease;
    padding: 0;
    box-sizing: border-box;
  }

  .image-box:hover {
    filter: grayscale(0);
  }

  .image-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: transparent;
    transition: transform 1s ease;
  }

  .image-box:hover img {
    transform: scale(1.05);
  }

  .label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.8em;
    color: var(--stone-300);
    display: block;
    margin-bottom: 3rem;
  }

  .hero-quote {
    font-size: 3rem;
    line-height: 1.2;
    font-style: normal;
    letter-spacing: -0.04em;
    margin-bottom: 3rem;
    text-transform: lowercase;
  }

  .body-text {
    color: var(--text-muted);
    font-size: 1.125rem;
    line-height: 1.8;
    font-weight: 300;
    max-width: 500px;
  }

  /* Focus Cards */
  .focus-section {
    background: var(--stone-50);
    border-top: 1px solid var(--stone-200);
    border-bottom: 1px solid var(--stone-200);
    padding: 1.5rem 0;
  }

  .focus-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: var(--stone-200);
    gap: 1px;
    border: 1px solid var(--stone-200);
  }

  .focus-card {
    background: var(--bg);
    padding: 0.5rem 4rem 4rem 4rem;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background 0.4s ease;
  }

  .focus-card:hover {
    background: var(--stone-50);
  }

  .focus-card h3 {
    font-size: 2.5rem;
    font-style: normal;
    margin: 0 0 1rem 0;
    text-transform: lowercase;
  }

  /* Form */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
  }

  .form-wrapper {
    background: var(--stone-50);
    padding: 4rem;
    border: 1px solid var(--stone-100);
  }

  .form-field {
    border-bottom: 1px solid var(--stone-200);
    margin-bottom: 3rem;
    padding-bottom: 0.5rem;
    position: relative;
  }

  .form-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    color: var(--text);
    margin-bottom: 1rem;
    display: block;
  }

  .form-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-family: "Georgia", serif;
    font-style: normal;
    font-size: 1.25rem;
  }
  .form-input::placeholder { color: var(--stone-300); opacity: 1; }
  .form-input::-webkit-input-placeholder { color: var(--stone-300); }
  .form-input:-ms-input-placeholder { color: var(--stone-300); }
  .form-input::-ms-input-placeholder { color: var(--stone-300); }

  .form-error {
    font-size: 10px;
    color: #f87171;
    position: absolute;
    bottom: -1.5rem;
  }

  .btn-submit {
    width: 100%;
    padding: 1.5rem;
    background: var(--text);
    color: var(--bg);
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.6em;
    font-size: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .btn-submit:hover {
    background: var(--accent);
  }

  @media (max-width: 1024px) {
    .hero-grid, .contact-grid, .focus-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .container {
      padding: 0 1rem;
    }
    .nav-links { display: none; }
    .nav { padding: 1rem 0; }
    main { padding-top: 5rem; }
    .section {
      padding: 2.5rem 0;
    }
    .focus-card {
      padding: 1.5rem 1rem 2rem 1rem;
      height: auto;
    }
    .image-box {
      aspect-ratio: 1/1.2;
      min-height: 220px;
    }
    .hero-quote {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    .focus-card h3 {
      font-size: 1.5rem;
    }
    .body-text {
      font-size: 1rem;
      max-width: 100%;
    }
    .form-wrapper {
      padding: 2rem 1rem;
    }
    .contact-grid {
      gap: 2rem;
    }
    footer {
      padding: 2rem 0 !important;
    }
    .about-hero-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const ContactForm = () => {
  // Formspree handles form submission and redirects to a confirmation page

  return (
    <div className="form-wrapper">
      <form
        action="https://formspree.io/f/mbdaoyye"
        method="POST"
      >
        <div className="form-field">
          <label className="form-label">Full Name</label>
          <input className="form-input" name="name" placeholder="Name" required />
        </div>
        <div className="form-field">
          <label className="form-label">Email Address</label>
          <input className="form-input" name="email" type="email" placeholder="email@address.com" required />
        </div>
        <div className="form-field">
          <label className="form-label">Phone Number</label>
          <input className="form-input" name="phone" placeholder="(212) 123-4567" required />
        </div>
        <div className="form-field">
          <label className="form-label">Subject</label>
          <select className="form-input" name="subject" style={{fontStyle: 'normal', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em'}} required>
            <option>Surgical Consultation</option>
            <option>Cosmetic Treatment</option>
            <option>Medical Screening</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label">Message</label>
          <textarea className="form-input" name="message" placeholder="How can we help you?" style={{minHeight: '80px', resize: 'vertical'}} required />
        </div>
        <button type="submit" className="btn-submit">
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

const AboutPage = ({ setPage }) => (
  <div className="container" style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
    <button onClick={() => setPage('home')} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--stone-400)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.4em', marginBottom: '5rem', cursor: 'pointer'}}>
      <ChevronLeft size={14}/> Back to Home
    </button>
    <div className="hero-grid about-hero-grid">
      <div className="image-box" style={{aspectRatio: '3/4'}}>
        <img src={profileImg} alt="Jess Garelik" />
      </div>
      <div>
        <h1 className="font-serif hero-quote" style={{fontSize: '4rem', marginBottom: '4rem', textTransform: 'none'}}>Dr. Jessica Garelik</h1>
        <div className="body-text" style={{maxWidth: 'none', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <p>Dr. Jessica Garelik is a board-certified dermatologist with advanced fellowship training in cosmetics and lasers. She offers innovative, science-driven medical and aesthetic dermatologic care in Manhattan.</p>
          <p>She completed a Dermatologic Laser Surgery and Aesthetic Dermatology Fellowship at the University of Toronto and dermatology residency at Albert Einstein College of Medicine in New York. Prior to residency training, she completed research fellowships in Dermatopharmacology at Albert Einstein College of Medicine and New York University. She previously worked as an Assistant Professor of Dermatology at New York University, in New York, and Northwestern University, Feinberg School of Medicine, in Chicago.</p>
          <p>Dr. Garelik has authored peer-reviewed journal articles and presented her research at national dermatology conferences. She is also active in many professional organizations such as The American Academy of Dermatology, the American Society for Dermatologic Surgery, the Women’s Dermatologic Society, and the American Society for Laser Medicine and Surgery.</p>
          <p>Over the last decade, she has developed an expertise in medical therapies, cosmetic injectables, laser and energy-based devices, and positive aging treatments. Her holistic and personalized approach combines medical and procedural aesthetic treatment strategies to optimize skin health. She is passionate about providing the highest quality, comprehensive care that is tailored with intention to best serve her patients’ medical and aesthetic dermatologic needs. Dr. Garelik is also passionate about using evidence-based pharmacotherapy, including GLP-1 agonists, as well as lifestyle and behavioral treatment strategies to optimize skin health, wellbeing, and longevity.</p>
        </div>
      </div>
    </div>
  </div>
);

const Home = ({ setPage }) => (
  <>
    <section className="section" id="about">
      <div className="container hero-grid">
        <div className="image-box">
          <img src={profileImg} alt="Dr. Garelik" />
        </div>
        <div className="hero-text">
          <span className="label">The Approach</span>
          <h2 className="font-serif hero-quote">"To effortlessly showcase and enhance your natural beauty and elevate your self-confidence."</h2>
          <p className="body-text">
            Dr. Jessica Garelik is a board-certified dermatologist. Her practice philosophy focuses on delivering natural, effortlessly beautiful results that showcase and enhance your natural beauty.
          </p>
          <button onClick={() => { setPage('bio'); window.scrollTo(0, 0); }} style={{background: 'none', border: 'none', borderBottom: '1px solid #000', paddingBottom: '0.5rem', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.5em', marginTop: '2rem', cursor: 'pointer', color: 'var(--text)'}}>
            Read the Full Bio <ArrowRight size={14} style={{marginLeft: '0.5rem'}}/>
          </button>
        </div>
      </div>
    </section>

    <section className="section focus-section" id="focus">
      <div className="container">
        <h2 className="font-serif hero-quote" style={{marginBottom: '2rem'}}>Clinical Focus.</h2>
        <div className="focus-grid">
          {[
            { title: 'Cosmetic', sub: 'Lasers & Injectables', icon: <Zap size={20} /> },
            { title: 'Regenerative', sub: 'Positive Aging', icon: <Heart size={20} /> },
            { title: 'Medical', sub: 'Dermatopharmacology', icon: <Microscope size={20} /> }
          ].map((item, i) => (
            <div key={i} className="focus-card">
              <div style={{color: 'var(--stone-300)'}}>{item.icon}</div>
              <div>
                <h3 className="font-serif">{item.title}</h3>
                <h4 style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', borderBottom: '1px solid var(--stone-100)', paddingBottom: '1rem', marginBottom: '1rem'}}>{item.sub}</h4>
                <p className="body-text" style={{fontSize: '0.875rem'}}>Science-driven treatments curated for structural longevity and aesthetic optimization.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="font-serif hero-quote" style={{marginBottom: '2rem'}}>Connect.</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <span className="label" style={{margin: 0}}>Location</span>
              <p style={{fontSize: '14px', textTransform: 'none', letterSpacing: '0.3em', margin: 0}}>110 E 60th St.</p>
              <p style={{fontSize: '14px', textTransform: 'none', letterSpacing: '0.3em', margin: 0}}>Suite 1002</p>
              <p style={{fontSize: '14px', textTransform: 'none', letterSpacing: '0.3em', margin: 0}}>New York, NY 10022</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <span className="label" style={{margin: 0}}>Contact</span>
              <p style={{fontSize: '14px', textTransform: 'lowercase', letterSpacing: '0.3em'}}>hello@drjgarelik.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </>
);

export default function App() {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <style>{styles}</style>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <button className="logo" onClick={() => { setPage('home'); window.scrollTo(0,0); }}>Dr. Jessica Garelik</button>
          <div className="nav-links">
            <button onClick={() => handleNav('about')}>About</button>
            <button onClick={() => handleNav('focus')}>Focus</button>
            <button onClick={() => handleNav('contact')}>Inquiry</button>
          </div>
        </div>
      </nav>

      <main>
        {page === 'home' ? <Home setPage={setPage} /> : <AboutPage setPage={setPage} />}
      </main>

      <footer style={{padding: '6rem 0', borderTop: '1px solid var(--stone-100)', textAlign: 'center'}}>
        <p style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.8em', color: 'var(--stone-300)', marginBottom: '1rem'}}>© 2026 Jess Garelik • Manhattan</p>
        <p className="font-serif" style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.8em', color: 'var(--stone-300)', fontStyle: 'normal'}}>innovation. longevity. natural results.</p>
      </footer>
    </div>
  );
}