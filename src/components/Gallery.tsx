const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Vịnh Hạ Long',
    tall: true,
  },
  {
    url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Phố Cổ Hội An',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Ruộng Bậc Thang',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bãi Biển Đà Nẵng',
    tall: true,
  },
  {
    url: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Đà Lạt',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Phú Quốc',
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-[#F5F8FF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Bộ Sưu Tập Hình Ảnh
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Những khoảnh khắc đẹp nhất được ghi lại từ các chuyến đi
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`reveal relative overflow-hidden rounded-xl group cursor-pointer ${
                image.tall ? 'row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
