import { Link } from "react-router-dom";

const regions = [
  { name: "Nagpur", path: "/nagpur" },
  { name: "Tamil Nadu", path: "/tamil-nadu" },
  { name: "Maharashtra", path: "/maharashtra" },
  { name: "Karnataka", path: "/karnataka" },
  { name: "Gujarat", path: "/gujarat" },
];

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <svg
            className="w-8 h-8 text-temple-gold mb-1 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L8 6H4L3 8V10L2 12V22H22V12L21 10V8L20 6H16L12 2ZM12 4.5L14.5 7H9.5L12 4.5ZM5 9H19V10H5V9ZM4 12H20V20H4V12ZM6 14V18H8V14H6ZM10 14V18H14V14H10ZM16 14V18H18V14H16Z" />
          </svg>
          <span className="font-serif text-xl font-bold text-temple-red tracking-wide">
            Divya Darshan
          </span>
        </Link>

        {/* Regional Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {regions.map((region) => (
            <Link
              key={region.name}
              to={region.path}
              className="relative text-white/90 hover:text-white font-medium transition-colors duration-300 py-1 group"
            >
              {region.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-temple-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-white/90 hover:text-white font-medium transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-temple-gold hover:bg-temple-gold/90 text-temple-dark font-semibold px-5 py-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
