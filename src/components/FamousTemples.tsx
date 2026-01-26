import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Star, Building2, Landmark, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Import site images
import hampiVittalaImg from "@/assets/sites/hampi-vittala.jpg";
import meenakshiTempleImg from "@/assets/sites/meenakshi-temple.jpg";
import raigadFortImg from "@/assets/sites/raigad-fort.jpg";
import thanjavurTempleImg from "@/assets/sites/thanjavur-temple.jpg";
import somnathTempleImg from "@/assets/sites/somnath-temple.jpg";
import indianTempleImg from "@/assets/sites/indian-temple.jpg";
import indianFortImg from "@/assets/sites/indian-fort.jpg";
import mysoreTempleImg from "@/assets/sites/mysore-temple.jpg";
import heritageSiteImg from "@/assets/sites/heritage-site.jpg";

// Existing temple images
import deekshabhoomiImg from "@/assets/temples/deekshabhoomi.jpg";
import tekdiGaneshImg from "@/assets/temples/tekdi-ganesh.jpg";
import ramtekRamMandirImg from "@/assets/temples/ramtek-ram-mandir.jpg";
import koradiMataImg from "@/assets/temples/koradi-mata.jpg";
import siddhivinayakImg from "@/assets/temples/siddhivinayak.jpg";
import shirdiSaiBabaImg from "@/assets/temples/shirdi-sai-baba.jpg";
import trimbakeshwarImg from "@/assets/temples/trimbakeshwar.jpg";
import mahalaxmiKolhapurImg from "@/assets/temples/mahalaxmi-kolhapur.jpg";

interface HeritageSite {
  id: string;
  name: string;
  location: string;
  type: "temple" | "fort";
  openTime: string;
  closeTime: string;
  image: string;
  rating: number;
  entryFee: string;
  vipAvailable?: boolean;
}

interface RegionSites {
  region: string;
  sectionId: string;
  description: string;
  sites: HeritageSite[];
}

const sitesData: RegionSites[] = [
  {
    region: "Nagpur",
    sectionId: "nagpur",
    description: "Deep Maratha & British colonial history with ancient temples and forts",
    sites: [
      { id: "deekshabhoomi", name: "Deekshabhoomi", location: "Nagpur Central", type: "temple", openTime: "6:00 AM", closeTime: "9:00 PM", image: deekshabhoomiImg, rating: 4.6, entryFee: "Free" },
      { id: "tekdi-ganesh-temple", name: "Tekdi Ganesh Temple", location: "Sitabuldi", type: "temple", openTime: "5:00 AM", closeTime: "10:00 PM", image: tekdiGaneshImg, rating: 4.7, entryFee: "Free", vipAvailable: true },
      { id: "ramtek-fort-temple", name: "Ramtek Fort Temple", location: "Ramtek", type: "temple", openTime: "5:00 AM", closeTime: "9:00 PM", image: ramtekRamMandirImg, rating: 4.5, entryFee: "Free", vipAvailable: true },
      { id: "sitabuldi-fort", name: "Sitabuldi Fort", location: "Sitabuldi", type: "fort", openTime: "10:00 AM", closeTime: "5:00 PM", image: indianFortImg, rating: 3.8, entryFee: "₹25" },
    ],
  },
  {
    region: "Maharashtra",
    sectionId: "maharashtra",
    description: "Land of Shivaji Maharaj with magnificent forts and sacred Jyotirlingas",
    sites: [
      { id: "raigad-fort", name: "Raigad Fort", location: "Raigad District", type: "fort", openTime: "9:00 AM", closeTime: "6:00 PM", image: raigadFortImg, rating: 4.8, entryFee: "₹50", vipAvailable: true },
      { id: "siddhivinayak-temple", name: "Siddhivinayak Temple", location: "Mumbai", type: "temple", openTime: "5:30 AM", closeTime: "10:00 PM", image: siddhivinayakImg, rating: 4.7, entryFee: "Free", vipAvailable: true },
      { id: "shirdi-sai-temple", name: "Shirdi Sai Baba", location: "Shirdi", type: "temple", openTime: "4:00 AM", closeTime: "11:00 PM", image: shirdiSaiBabaImg, rating: 4.9, entryFee: "Free", vipAvailable: true },
      { id: "kailash-temple-ellora", name: "Kailash Temple Ellora", location: "Aurangabad", type: "temple", openTime: "6:00 AM", closeTime: "6:00 PM", image: heritageSiteImg, rating: 4.9, entryFee: "₹40" },
    ],
  },
  {
    region: "Karnataka",
    sectionId: "karnataka",
    description: "Rich Vijayanagara, Chalukyan and Hoysala architecture heritage",
    sites: [
      { id: "vittala-temple-hampi", name: "Vittala Temple", location: "Hampi", type: "temple", openTime: "8:30 AM", closeTime: "5:30 PM", image: hampiVittalaImg, rating: 4.9, entryFee: "₹40" },
      { id: "badami-caves", name: "Badami Caves", location: "Bagalkot", type: "temple", openTime: "6:00 AM", closeTime: "6:00 PM", image: mysoreTempleImg, rating: 4.6, entryFee: "₹25" },
      { id: "murudeshwar-temple", name: "Murudeshwar Temple", location: "Bhatkal", type: "temple", openTime: "6:00 AM", closeTime: "8:30 PM", image: indianTempleImg, rating: 4.5, entryFee: "Free" },
      { id: "chitradurga-fort", name: "Chitradurga Fort", location: "Chitradurga", type: "fort", openTime: "6:00 AM", closeTime: "6:00 PM", image: indianFortImg, rating: 4.5, entryFee: "₹25" },
    ],
  },
  {
    region: "Tamil Nadu",
    sectionId: "tamil-nadu",
    description: "Dravidian temples and ancient forts spanning centuries of history",
    sites: [
      { id: "meenakshi-temple", name: "Meenakshi Temple", location: "Madurai", type: "temple", openTime: "5:00 AM", closeTime: "10:00 PM", image: meenakshiTempleImg, rating: 4.9, entryFee: "Free", vipAvailable: true },
      { id: "brihadeeswarar-temple", name: "Brihadeeswarar Temple", location: "Thanjavur", type: "temple", openTime: "6:00 AM", closeTime: "8:30 PM", image: thanjavurTempleImg, rating: 4.9, entryFee: "Free" },
      { id: "gingee-fort", name: "Gingee Fort", location: "Villupuram", type: "fort", openTime: "8:00 AM", closeTime: "5:00 PM", image: indianFortImg, rating: 4.4, entryFee: "₹25" },
      { id: "shore-temple", name: "Shore Temple", location: "Mahabalipuram", type: "temple", openTime: "6:00 AM", closeTime: "6:00 PM", image: heritageSiteImg, rating: 4.6, entryFee: "₹40" },
    ],
  },
  {
    region: "Gujarat",
    sectionId: "gujarat",
    description: "Sacred pilgrimage sites and historic trading port heritage",
    sites: [
      { id: "somnath-temple", name: "Somnath Temple", location: "Prabhas Patan", type: "temple", openTime: "6:00 AM", closeTime: "9:30 PM", image: somnathTempleImg, rating: 4.9, entryFee: "Free", vipAvailable: true },
      { id: "dwarkadhish-temple", name: "Dwarkadhish Temple", location: "Dwarka", type: "temple", openTime: "6:30 AM", closeTime: "9:30 PM", image: indianTempleImg, rating: 4.8, entryFee: "Free", vipAvailable: true },
      { id: "rani-ki-vav", name: "Rani ki Vav", location: "Patan", type: "fort", openTime: "8:00 AM", closeTime: "6:00 PM", image: heritageSiteImg, rating: 4.7, entryFee: "₹40" },
      { id: "palitana-temples", name: "Palitana Temples", location: "Bhavnagar", type: "temple", openTime: "6:30 AM", closeTime: "6:30 PM", image: mysoreTempleImg, rating: 4.8, entryFee: "Free" },
    ],
  },
];

