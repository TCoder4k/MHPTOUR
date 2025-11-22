import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trải Nghiệm Cùng MHBTOUR
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Xem video để cảm nhận trọn vẹn những khoảnh khắc tuyệt vời trong các tour du lịch
          </p>
        </div>

        <div className="reveal max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Video thumbnail"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl group"
                >
                  <Play size={32} className="text-[#0066FF] ml-1 group-hover:text-[#00B3FF] transition-colors" />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/4CbLXeGSDxg?autoplay=1"
                title="Travel Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
