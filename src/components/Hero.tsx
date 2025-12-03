import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up"
          style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0.2s' }}
        >
          Khám Phá Thế Giới Cùng{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00B3FF 0%, #0066FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: '"Orbitron", sans-serif',
              letterSpacing: '0.08em',
              fontWeight: 900,
              textShadow: '0 4px 30px rgba(0, 179, 255, 0.5)',
              filter: 'drop-shadow(0 0 12px rgba(0, 179, 255, 0.6))',
            }}
          >
            MHB<span style={{ color: '#FFFFFF' }}>•</span>TOUR
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Trải nghiệm những hành trình tuyệt vời, khám phá những điểm đến kỳ thú khắp Việt Nam và
          thế giới
        </p>
        <button
          onClick={scrollToTours}
          className="bg-gradient-to-r from-[#0066FF] to-[#00B3FF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          Khám phá tour ngay
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
