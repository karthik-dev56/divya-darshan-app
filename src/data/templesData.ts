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

export interface Temple {
  id: string;
  name: string;
  location: string;
  region: string;
  openTime: string;
  closeTime: string;
  image: string;
  tagline: string;
}

export interface Region {
  id: string;
  name: string;
}

export const regions: Region[] = [
  { id: "nagpur", name: "Nagpur" },
  { id: "tamil-nadu", name: "Tamil Nadu" },
  { id: "maharashtra", name: "Maharashtra" },
  { id: "karnataka", name: "Karnataka" },
  { id: "gujarat", name: "Gujarat" },
];

export const templesData: Temple[] = [
  // Nagpur temples
  {
    id: "deekshabhoomi",
    name: "Deekshabhoomi",
    location: "Nagpur",
    region: "nagpur",
    openTime: "6:00 AM",
    closeTime: "9:00 PM",
    image: deekshabhoomiImg,
    tagline: "Sacred site of Dr. Ambedkar's Buddhist conversion ceremony",
  },
  {
    id: "tekdi-ganesh",
    name: "Shree Ganesh Mandir",
    location: "Tekdi, Nagpur",
    region: "nagpur",
    openTime: "5:30 AM",
    closeTime: "10:00 PM",
    image: tekdiGaneshImg,
    tagline: "Famous for morning aarti & prasad distribution",
  },
  {
    id: "ramtek-ram-mandir",
    name: "Ram Mandir",
    location: "Ramtek",
    region: "nagpur",
    openTime: "6:00 AM",
    closeTime: "8:00 PM",
    image: ramtekRamMandirImg,
    tagline: "Ancient temple associated with Lord Rama's exile period",
  },
  {
    id: "koradi-mata",
    name: "Koradi Mata Temple",
    location: "Koradi",
    region: "nagpur",
    openTime: "5:00 AM",
    closeTime: "9:30 PM",
    image: koradiMataImg,
    tagline: "Popular Shakti Peeth with powerful goddess energy",
  },
  {
    id: "nagpur-5",
    name: "Poddareshwar Ram Mandir",
    location: "Sitabuldi, Nagpur",
    region: "nagpur",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    image: ramtekRamMandirImg,
    tagline: "Beautiful temple known for Ram Navami celebrations",
  },
  {
    id: "nagpur-6",
    name: "Swaminarayan Temple",
    location: "Nagpur",
    region: "nagpur",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    image: deekshabhoomiImg,
    tagline: "Serene temple with stunning architecture",
  },
  {
    id: "nagpur-7",
    name: "Shri Mahalaxmi Temple",
    location: "Nagpur",
    region: "nagpur",
    openTime: "5:30 AM",
    closeTime: "9:00 PM",
    image: koradiMataImg,
    tagline: "Devoted to goddess of wealth and prosperity",
  },
  {
    id: "nagpur-8",
    name: "ISKCON Temple",
    location: "Nagpur",
    region: "nagpur",
    openTime: "4:30 AM",
    closeTime: "9:00 PM",
    image: tekdiGaneshImg,
    tagline: "Beautiful Krishna temple with melodious kirtans",
  },

  // Tamil Nadu temples
  {
    id: "meenakshi",
    name: "Meenakshi Amman Temple",
    location: "Madurai",
    region: "tamil-nadu",
    openTime: "4:30 AM",
    closeTime: "10:00 PM",
    image: meenakshiMaduraiImg,
    tagline: "Historic marvel with 14 colorful gopurams",
  },
  {
    id: "brihadeeswarar",
    name: "Brihadeeswarar Temple",
    location: "Thanjavur",
    region: "tamil-nadu",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    image: brihadeeswaraImg,
    tagline: "UNESCO World Heritage Site with magnificent architecture",
  },
  {
    id: "rameswaram",
    name: "Ramanathaswamy Temple",
    location: "Rameswaram",
    region: "tamil-nadu",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    image: rameswaramImg,
    tagline: "Sacred Jyotirlinga with the longest temple corridor",
  },
  {
    id: "kapaleeshwarar",
    name: "Kapaleeshwarar Temple",
    location: "Chennai",
    region: "tamil-nadu",
    openTime: "5:30 AM",
    closeTime: "12:00 PM",
    image: kapaleeshwararImg,
    tagline: "7th century Dravidian architectural masterpiece",
  },
  {
    id: "tn-5",
    name: "Nataraja Temple",
    location: "Chidambaram",
    region: "tamil-nadu",
    openTime: "6:00 AM",
    closeTime: "8:00 PM",
    image: meenakshiMaduraiImg,
    tagline: "Home to the cosmic dancer Shiva Nataraja",
  },
  {
    id: "tn-6",
    name: "Ranganathaswamy Temple",
    location: "Srirangam",
    region: "tamil-nadu",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    image: brihadeeswaraImg,
    tagline: "Largest functioning Hindu temple in the world",
  },
  {
    id: "tn-7",
    name: "Arunachaleswarar Temple",
    location: "Tiruvannamalai",
    region: "tamil-nadu",
    openTime: "5:30 AM",
    closeTime: "9:30 PM",
    image: rameswaramImg,
    tagline: "Famous for the sacred Arunachala hill",
  },
  {
    id: "tn-8",
    name: "Vaitheeswaran Koil",
    location: "Nagapattinam",
    region: "tamil-nadu",
    openTime: "6:00 AM",
    closeTime: "8:00 PM",
    image: kapaleeshwararImg,
    tagline: "Temple of healing and Nadi astrology",
  },

  // Maharashtra temples
  {
    id: "siddhivinayak",
    name: "Siddhivinayak Temple",
    location: "Mumbai",
    region: "maharashtra",
    openTime: "5:30 AM",
    closeTime: "10:00 PM",
    image: siddhivinayakImg,
    tagline: "Most visited Ganesh temple in Mumbai",
  },
  {
    id: "shirdi-sai",
    name: "Shirdi Sai Baba Temple",
    location: "Shirdi",
    region: "maharashtra",
    openTime: "4:00 AM",
    closeTime: "11:00 PM",
    image: shirdiSaiBabaImg,
    tagline: "Samadhi Mandir of the beloved Sai Baba",
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar Temple",
    location: "Nashik",
    region: "maharashtra",
    openTime: "5:30 AM",
    closeTime: "9:00 PM",
    image: trimbakeshwarImg,
    tagline: "One of the 12 sacred Jyotirlingas",
  },
  {
    id: "mahalaxmi-kolhapur",
    name: "Mahalaxmi Temple",
    location: "Kolhapur",
    region: "maharashtra",
    openTime: "4:00 AM",
    closeTime: "10:00 PM",
    image: mahalaxmiKolhapurImg,
    tagline: "One of the Shakti Peethas of goddess Mahalaxmi",
  },
  {
    id: "mh-5",
    name: "Bhimashankar Temple",
    location: "Pune",
    region: "maharashtra",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    image: trimbakeshwarImg,
    tagline: "Jyotirlinga amidst lush green forests",
  },
  {
    id: "mh-6",
    name: "Ashtavinayak Temple",
    location: "Pune",
    region: "maharashtra",
    openTime: "5:30 AM",
    closeTime: "9:30 PM",
    image: siddhivinayakImg,
    tagline: "First among the 8 sacred Ganesh temples",
  },
  {
    id: "mh-7",
    name: "Dagdusheth Halwai Ganpati",
    location: "Pune",
    region: "maharashtra",
    openTime: "6:00 AM",
    closeTime: "10:30 PM",
    image: siddhivinayakImg,
    tagline: "Famous Ganesh temple with gold-plated idol",
  },
  {
    id: "mh-8",
    name: "Vitthal Rukmini Temple",
    location: "Pandharpur",
    region: "maharashtra",
    openTime: "4:00 AM",
    closeTime: "11:00 PM",
    image: shirdiSaiBabaImg,
    tagline: "Sacred pilgrimage destination for Warkaris",
  },

  // Karnataka temples
  {
    id: "ka-1",
    name: "Chamundeshwari Temple",
    location: "Mysore",
    region: "karnataka",
    openTime: "7:30 AM",
    closeTime: "6:00 PM",
    image: mahalaxmiKolhapurImg,
    tagline: "Atop the Chamundi Hills with stunning views",
  },
  {
    id: "ka-2",
    name: "Dharmasthala Temple",
    location: "Dharmasthala",
    region: "karnataka",
    openTime: "6:30 AM",
    closeTime: "8:00 PM",
    image: trimbakeshwarImg,
    tagline: "Unique temple where Jain priests worship Lord Shiva",
  },
  {
    id: "ka-3",
    name: "Murudeshwar Temple",
    location: "Bhatkal",
    region: "karnataka",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    image: brihadeeswaraImg,
    tagline: "Famous for the world's second tallest Shiva statue",
  },
  {
    id: "ka-4",
    name: "Kollur Mookambika",
    location: "Kollur",
    region: "karnataka",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    image: meenakshiMaduraiImg,
    tagline: "One of the seven Mukti Sthalas",
  },
  {
    id: "ka-5",
    name: "Udupi Sri Krishna Temple",
    location: "Udupi",
    region: "karnataka",
    openTime: "5:30 AM",
    closeTime: "9:00 PM",
    image: siddhivinayakImg,
    tagline: "Ancient Krishna temple with unique window darshan",
  },
  {
    id: "ka-6",
    name: "Gokarna Mahabaleshwar",
    location: "Gokarna",
    region: "karnataka",
    openTime: "6:00 AM",
    closeTime: "8:00 PM",
    image: rameswaramImg,
    tagline: "Sacred Shiva temple by the Arabian Sea",
  },
  {
    id: "ka-7",
    name: "Kukke Subramanya",
    location: "Subramanya",
    region: "karnataka",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    image: kapaleeshwararImg,
    tagline: "Famous serpent worship temple in Western Ghats",
  },
  {
    id: "ka-8",
    name: "Hoysaleswara Temple",
    location: "Halebidu",
    region: "karnataka",
    openTime: "6:30 AM",
    closeTime: "5:30 PM",
    image: brihadeeswaraImg,
    tagline: "12th century Hoysala architectural marvel",
  },

  // Gujarat temples
  {
    id: "gj-1",
    name: "Somnath Temple",
    location: "Somnath",
    region: "gujarat",
    openTime: "6:00 AM",
    closeTime: "9:30 PM",
    image: trimbakeshwarImg,
    tagline: "First among the 12 Jyotirlingas",
  },
  {
    id: "gj-2",
    name: "Dwarkadhish Temple",
    location: "Dwarka",
    region: "gujarat",
    openTime: "6:30 AM",
    closeTime: "9:00 PM",
    image: siddhivinayakImg,
    tagline: "One of the Char Dham pilgrimage sites",
  },
  {
    id: "gj-3",
    name: "Akshardham Temple",
    location: "Gandhinagar",
    region: "gujarat",
    openTime: "9:30 AM",
    closeTime: "7:30 PM",
    image: deekshabhoomiImg,
    tagline: "Magnificent complex showcasing Indian culture",
  },
  {
    id: "gj-4",
    name: "Ambaji Temple",
    location: "Ambaji",
    region: "gujarat",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    image: mahalaxmiKolhapurImg,
    tagline: "One of the 51 Shakti Peethas",
  },
  {
    id: "gj-5",
    name: "Nageshwar Jyotirlinga",
    location: "Dwarka",
    region: "gujarat",
    openTime: "6:00 AM",
    closeTime: "9:00 PM",
    image: trimbakeshwarImg,
    tagline: "Ancient Jyotirlinga with unique legend",
  },
  {
    id: "gj-6",
    name: "Rukmini Devi Temple",
    location: "Dwarka",
    region: "gujarat",
    openTime: "7:00 AM",
    closeTime: "8:00 PM",
    image: meenakshiMaduraiImg,
    tagline: "Dedicated to Lord Krishna's consort",
  },
  {
    id: "gj-7",
    name: "Dakor Temple",
    location: "Dakor",
    region: "gujarat",
    openTime: "5:00 AM",
    closeTime: "10:00 PM",
    image: shirdiSaiBabaImg,
    tagline: "Home to the famous Ranchhodrai deity",
  },
  {
    id: "gj-8",
    name: "Palitana Temples",
    location: "Palitana",
    region: "gujarat",
    openTime: "6:30 AM",
    closeTime: "6:00 PM",
    image: brihadeeswaraImg,
    tagline: "900+ Jain temples atop Shatrunjaya Hill",
  },
];

// Helper function to check if temple is currently open
export const isTempleOpen = (openTime: string, closeTime: string): boolean => {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const currentTime = currentHours * 60 + currentMinutes;
  const openMinutes = parseTime(openTime);
  const closeMinutes = parseTime(closeTime);

  return currentTime >= openMinutes && currentTime <= closeMinutes;
};

// Get temples by region
export const getTemplesByRegion = (regionId: string): Temple[] => {
  return templesData.filter((temple) => temple.region === regionId);
};
