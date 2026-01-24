import { Link } from "react-router-dom";

const popularTemples = [
  { name: "Shirdi", path: "/shirdi" },
  { name: "Rameswaram", path: "/rameswaram" },
  { name: "Ujjain", path: "/ujjain" },
  { name: "Dwarka", path: "/dwarka" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Plan Your Sacred Journey Across India's Holiest Temples
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Discover darshan timings, rituals, and travel tips for 500+ temples in
          Nagpur, Tamil Nadu, Maharashtra, Karnataka & Gujarat
        </p>

        {/* Popular Tags */}
        <div className="animate-fade-in animation-delay-400">
          <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">
            Popular Now
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTemples.map((temple) => (
              <Link
                key={temple.name}
                to={temple.path}
                className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-temple-saffron hover:border-temple-saffron hover:text-temple-dark font-medium transition-all duration-300 hover:scale-105"
              >
                {temple.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
