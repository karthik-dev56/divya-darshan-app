import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const popularTemples = [
  { name: "Shirdi", sectionId: "maharashtra" },
  { name: "Rameswaram", sectionId: "tamil-nadu" },
  { name: "Ujjain", sectionId: "maharashtra" },
  { name: "Dwarka", sectionId: "gujarat" },
];

const Hero = () => {
  const scrollToTemples = () => {
    const element = document.getElementById("temples-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-temple-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Plan Your Sacred Journey Across India's Holiest Temples
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
        >
          Discover darshan timings, rituals, and travel tips for 500+ temples in
          Nagpur, Tamil Nadu, Maharashtra, Karnataka & Gujarat
        </motion.p>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">
            Popular Now
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTemples.map((temple, index) => (
              <motion.button
                key={temple.name}
                onClick={() => scrollToSection(temple.sectionId)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-temple-saffron hover:border-temple-saffron hover:text-temple-dark font-medium transition-colors duration-300"
              >
                {temple.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToTemples}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2"
        >
          <span className="text-sm uppercase tracking-wider">Explore Temples</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-temple-dark via-temple-dark/80 to-transparent" />
    </section>
  );
};

export default Hero;
