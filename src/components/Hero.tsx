import { motion } from "framer-motion";
import { ChevronDown, Building2, Landmark, MapPin, Sparkles, Plane, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-heritage.jpg";

const popularSites = [
  { name: "Hampi", type: "UNESCO Site" },
  { name: "Raigad Fort", type: "Maratha Capital" },
  { name: "Meenakshi Temple", type: "Dravidian Marvel" },
  { name: "Mysore Drone Show", type: "3000+ Drones" },
  { name: "Gol Gumbaz", type: "Light & Sound" },
  { name: "Somnath", type: "Jyotirlinga" },
];

const stats = [
  { icon: Building2, value: "100+", label: "Heritage Sites" },
  { icon: Plane, value: "25+", label: "Drone Shows" },
  { icon: Zap, value: "30+", label: "Light Shows" },
  { icon: MapPin, value: "5", label: "Regions" },
];

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSites = () => {
    const element = document.getElementById("sites-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-temple-dark" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-temple-gold/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 bg-temple-saffron/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex-1 flex flex-col justify-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-temple-gold/20 border border-temple-gold/30 rounded-full text-temple-gold text-sm font-medium backdrop-blur-sm">
            <Landmark className="w-4 h-4" />
            Preserving India's Heritage
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Discover India's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-temple-saffron to-amber-400">
            Glorious Heritage
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Explore temples, forts, spectacular drone shows & mesmerizing light shows across 
          Nagpur, Maharashtra, Karnataka, Tamil Nadu & Gujarat. Discover hidden gems, 
          get real-time info, timings, entry fees, and plan your complete heritage journey.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => navigate("/auth")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-temple-dark font-bold rounded-full text-lg shadow-lg shadow-temple-gold/30 transition-all duration-300"
          >
            Start Exploring
          </motion.button>
          <motion.button
            onClick={scrollToSites}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full text-lg transition-all duration-300"
          >
            View Heritage Sites
          </motion.button>
        </motion.div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-white/50 text-sm mb-4 uppercase tracking-wider">
            Featured Destinations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-300 cursor-default"
              >
                <span className="font-medium">{site.name}</span>
                <span className="text-white/50 text-sm ml-2">• {site.type}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto text-temple-gold mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToSites}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-10 mb-8 text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2"
      >
        <span className="text-sm uppercase tracking-wider">Explore Heritage</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
