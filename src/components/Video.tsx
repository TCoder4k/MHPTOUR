export default function Video() {
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
          <video
            controls
            className="w-full h-auto"
            poster="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
