import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F8FF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Poppins',sans-serif]">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hãy để lại thông tin, chúng tôi sẽ tư vấn cho bạn tour phù hợp nhất
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Họ và Tên</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Nội Dung</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all resize-none"
                  placeholder="Nhập nội dung liên hệ..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#00B3FF] text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Gửi Liên Hệ
              </button>
            </form>
          </div>

          <div className="reveal space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#00B3FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Điện Thoại</h3>
                  <p className="text-gray-600">+84 0356481405</p>
                  <p className="text-gray-600">+84 0125789641</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#00B3FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">QuanHao@mhbtour.com</p>
                  <p className="text-gray-600">DuyTu@mhbtour.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#00B3FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Địa Chỉ</h3>
                  <p className="text-gray-600">55 Giải Phóng , Hai Bà Trưng</p>
                  <p className="text-gray-600">Thành phố Hà Nội, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.8171395945969!2d105.84350316737968!3d21.00295531066523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac773026b415%3A0x499b8b613889f78a!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBYw6J5IEThu7FuZyBIw6AgTuG7mWkgLSBIVUNF!5e0!3m2!1svi!2s!4v1763831230753!5m2!1svi!2s"
                title="MHBTOUR location map"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
