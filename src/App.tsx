import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Video from './components/Video';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

  // Animation trigger
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Remove Bolt badge
  useEffect(() => {
    const interval = setInterval(() => {
      // Cố gắng xoá mọi element nghi ngờ là badge Bolt
      const selectors = [
        "bolt-badge",
        "[class*='bolt']",
        "[id*='bolt']",
        "iframe"
      ];

      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          // nếu là iframe -> kiểm tra bên trong
          if (el.tagName === "IFRAME") {
            try {
              const doc = el.contentDocument || el.contentWindow.document;
              if (doc && doc.body && doc.body.innerText.includes("Bolt")) {
                el.remove();
              }
            } catch {}
          }

          // nếu là div/span bình thường
          if (el.innerText && el.innerText.toLowerCase().includes("bolt")) {
            el.remove();
          }
        });
      });

    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Tours />
      <Video />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