const SiteCard = ({ site, index }: { site: HeritageSite; index: number }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={() => navigate(`/site/${site.id}`)}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card 
          className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-temple-gold/20 transition-all duration-500 bg-card cursor-pointer"
        >
          <div className="relative overflow-hidden h-52">
            <motion.img
              src={site.image}
              alt={site.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Type & VIP Badge */}
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className={`${site.type === 'temple' ? 'bg-temple-saffron/90' : 'bg-amber-600/90'} text-white shadow-lg`}>
                {site.type === 'temple' ? <Building2 className="w-3 h-3 mr-1" /> : <Landmark className="w-3 h-3 mr-1" />}
                {site.type.charAt(0).toUpperCase() + site.type.slice(1)}
              </Badge>
              {site.vipAvailable && (
                <Badge className="bg-amber-500/90 text-white shadow-lg">
                  <Crown className="w-3 h-3 mr-1" />
                  VIP
                </Badge>
              )}
            </div>
            
            {/* Rating */}
            <div className="absolute top-3 right-3">
              <Badge className="bg-black/60 text-white backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1 fill-temple-gold text-temple-gold" />
                {site.rating}
              </Badge>
            </div>
            
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="font-serif text-white text-lg font-semibold drop-shadow-lg">{site.name}</h3>
              <div className="flex items-center gap-1 text-white/90 text-sm">
                <MapPin className="w-3 h-3" />
                <span>{site.location}</span>
              </div>
            </div>
          </div>
          <CardContent className="p-4 bg-gradient-to-b from-card to-secondary/30">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-temple-gold" />
                <span className="text-muted-foreground">
                  <span className="text-foreground font-medium">{site.openTime}</span>
                  <span className="mx-1">-</span>
                  <span className="text-foreground font-medium">{site.closeTime}</span>
                </span>
              </div>
              <Badge variant="outline" className="text-green-500 border-green-500/50">
                {site.entryFee}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const FamousTemples = () => {
  const navigate = useNavigate();
  
  return (
    <section id="sites-section" className="py-20 px-4 bg-temple-dark relative">
      {/* Decorative top overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-temple-dark to-transparent -mt-20" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-temple-gold/10 border border-temple-gold/20 rounded-full text-temple-gold text-sm font-medium mb-4"
          >
            <Landmark className="w-4 h-4" />
            Featured Heritage Sites
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-temple-gold to-temple-saffron">Glorious Heritage</span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover ancient temples, majestic forts, and UNESCO World Heritage sites that showcase centuries of Indian history and culture
          </motion.p>
        </motion.div>

        {sitesData.map((region, regionIndex) => (
          <div key={region.region} id={region.sectionId} className="mb-20 last:mb-0 scroll-mt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <motion.div 
                  className="h-px flex-1 bg-gradient-to-r from-transparent via-temple-saffron/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.h3 
                  className="font-serif text-2xl md:text-3xl text-white px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {region.region}
                </motion.h3>
                <motion.div 
                  className="h-px flex-1 bg-gradient-to-r from-transparent via-temple-saffron/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center text-white/50 text-sm"
              >
                {region.description}
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {region.sites.map((site, index) => (
                <SiteCard key={site.id} site={site} index={index} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => navigate("/auth")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-temple-dark font-bold rounded-full text-lg shadow-lg shadow-temple-gold/30 transition-all duration-300"
          >
            Explore All 50+ Heritage Sites
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FamousTemples;
