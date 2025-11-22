import { Award, Users, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Chuyên Nghiệp',
    description: 'Đội ngũ hướng dẫn viên giàu kinh nghiệm, được đào tạo bài bản',
  },
  {
    icon: Users,
    title: 'Tận Tâm',
    description: 'Chăm sóc khách hàng 24/7, đồng hành cùng bạn mọi lúc mọi nơi',
  },
  {
    icon: Globe,
    title: 'Đa Dạng',
    description: 'Hàng trăm điểm đến trong và ngoài nước với nhiều lựa chọn',
  },
  {
    icon: Shield,
    title: 'An Toàn',
    description: 'Bảo hiểm du lịch toàn diện, cam kết chất lượng dịch vụ',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Về MHBTOUR
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              MHBTOUR là công ty du lịch hàng đầu Việt Nam với hơn 10 năm kinh nghiệm trong ngành.
              Chúng tôi tự hào mang đến những trải nghiệm du lịch tuyệt vời nhất cho hàng ngàn khách hàng
              mỗi năm.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Với phương châm "Tận tâm - Chuyên nghiệp - Uy tín", chúng tôi không ngừng nỗ lực để
              mỗi chuyến đi của bạn đều trở thành những kỷ niệm đáng nhớ.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-[#F5F8FF] rounded-lg">
                <div className="text-4xl font-bold text-[#0066FF] mb-2">10+</div>
                <div className="text-gray-600">Năm Kinh Nghiệm</div>
              </div>
              <div className="text-center p-4 bg-[#F5F8FF] rounded-lg">
                <div className="text-4xl font-bold text-[#0066FF] mb-2">50K+</div>
                <div className="text-gray-600">Khách Hàng Hài Lòng</div>
              </div>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F5F8FF] to-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0066FF] to-[#00B3FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
