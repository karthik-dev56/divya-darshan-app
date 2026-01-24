import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

// Import temple images
import deekshabhoomiImg from "@/assets/temples/deekshabhoomi.jpg";
import tekdiGaneshImg from "@/assets/temples/tekdi-ganesh.jpg";
import ramtekRamMandirImg from "@/assets/temples/ramtek-ram-mandir.jpg";
import koradiMataImg from "@/assets/temples/koradi-mata.jpg";
import siddhivinayakImg from "@/assets/temples/siddhivinayak.jpg";
import shirdiSaiBabaImg from "@/assets/temples/shirdi-sai-baba.jpg";
import trimbakeshwarImg from "@/assets/temples/trimbakeshwar.jpg";
import mahalaxmiKolhapurImg from "@/assets/temples/mahalaxmi-kolhapur.jpg";
import meenakshiMaduraiImg from "@/assets/temples/meenakshi-madurai.jpg";
import brihadeeswaraImg from "@/assets/temples/brihadeeswarar.jpg";
import rameswaramImg from "@/assets/temples/rameswaram.jpg";
import kapaleeshwararImg from "@/assets/temples/kapaleeshwarar.jpg";

interface Temple {
  name: string;
  location: string;
  openTime: string;
  closeTime: string;
  image: string;
}

interface RegionTemples {
  region: string;
  sectionId: string;
  temples: Temple[];
}

const templesData: RegionTemples[] = [
  {
    region: "Nagpur",
    sectionId: "nagpur",
    temples: [
      { name: "Deekshabhoomi", location: "Nagpur", openTime: "6:00 AM", closeTime: "9:00 PM", image: deekshabhoomiImg },
      { name: "Ganesh Temple", location: "Tekdi", openTime: "5:30 AM", closeTime: "10:00 PM", image: tekdiGaneshImg },
      { name: "Ram Mandir", location: "Ramtek", openTime: "6:00 AM", closeTime: "8:00 PM", image: ramtekRamMandirImg },
      { name: "Koradi Mata Temple", location: "Koradi", openTime: "5:00 AM", closeTime: "9:30 PM", image: koradiMataImg },
    ],
  },
  {
    region: "Maharashtra",
    sectionId: "maharashtra",
    temples: [
      { name: "Siddhivinayak Temple", location: "Mumbai", openTime: "5:30 AM", closeTime: "10:00 PM", image: siddhivinayakImg },
      { name: "Shirdi Sai Baba", location: "Shirdi", openTime: "4:00 AM", closeTime: "11:00 PM", image: shirdiSaiBabaImg },
      { name: "Trimbakeshwar", location: "Nashik", openTime: "5:30 AM", closeTime: "9:00 PM", image: trimbakeshwarImg },
      { name: "Mahalaxmi Temple", location: "Kolhapur", openTime: "4:00 AM", closeTime: "10:00 PM", image: mahalaxmiKolhapurImg },
    ],
  },
  {
    region: "Tamil Nadu",
    sectionId: "tamil-nadu",
    temples: [
      { name: "Meenakshi Temple", location: "Madurai", openTime: "5:00 AM", closeTime: "10:00 PM", image: meenakshiMaduraiImg },
      { name: "Brihadeeswarar", location: "Thanjavur", openTime: "6:00 AM", closeTime: "8:30 PM", image: brihadeeswaraImg },
      { name: "Rameswaram Temple", location: "Rameswaram", openTime: "5:00 AM", closeTime: "9:00 PM", image: rameswaramImg },
      { name: "Kapaleeshwarar", location: "Chennai", openTime: "5:30 AM", closeTime: "12:00 PM", image: kapaleeshwararImg },
    ],
  },
];

const TempleCard = ({ temple, index }: { temple: Temple; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card 
        className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card cursor-pointer"
      >
        <div className="relative overflow-hidden h-52">
          <motion.img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-serif text-white text-lg font-semibold drop-shadow-lg">{temple.name}</h3>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <MapPin className="w-3 h-3" />
              <span>{temple.location}</span>
            </div>
          </div>
        </div>
        <CardContent className="p-4 bg-gradient-to-b from-card to-secondary/30">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">{temple.openTime}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-temple-red" />
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">{temple.closeTime}</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FamousTemples = () => {
  return (
    <section id="temples-section" className="py-20 px-4 bg-temple-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Explore Sacred <span className="text-temple-saffron">Destinations</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover the divine beauty and spiritual significance of India's most revered temples
          </p>
        </motion.div>

        {templesData.map((region, regionIndex) => (
          <div key={region.region} id={region.sectionId} className="mb-20 last:mb-0 scroll-mt-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-temple-saffron/50 to-transparent" />
              <h3 className="font-serif text-2xl md:text-3xl text-white px-4">
                {region.region}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-temple-saffron/50 to-transparent" />
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {region.temples.map((temple, index) => (
                <TempleCard key={temple.name} temple={temple} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FamousTemples;
