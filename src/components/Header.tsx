import { motion } from "framer-motion";

const regions = [
  { name: "Nagpur", sectionId: "nagpur" },
  { name: "Tamil Nadu", sectionId: "tamil-nadu" },
  { name: "Maharashtra", sectionId: "maharashtra" },
  { name: "Karnataka", sectionId: "karnataka" },
  { name: "Gujarat", sectionId: "gujarat" },
];

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Animation */}
        <motion.a 
          href="/" 
          className="flex flex-col items-center group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.svg
            className="w-8 h-8 text-temple-gold mb-1"
            viewBox="0 0 24 24"
            fill="currentColor"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M12 2L8 6H4L3 8V10L2 12V22H22V12L21 10V8L20 6H16L12 2ZM12 4.5L14.5 7H9.5L12 4.5ZM5 9H19V10H5V9ZM4 12H20V20H4V12ZM6 14V18H8V14H6ZM10 14V18H14V14H10ZM16 14V18H18V14H16Z" />
          </motion.svg>
          <motion.span 
            className="font-serif text-xl font-bold text-temple-red tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Divya Darshan
          </motion.span>
        </motion.a>

        {/* Regional Navigation with Stagger Animation */}
        <nav className="hidden md:flex items-center gap-8">
          {regions.map((region, index) => (
            <motion.button
              key={region.name}
              onClick={() => scrollToSection(region.sectionId)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              className="relative text-white/90 hover:text-white font-medium transition-colors duration-300 py-1 group bg-transparent border-none cursor-pointer"
            >
              {region.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-temple-saffron origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Authentication with Animation */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <motion.a
            href="/login"
            className="text-white/90 hover:text-white font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.a>
          <motion.a
            href="/signup"
            className="bg-temple-gold text-temple-dark font-semibold px-5 py-2 rounded-md shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Sign Up
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
