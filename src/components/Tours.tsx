import { MapPin, Calendar, Users } from 'lucide-react';

const tours = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3152124/pexels-photo-3152124.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Hạ Long Bay - Kỳ Quan Thiên Nhiên',
    description: 'Khám phá vẻ đẹp hùng vĩ của Di sản Thế giới với hàng nghìn đảo đá vôi',
    price: '2.990.000đ',
    duration: '3 ngày 2 đêm',
    location: 'Quảng Ninh',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Phú Quốc - Đảo Ngọc',
    description: 'Thư giãn trên bãi biển tuyệt đẹp, tham quan vườn tiêu và làng chài',
    price: '4.590.000đ',
    duration: '4 ngày 3 đêm',
    location: 'Kiên Giang',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Sapa - Mùa Lúa Chín',
    description: 'Chinh phục Fansipan, khám phá văn hóa dân tộc và ruộng bậc thang',
    price: '3.490.000đ',
    duration: '3 ngày 2 đêm',
    location: 'Lào Cai',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Đà Lạt - Thành Phố Ngàn Hoa',
    description: 'Tận hưởng khí hậu mát mẻ, thăm thác Datanla và hồ Tuyền Lâm',
    price: '2.790.000đ',
    duration: '3 ngày 2 đêm',
    location: 'Lâm Đồng',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Đà Nẵng - Hội An',
    description: 'Khám phá cầu Vàng, phố cổ Hội An và bãi biển Mỹ Khê',
    price: '3.290.000đ',
    duration: '4 ngày 3 đêm',
    location: 'Đà Nẵng',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Nha Trang - Thiên Đường Biển',
    description: 'Lặn ngắm san hô, tắm bùn khoáng và tham quan Vinpearl Land',
    price: '3.690.000đ',
    duration: '4 ngày 3 đêm',
    location: 'Khánh Hòa',
  },
];

export default function Tours() {
  return (
    <section id="tours" className="py-20 bg-[#F5F8FF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tours Nổi Bật
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá những điểm đến hấp dẫn nhất với các gói tour được thiết kế chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="reveal bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[#0066FF] font-bold text-lg">{tour.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-[#0066FF]" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-[#0066FF]" />
                    <span>{tour.duration}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#0066FF] to-[#00B3FF] text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
