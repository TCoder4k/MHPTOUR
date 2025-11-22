import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div
              className="text-3xl font-bold mb-4 tracking-widest"
              style={{
                background: 'linear-gradient(135deg, #0066FF 0%, #00B3FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.15em',
              }}
            >
              MHBTOUR
            </div>
            <p className="text-gray-400 mb-4">
              Đồng hành cùng bạn khám phá thế giới với những trải nghiệm du lịch tuyệt vời nhất.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Tour trong nước</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tour ngoài nước</li>
              <li className="hover:text-white cursor-pointer transition-colors">Vé máy bay</li>
              <li className="hover:text-white cursor-pointer transition-colors">Đặt khách sạn</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Về Chúng Tôi</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Giới thiệu</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tin tức</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tuyển dụng</li>
              <li className="hover:text-white cursor-pointer transition-colors">Điều khoản</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-[#00B3FF]" />
                <span>55 Giải Phóng, Hai Bà Trưng</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-[#00B3FF]" />
                <span>+84356481405</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-[#00B3FF]" />
                <span>TODUYTU@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MHBTOUR. All rights reserved. Designed with passion for travel.</p>
        </div>
      </div>
    </footer>
  );
}
