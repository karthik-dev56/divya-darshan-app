import { Heart } from "lucide-react";

const Footer = () => {
  const regions = ["Nagpur", "Tamil Nadu", "Maharashtra", "Karnataka", "Gujarat"];
  const quickLinks = ["About Us", "Contact", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="bg-temple-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-temple-saffron text-2xl">🕉️</span>
              <span className="font-serif text-2xl font-bold text-white">
                Divya Darshan
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted companion for sacred journeys across India's holiest temples. 
              Discover darshan timings, rituals, and travel tips.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-temple-saffron transition-colors duration-300">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-temple-saffron transition-colors duration-300">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-temple-saffron transition-colors duration-300">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-temple-gold">
              Explore Regions
            </h4>
            <ul className="space-y-3">
              {regions.map((region) => (
                <li key={region}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-temple-saffron transition-colors duration-300 text-sm"
                  >
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-temple-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-temple-saffron transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-temple-gold">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>📧 info@divyadarshan.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Mumbai, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Divya Darshan. All rights reserved.
            </p>
            <p className="text-white/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-temple-red fill-temple-red" /> for devotees
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
