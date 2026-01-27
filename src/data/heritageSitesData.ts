// Heritage Sites Data for Indian Historical Places

// Import site images - Existing
import hampiVittalaImg from "@/assets/sites/hampi-vittala.jpg";
import meenakshiTempleImg from "@/assets/sites/meenakshi-temple.jpg";
import raigadFortImg from "@/assets/sites/raigad-fort.jpg";
import thanjavurTempleImg from "@/assets/sites/thanjavur-temple.jpg";
import somnathTempleImg from "@/assets/sites/somnath-temple.jpg";

// Import site images - Nagpur
import sitabuldiFortImg from "@/assets/sites/sitabuldi-fort.jpg";
import nagardhanFortImg from "@/assets/sites/nagardhan-fort.jpg";
import dragonPalaceImg from "@/assets/sites/dragon-palace.jpg";
import poddareshwarTempleImg from "@/assets/sites/poddareshwar-temple.jpg";
import shaniMandirImg from "@/assets/sites/shani-mandir.jpg";
import bhandaraFortImg from "@/assets/sites/bhandara-fort.jpg";
import ambagadFortImg from "@/assets/sites/ambagad-fort.jpg";
import pavnarRuinsImg from "@/assets/sites/pavnar-ruins.jpg";
import manikgarhFortImg from "@/assets/sites/manikgarh-fort.jpg";

// Import site images - Maharashtra
import shivneriFortImg from "@/assets/sites/shivneri-fort.jpg";
import sinhagadFortImg from "@/assets/sites/sinhagad-fort.jpg";
import pratapgadFortImg from "@/assets/sites/pratapgad-fort.jpg";
import daulatabadFortImg from "@/assets/sites/daulatabad-fort.jpg";
import panhalaFortImg from "@/assets/sites/panhala-fort.jpg";
import bhimashankarTempleImg from "@/assets/sites/bhimashankar-temple.jpg";
import morgaonGanpatiImg from "@/assets/sites/morgaon-ganpati.jpg";
import tuljaBhavaniImg from "@/assets/sites/tulja-bhavani.jpg";

// Import site images - Karnataka
import hoysaleswaraTempleImg from "@/assets/sites/hoysaleswara-temple.jpg";
import chennakeshavaBelurImg from "@/assets/sites/chennakeshava-belur.jpg";
import gomateshwaraImg from "@/assets/sites/gomateshwara.jpg";
import murudeshwarTempleImg from "@/assets/sites/murudeshwar-temple.jpg";
import chitradurgaFortImg from "@/assets/sites/chitradurga-fort.jpg";
import golGumbazImg from "@/assets/sites/gol-gumbaz.jpg";
import bidarFortImg from "@/assets/sites/bidar-fort.jpg";
import mirjanFortImg from "@/assets/sites/mirjan-fort.jpg";
import basavakalyanFortImg from "@/assets/sites/basavakalyan-fort.jpg";
import bellaryFortImg from "@/assets/sites/bellary-fort.jpg";

// Import site images - Tamil Nadu
import ramanathaswamyTempleImg from "@/assets/sites/ramanathaswamy-temple.jpg";
import shoreTempleImg from "@/assets/sites/shore-temple.jpg";
import kapaleeshwararTempleImg from "@/assets/sites/kapaleeshwarar-temple.jpg";
import gangaikondaTempleImg from "@/assets/sites/gangaikonda-temple.jpg";
import srirangamTempleImg from "@/assets/sites/srirangam-temple.jpg";
import gingeeFortImg from "@/assets/sites/gingee-fort.jpg";
import velloreFortImg from "@/assets/sites/vellore-fort.jpg";
import thanjavurPalaceImg from "@/assets/sites/thanjavur-palace.jpg";
import trichyRockFortImg from "@/assets/sites/trichy-rock-fort.jpg";
import dindigulFortImg from "@/assets/sites/dindigul-fort.jpg";
import padmanabhapuramPalaceImg from "@/assets/sites/padmanabhapuram-palace.jpg";

// Import site images - Gujarat
import dwarkadhishTempleImg from "@/assets/sites/dwarkadhish-temple.jpg";
import akshardhamGandhinagarImg from "@/assets/sites/akshardham-gandhinagar.jpg";
import palitanaTemplesImg from "@/assets/sites/palitana-temples.jpg";
import modheraSunTempleImg from "@/assets/sites/modhera-sun-temple.jpg";
import ambajiTempleImg from "@/assets/sites/ambaji-temple.jpg";
import dakorTempleImg from "@/assets/sites/dakor-temple.jpg";
import raniKiVavImg from "@/assets/sites/rani-ki-vav.jpg";
import laxmiVilasPalaceImg from "@/assets/sites/laxmi-vilas-palace.jpg";
import champanerPavagadhImg from "@/assets/sites/champaner-pavagadh.jpg";
import uparkotFortImg from "@/assets/sites/uparkot-fort.jpg";
import diuFortImg from "@/assets/sites/diu-fort.jpg";
import ainaMahalBhujImg from "@/assets/sites/aina-mahal-bhuj.jpg";

// Hidden Gem unique sites - NEW
import vakatakaCavesImg from "@/assets/sites/vakataka-caves.jpg";
import mansarRuinsImg from "@/assets/sites/mansar-ruins.jpg";
import markandaTempleImg from "@/assets/sites/markanda-temple.jpg";
import anjaneriCavesImg from "@/assets/sites/anjaneri-caves.jpg";
import aiholeTemplesImg from "@/assets/sites/aihole-temples.jpg";
import yanaCavesImg from "@/assets/sites/yana-caves.jpg";
import adichanallurSiteImg from "@/assets/sites/adichanallur-site.jpg";
import sittanavasalCavesImg from "@/assets/sites/sittanavasal-caves.jpg";
import lothalRuinsImg from "@/assets/sites/lothal-ruins.jpg";
import dholaviraRuinsImg from "@/assets/sites/dholavira-ruins.jpg";

// Existing temple images
import deekshabhoomiImg from "@/assets/temples/deekshabhoomi.jpg";
import tekdiGaneshImg from "@/assets/temples/tekdi-ganesh.jpg";
import ramtekRamMandirImg from "@/assets/temples/ramtek-ram-mandir.jpg";
import koradiMataImg from "@/assets/temples/koradi-mata.jpg";
import siddhivinayakImg from "@/assets/temples/siddhivinayak.jpg";
import shirdiSaiBabaImg from "@/assets/temples/shirdi-sai-baba.jpg";
import trimbakeshwarImg from "@/assets/temples/trimbakeshwar.jpg";
import mahalaxmiKolhapurImg from "@/assets/temples/mahalaxmi-kolhapur.jpg";

export type SiteType = "temple" | "fort";
export type SiteCategory = "must-visit" | "hidden-gem" | "regular";

export interface PlaceNearby {
  name: string;
  distance: string;
  type: string;
}

export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  region: string;
  type: SiteType;
  category: SiteCategory;
  image: string;
  tagline: string;
  openTime: string;
  closeTime: string;
  darshanTimings?: string;
  entryFee: { indian: number; foreign: number; children?: number };
  vipPassAvailable: boolean;
  vipPassPrice?: number;
  importance: string;
  history: string;
  architecture?: string;
  averageExpenses: { budget: string; mid: string; premium: string };
  tips: string[];
  rating: number;
  bestTimeToVisit?: string;
  nearbyAttractions?: string[];
  facilities?: string[];
  // NEW FIELDS
  googleMapsUrl: string;
  food: string[];
  shopping: string[];
  accommodation: string[];
  placesNearby: PlaceNearby[];
}

export interface Region {
  id: string;
  name: string;
  description: string;
  history: string;
}

export const regions: Region[] = [
  { 
    id: "nagpur", 
    name: "Nagpur", 
    description: "Deep Maratha and British colonial history with ancient temples and forts",
    history: "Nagpur, the 'Orange City' of India, has a rich history dating back to the Gond rulers in the 18th century. The Bhonsle dynasty made it their capital in 1743, transforming it into a major Maratha power center. The city witnessed the historic Battle of Sitabuldi in 1817 against the British. The Vakataka dynasty (250-500 CE) ruled from nearby Nagardhan, leaving behind magnificent rock-cut architecture. Dr. B.R. Ambedkar chose Nagpur for his historic conversion to Buddhism in 1956 with 380,000 followers, making Deekshabhoomi a sacred pilgrimage site."
  },
  { 
    id: "maharashtra", 
    name: "Maharashtra", 
    description: "Land of Shivaji Maharaj with magnificent forts and sacred Jyotirlingas",
    history: "Maharashtra's history is synonymous with the Maratha Empire founded by Chhatrapati Shivaji Maharaj in 1674. The region was home to the Satavahana dynasty (230 BCE - 220 CE), Chalukyas, Rashtrakutas, and Yadavas of Devagiri. The state houses 5 of the 12 Jyotirlingas and 3 of the 51 Shakti Peethas. The Maratha warriors built over 350 forts across the Sahyadri mountains, establishing a naval force that challenged European powers. Post-independence, Maharashtra became a leading industrial and cultural hub of India."
  },
  { 
    id: "karnataka", 
    name: "Karnataka", 
    description: "Rich Vijayanagara, Chalukyan and Hoysala architecture heritage",
    history: "Karnataka boasts one of India's richest architectural legacies. The Chalukyas of Badami (543-753 CE) pioneered Dravidian architecture. The Hoysalas (1026-1343 CE) created masterpieces at Belur, Halebidu, and Somnathpur with intricate soapstone carvings. The Vijayanagara Empire (1336-1646 CE) made Hampi one of the world's largest cities with over 500,000 residents. The Mysore Wodeyars and Tipu Sultan later shaped the region's destiny. UNESCO has recognized multiple sites including Hampi, Pattadakal, and the Western Ghats."
  },
  { 
    id: "tamil-nadu", 
    name: "Tamil Nadu", 
    description: "Dravidian temples and ancient forts spanning centuries of history",
    history: "Tamil Nadu is the cradle of Dravidian civilization with a continuous history of over 2,000 years. The Cholas (9th-13th century CE) built the magnificent Brihadisvara Temple and established a maritime empire reaching Southeast Asia. The Pandyas and Pallavas created architectural marvels at Mahabalipuram and Madurai. The Nayaks (16th-18th century) expanded the Meenakshi Temple complex. Tamil Nadu houses more UNESCO heritage sites than any other Indian state, with temples that are still active centers of worship."
  },
  { 
    id: "gujarat", 
    name: "Gujarat", 
    description: "Sacred pilgrimage sites and historic trading port heritage",
    history: "Gujarat has been a center of trade and spirituality for millennia. The Indus Valley civilization thrived at Lothal and Dholavira (2600-1900 BCE). The Solanki dynasty (942-1244 CE) built the stunning Rani ki Vav and Modhera Sun Temple. Gujarat was the birthplace of Mahatma Gandhi and a major center of the freedom movement. The state houses the sacred Dwarka (one of the Char Dhams), Somnath (one of the 12 Jyotirlingas), and Palitana (sacred Jain pilgrimage with 863 temples). The region was also home to great rulers like the Maitrakas and the Gujarat Sultanate."
  },
];

export const heritageSitesData: HeritageSite[] = [
  // ==================== NAGPUR (7 Temples + 6 Forts) ====================
  
  // NAGPUR TEMPLES (7)
  { 
    id: "ramtek-fort-temple", 
    name: "Ramtek Fort Temple", 
    location: "Ramtek, Nagpur", 
    region: "nagpur", 
    type: "temple", 
    category: "must-visit",
    image: ramtekRamMandirImg, 
    tagline: "Ancient fort-temple complex associated with Lord Rama's exile", 
    openTime: "5:00 AM", 
    closeTime: "9:00 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "This sacred hilltop temple is believed to be where Lord Rama rested during his 14-year exile. It holds immense spiritual significance for devotees across India.", 
    history: "Dating back to ancient times with references in the Ramayana. The temple complex was developed over centuries by various rulers including the Vakatakas and Bhonsles.", 
    architecture: "Blend of Nagara and Hemadpanthi styles with intricate stone carvings", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Climb is steep, wear comfortable shoes", "Visit during Rama Navami for grand celebrations", "Evening aarti is beautiful and serene"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Khindsi Lake", "Nagardhan Fort", "Pench Tiger Reserve"], 
    facilities: ["Parking", "Shoe Counter", "Prasad Counter", "Rest Areas"],
    googleMapsUrl: "https://maps.google.com/?q=Ramtek+Temple+Nagpur",
    food: ["Saoji Chicken", "Tarri Poha", "Santra Barfi", "Local vegetarian thalis at temple premises"],
    shopping: ["Brass artifacts", "Orange products", "Religious items", "Handloom textiles"],
    accommodation: ["MTDC Resort Ramtek", "Hotel Sunrise", "Temple Dharamshala", "OYO Hotels nearby"],
    placesNearby: [
      { name: "Khindsi Lake", distance: "8 km", type: "Lake" },
      { name: "Nagardhan Fort", distance: "6 km", type: "Fort" },
      { name: "Pench Tiger Reserve", distance: "45 km", type: "Wildlife" },
      { name: "Ambala Lake", distance: "3 km", type: "Lake" }
    ]
  },
  
  { 
    id: "tekdi-ganesh-temple", 
    name: "Shri Ganesh Mandir Tekdi", 
    location: "Sitabuldi, Nagpur", 
    region: "nagpur", 
    type: "temple", 
    category: "must-visit",
    image: tekdiGaneshImg, 
    tagline: "250-year-old Ganesha temple on a hillock", 
    openTime: "5:00 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 100, 
    importance: "One of the most revered Ganesha temples in central India. Devotees believe wishes made here are fulfilled.", 
    history: "Built around 1770 during the Bhonsle reign. The temple has been a center of faith for over 250 years.", 
    architecture: "Traditional Marathi temple architecture with beautiful gopuram", 
    averageExpenses: { budget: "₹100-200", mid: "₹300-500", premium: "₹800+" }, 
    tips: ["Visit early morning for peaceful darshan", "Wednesday is very crowded - avoid if possible", "Famous prasad modak is a must-try"], 
    rating: 4.7, 
    bestTimeToVisit: "Year-round, especially during Ganesh Chaturthi", 
    nearbyAttractions: ["Sitabuldi Fort", "Zero Mile Stone", "Central Museum"], 
    facilities: ["Parking", "Prasad Counter", "Shoe Counter", "Drinking Water"],
    googleMapsUrl: "https://maps.google.com/?q=Tekdi+Ganesh+Temple+Nagpur",
    food: ["Modak", "Saoji cuisine", "Tarri Poha at Haldiram's", "Street food at Sitabuldi"],
    shopping: ["Ganesh idols", "Religious items", "Sitabuldi Main Road shopping"],
    accommodation: ["Hotel Centre Point", "Radisson Blu", "Le Meridien", "Pride Hotel"],
    placesNearby: [
      { name: "Sitabuldi Fort", distance: "0.5 km", type: "Fort" },
      { name: "Zero Mile Stone", distance: "1 km", type: "Monument" },
      { name: "Raman Science Centre", distance: "2 km", type: "Museum" },
      { name: "Futala Lake", distance: "4 km", type: "Lake" }
    ]
  },
  
  { 
    id: "deekshabhoomi", 
    name: "Deekshabhoomi", 
    location: "Nagpur Central", 
    region: "nagpur", 
    type: "temple", 
    category: "must-visit",
    image: deekshabhoomiImg, 
    tagline: "Sacred site of Dr. Ambedkar's historic Buddhist conversion", 
    openTime: "6:00 AM", 
    closeTime: "9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Where Dr. B.R. Ambedkar converted to Buddhism with 380,000 followers on October 14, 1956 - the largest religious conversion in modern history.", 
    history: "The site commemorates the historic mass conversion and houses a massive white stupa modeled after the Sanchi Stupa.", 
    architecture: "Grand white stupa inspired by Sanchi Stupa with Buddhist architectural elements", 
    averageExpenses: { budget: "₹200-400", mid: "₹600-900", premium: "₹1500+" }, 
    tips: ["Visit during Dhammachakra Pravartan Din (October 14)", "Museum inside is very informative", "Meditation hall offers peaceful experience"], 
    rating: 4.6, 
    bestTimeToVisit: "October to March, especially October 14", 
    nearbyAttractions: ["Dragon Palace Temple", "Nagpur Museum", "Japanese Temple"], 
    facilities: ["Parking", "Museum", "Library", "Meditation Hall", "Bookshop"],
    googleMapsUrl: "https://maps.google.com/?q=Deekshabhoomi+Nagpur",
    food: ["Buddhist vegetarian cuisine", "Local Vidarbha thalis", "Cafeteria inside complex"],
    shopping: ["Buddhist literature", "Ambedkar memorabilia", "Meditation items", "Handicrafts"],
    accommodation: ["Hotel Hardeo", "The Pride Hotel", "Tuli Imperial", "Ashok Guest House"],
    placesNearby: [
      { name: "Dragon Palace Temple", distance: "15 km", type: "Temple" },
      { name: "Ambazari Lake", distance: "3 km", type: "Lake" },
      { name: "Seminary Hills", distance: "2 km", type: "Hill" },
      { name: "Maharaj Bagh Zoo", distance: "1.5 km", type: "Zoo" }
    ]
  },

  { 
    id: "koradi-mata", 
    name: "Koradi Mata Temple", 
    location: "Koradi, Nagpur", 
    region: "nagpur", 
    type: "temple", 
    category: "regular",
    image: koradiMataImg, 
    tagline: "Popular Shakti Peeth with powerful goddess energy", 
    openTime: "5:00 AM", 
    closeTime: "9:30 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 150, 
    importance: "One of the most popular Shakti Peeths in Vidarbha region. The goddess is believed to fulfill the wishes of her devotees.", 
    history: "Ancient temple dedicated to Goddess Mahalakshmi, renovated and expanded over centuries.", 
    architecture: "Traditional temple architecture with modern additions and beautiful surroundings", 
    averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹1500+" }, 
    tips: ["Visit during Navratri for grand celebrations", "Early morning is best for darshan", "Famous prasad is a must"], 
    rating: 4.4, 
    bestTimeToVisit: "October to March, Navratri", 
    nearbyAttractions: ["Koradi Lake", "Waki Woods", "Ambazari Lake"], 
    facilities: ["Parking", "Prasad Counter", "Restrooms", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Koradi+Mata+Temple+Nagpur",
    food: ["Temple prasad", "Local Maharashtrian food", "Poha-Jalebi at local stalls"],
    shopping: ["Religious items", "Bangles", "Sindoor", "Local handicrafts"],
    accommodation: ["Temple Dharamshala", "Hotels in Nagpur city", "OYO nearby"],
    placesNearby: [
      { name: "Koradi Lake", distance: "0.5 km", type: "Lake" },
      { name: "Koradi Thermal Power Station", distance: "2 km", type: "Industrial" },
      { name: "Waki Woods", distance: "8 km", type: "Nature" },
      { name: "Nagpur City", distance: "15 km", type: "City" }
    ]
  },

  { 
    id: "dragon-palace-temple", 
    name: "Dragon Palace Temple", 
    location: "Kamptee, Nagpur", 
    region: "nagpur", 
    type: "temple", 
    category: "hidden-gem",
    image: dragonPalaceImg, 
    tagline: "Unique Buddhist temple with Japanese architecture", 
    openTime: "9:00 AM", 
    closeTime: "5:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "A unique Buddhist temple built in Japanese architectural style, representing Japan-India friendship and Buddhist heritage.", 
    history: "Built by Soka Gakkai International as a symbol of peace and Buddhist teachings.", 
    architecture: "Japanese Buddhist architecture with ornate golden decorations", 
    averageExpenses: { budget: "₹200-300", mid: "₹500-700", premium: "₹1000+" }, 
    tips: ["Photography inside may be restricted", "Attend the chanting sessions", "Beautiful garden surroundings"], 
    rating: 4.3, 
    bestTimeToVisit: "Year-round", 
    nearbyAttractions: ["Deekshabhoomi", "Ambazari Lake", "Seminary Hills"], 
    facilities: ["Parking", "Meditation Hall", "Garden"],
    googleMapsUrl: "https://maps.google.com/?q=Dragon+Palace+Temple+Nagpur",
    food: ["Japanese-inspired vegetarian cuisine", "Local restaurants nearby"],
    shopping: ["Buddhist artifacts", "Japanese decorative items", "Incense"],
    accommodation: ["Hotels in Kamptee", "Nagpur city hotels"],
    placesNearby: [
      { name: "Kamptee Cantonment", distance: "3 km", type: "Area" },
      { name: "Deekshabhoomi", distance: "15 km", type: "Temple" },
      { name: "Nagpur Airport", distance: "20 km", type: "Transport" }
    ]
  },

  { 
    id: "poddareshwar-ram-temple", 
    name: "Poddareshwar Ram Temple", 
    location: "Dharampeth, Nagpur", 
    region: "nagpur", 
    type: "temple", 
    category: "regular",
    image: poddareshwarTempleImg, 
    tagline: "Grand Ram temple with 12 Jyotirlingas replica", 
    openTime: "5:00 AM", 
    closeTime: "9:00 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "One of the largest Ram temples in Central India featuring replicas of all 12 Jyotirlingas.", 
    history: "Built by the Poddar family, this temple complex has been a spiritual center for decades.", 
    architecture: "North Indian temple architecture with marble work", 
    averageExpenses: { budget: "₹100-200", mid: "₹300-500", premium: "₹800+" }, 
    tips: ["Visit all 12 Jyotirlinga replicas", "Ram Navami celebrations are grand", "Evening aarti is peaceful"], 
    rating: 4.2, 
    bestTimeToVisit: "Year-round, Ram Navami", 
    nearbyAttractions: ["Dharampeth Garden", "Law College Square", "Civil Lines"], 
    facilities: ["Parking", "Prasad Counter", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Poddareshwar+Ram+Temple+Nagpur",
    food: ["Temple prasad", "Nearby restaurants", "Street food"],
    shopping: ["Religious items", "Flowers", "Prasad"],
    accommodation: ["Hotels in Dharampeth", "Civil Lines hotels"],
    placesNearby: [
      { name: "Dharampeth Garden", distance: "0.5 km", type: "Park" },
      { name: "Civil Lines", distance: "2 km", type: "Area" },
      { name: "Futala Lake", distance: "3 km", type: "Lake" }
    ]
  },

  { 
    id: "shani-mandir-nagpur", 
    name: "Shani Mandir Sakkardara", 
    location: "Sakkardara, Nagpur", 
    region: "nagpur", 
    type: "temple", 
    category: "regular",
    image: shaniMandirImg, 
    tagline: "Popular Shani temple visited for relief from Shani effects", 
    openTime: "5:00 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "5:00 AM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "One of the most visited Shani temples in Vidarbha, believed to reduce the malefic effects of Saturn.", 
    history: "The temple has been serving devotees for several decades and is known for its powerful deity.", 
    architecture: "Simple traditional temple architecture", 
    averageExpenses: { budget: "₹100-200", mid: "₹300-500", premium: "₹700+" }, 
    tips: ["Saturday is the main day - very crowded", "Offer til (sesame) oil", "Visit early to avoid crowds"], 
    rating: 4.1, 
    bestTimeToVisit: "Saturdays, Shani Amavasya", 
    nearbyAttractions: ["Sakkardara Lake", "Gandhisagar Lake", "Zero Mile Stone"], 
    facilities: ["Parking", "Oil for offerings", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Shani+Mandir+Sakkardara+Nagpur",
    food: ["Local vegetarian food", "Nearby eateries"],
    shopping: ["Sesame oil", "Black cloth", "Religious items"],
    accommodation: ["Nearby hotels", "Budget lodges"],
    placesNearby: [
      { name: "Sakkardara Lake", distance: "0.3 km", type: "Lake" },
      { name: "Gandhisagar", distance: "2 km", type: "Lake" },
      { name: "Cotton Market", distance: "3 km", type: "Market" }
    ]
  },

  // NAGPUR FORTS (6)
  { 
    id: "sitabuldi-fort", 
    name: "Sitabuldi Fort", 
    location: "Sitabuldi, Nagpur", 
    region: "nagpur", 
    type: "fort", 
    category: "must-visit",
    image: sitabuldiFortImg, 
    tagline: "Historic British-era fort from the Battle of Sitabuldi", 
    openTime: "10:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 25, foreign: 100, children: 10 }, 
    vipPassAvailable: false, 
    importance: "Built by the British in 1817 after the Battle of Sitabuldi, this fort stands as a testament to the Anglo-Maratha wars and houses the Territorial Army today.", 
    history: "The fort was constructed following the Third Anglo-Maratha War in 1817 where the British defeated the Marathas. It played a crucial role in establishing British control over Central India.", 
    architecture: "British colonial military architecture with strategic positioning", 
    averageExpenses: { budget: "₹200-300", mid: "₹500-700", premium: "₹1000+" }, 
    tips: ["Best visited in morning", "ID proof required for entry", "Photography may be restricted", "Open only on specific days"], 
    rating: 3.8, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Zero Mile Stone", "Nagpur Museum", "Tekdi Ganesh Temple"], 
    facilities: ["Parking", "Security Check", "Memorial"],
    googleMapsUrl: "https://maps.google.com/?q=Sitabuldi+Fort+Nagpur",
    food: ["Restaurants at Sitabuldi Main Road", "Street food", "Haldiram's nearby"],
    shopping: ["Sitabuldi Main Road markets", "Variety Square"],
    accommodation: ["Hotel Centre Point", "Pride Hotel", "Various options nearby"],
    placesNearby: [
      { name: "Tekdi Ganesh Temple", distance: "0.5 km", type: "Temple" },
      { name: "Zero Mile Stone", distance: "1 km", type: "Monument" },
      { name: "Nagpur Museum", distance: "1.5 km", type: "Museum" },
      { name: "Variety Square", distance: "0.3 km", type: "Market" }
    ]
  },

  { 
    id: "nagardhan-fort", 
    name: "Nagardhan Fort", 
    location: "Nagardhan, Nagpur", 
    region: "nagpur", 
    type: "fort", 
    category: "hidden-gem",
    image: nagardhanFortImg, 
    tagline: "Ancient fort capital of Vakataka dynasty", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Once the capital of the mighty Vakataka dynasty, this fort holds immense archaeological significance.", 
    history: "Dating back to the 4th century CE, it was the seat of Vakataka power. Later occupied by Gond and Maratha rulers. The Vakatakas were known for patronizing the Ajanta caves.", 
    architecture: "Ancient Indian fortification with multiple layers of defense", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹1800+" }, 
    tips: ["Combine with Ramtek visit", "Carry water and snacks", "Best in monsoon for green surroundings", "Archaeological excavations ongoing"], 
    rating: 4.0, 
    bestTimeToVisit: "July to February", 
    nearbyAttractions: ["Ramtek Temple", "Khindsi Lake", "Pench Tiger Reserve"], 
    facilities: ["Parking", "Basic facilities"],
    googleMapsUrl: "https://maps.google.com/?q=Nagardhan+Fort+Nagpur",
    food: ["Carry packed food", "Local dhabas on highway", "Ramtek town restaurants"],
    shopping: ["Local handicrafts at Ramtek", "Archaeological replicas"],
    accommodation: ["MTDC Ramtek", "Hotels in Nagpur city"],
    placesNearby: [
      { name: "Ramtek Temple", distance: "6 km", type: "Temple" },
      { name: "Khindsi Lake", distance: "10 km", type: "Lake" },
      { name: "Mansar Lake", distance: "8 km", type: "Lake" },
      { name: "Pench Tiger Reserve", distance: "50 km", type: "Wildlife" }
    ]
  },

  { 
    id: "bhandara-fort", 
    name: "Bhandara Fort", 
    location: "Bhandara, Nagpur", 
    region: "nagpur", 
    type: "fort", 
    category: "hidden-gem",
    image: bhandaraFortImg, 
    tagline: "Gond dynasty fort with panoramic views", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 20, foreign: 50 }, 
    vipPassAvailable: false, 
    importance: "An important Gond dynasty fortification that later came under Maratha control.", 
    history: "Built by Gond kings, the fort witnessed several battles between Gonds, Marathas, and the British.", 
    architecture: "Gond-style fortification with Maratha additions", 
    averageExpenses: { budget: "₹300-500", mid: "₹700-1000", premium: "₹1500+" }, 
    tips: ["Sunset views are spectacular", "Less crowded destination", "Combine with lake visit"], 
    rating: 3.7, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Bhandara Lake", "Navegaon National Park", "Chulband Dam"], 
    facilities: ["Parking", "Basic restrooms"],
    googleMapsUrl: "https://maps.google.com/?q=Bhandara+Fort+Maharashtra",
    food: ["Local Vidarbha cuisine", "Fish curry (famous locally)", "Dhabas"],
    shopping: ["Lac bangles", "Bamboo products", "Local handicrafts"],
    accommodation: ["MTDC Resort", "Local hotels in Bhandara town"],
    placesNearby: [
      { name: "Bhandara Lake", distance: "2 km", type: "Lake" },
      { name: "Navegaon National Park", distance: "45 km", type: "Wildlife" },
      { name: "Chulband Dam", distance: "30 km", type: "Dam" }
    ]
  },

  { 
    id: "ambagad-fort", 
    name: "Ambagad Fort", 
    location: "Tumsar, Nagpur", 
    region: "nagpur", 
    type: "fort", 
    category: "hidden-gem",
    image: ambagadFortImg, 
    tagline: "Hill fort with ancient Shiva temple", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "A lesser-known hill fort with an ancient Shiva temple, offering trekking opportunities.", 
    history: "Built during the Gond period, the fort has religious significance due to the Shiva temple inside.", 
    architecture: "Hill fort architecture with temple complex", 
    averageExpenses: { budget: "₹200-400", mid: "₹600-900", premium: "₹1200+" }, 
    tips: ["Good trekking destination", "Carry water and food", "Visit the Shiva temple at top"], 
    rating: 3.6, 
    bestTimeToVisit: "October to February", 
    nearbyAttractions: ["Tumsar town", "Navegaon Bandh"], 
    facilities: ["Parking at base", "Trek route"],
    googleMapsUrl: "https://maps.google.com/?q=Ambagad+Fort+Tumsar",
    food: ["Pack your own food", "Tumsar town eateries"],
    shopping: ["Forest products", "Local items"],
    accommodation: ["Basic lodges in Tumsar", "Nagpur city hotels"],
    placesNearby: [
      { name: "Tumsar Town", distance: "5 km", type: "Town" },
      { name: "Gosikhurd Dam", distance: "40 km", type: "Dam" }
    ]
  },

  { 
    id: "pavnar-ashram-fort", 
    name: "Pavnar Fort Ruins", 
    location: "Pavnar, Wardha", 
    region: "nagpur", 
    type: "fort", 
    category: "hidden-gem",
    image: pavnarRuinsImg, 
    tagline: "Ancient fort ruins near Vinoba Bhave Ashram", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Historical fort ruins near the famous Brahmavidya Mandir ashram of Vinoba Bhave. Vakataka-era archaeological site.", 
    history: "Ancient fortification that witnessed various dynasties including Vakatakas. The area is now famous for Vinoba Bhave's ashram.", 
    architecture: "Ruined fortifications with historical significance", 
    averageExpenses: { budget: "₹200-400", mid: "₹500-800", premium: "₹1200+" }, 
    tips: ["Combine with ashram visit", "Peaceful spiritual atmosphere", "Early morning is best"], 
    rating: 3.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Brahmavidya Mandir", "Sevagram Ashram", "Wardha town"], 
    facilities: ["Ashram facilities nearby"],
    googleMapsUrl: "https://maps.google.com/?q=Pavnar+Ashram+Wardha",
    food: ["Simple vegetarian food at ashram", "Wardha town restaurants"],
    shopping: ["Khadi products", "Handloom items", "Organic products"],
    accommodation: ["Brahmavidya Mandir guest house", "Sevagram Ashram", "Wardha hotels"],
    placesNearby: [
      { name: "Brahmavidya Mandir", distance: "0.5 km", type: "Ashram" },
      { name: "Sevagram Ashram", distance: "8 km", type: "Ashram" },
      { name: "Wardha City", distance: "5 km", type: "City" }
    ]
  },

  { 
    id: "manikgarh-fort", 
    name: "Manikgarh Fort", 
    location: "Gadchiroli, Nagpur", 
    region: "nagpur", 
    type: "fort", 
    category: "hidden-gem",
    image: manikgarhFortImg, 
    tagline: "Remote hill fort in the forests of Gadchiroli", 
    openTime: "6:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "A remote hill fort surrounded by dense forests, offering a glimpse into the region's tribal and martial history.", 
    history: "Built by local rulers, the fort served as a strategic point in the forested terrain of Gadchiroli.", 
    architecture: "Simple hill fort with natural defenses", 
    averageExpenses: { budget: "₹500-800", mid: "₹1200-1800", premium: "₹2500+" }, 
    tips: ["Check local conditions before visiting", "Hire local guide", "Best for adventure enthusiasts"], 
    rating: 3.4, 
    bestTimeToVisit: "November to February", 
    nearbyAttractions: ["Gadchiroli forests", "Tribal villages", "Chaprala Wildlife Sanctuary"], 
    facilities: ["Basic facilities", "Local guides available"],
    googleMapsUrl: "https://maps.google.com/?q=Manikgarh+Fort+Gadchiroli",
    food: ["Local tribal cuisine", "Pack your own food recommended"],
    shopping: ["Tribal handicrafts", "Forest products", "Bamboo items"],
    accommodation: ["Forest rest houses", "Basic lodges in Gadchiroli"],
    placesNearby: [
      { name: "Chaprala Wildlife Sanctuary", distance: "30 km", type: "Wildlife" },
      { name: "Gadchiroli Town", distance: "50 km", type: "Town" },
      { name: "Tribal Villages", distance: "10 km", type: "Village" }
    ]
  },

  // ==================== MAHARASHTRA (7 Temples + 6 Forts) ====================
  
  // MAHARASHTRA TEMPLES (7)
  { 
    id: "trimbakeshwar-temple", 
    name: "Trimbakeshwar Temple", 
    location: "Nashik", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: trimbakeshwarImg, 
    tagline: "One of the 12 sacred Jyotirlingas", 
    openTime: "5:30 AM", 
    closeTime: "9:00 PM", 
    darshanTimings: "5:30 AM - 12:00 PM, 5:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 500, 
    importance: "One of the 12 Jyotirlingas representing Brahma, Vishnu, and Maheshwara in a unique three-faced lingam. Source of river Godavari.", 
    history: "Rebuilt by Peshwa Balaji Baji Rao in the 18th century. The temple is mentioned in ancient scriptures.", 
    architecture: "Black stone Hemadpanthi architecture with intricate carvings", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" }, 
    tips: ["Narayan Nagbali and Kalsarpa puja are famous", "Book VIP darshan online", "Visit early morning for less crowd"], 
    rating: 4.8, 
    bestTimeToVisit: "Shravan month (July-August)", 
    nearbyAttractions: ["Brahmagiri Hill", "Anjneri Fort", "Nashik Caves"], 
    facilities: ["VIP Darshan", "Prasad Counter", "Cloakroom", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Trimbakeshwar+Temple+Nashik",
    food: ["Misal Pav", "Sabudana Vada", "Temple prasad", "Maharashtrian thali"],
    shopping: ["Rudraksha malas", "Religious items", "Nashik wines", "Brass items"],
    accommodation: ["Hotel Samrat", "Ginger Nashik", "Temple trust dharamshalas"],
    placesNearby: [
      { name: "Brahmagiri Hill", distance: "3 km", type: "Trekking" },
      { name: "Godavari Origin", distance: "0.5 km", type: "Sacred Site" },
      { name: "Anjneri Fort", distance: "15 km", type: "Fort" },
      { name: "Nashik City", distance: "28 km", type: "City" }
    ]
  },
  
  { 
    id: "shirdi-sai-temple", 
    name: "Shirdi Sai Baba Temple", 
    location: "Shirdi, Ahmednagar", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: shirdiSaiBabaImg, 
    tagline: "Samadhi Mandir of the beloved Sai Baba", 
    openTime: "4:00 AM", 
    closeTime: "11:00 PM", 
    darshanTimings: "4:00 AM - 11:00 PM (Aarti: 5:15 AM, 12:00 PM, 6:00 PM, 10:00 PM)", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "One of the most visited pilgrimage sites in India, where Sai Baba lived and attained Samadhi.", 
    history: "Sai Baba lived in Shirdi from 1858 until his Mahasamadhi in 1918. The temple complex has grown tremendously.", 
    architecture: "Modern temple complex with marble flooring and gold-plated dome", 
    averageExpenses: { budget: "₹1000-1500", mid: "₹2500-4000", premium: "₹7000+" }, 
    tips: ["Thursday is very crowded", "Book accommodation in advance", "Attend all 4 daily aartis", "Visit Dwarkamai and Chavadi"], 
    rating: 4.9, 
    bestTimeToVisit: "Year-round, avoid peak seasons", 
    nearbyAttractions: ["Dwarkamai", "Chavadi", "Shani Shingnapur", "Lendi Garden"], 
    facilities: ["VIP Darshan", "Free Accommodation", "Prasadalaya", "Online Booking", "Hospital"],
    googleMapsUrl: "https://maps.google.com/?q=Shirdi+Sai+Baba+Temple",
    food: ["Free prasad at temple", "Sai Prasadalaya (free meals)", "Local restaurants"],
    shopping: ["Sai Baba idols", "Religious items", "Udi (sacred ash)", "Photo frames"],
    accommodation: ["Sai Sansthan Bhakt Niwas (free)", "Hotel Sai Palace", "Hotel Shri Sai", "Numerous hotels"],
    placesNearby: [
      { name: "Dwarkamai", distance: "0.2 km", type: "Sacred Site" },
      { name: "Chavadi", distance: "0.3 km", type: "Sacred Site" },
      { name: "Lendi Garden", distance: "0.5 km", type: "Garden" },
      { name: "Shani Shingnapur", distance: "65 km", type: "Temple" }
    ]
  },
  
  { 
    id: "siddhivinayak-temple", 
    name: "Siddhivinayak Temple", 
    location: "Prabhadevi, Mumbai", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: siddhivinayakImg, 
    tagline: "Most visited Ganesh temple in Mumbai", 
    openTime: "5:30 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "5:30 AM - 12:00 PM, 12:30 PM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "One of the richest and most visited temples in India. Celebrities and politicians regularly visit for blessings.", 
    history: "Built in 1801 by Laxman Vithu and Deubai Patil. The temple gained fame as wish-fulfilling deity.", 
    architecture: "Modern temple with gold-plated dome and wooden doors", 
    averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹2000+" }, 
    tips: ["Tuesday is main day - very crowded", "Online VIP booking recommended", "Visit early morning for peaceful darshan"], 
    rating: 4.7, 
    bestTimeToVisit: "Year-round", 
    nearbyAttractions: ["Mahalaxmi Temple", "Haji Ali Dargah", "Bandra-Worli Sea Link"], 
    facilities: ["VIP Darshan", "Online Booking", "Prasad Counter", "AC Queue"],
    googleMapsUrl: "https://maps.google.com/?q=Siddhivinayak+Temple+Mumbai",
    food: ["Street food", "Restaurants at Prabhadevi", "Modak", "Mumbai street snacks"],
    shopping: ["Modak", "Ganesh idols", "Religious items", "Jewelry"],
    accommodation: ["The St. Regis Mumbai", "Taj Lands End", "Budget hotels nearby"],
    placesNearby: [
      { name: "Mahalaxmi Temple", distance: "3 km", type: "Temple" },
      { name: "Haji Ali Dargah", distance: "4 km", type: "Dargah" },
      { name: "Worli Sea Face", distance: "2 km", type: "Promenade" },
      { name: "Dadar Market", distance: "3 km", type: "Market" }
    ]
  },
  
  { 
    id: "mahalaxmi-kolhapur", 
    name: "Mahalaxmi Temple", 
    location: "Kolhapur", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: mahalaxmiKolhapurImg, 
    tagline: "One of the Shakti Peethas of Goddess Mahalaxmi", 
    openTime: "4:00 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "4:00 AM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 300, 
    importance: "One of the three and a half Shakti Peethas in India. The goddess is Jagrut (awakened) here.", 
    history: "Built by Chalukya rulers in the 7th century. The temple has been renovated by Shilahara and Yadava dynasties.", 
    architecture: "Hemadpanthi style with Chalukyan pillars and intricate carvings", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" }, 
    tips: ["Kirnotsav phenomenon in Nov/Feb when sunrays fall on deity", "Visit during Navratri", "Try authentic Kolhapuri food"], 
    rating: 4.8, 
    bestTimeToVisit: "October to March, Kirnotsav days", 
    nearbyAttractions: ["Panhala Fort", "Rankala Lake", "New Palace"], 
    facilities: ["VIP Darshan", "Prasad Counter", "Cloakroom", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Mahalaxmi+Temple+Kolhapur",
    food: ["Kolhapuri Mutton", "Tambda Rassa", "Pandhra Rassa", "Misal Pav"],
    shopping: ["Kolhapuri Chappals", "Kolhapuri Saaj jewelry", "Jaggery"],
    accommodation: ["Hotel Pavillion", "Sayaji Hotel", "Temple dharamshalas"],
    placesNearby: [
      { name: "Rankala Lake", distance: "3 km", type: "Lake" },
      { name: "New Palace", distance: "2 km", type: "Palace" },
      { name: "Panhala Fort", distance: "20 km", type: "Fort" },
      { name: "Jyotiba Temple", distance: "18 km", type: "Temple" }
    ]
  },

  { 
    id: "bhimashankar-temple", 
    name: "Bhimashankar Temple", 
    location: "Pune", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: bhimashankarTempleImg, 
    tagline: "Jyotirlinga in the Sahyadri hills", 
    openTime: "4:30 AM", 
    closeTime: "9:30 PM", 
    darshanTimings: "4:30 AM - 12:00 PM, 4:00 PM - 9:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 300, 
    importance: "One of the 12 Jyotirlingas located in the Sahyadri hills. Also a wildlife sanctuary home to the Giant Indian Squirrel.", 
    history: "Ancient temple associated with the legend of demon Bhima. Rebuilt by Nana Phadnavis.", 
    architecture: "Nagara style with Hemadpanthi elements", 
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹4500+" }, 
    tips: ["Trek route from Shidi Ghat is popular", "Monsoon is beautiful but slippery", "Early morning mahaarti is divine"], 
    rating: 4.6, 
    bestTimeToVisit: "July to February", 
    nearbyAttractions: ["Bhimashankar Wildlife Sanctuary", "Hanuman Lake", "Gupt Bhimashankar"], 
    facilities: ["VIP Darshan", "Accommodation", "Prasad Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Bhimashankar+Temple+Pune",
    food: ["Simple vegetarian food", "Local Maharashtrian cuisine", "Pack snacks for trek"],
    shopping: ["Herbal products", "Forest honey", "Religious items"],
    accommodation: ["MTDC Resort", "Temple dharamshala", "Local homestays"],
    placesNearby: [
      { name: "Bhimashankar Wildlife Sanctuary", distance: "1 km", type: "Wildlife" },
      { name: "Hanuman Lake", distance: "2 km", type: "Lake" },
      { name: "Gupt Bhimashankar", distance: "3 km", type: "Temple" }
    ]
  },

  { 
    id: "ashtavinayak-morgaon", 
    name: "Morgaon Ganpati (Ashtavinayak)", 
    location: "Morgaon, Pune", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: morgaonGanpatiImg, 
    tagline: "First of the 8 Ashtavinayak temples", 
    openTime: "5:00 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 3:00 PM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "The first temple in the Ashtavinayak pilgrimage circuit. Lord Ganesha is worshipped as Mayureshwar here.", 
    history: "Ancient temple with references in Ganesha Purana. The deity is believed to be Swayambhu (self-manifested).", 
    architecture: "Marathi temple style with four minarets showing Mughal influence", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["Start Ashtavinayak yatra from here", "Peacock-shaped idol is unique", "Complete circuit covers 8 temples"], 
    rating: 4.4, 
    bestTimeToVisit: "Year-round, Ganesh Chaturthi", 
    nearbyAttractions: ["Other Ashtavinayak temples", "Baramati", "Jejuri"], 
    facilities: ["Parking", "Prasad Counter", "Dharamshala"],
    googleMapsUrl: "https://maps.google.com/?q=Morgaon+Ganpati+Temple",
    food: ["Modak", "Puran Poli", "Local Maharashtrian food"],
    shopping: ["Ganesh idols", "Religious items", "Local products"],
    accommodation: ["Temple dharamshala", "Hotels in Baramati"],
    placesNearby: [
      { name: "Siddhatek Ganpati", distance: "55 km", type: "Temple" },
      { name: "Jejuri Khandoba", distance: "40 km", type: "Temple" },
      { name: "Baramati", distance: "30 km", type: "City" }
    ]
  },

  { 
    id: "tulja-bhavani-temple", 
    name: "Tulja Bhavani Temple", 
    location: "Tuljapur, Osmanabad", 
    region: "maharashtra", 
    type: "temple", 
    category: "must-visit",
    image: tuljaBhavaniImg, 
    tagline: "Kuldevi of the Bhonsle Maratha dynasty", 
    openTime: "4:00 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "4:00 AM - 2:00 PM, 3:00 PM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "The family deity (Kuldevi) of Shivaji Maharaj and the Bhonsle dynasty. One of the 51 Shakti Peethas.", 
    history: "Shivaji Maharaj received the divine sword 'Bhavani Talwar' here. Temple dates back to 12th century.", 
    architecture: "Hemadpanthi style with modern additions", 
    averageExpenses: { budget: "₹500-800", mid: "₹1200-2000", premium: "₹3500+" }, 
    tips: ["Extremely crowded during Navratri", "Visit the sword museum", "Book accommodation in advance"], 
    rating: 4.5, 
    bestTimeToVisit: "Navratri, Year-round", 
    nearbyAttractions: ["Dharashiv Caves", "Naldurg Fort", "Paranda Fort"], 
    facilities: ["VIP Darshan", "Prasad Counter", "Dharamshala", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Tulja+Bhavani+Temple+Tuljapur",
    food: ["Temple prasad", "Local Marathwada cuisine", "Jowar bhakri"],
    shopping: ["Swords replicas", "Religious items", "Local handicrafts"],
    accommodation: ["MTDC Resort", "Temple dharamshala", "Private hotels"],
    placesNearby: [
      { name: "Dharashiv Caves", distance: "60 km", type: "Caves" },
      { name: "Naldurg Fort", distance: "45 km", type: "Fort" },
      { name: "Paranda Fort", distance: "80 km", type: "Fort" }
    ]
  },

  // MAHARASHTRA FORTS (6)
  { 
    id: "raigad-fort", 
    name: "Raigad Fort", 
    location: "Raigad District", 
    region: "maharashtra", 
    type: "fort", 
    category: "must-visit",
    image: raigadFortImg, 
    tagline: "Capital of the Maratha Empire - Shivaji's coronation site", 
    openTime: "9:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 50, foreign: 200, children: 25 }, 
    vipPassAvailable: true, 
    vipPassPrice: 500, 
    importance: "The capital where Chhatrapati Shivaji Maharaj was crowned in 1674. Houses his Samadhi and the grand court.", 
    history: "Originally known as Rairi, transformed into an impregnable capital by Shivaji. Fell to the British in 1818.", 
    architecture: "Maratha military architecture with massive walls, 1,400 steps, and grand palace complex", 
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, 
    tips: ["Take the ropeway (₹400 return) to save energy", "Carry water and snacks", "Visit Shivaji's Samadhi and Rajdarbar", "Sunset from fort is spectacular"], 
    rating: 4.8, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Lingana Fort", "Kashid Beach", "Murud-Janjira"], 
    facilities: ["Ropeway", "Parking", "Restaurant", "Guide Services", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Raigad+Fort+Maharashtra",
    food: ["Konkani cuisine", "Fish curry rice", "Sol Kadhi", "Local restaurants"],
    shopping: ["Kokum products", "Cashews", "Local handicrafts"],
    accommodation: ["MTDC Resort Raigad", "Hotels at base village", "Camping options"],
    placesNearby: [
      { name: "Lingana Fort", distance: "8 km", type: "Fort" },
      { name: "Kashid Beach", distance: "50 km", type: "Beach" },
      { name: "Murud-Janjira", distance: "60 km", type: "Fort" },
      { name: "Torna Fort", distance: "25 km", type: "Fort" }
    ]
  },
  
  { 
    id: "shivneri-fort", 
    name: "Shivneri Fort", 
    location: "Junnar, Pune", 
    region: "maharashtra", 
    type: "fort", 
    category: "must-visit",
    image: shivneriFortImg, 
    tagline: "Birthplace of Chhatrapati Shivaji Maharaj", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "The birthplace of Shivaji Maharaj on February 19, 1630. One of the most sacred forts for Maharashtrians.", 
    history: "Shivaji was born here, his mother Jijabai stayed during the early years of his childhood. Fort has Buddhist caves.", 
    architecture: "Hill fort with Buddhist caves, seven gates, and Shivai Devi temple", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2000", premium: "₹3500+" }, 
    tips: ["Start early - climbing takes 1-2 hours", "Visit Shivaji's birth chamber (Shivkund)", "Carry plenty of water", "See the Badami Talav and Ganga-Jamuna springs"], 
    rating: 4.7, 
    bestTimeToVisit: "July to March", 
    nearbyAttractions: ["Lenyadri Caves (Ashtavinayak)", "Ozar Ganpati", "Naneghat"], 
    facilities: ["Parking", "Local Guides", "Drinking Water at top"],
    googleMapsUrl: "https://maps.google.com/?q=Shivneri+Fort+Junnar",
    food: ["Pack snacks", "Local restaurants in Junnar", "Kanda Bhaji"],
    shopping: ["Miniature forts", "Shivaji memorabilia", "Local products"],
    accommodation: ["Hotels in Junnar", "MTDC Resort nearby"],
    placesNearby: [
      { name: "Lenyadri Caves", distance: "12 km", type: "Caves" },
      { name: "Ozar Ganpati", distance: "18 km", type: "Temple" },
      { name: "Naneghat", distance: "25 km", type: "Trek" },
      { name: "Junnar Caves", distance: "5 km", type: "Caves" }
    ]
  },
  
  { 
    id: "sinhagad-fort", 
    name: "Sinhagad Fort", 
    location: "Pune", 
    region: "maharashtra", 
    type: "fort", 
    category: "must-visit",
    image: sinhagadFortImg, 
    tagline: "Lion's Fort - Famous for Tanaji Malusare's sacrifice", 
    openTime: "5:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 20, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Famous for the Battle of Sinhagad (1670) where Tanaji Malusare sacrificed his life. 'Gad aala pan Sinha gela'.", 
    history: "Originally called Kondana, won by Tanaji in a daring night attack using ghorpads (monitor lizards) to scale walls.", 
    architecture: "Hill fort with two main gates - Pune and Kalyan darwaza", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Try the famous Pitla Bhakri and Kanda Bhaji", "Trek route from Sinhagad village is popular", "Sunset and sunrise views are spectacular"], 
    rating: 4.6, 
    bestTimeToVisit: "Monsoon and Winter", 
    nearbyAttractions: ["Khadakwasla Dam", "Torna Fort", "Rajgad Fort"], 
    facilities: ["Parking", "Food Stalls", "Restrooms", "Tanaji Memorial"],
    googleMapsUrl: "https://maps.google.com/?q=Sinhagad+Fort+Pune",
    food: ["Pitla Bhakri", "Kanda Bhaji", "Pithla Zunka", "Buttermilk (Taak)"],
    shopping: ["Local snacks", "Honey", "Herbs"],
    accommodation: ["Pune city hotels", "Camping on fort (with permission)"],
    placesNearby: [
      { name: "Khadakwasla Dam", distance: "8 km", type: "Dam" },
      { name: "Torna Fort", distance: "15 km", type: "Fort" },
      { name: "Rajgad Fort", distance: "20 km", type: "Fort" },
      { name: "Pune City", distance: "30 km", type: "City" }
    ]
  },

  { 
    id: "pratapgad-fort", 
    name: "Pratapgad Fort", 
    location: "Satara", 
    region: "maharashtra", 
    type: "fort", 
    category: "must-visit",
    image: pratapgadFortImg, 
    tagline: "Site of historic battle where Afzal Khan was killed", 
    openTime: "8:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 30, foreign: 150 }, 
    vipPassAvailable: false, 
    importance: "Site of the famous Battle of Pratapgad (1659) where Shivaji killed Afzal Khan. Houses Bhavani Temple.", 
    history: "Built by Shivaji in 1656, the fort witnessed one of the most dramatic episodes in Maratha history.", 
    architecture: "Hill fort with upper and lower sections, Bhavani Temple at top", 
    averageExpenses: { budget: "₹500-800", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Visit Bhavani Temple", "See Afzal Khan's tomb at base", "Shivaji's statue at summit is impressive"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Mahabaleshwar", "Panchgani", "Jaoli village"], 
    facilities: ["Parking", "Guides", "Small eateries"],
    googleMapsUrl: "https://maps.google.com/?q=Pratapgad+Fort+Satara",
    food: ["Strawberries with cream", "Corn", "Local Maharashtrian snacks"],
    shopping: ["Strawberry products", "Honey", "Chikki"],
    accommodation: ["Hotels in Mahabaleshwar", "MTDC Resort"],
    placesNearby: [
      { name: "Mahabaleshwar", distance: "24 km", type: "Hill Station" },
      { name: "Panchgani", distance: "35 km", type: "Hill Station" },
      { name: "Afzal Khan Tomb", distance: "1 km", type: "Monument" }
    ]
  },

  { 
    id: "daulatabad-fort", 
    name: "Daulatabad Fort", 
    location: "Aurangabad", 
    region: "maharashtra", 
    type: "fort", 
    category: "must-visit",
    image: daulatabadFortImg, 
    tagline: "Impregnable fortress with ingenious defense systems", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "One of the most powerful forts in India, was briefly the capital of India under Muhammad bin Tughlaq.", 
    history: "Originally Devagiri of Yadavas, became Daulatabad under Tughlaq who shifted entire Delhi population here.", 
    architecture: "Multi-layered fortification with moat, dark passages, and ingenious traps", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Carry a torch for dark passages", "Chand Minar is beautiful", "Climb is strenuous but worth it"], 
    rating: 4.6, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Ellora Caves", "Aurangabad Caves", "Bibi Ka Maqbara"], 
    facilities: ["Parking", "Guides", "Restrooms"],
    googleMapsUrl: "https://maps.google.com/?q=Daulatabad+Fort+Aurangabad",
    food: ["Aurangabadi Biryani", "Naan Qaliya", "Local Mughlai cuisine"],
    shopping: ["Himroo shawls", "Paithani sarees", "Bidriware"],
    accommodation: ["Hotels in Aurangabad", "MTDC Ellora"],
    placesNearby: [
      { name: "Ellora Caves", distance: "14 km", type: "Caves" },
      { name: "Aurangabad Caves", distance: "20 km", type: "Caves" },
      { name: "Bibi Ka Maqbara", distance: "12 km", type: "Monument" },
      { name: "Aurangabad City", distance: "15 km", type: "City" }
    ]
  },

  { 
    id: "panhala-fort", 
    name: "Panhala Fort", 
    location: "Kolhapur", 
    region: "maharashtra", 
    type: "fort", 
    category: "regular",
    image: panhalaFortImg, 
    tagline: "Where Shivaji was besieged for 5 months", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 20, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Shivaji spent considerable time here. Famous for Baji Prabhu Deshpande's sacrifice at Pawan Khind.", 
    history: "Largest fort in the Deccan, held by Shivaji against Siddi Johar's siege in 1660.", 
    architecture: "Massive hill fort with triple fortification and large granaries", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["Visit Teen Darwaza and Sajja Kothi", "Sunset point offers great views", "Combine with Kolhapur temple visit"], 
    rating: 4.4, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Mahalaxmi Temple", "Pawan Khind", "Vishalgad"], 
    facilities: ["Parking", "Accommodation", "Restaurants"],
    googleMapsUrl: "https://maps.google.com/?q=Panhala+Fort+Kolhapur",
    food: ["Kolhapuri cuisine", "Mutton Thali", "Tambda Pandhra Rassa"],
    shopping: ["Kolhapuri Chappals", "Jaggery products"],
    accommodation: ["MTDC Panhala", "Private hotels", "Guest houses"],
    placesNearby: [
      { name: "Mahalaxmi Temple", distance: "20 km", type: "Temple" },
      { name: "Pawan Khind", distance: "25 km", type: "Historical" },
      { name: "Vishalgad Fort", distance: "40 km", type: "Fort" }
    ]
  },

  // ==================== KARNATAKA (7 Temples + 6 Forts) ====================
  
  // KARNATAKA TEMPLES (7)
  { 
    id: "vittala-temple-hampi", 
    name: "Vittala Temple", 
    location: "Hampi", 
    region: "karnataka", 
    type: "temple", 
    category: "must-visit",
    image: hampiVittalaImg, 
    tagline: "Famous for stone chariot and musical pillars", 
    openTime: "8:30 AM", 
    closeTime: "5:30 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "The iconic stone chariot of Hampi is located here. Famous for 56 musical pillars that produce different sounds.", 
    history: "Built in the 15th century during the Vijayanagara Empire by King Devaraya II.", 
    architecture: "Vijayanagara architecture with Dravidian influences, ornate pillars and mandapas", 
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, 
    tips: ["Stone Chariot is on the ₹50 note", "Visit during sunrise for best photos", "Hire a guide to understand the history", "Musical pillars are now protected"], 
    rating: 4.9, 
    bestTimeToVisit: "October to February", 
    nearbyAttractions: ["Virupaksha Temple", "Lotus Mahal", "Elephant Stables"], 
    facilities: ["Guides", "Parking", "Refreshments", "Golf Cart Service"],
    googleMapsUrl: "https://maps.google.com/?q=Vittala+Temple+Hampi",
    food: ["South Indian thali", "Mango Tree Restaurant", "Hampi cafes"],
    shopping: ["Stone carvings", "Handicrafts", "Paintings", "Souvenirs"],
    accommodation: ["Evolve Back Hampi", "Heritage Resort Hampi", "Budget hostels"],
    placesNearby: [
      { name: "Stone Chariot", distance: "0 km", type: "Monument" },
      { name: "Virupaksha Temple", distance: "2 km", type: "Temple" },
      { name: "Lotus Mahal", distance: "3 km", type: "Palace" },
      { name: "Tungabhadra River", distance: "0.5 km", type: "River" }
    ]
  },
  
  { 
    id: "virupaksha-temple", 
    name: "Virupaksha Temple", 
    location: "Hampi", 
    region: "karnataka", 
    type: "temple", 
    category: "must-visit",
    image: hampiVittalaImg, 
    tagline: "UNESCO World Heritage Site dedicated to Lord Shiva", 
    openTime: "6:00 AM", 
    closeTime: "9:00 PM", 
    darshanTimings: "6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "One of the oldest functioning temples in India since the 7th century. Was the royal temple of Vijayanagara.", 
    history: "Predates the Vijayanagara Empire, was patronized by Chalukyas and later became the royal temple.", 
    architecture: "Dravidian style with towering 50m gopuram and beautiful mandapas", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, 
    tips: ["Meet Lakshmi the temple elephant in mornings", "Attend evening aarti", "Explore the ancient bazaar street", "Climb Hemakuta Hill for sunset"], 
    rating: 4.8, 
    bestTimeToVisit: "October to February", 
    nearbyAttractions: ["Vittala Temple", "Hemakuta Hill", "Tungabhadra River"], 
    facilities: ["Prasad Counter", "Shoe Counter", "Guides", "Boat Rides"],
    googleMapsUrl: "https://maps.google.com/?q=Virupaksha+Temple+Hampi",
    food: ["Temple prasad", "Hampi cafes", "South Indian food"],
    shopping: ["Temple street bazaar", "Antiques", "Handicrafts"],
    accommodation: ["Hospet hotels", "Hampi guesthouses", "Hippie Island stays"],
    placesNearby: [
      { name: "Hemakuta Hill", distance: "0.2 km", type: "Hill" },
      { name: "Hampi Bazaar", distance: "0 km", type: "Market" },
      { name: "Matanga Hill", distance: "1 km", type: "Viewpoint" },
      { name: "Coracle Ride", distance: "0.5 km", type: "Activity" }
    ]
  },
  
  { 
    id: "hoysaleswara-temple", 
    name: "Hoysaleswara Temple", 
    location: "Halebidu", 
    region: "karnataka", 
    type: "temple", 
    category: "must-visit",
    image: hoysaleswaraTempleImg, 
    tagline: "Masterpiece of Hoysala architecture", 
    openTime: "6:30 AM", 
    closeTime: "9:00 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "One of the largest and most ornate Hoysala temples with incredibly detailed carvings.", 
    history: "Built in 1121 CE by Ketamalla, an officer of Hoysala King Vishnuvardhana. Construction took 86 years.", 
    architecture: "Hoysala architecture with soapstone carvings depicting epics and deities", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Spend time examining the intricate carvings", "Combine with Belur Temple visit", "Hire a guide to understand iconography"], 
    rating: 4.7, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Belur Temple", "Shravanabelagola", "Chikmagalur"], 
    facilities: ["Guides", "Parking", "Museum", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Hoysaleswara+Temple+Halebidu",
    food: ["Karnataka cuisine", "Filter coffee", "Dosa varieties"],
    shopping: ["Soapstone replicas", "Handicrafts", "Sandalwood items"],
    accommodation: ["Hassan hotels", "KSTDC Hotel Mayura"],
    placesNearby: [
      { name: "Belur Temple", distance: "16 km", type: "Temple" },
      { name: "Archaeological Museum", distance: "0.2 km", type: "Museum" },
      { name: "Jain Temples", distance: "0.5 km", type: "Temple" },
      { name: "Hassan", distance: "27 km", type: "City" }
    ]
  },

  { 
    id: "chennakeshava-temple-belur", 
    name: "Chennakeshava Temple", 
    location: "Belur", 
    region: "karnataka", 
    type: "temple", 
    category: "must-visit",
    image: chennakeshavaBelurImg, 
    tagline: "Supreme Hoysala craftsmanship", 
    openTime: "7:30 AM", 
    closeTime: "7:30 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "A Vaishnava temple known for its exquisite Hoysala sculptures and bracket figures.", 
    history: "Built by Hoysala king Vishnuvardhana in 1117 CE to commemorate victory over Cholas.", 
    architecture: "Hoysala architecture with famous Madanikas (bracket figures) and star-shaped platform", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Each bracket figure is unique", "Gravity pillar is a marvel", "Evening illumination is beautiful"], 
    rating: 4.7, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Halebidu", "Yagachi Dam", "Chikmagalur"], 
    facilities: ["Guides", "Parking", "Prasad Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Chennakeshava+Temple+Belur",
    food: ["South Indian thali", "Local eateries", "Coffee estates nearby"],
    shopping: ["Temple souvenirs", "Silk items", "Handicrafts"],
    accommodation: ["Hassan hotels", "Chikmagalur resorts"],
    placesNearby: [
      { name: "Halebidu", distance: "16 km", type: "Temple" },
      { name: "Yagachi Dam", distance: "5 km", type: "Dam" },
      { name: "Chikmagalur", distance: "60 km", type: "Hill Station" }
    ]
  },

  { 
    id: "gomateshwara-shravanabelagola", 
    name: "Gomateshwara Statue", 
    location: "Shravanabelagola", 
    region: "karnataka", 
    type: "temple", 
    category: "must-visit",
    image: gomateshwaraImg, 
    tagline: "World's largest monolithic statue", 
    openTime: "6:30 AM", 
    closeTime: "12:00 PM, 3:30 PM - 6:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "The 57-feet tall monolithic statue of Bahubali is the world's largest free-standing monolithic statue.", 
    history: "Carved in 981 CE by Chamundaraya, a minister of Ganga dynasty. Mahamastakabhisheka held every 12 years.", 
    architecture: "Jain architecture with the statue carved from single granite rock", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Climb 614 steps barefoot", "Early morning avoids crowd and heat", "Next Mahamastakabhisheka in 2030"], 
    rating: 4.8, 
    bestTimeToVisit: "October to February", 
    nearbyAttractions: ["Chandragiri Hill", "Jain Maths", "Hassan"], 
    facilities: ["Shoe counter at base", "Drinking water", "Doli service for elderly"],
    googleMapsUrl: "https://maps.google.com/?q=Gomateshwara+Shravanabelagola",
    food: ["Jain vegetarian food", "Local Karnataka cuisine", "Simple eateries"],
    shopping: ["Jain religious items", "Handicrafts", "Stone souvenirs"],
    accommodation: ["Jain dharamshalas", "Hassan hotels"],
    placesNearby: [
      { name: "Chandragiri Hill", distance: "0.5 km", type: "Temple" },
      { name: "Jain Museum", distance: "0.3 km", type: "Museum" },
      { name: "Belur", distance: "70 km", type: "Temple" },
      { name: "Hassan", distance: "50 km", type: "City" }
    ]
  },

  { 
    id: "murudeshwar-temple", 
    name: "Murudeshwar Temple", 
    location: "Bhatkal", 
    region: "karnataka", 
    type: "temple", 
    category: "regular",
    image: murudeshwarTempleImg, 
    tagline: "Second tallest Shiva statue in the world", 
    openTime: "6:00 AM", 
    closeTime: "8:00 PM", 
    darshanTimings: "6:00 AM - 1:00 PM, 3:00 PM - 8:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Houses a 123-feet tall statue of Lord Shiva, the second tallest in the world. Beautiful coastal location.", 
    history: "Modern temple built by businessman R.N. Shetty. The statue was completed in 2008.", 
    architecture: "Modern temple architecture with massive Raja Gopura and Shiva statue", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Take elevator inside the gopura for views", "Sunset is spectacular", "Beach is accessible for swimming"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Netrani Island", "Gokarna", "Jog Falls"], 
    facilities: ["Elevator", "Beach", "Parking", "Restaurants"],
    googleMapsUrl: "https://maps.google.com/?q=Murudeshwar+Temple+Karnataka",
    food: ["Coastal Karnataka cuisine", "Seafood", "Mangalorean food"],
    shopping: ["Seashells", "Religious items", "Local handicrafts"],
    accommodation: ["RNS Residency", "Beach resorts", "Budget hotels"],
    placesNearby: [
      { name: "Murudeshwar Beach", distance: "0 km", type: "Beach" },
      { name: "Netrani Island", distance: "20 km", type: "Island" },
      { name: "Gokarna", distance: "80 km", type: "Temple Town" },
      { name: "Jog Falls", distance: "100 km", type: "Waterfall" }
    ]
  },

  { 
    id: "badami-caves", 
    name: "Badami Cave Temples", 
    location: "Badami", 
    region: "karnataka", 
    type: "temple", 
    category: "must-visit",
    image: hampiVittalaImg, 
    tagline: "6th century Chalukyan rock-cut cave temples", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "Four rock-cut cave temples from the Chalukya period representing Hindu and Jain traditions.", 
    history: "Built in 6th century CE by the Chalukyas of Badami. Capital of the Western Chalukya dynasty.", 
    architecture: "Rock-cut architecture with exquisite sculptures of Nataraja, Vishnu, and Jain Tirthankaras", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Cave 3 has the best carvings", "Visit Agastya Lake at sunset", "Combine with Pattadakal and Aihole"], 
    rating: 4.6, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Pattadakal", "Aihole", "Agastya Lake"], 
    facilities: ["Guides", "Parking", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Badami+Cave+Temples",
    food: ["North Karnataka cuisine", "Jolada rotti", "Local eateries"],
    shopping: ["Stone sculptures", "Local handicrafts"],
    accommodation: ["KSTDC Hotel Mayura Chalukya", "Private hotels"],
    placesNearby: [
      { name: "Agastya Lake", distance: "0.2 km", type: "Lake" },
      { name: "Badami Fort", distance: "1 km", type: "Fort" },
      { name: "Pattadakal", distance: "22 km", type: "Temple" },
      { name: "Aihole", distance: "35 km", type: "Temple" }
    ]
  },

  // KARNATAKA FORTS (6)
  { 
    id: "chitradurga-fort", 
    name: "Chitradurga Fort", 
    location: "Chitradurga", 
    region: "karnataka", 
    type: "fort", 
    category: "must-visit",
    image: chitradurgaFortImg, 
    tagline: "Stone Fortress - Impregnable walls on hills", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "One of the most formidable forts in South India. Known as 'Stone Fortress' due to its construction among boulders.", 
    history: "Built across different periods by various dynasties including the Nayakas and Hyder Ali. Onake Obavva's heroic resistance.", 
    architecture: "Multiple layers of fortification built around giant boulders with 19 gateways", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["See Onake Obavva's slit where she defended alone", "7 rounds of walls to explore", "Carry water and snacks"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Chandravalli Caves", "Hidimbeshwara Temple", "Jogimatti Hills"], 
    facilities: ["Parking", "Guides", "Museum", "Restrooms"],
    googleMapsUrl: "https://maps.google.com/?q=Chitradurga+Fort+Karnataka",
    food: ["Ragi Mudde", "Jolada Rotti", "Local cuisine"],
    shopping: ["Stone carvings", "Local handicrafts"],
    accommodation: ["KSTDC Hotel", "Private hotels in town"],
    placesNearby: [
      { name: "Chandravalli Caves", distance: "3 km", type: "Caves" },
      { name: "Hidimbeshwara Temple", distance: "5 km", type: "Temple" },
      { name: "Jogimatti Hills", distance: "10 km", type: "Nature" }
    ]
  },

  { 
    id: "gol-gumbaz", 
    name: "Gol Gumbaz", 
    location: "Bijapur", 
    region: "karnataka", 
    type: "fort", 
    category: "must-visit",
    image: golGumbazImg, 
    tagline: "World's second largest dome - Whispering Gallery marvel", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "Contains the world's second largest dome and famous Whispering Gallery where sounds echo 7 times.", 
    history: "Built in 1656 as the mausoleum of Muhammad Adil Shah, Sultan of Bijapur.", 
    architecture: "Indo-Islamic architecture with massive dome spanning 44 meters without any pillars", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Experience the whispering gallery acoustics", "Climb to the gallery for views", "Best in early morning"], 
    rating: 4.7, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Ibrahim Rauza", "Bijapur Fort", "Malik-e-Maidan cannon"], 
    facilities: ["Guides", "Parking", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Gol+Gumbaz+Bijapur",
    food: ["North Karnataka cuisine", "Biryani", "Sweets"],
    shopping: ["Bidriware", "Local handicrafts", "Antiques"],
    accommodation: ["KSTDC Mayura Adil Shahi", "Private hotels"],
    placesNearby: [
      { name: "Ibrahim Rauza", distance: "1 km", type: "Tomb" },
      { name: "Bijapur Fort", distance: "2 km", type: "Fort" },
      { name: "Malik-e-Maidan", distance: "1.5 km", type: "Monument" },
      { name: "Jama Masjid", distance: "1 km", type: "Mosque" }
    ]
  },

  { 
    id: "bidar-fort", 
    name: "Bidar Fort", 
    location: "Bidar", 
    region: "karnataka", 
    type: "fort", 
    category: "hidden-gem",
    image: bidarFortImg, 
    tagline: "Bahmani Sultanate's magnificent capital", 
    openTime: "8:00 AM", 
    closeTime: "5:30 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "One of the most formidable forts of the Deccan, served as capital of Bahmani and Barid Shahi kingdoms.", 
    history: "Built in 1427 by Ahmad Shah Wali Bahmani. Capital shifted here from Gulbarga.", 
    architecture: "Persian and Turkish influenced Islamic architecture with ornate tilework", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["See the Rangeen Mahal with Persian tiles", "Solah Khamba Mosque is beautiful", "Combine with Bidar tombs"], 
    rating: 4.4, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Bahmani Tombs", "Mahmud Gawan Madrasa", "Gurudwara Nanak Jhira"], 
    facilities: ["Guides", "Parking", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Bidar+Fort+Karnataka",
    food: ["Bidar ki kheer", "Local cuisine", "Bidri sweets"],
    shopping: ["Bidriware (silver inlay work)", "Local handicrafts"],
    accommodation: ["KSTDC Hotel", "Private hotels"],
    placesNearby: [
      { name: "Bahmani Tombs", distance: "2 km", type: "Tombs" },
      { name: "Mahmud Gawan Madrasa", distance: "0.5 km", type: "Monument" },
      { name: "Gurudwara Nanak Jhira", distance: "4 km", type: "Gurudwara" }
    ]
  },

  { 
    id: "mirjan-fort", 
    name: "Mirjan Fort", 
    location: "Uttara Kannada", 
    region: "karnataka", 
    type: "fort", 
    category: "hidden-gem",
    image: mirjanFortImg, 
    tagline: "Pepper Queen's fort in coastal Karnataka", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Built by the Queen of Pepper - Chennabhairadevi who controlled the pepper trade from this coastal fort.", 
    history: "Built in the 16th century, the fort was a major center for pepper and spice trade.", 
    architecture: "Laterite construction with bastions and secret passages", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Best during monsoon when it's green", "Near Gokarna beaches", "Peaceful and less crowded"], 
    rating: 4.2, 
    bestTimeToVisit: "July to February", 
    nearbyAttractions: ["Gokarna", "Om Beach", "Yana Caves"], 
    facilities: ["Parking", "Basic facilities"],
    googleMapsUrl: "https://maps.google.com/?q=Mirjan+Fort+Karnataka",
    food: ["Coastal Karnataka cuisine", "Seafood", "Malvani food"],
    shopping: ["Spices", "Coconut products", "Local items"],
    accommodation: ["Gokarna hotels", "Beach resorts"],
    placesNearby: [
      { name: "Gokarna", distance: "12 km", type: "Temple Town" },
      { name: "Om Beach", distance: "16 km", type: "Beach" },
      { name: "Yana Caves", distance: "45 km", type: "Caves" }
    ]
  },

  { 
    id: "basavakalyan-fort", 
    name: "Basavakalyan Fort", 
    location: "Bidar", 
    region: "karnataka", 
    type: "fort", 
    category: "hidden-gem",
    image: basavakalyanFortImg, 
    tagline: "Where Basavanna started the Lingayat movement", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 15, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Sacred site for Lingayats - where Basaveshwara started his social reform movement in the 12th century.", 
    history: "Was the capital of Kalachuri kingdom. Basavanna served as minister here and started the Vachana movement.", 
    architecture: "Kalachuri era fortification with temples inside", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Visit Basavanna's samadhi", "Important pilgrimage for Lingayats", "Temple festivals are vibrant"], 
    rating: 4.0, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Basavanna Temple", "Bidar Fort", "Gulbarga"], 
    facilities: ["Parking", "Temple facilities"],
    googleMapsUrl: "https://maps.google.com/?q=Basavakalyan+Fort+Karnataka",
    food: ["North Karnataka cuisine", "Temple prasad"],
    shopping: ["Religious items", "Handicrafts"],
    accommodation: ["Dharamshalas", "Basic hotels"],
    placesNearby: [
      { name: "Basavanna Temple", distance: "0.5 km", type: "Temple" },
      { name: "Bidar", distance: "85 km", type: "City" },
      { name: "Gulbarga", distance: "90 km", type: "City" }
    ]
  },

  { 
    id: "bellary-fort", 
    name: "Bellary Fort", 
    location: "Bellary", 
    region: "karnataka", 
    type: "fort", 
    category: "regular",
    image: bellaryFortImg, 
    tagline: "Twin hill forts with panoramic views", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Two forts on twin hills - Upper and Lower Fort. Important during Vijayanagara and later British periods.", 
    history: "Originally built by Hanumappa Nayaka, later strengthened by Hyder Ali and the British.", 
    architecture: "Military architecture with bastions and cannons", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Climb upper fort for Hampi views", "Best at sunrise", "Carry water"], 
    rating: 3.8, 
    bestTimeToVisit: "October to February", 
    nearbyAttractions: ["Hampi", "Daroji Bear Sanctuary", "Sandur"], 
    facilities: ["Parking", "Basic facilities"],
    googleMapsUrl: "https://maps.google.com/?q=Bellary+Fort+Karnataka",
    food: ["Local cuisine", "North Karnataka food"],
    shopping: ["Iron ore region artifacts", "Local items"],
    accommodation: ["Bellary hotels"],
    placesNearby: [
      { name: "Hampi", distance: "65 km", type: "Heritage" },
      { name: "Daroji Bear Sanctuary", distance: "15 km", type: "Wildlife" },
      { name: "Sandur", distance: "50 km", type: "Nature" }
    ]
  },

  // ==================== TAMIL NADU (7 Temples + 6 Forts) ====================
  
  // TAMIL NADU TEMPLES (7)
  { 
    id: "brihadeeswarar-temple", 
    name: "Brihadeeswarar Temple", 
    location: "Thanjavur", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "must-visit",
    image: thanjavurTempleImg, 
    tagline: "UNESCO World Heritage - Chola architectural masterpiece", 
    openTime: "6:00 AM", 
    closeTime: "12:30 PM, 4:00 PM - 8:30 PM", 
    darshanTimings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Built by Raja Raja Chola I, it's a UNESCO World Heritage Site and one of the largest temples in India.", 
    history: "Completed in 1010 CE, it took 7 years to build. The temple celebrates Chola achievements in art and architecture.", 
    architecture: "Dravidian architecture with 66m vimana topped by 80-ton capstone, Nandi is carved from single rock", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Shadow of the vimana never falls on ground at noon", "See the massive Nandi statue", "Evening lighting is spectacular"], 
    rating: 4.9, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Thanjavur Palace", "Saraswathi Mahal Library", "Gangaikonda Cholapuram"], 
    facilities: ["Shoe Counter", "Prasad Counter", "Guides", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Brihadeeswarar+Temple+Thanjavur",
    food: ["Chettinad cuisine", "Filter coffee", "Tanjore sweets"],
    shopping: ["Tanjore paintings", "Bronze statues", "Silk sarees"],
    accommodation: ["Hotel Parisutham", "Svatma", "Budget hotels"],
    placesNearby: [
      { name: "Thanjavur Palace", distance: "1 km", type: "Palace" },
      { name: "Saraswathi Mahal Library", distance: "1 km", type: "Library" },
      { name: "Art Gallery", distance: "0.5 km", type: "Museum" },
      { name: "Gangaikonda Cholapuram", distance: "70 km", type: "Temple" }
    ]
  },
  
  { 
    id: "meenakshi-temple-madurai", 
    name: "Meenakshi Amman Temple", 
    location: "Madurai", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "must-visit",
    image: meenakshiTempleImg, 
    tagline: "Crown jewel of Dravidian architecture", 
    openTime: "5:00 AM", 
    closeTime: "12:30 PM, 4:00 PM - 9:30 PM", 
    darshanTimings: "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 100, 
    importance: "One of the most important temples in India, dedicated to Goddess Meenakshi and Lord Sundareswarar.", 
    history: "Original temple dates back 2,000 years. The current structure was built by Nayak rulers in 16th-17th century.", 
    architecture: "Dravidian architecture with 14 gateway towers (gopurams) covered in colorful sculptures", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" }, 
    tips: ["Don't miss the musical pillars", "Evening ceremony (bedtime) is beautiful", "Hall of 1000 pillars is a must-see"], 
    rating: 4.9, 
    bestTimeToVisit: "October to March, Chithirai Festival (April-May)", 
    nearbyAttractions: ["Thirumalai Nayak Palace", "Gandhi Museum", "Vaigai Dam"], 
    facilities: ["VIP Darshan", "Shoe Counter", "Prasad Counter", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Meenakshi+Amman+Temple+Madurai",
    food: ["Jigarthanda", "Madurai Kari Dosa", "Chettinad cuisine"],
    shopping: ["Silk sarees", "Brass items", "Sungudi sarees"],
    accommodation: ["Heritage Madurai", "GRT Regency", "Budget hotels"],
    placesNearby: [
      { name: "Thirumalai Nayak Palace", distance: "1 km", type: "Palace" },
      { name: "Gandhi Museum", distance: "2 km", type: "Museum" },
      { name: "Vandiyur Mariamman Teppakulam", distance: "3 km", type: "Tank" },
      { name: "Alagar Kovil", distance: "21 km", type: "Temple" }
    ]
  },
  
  { 
    id: "ramanathaswamy-temple", 
    name: "Ramanathaswamy Temple", 
    location: "Rameswaram", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "must-visit",
    image: ramanathaswamyTempleImg, 
    tagline: "One of the Char Dhams - Longest temple corridor in India", 
    openTime: "5:00 AM", 
    closeTime: "1:00 PM, 3:00 PM - 9:00 PM", 
    darshanTimings: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "One of the Char Dhams. Lord Rama is believed to have worshipped Shiva here after returning from Lanka.", 
    history: "The temple is associated with the Ramayana. The present structure was built by various rulers over centuries.", 
    architecture: "Dravidian architecture with the longest corridor of any Hindu temple (1,220m)", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, 
    tips: ["Take sacred bath in 22 theerthams", "Walk the long corridors", "Visit Dhanushkodi nearby"], 
    rating: 4.8, 
    bestTimeToVisit: "October to April", 
    nearbyAttractions: ["Dhanushkodi", "Pamban Bridge", "Gandhamadhana Parvatham"], 
    facilities: ["VIP Darshan", "Theertham facilities", "Prasad Counter", "Accommodation"],
    googleMapsUrl: "https://maps.google.com/?q=Ramanathaswamy+Temple+Rameswaram",
    food: ["Temple prasad", "South Indian meals", "Seafood"],
    shopping: ["Seashells", "Conch items", "Religious items"],
    accommodation: ["Hotel Tamil Nadu (TTDC)", "Daiwik Hotels", "Dharamshalas"],
    placesNearby: [
      { name: "Dhanushkodi", distance: "20 km", type: "Beach" },
      { name: "Pamban Bridge", distance: "10 km", type: "Bridge" },
      { name: "Gandhamadhana Parvatham", distance: "2 km", type: "Hill" },
      { name: "Five-Faced Hanuman Temple", distance: "2 km", type: "Temple" }
    ]
  },

  { 
    id: "shore-temple", 
    name: "Shore Temple", 
    location: "Mahabalipuram", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "must-visit",
    image: shoreTempleImg, 
    tagline: "UNESCO World Heritage - Pallava masterpiece by the sea", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "One of the oldest structural stone temples of South India. UNESCO World Heritage Site.", 
    history: "Built by Pallava king Narasimhavarman II (Rajasimha) in 8th century CE.", 
    architecture: "Dravidian structural temple architecture with granite blocks", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, 
    tips: ["Visit at sunrise or sunset", "Combine with other Mahabalipuram sites", "Avoid weekends - crowded"], 
    rating: 4.7, 
    bestTimeToVisit: "November to March", 
    nearbyAttractions: ["Pancha Rathas", "Arjuna's Penance", "Krishna's Butterball"], 
    facilities: ["Guides", "Parking", "Beach access"],
    googleMapsUrl: "https://maps.google.com/?q=Shore+Temple+Mahabalipuram",
    food: ["Seafood", "Mahabalipuram cafes", "Continental cuisine"],
    shopping: ["Stone sculptures", "Handicrafts", "Beach items"],
    accommodation: ["Radisson Blu", "Chariot Beach Resort", "Beach resorts"],
    placesNearby: [
      { name: "Pancha Rathas", distance: "2 km", type: "Monument" },
      { name: "Arjuna's Penance", distance: "1 km", type: "Sculpture" },
      { name: "Krishna's Butterball", distance: "1.5 km", type: "Monument" },
      { name: "Crocodile Bank", distance: "14 km", type: "Wildlife" }
    ]
  },

  { 
    id: "kapaleeshwarar-temple", 
    name: "Kapaleeshwarar Temple", 
    location: "Mylapore, Chennai", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "regular",
    image: kapaleeshwararTempleImg, 
    tagline: "Ancient Shiva temple in the heart of Chennai", 
    openTime: "5:00 AM", 
    closeTime: "12:00 PM, 4:00 PM - 9:00 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "One of the most important Shiva temples in Tamil Nadu, associated with 63 Nayanmars.", 
    history: "Original temple destroyed by Portuguese. Current structure rebuilt in 16th century by Vijayanagara rulers.", 
    architecture: "Classic Dravidian architecture with colorful gopuram", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Visit during Arubathimoovar festival", "Peacock is the temple vahana", "Good shopping area around"], 
    rating: 4.5, 
    bestTimeToVisit: "Year-round, March-April for festival", 
    nearbyAttractions: ["San Thome Church", "Marina Beach", "Theosophical Society"], 
    facilities: ["Shoe Counter", "Prasad Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Kapaleeshwarar+Temple+Chennai",
    food: ["Filter coffee", "Idli-Dosa", "Mylapore eateries"],
    shopping: ["Silk sarees", "Traditional jewelry", "Brass items"],
    accommodation: ["Chennai hotels", "Mylapore area stays"],
    placesNearby: [
      { name: "San Thome Church", distance: "1 km", type: "Church" },
      { name: "Marina Beach", distance: "2 km", type: "Beach" },
      { name: "Parthasarathy Temple", distance: "3 km", type: "Temple" }
    ]
  },

  { 
    id: "gangaikonda-temple", 
    name: "Gangaikonda Cholapuram Temple", 
    location: "Ariyalur", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "hidden-gem",
    image: gangaikondaTempleImg, 
    tagline: "Chola capital temple - Sister of Thanjavur", 
    openTime: "6:00 AM", 
    closeTime: "12:00 PM, 4:00 PM - 8:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Built by Rajendra Chola I to commemorate his victory over Ganges. UNESCO World Heritage Site.", 
    history: "Built in 1035 CE when Rajendra Chola I made it his capital after defeating the Pala dynasty.", 
    architecture: "Dravidian architecture similar to Thanjavur but with unique features", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Less crowded than Thanjavur", "Sculptures are exquisite", "Combine with Thanjavur trip"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Thanjavur", "Darasuram Temple", "Kumbakonam"], 
    facilities: ["Parking", "Shoe Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Gangaikonda+Cholapuram+Temple",
    food: ["Local Tamil cuisine", "Filter coffee"],
    shopping: ["Bronze items", "Local crafts"],
    accommodation: ["Kumbakonam hotels", "Thanjavur hotels"],
    placesNearby: [
      { name: "Thanjavur", distance: "70 km", type: "City" },
      { name: "Darasuram Temple", distance: "35 km", type: "Temple" },
      { name: "Kumbakonam", distance: "30 km", type: "Temple Town" }
    ]
  },

  { 
    id: "srirangam-temple", 
    name: "Ranganathaswamy Temple", 
    location: "Srirangam, Trichy", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "must-visit",
    image: srirangamTempleImg, 
    tagline: "World's largest functioning Hindu temple", 
    openTime: "6:00 AM", 
    closeTime: "1:00 PM, 3:00 PM - 9:00 PM", 
    darshanTimings: "6:00 AM - 1:00 PM, 3:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "The largest functioning Hindu temple in the world with 7 concentric walls. First of the 108 Divya Desams.", 
    history: "Ancient temple mentioned in Sangam literature. Expanded by various dynasties over 2,000 years.", 
    architecture: "Dravidian architecture spanning 156 acres with 21 gopurams", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Vaikunta Ekadasi festival is spectacular", "Explore all 7 enclosures", "Climb the Rajagopuram for views"], 
    rating: 4.8, 
    bestTimeToVisit: "December-January for Vaikunta Ekadasi", 
    nearbyAttractions: ["Rock Fort Temple", "Jambukeswarar Temple", "Mukkombu"], 
    facilities: ["VIP Darshan", "Prasad Counter", "Accommodation inside"],
    googleMapsUrl: "https://maps.google.com/?q=Ranganathaswamy+Temple+Srirangam",
    food: ["Temple prasad", "Trichy sweets", "South Indian meals"],
    shopping: ["Temple jewelry", "Silk items", "Religious items"],
    accommodation: ["Temple guest houses", "Trichy hotels"],
    placesNearby: [
      { name: "Rock Fort Temple", distance: "6 km", type: "Temple" },
      { name: "Jambukeswarar Temple", distance: "2 km", type: "Temple" },
      { name: "ISKON Temple", distance: "3 km", type: "Temple" },
      { name: "Trichy City", distance: "8 km", type: "City" }
    ]
  },

  // TAMIL NADU FORTS (6)
  { 
    id: "gingee-fort", 
    name: "Gingee Fort", 
    location: "Villupuram", 
    region: "tamil-nadu", 
    type: "fort", 
    category: "must-visit",
    image: gingeeFortImg, 
    tagline: "Troy of the East - Most impregnable fortress", 
    openTime: "8:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "Called 'Troy of the East' by the British. One of the most impressive fortress complexes in India.", 
    history: "Built by the Cholas, later expanded by Vijayanagara, Marathas, Mughals, and French.", 
    architecture: "Massive fortification on three hills with interconnected defenses", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Start climbing early - it's strenuous", "Rajagiri is the main fort", "Carry lots of water", "Full day needed"], 
    rating: 4.6, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Sathanur Dam", "Tiruvannamalai", "Puducherry"], 
    facilities: ["Parking", "Basic facilities at base"],
    googleMapsUrl: "https://maps.google.com/?q=Gingee+Fort+Tamil+Nadu",
    food: ["Pack your own", "Local eateries at town"],
    shopping: ["Local handicrafts"],
    accommodation: ["Villupuram hotels", "Puducherry hotels"],
    placesNearby: [
      { name: "Tiruvannamalai", distance: "37 km", type: "Temple" },
      { name: "Sathanur Dam", distance: "30 km", type: "Dam" },
      { name: "Puducherry", distance: "70 km", type: "City" }
    ]
  },

  { 
    id: "vellore-fort", 
    name: "Vellore Fort", 
    location: "Vellore", 
    region: "tamil-nadu", 
    type: "fort", 
    category: "regular",
    image: velloreFortImg, 
    tagline: "Magnificent Vijayanagara fort with temple and mosque", 
    openTime: "8:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 200 }, 
    vipPassAvailable: false, 
    importance: "One of the best preserved forts in South India. Houses both Jalakanteshwarar Temple and a mosque.", 
    history: "Built by Vijayanagara rulers in 16th century. Witnessed the Vellore Mutiny of 1806.", 
    architecture: "Vijayanagara military architecture with granite walls and moat", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["See the Jalakanteshwarar Temple inside", "Crocodiles in moat", "Museum is informative"], 
    rating: 4.3, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Golden Temple Sripuram", "Yelagiri Hills", "Tirupati"], 
    facilities: ["Parking", "Museum", "Temple inside"],
    googleMapsUrl: "https://maps.google.com/?q=Vellore+Fort+Tamil+Nadu",
    food: ["Vellore biryani", "South Indian meals"],
    shopping: ["Vellore items", "Religious items"],
    accommodation: ["Hotel Darling Residency", "Budget hotels"],
    placesNearby: [
      { name: "Golden Temple Sripuram", distance: "8 km", type: "Temple" },
      { name: "Yelagiri Hills", distance: "85 km", type: "Hill Station" },
      { name: "CMC Hospital", distance: "3 km", type: "Medical" }
    ]
  },

  { 
    id: "thanjavur-palace", 
    name: "Thanjavur Maratha Palace", 
    location: "Thanjavur", 
    region: "tamil-nadu", 
    type: "fort", 
    category: "regular",
    image: thanjavurPalaceImg, 
    tagline: "Maratha royal residence with art gallery", 
    openTime: "9:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 50, foreign: 250 }, 
    vipPassAvailable: false, 
    importance: "Palace of Maratha rulers who patronized art and music. Houses famous Saraswathi Mahal Library.", 
    history: "Built by Maratha rulers starting from 16th century. The Nayaks and Marathas expanded it.", 
    architecture: "Maratha-Nayak palace architecture with multiple courtyards", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["Visit Saraswathi Mahal Library", "Art Gallery has bronze collection", "Combine with Big Temple"], 
    rating: 4.2, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Brihadeeswarar Temple", "Schwartz Church", "Thanjavur Art Gallery"], 
    facilities: ["Museum", "Library", "Parking"],
    googleMapsUrl: "https://maps.google.com/?q=Thanjavur+Maratha+Palace",
    food: ["Thanjavur filter coffee", "South Indian meals"],
    shopping: ["Tanjore paintings", "Bronze items", "Silk"],
    accommodation: ["Hotel Parisutham", "Svatma"],
    placesNearby: [
      { name: "Brihadeeswarar Temple", distance: "1 km", type: "Temple" },
      { name: "Art Gallery", distance: "0 km", type: "Museum" },
      { name: "Saraswathi Mahal Library", distance: "0 km", type: "Library" }
    ]
  },

  { 
    id: "trichy-rock-fort", 
    name: "Trichy Rock Fort", 
    location: "Tiruchirappalli", 
    region: "tamil-nadu", 
    type: "fort", 
    category: "must-visit",
    image: trichyRockFortImg, 
    tagline: "Temple-fort on 3.8 billion year old rock", 
    openTime: "6:00 AM", 
    closeTime: "8:00 PM", 
    entryFee: { indian: 25, foreign: 200 }, 
    vipPassAvailable: false, 
    importance: "Temple complex atop one of the oldest rocks in the world. Landmark of Trichy city.", 
    history: "Rock has been used since prehistoric times. Pallavas, Pandyas, and Nayaks built temples here.", 
    architecture: "Rock-cut and structural temples with 344 steps carved in rock", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["344 steps to climb", "Ucchi Pillayar Temple at top", "Panoramic city views", "Non-Hindus can go halfway"], 
    rating: 4.4, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Srirangam Temple", "Jambukeswarar Temple", "Kallanai Dam"], 
    facilities: ["Shoe Counter", "Prasad Counter", "Restrooms at intervals"],
    googleMapsUrl: "https://maps.google.com/?q=Rock+Fort+Temple+Trichy",
    food: ["Trichy sweets", "Filter coffee", "South Indian meals"],
    shopping: ["Temple items", "Local crafts"],
    accommodation: ["Femina Hotel", "Sangam Hotel", "Budget options"],
    placesNearby: [
      { name: "Srirangam", distance: "8 km", type: "Temple" },
      { name: "Jambukeswarar Temple", distance: "6 km", type: "Temple" },
      { name: "Teppakulam", distance: "1 km", type: "Tank" }
    ]
  },

  { 
    id: "dindigul-fort", 
    name: "Dindigul Fort", 
    location: "Dindigul", 
    region: "tamil-nadu", 
    type: "fort", 
    category: "hidden-gem",
    image: dindigulFortImg, 
    tagline: "Madurai Nayak fort on rocky hill", 
    openTime: "8:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 15, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Built by Madurai Nayaks and later used by Hyder Ali and Tipu Sultan.", 
    history: "Built in 17th century by Madurai Nayaks. Tipu Sultan used it as a prison.", 
    architecture: "Nayak-era fortification on rocky outcrop", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Famous for Dindigul locks and biryani", "Good views from top", "Best in morning"], 
    rating: 3.9, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Kodaikanal", "Palani", "Madurai"], 
    facilities: ["Parking", "Basic facilities"],
    googleMapsUrl: "https://maps.google.com/?q=Dindigul+Fort+Tamil+Nadu",
    food: ["Famous Dindigul Biryani", "Thalappakatti style"],
    shopping: ["Dindigul locks", "Biryani spices"],
    accommodation: ["Dindigul hotels", "Kodaikanal resorts"],
    placesNearby: [
      { name: "Kodaikanal", distance: "90 km", type: "Hill Station" },
      { name: "Palani Temple", distance: "60 km", type: "Temple" },
      { name: "Madurai", distance: "63 km", type: "City" }
    ]
  },

  { 
    id: "padmanabhapuram-palace", 
    name: "Padmanabhapuram Palace", 
    location: "Kanyakumari", 
    region: "tamil-nadu", 
    type: "fort", 
    category: "hidden-gem",
    image: padmanabhapuramPalaceImg, 
    tagline: "Finest wooden palace in South India", 
    openTime: "9:00 AM", 
    closeTime: "5:00 PM (Closed Mondays)", 
    entryFee: { indian: 35, foreign: 200 }, 
    vipPassAvailable: false, 
    importance: "Former capital of Travancore kingdom. Finest example of traditional Kerala architecture.", 
    history: "Built in 1601, it served as the seat of Travancore rulers until capital moved to Thiruvananthapuram.", 
    architecture: "Traditional Kerala wooden architecture with teak and rosewood", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Photography restricted inside", "See the Thai Kottaram", "Closed on Mondays"], 
    rating: 4.4, 
    bestTimeToVisit: "September to March", 
    nearbyAttractions: ["Kanyakumari", "Sucheendram Temple", "Nagercoil"], 
    facilities: ["Guides", "Parking", "Museum"],
    googleMapsUrl: "https://maps.google.com/?q=Padmanabhapuram+Palace",
    food: ["Kerala cuisine", "Kanyakumari seafood"],
    shopping: ["Coir products", "Seashells", "Palm leaf items"],
    accommodation: ["Kanyakumari hotels", "Nagercoil hotels"],
    placesNearby: [
      { name: "Kanyakumari", distance: "35 km", type: "Pilgrimage" },
      { name: "Sucheendram Temple", distance: "13 km", type: "Temple" },
      { name: "Thiruvattar Temple", distance: "8 km", type: "Temple" }
    ]
  },

  // ==================== GUJARAT (7 Temples + 6 Forts) ====================
  
  // GUJARAT TEMPLES (7)
  { 
    id: "somnath-temple", 
    name: "Somnath Temple", 
    location: "Gir Somnath", 
    region: "gujarat", 
    type: "temple", 
    category: "must-visit",
    image: somnathTempleImg, 
    tagline: "First of the 12 Jyotirlingas - Eternal Temple", 
    openTime: "6:00 AM", 
    closeTime: "9:30 PM", 
    darshanTimings: "6:00 AM - 9:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "The first among the 12 Jyotirlingas. Destroyed and rebuilt 17 times, symbolizing India's resilience.", 
    history: "Original temple built in gold by Soma. Current temple rebuilt by Sardar Vallabhbhai Patel in 1951.", 
    architecture: "Chalukyan style (Kailash Mahameru Prasad) overlooking the Arabian Sea", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, 
    tips: ["Attend the evening aarti at sunset", "Light and sound show is spectacular", "Visit the sea-facing gallery"], 
    rating: 4.9, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Bhalka Tirth", "Triveni Sangam", "Gir National Park"], 
    facilities: ["VIP Darshan", "Museum", "Light Show", "Prasad Counter"],
    googleMapsUrl: "https://maps.google.com/?q=Somnath+Temple+Gujarat",
    food: ["Gujarati thali", "Temple prasad", "Kathiyawadi cuisine"],
    shopping: ["Religious items", "Shells", "Handicrafts"],
    accommodation: ["Somnath Trust guest house", "Hotels nearby"],
    placesNearby: [
      { name: "Bhalka Tirth", distance: "5 km", type: "Sacred" },
      { name: "Triveni Sangam", distance: "6 km", type: "Confluence" },
      { name: "Gir National Park", distance: "43 km", type: "Wildlife" },
      { name: "Junagadh", distance: "85 km", type: "City" }
    ]
  },
  
  { 
    id: "dwarkadhish-temple", 
    name: "Dwarkadhish Temple", 
    location: "Dwarka", 
    region: "gujarat", 
    type: "temple", 
    category: "must-visit",
    image: dwarkadhishTempleImg, 
    tagline: "One of the Char Dhams - Krishna's Kingdom", 
    openTime: "6:00 AM", 
    closeTime: "1:00 PM, 5:00 PM - 9:30 PM", 
    darshanTimings: "6:00 AM - 1:00 PM, 5:00 PM - 9:30 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 300, 
    importance: "One of the Char Dhams. The legendary kingdom of Lord Krishna. Submerged city underwater.", 
    history: "Original city said to be 9,000 years old. Current temple built in 15th-16th century.", 
    architecture: "Chalukyan style temple with 72 pillars and five-storied structure", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, 
    tips: ["Visit Bet Dwarka by boat", "See the 52 steps to Gomti Ghat", "Evening aarti is beautiful"], 
    rating: 4.8, 
    bestTimeToVisit: "October to March, Janmashtami", 
    nearbyAttractions: ["Bet Dwarka", "Nageshwar Jyotirlinga", "Rukmini Temple"], 
    facilities: ["VIP Darshan", "Prasad Counter", "Boat to Bet Dwarka"],
    googleMapsUrl: "https://maps.google.com/?q=Dwarkadhish+Temple+Gujarat",
    food: ["Gujarati thali", "Prasad", "Kathiyawadi food"],
    shopping: ["Krishna items", "Shells", "Religious souvenirs"],
    accommodation: ["Temple guest houses", "Hotels in Dwarka"],
    placesNearby: [
      { name: "Bet Dwarka", distance: "30 km", type: "Island Temple" },
      { name: "Nageshwar Jyotirlinga", distance: "17 km", type: "Temple" },
      { name: "Rukmini Temple", distance: "2 km", type: "Temple" },
      { name: "Gomti Ghat", distance: "0 km", type: "Ghat" }
    ]
  },

  { 
    id: "akshardham-gandhinagar", 
    name: "Akshardham Temple", 
    location: "Gandhinagar", 
    region: "gujarat", 
    type: "temple", 
    category: "must-visit",
    image: akshardhamGandhinagarImg, 
    tagline: "Swaminarayan complex with stunning architecture", 
    openTime: "9:30 AM", 
    closeTime: "7:30 PM (Closed Mondays)", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "One of the largest Hindu temple complexes. Guinness World Record for largest comprehensive Hindu temple.", 
    history: "Built in 1992 by BAPS Swaminarayan Sanstha. Features 6,000 tonnes of pink sandstone.", 
    architecture: "Traditional Hindu architecture with intricate carvings and no steel", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["No photography inside", "Watch the water show", "Visit the exhibitions", "Closed on Mondays"], 
    rating: 4.7, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Adalaj Stepwell", "Sabarmati Ashram", "Ahmedabad"], 
    facilities: ["Water Show", "Exhibition", "Food Court", "Parking"],
    googleMapsUrl: "https://maps.google.com/?q=Akshardham+Temple+Gandhinagar",
    food: ["Vegetarian food court", "Gujarati thali"],
    shopping: ["Swaminarayan items", "Books", "Souvenirs"],
    accommodation: ["Gandhinagar hotels", "Ahmedabad hotels"],
    placesNearby: [
      { name: "Adalaj Stepwell", distance: "20 km", type: "Stepwell" },
      { name: "Sabarmati Ashram", distance: "30 km", type: "Ashram" },
      { name: "Ahmedabad", distance: "25 km", type: "City" }
    ]
  },

  { 
    id: "palitana-temples", 
    name: "Palitana Temples", 
    location: "Bhavnagar", 
    region: "gujarat", 
    type: "temple", 
    category: "must-visit",
    image: palitanaTemplesImg, 
    tagline: "World's largest complex of Jain temples", 
    openTime: "6:30 AM", 
    closeTime: "7:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "863 marble temples on Shatrunjaya Hill. Most sacred pilgrimage for Jains - world's largest temple complex.", 
    history: "Temples built over 900 years by various Jain patrons. Destroyed by Muslim invaders and rebuilt.", 
    architecture: "Jain temple architecture with marble carvings on hilltop", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["3,500 steps to climb", "Start early (before 7 AM)", "Doli (palanquin) available for elderly", "Fast required for visit"], 
    rating: 4.8, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Bhavnagar", "Velavadar National Park", "Mahuva"], 
    facilities: ["Dharamshalas", "Doli service", "Shoe counter"],
    googleMapsUrl: "https://maps.google.com/?q=Palitana+Temples+Gujarat",
    food: ["Pure Jain vegetarian food", "No onion-garlic"],
    shopping: ["Jain religious items", "Marble items"],
    accommodation: ["Jain dharamshalas", "Palitana hotels"],
    placesNearby: [
      { name: "Bhavnagar", distance: "51 km", type: "City" },
      { name: "Velavadar National Park", distance: "65 km", type: "Wildlife" },
      { name: "Talaja Caves", distance: "45 km", type: "Caves" }
    ]
  },

  { 
    id: "modhera-sun-temple", 
    name: "Modhera Sun Temple", 
    location: "Mehsana", 
    region: "gujarat", 
    type: "temple", 
    category: "must-visit",
    image: modheraSunTempleImg, 
    tagline: "11th century Sun Temple - Solanki masterpiece", 
    openTime: "7:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "One of the finest examples of Solanki architecture. Built so sun rays fall directly on deity at equinox.", 
    history: "Built in 1026 CE by King Bhimdev I of the Solanki dynasty. No worship performed now as per tradition.", 
    architecture: "Solanki architecture with Kund (stepwell tank) and Sabha Mandapa", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Visit during Modhera Dance Festival (January)", "Sunrise is spectacular", "Photography allowed"], 
    rating: 4.6, 
    bestTimeToVisit: "October to March, especially January festival", 
    nearbyAttractions: ["Rani ki Vav", "Patan Patola", "Mehsana"], 
    facilities: ["Guides", "Parking", "Cafeteria"],
    googleMapsUrl: "https://maps.google.com/?q=Modhera+Sun+Temple",
    food: ["Gujarati thali", "Local eateries"],
    shopping: ["Patola sarees in Patan", "Handicrafts"],
    accommodation: ["Mehsana hotels", "Patan hotels"],
    placesNearby: [
      { name: "Rani ki Vav", distance: "30 km", type: "Stepwell" },
      { name: "Patan", distance: "35 km", type: "Heritage Town" },
      { name: "Mehsana", distance: "25 km", type: "City" }
    ]
  },

  { 
    id: "ambaji-temple", 
    name: "Ambaji Temple", 
    location: "Banaskantha", 
    region: "gujarat", 
    type: "temple", 
    category: "regular",
    image: ambajiTempleImg, 
    tagline: "One of the 51 Shakti Peethas", 
    openTime: "6:00 AM", 
    closeTime: "9:00 PM", 
    darshanTimings: "6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 200, 
    importance: "One of the 51 Shakti Peethas where Sati's heart fell. Important pilgrimage during Navratri.", 
    history: "Ancient temple mentioned in scriptures. Current temple rebuilt multiple times.", 
    architecture: "Traditional temple architecture with marble", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Visit during Bhadarvi Poonam fair", "Gabbar Hill nearby", "Ropeway available to Gabbar"], 
    rating: 4.4, 
    bestTimeToVisit: "Navratri, Bhadarvi Poonam", 
    nearbyAttractions: ["Gabbar Hill", "Kumbharia Jain Temple", "Mount Abu"], 
    facilities: ["VIP Darshan", "Ropeway", "Prasad Counter", "Accommodation"],
    googleMapsUrl: "https://maps.google.com/?q=Ambaji+Temple+Gujarat",
    food: ["Gujarati thali", "Temple prasad"],
    shopping: ["Religious items", "Marble items"],
    accommodation: ["Temple guest houses", "Hotels nearby"],
    placesNearby: [
      { name: "Gabbar Hill", distance: "3 km", type: "Hill" },
      { name: "Kumbharia Jain Temples", distance: "8 km", type: "Temple" },
      { name: "Mount Abu", distance: "45 km", type: "Hill Station" }
    ]
  },

  { 
    id: "dakor-temple", 
    name: "Ranchhodraiji Temple", 
    location: "Dakor, Kheda", 
    region: "gujarat", 
    type: "temple", 
    category: "regular",
    image: dakorTempleImg, 
    tagline: "Where Krishna came running for his devotee", 
    openTime: "5:00 AM", 
    closeTime: "10:00 PM", 
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 10:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: true, 
    vipPassPrice: 100, 
    importance: "Legend says Krishna ran (Ranchod) to Dakor for his devotee Bodana. Very popular pilgrimage.", 
    history: "Temple built in 17th century. The idol was brought from Dwarka by devotee Bodana.", 
    architecture: "Traditional temple architecture", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Full moon days are crowded", "Visit Gomti Talav", "Sharad Purnima is special"], 
    rating: 4.3, 
    bestTimeToVisit: "Year-round, Sharad Purnima", 
    nearbyAttractions: ["Gomti Talav", "Kabirvad", "Vadodara"], 
    facilities: ["VIP Darshan", "Prasad Counter", "Accommodation"],
    googleMapsUrl: "https://maps.google.com/?q=Ranchhodraiji+Temple+Dakor",
    food: ["Temple prasad", "Gujarati snacks"],
    shopping: ["Religious items", "Local products"],
    accommodation: ["Dharamshalas", "Hotels"],
    placesNearby: [
      { name: "Gomti Talav", distance: "0.5 km", type: "Lake" },
      { name: "Kabirvad", distance: "30 km", type: "Sacred Site" },
      { name: "Vadodara", distance: "75 km", type: "City" }
    ]
  },

  // GUJARAT FORTS (6)
  { 
    id: "rani-ki-vav", 
    name: "Rani ki Vav", 
    location: "Patan", 
    region: "gujarat", 
    type: "fort", 
    category: "must-visit",
    image: raniKiVavImg, 
    tagline: "UNESCO World Heritage - Queen's Stepwell masterpiece", 
    openTime: "8:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "UNESCO World Heritage Site. One of the finest stepwells in India, featured on new ₹100 note.", 
    history: "Built in 1063 CE by Queen Udayamati in memory of her husband King Bhimdev I of the Solanki dynasty.", 
    architecture: "Maru-Gurjara architectural style with 1,500 sculptures in 7 levels", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["Visit in morning for best lighting", "See all 7 levels", "Featured on ₹100 note"], 
    rating: 4.7, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Modhera Sun Temple", "Patan Patola", "Sahastralinga Talav"], 
    facilities: ["Guides", "Parking", "Cafeteria"],
    googleMapsUrl: "https://maps.google.com/?q=Rani+ki+Vav+Patan",
    food: ["Patan Gujarati food", "Local eateries"],
    shopping: ["Patola sarees", "Handicrafts"],
    accommodation: ["Patan hotels", "Mehsana hotels"],
    placesNearby: [
      { name: "Modhera Sun Temple", distance: "30 km", type: "Temple" },
      { name: "Patan Patola House", distance: "3 km", type: "Heritage" },
      { name: "Sahastralinga Talav", distance: "5 km", type: "Lake" }
    ]
  },

  { 
    id: "laxmi-vilas-palace", 
    name: "Laxmi Vilas Palace", 
    location: "Vadodara", 
    region: "gujarat", 
    type: "fort", 
    category: "must-visit",
    image: laxmiVilasPalaceImg, 
    tagline: "Largest private residence in the world", 
    openTime: "10:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 250, foreign: 500 }, 
    vipPassAvailable: false, 
    importance: "Built by Gaekwad royal family. Four times the size of Buckingham Palace.", 
    history: "Built in 1890 by Maharaja Sayajirao Gaekwad III. Still the residence of the royal family.", 
    architecture: "Indo-Saracenic architecture with Italian marble and Belgian stained glass", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹4000+" }, 
    tips: ["Golf course and zoo in premises", "Museum is excellent", "Evening walk in gardens"], 
    rating: 4.6, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Sayaji Baug", "EME Temple", "Champaner-Pavagadh"], 
    facilities: ["Museum", "Golf Course", "Zoo", "Gardens"],
    googleMapsUrl: "https://maps.google.com/?q=Laxmi+Vilas+Palace+Vadodara",
    food: ["Gujarati thali", "Sev Usal", "Vadodara street food"],
    shopping: ["Aurobindo Ashram products", "Handicrafts"],
    accommodation: ["Welcomhotel", "Grand Mercure", "Various hotels"],
    placesNearby: [
      { name: "Sayaji Baug", distance: "3 km", type: "Garden" },
      { name: "EME Temple", distance: "5 km", type: "Temple" },
      { name: "Champaner-Pavagadh", distance: "47 km", type: "Heritage" }
    ]
  },

  { 
    id: "champaner-pavagadh", 
    name: "Champaner-Pavagadh", 
    location: "Panchmahal", 
    region: "gujarat", 
    type: "fort", 
    category: "must-visit",
    image: champanerPavagadhImg, 
    tagline: "UNESCO World Heritage - Hill fortress city", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "UNESCO World Heritage Site. Only complete Islamic pre-Mughal city. Kalika Mata Temple on top.", 
    history: "Champaner was Gujarat Sultanate capital until 1535. Pavagadh hill has ancient Kalika Mata temple.", 
    architecture: "Islamic, Hindu, and Jain architecture coexisting", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Ropeway to Pavagadh top", "See Jami Masjid", "Full day required", "Carry water"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March, Navratri", 
    nearbyAttractions: ["Vadodara", "Jambughoda Wildlife Sanctuary", "Dahod"], 
    facilities: ["Ropeway", "Guides", "Parking"],
    googleMapsUrl: "https://maps.google.com/?q=Champaner+Pavagadh+Gujarat",
    food: ["Dal Bafla", "Gujarati food", "Local eateries"],
    shopping: ["Tribal handicrafts", "Religious items"],
    accommodation: ["Hotels near site", "Vadodara hotels"],
    placesNearby: [
      { name: "Kalika Mata Temple", distance: "0 km", type: "Temple" },
      { name: "Jami Masjid", distance: "1 km", type: "Mosque" },
      { name: "Vadodara", distance: "47 km", type: "City" },
      { name: "Jambughoda Sanctuary", distance: "20 km", type: "Wildlife" }
    ]
  },

  { 
    id: "uparkot-fort", 
    name: "Uparkot Fort", 
    location: "Junagadh", 
    region: "gujarat", 
    type: "fort", 
    category: "hidden-gem",
    image: uparkotFortImg, 
    tagline: "2,300-year-old fort - Besieged 16 times", 
    openTime: "8:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 200 }, 
    vipPassAvailable: false, 
    importance: "Built during Mauryan period. Has Buddhist caves and stepwells. Resisted 16 sieges.", 
    history: "Founded by Chandragupta Maurya in 319 BCE. Various dynasties ruled - Mauryas, Chudasamas, Gujarat Sultans.", 
    architecture: "Multi-period fortification with Buddhist caves and stepwells", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["See Navghan Kuwo (52m deep stepwell)", "Adi Kadi Vav is beautiful", "Combine with Girnar climb"], 
    rating: 4.3, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Girnar", "Ashoka's Rock Edicts", "Gir National Park"], 
    facilities: ["Guides", "Parking"],
    googleMapsUrl: "https://maps.google.com/?q=Uparkot+Fort+Junagadh",
    food: ["Junagadhi cuisine", "Kesar mango season"],
    shopping: ["Kesar mangoes", "Local items"],
    accommodation: ["Junagadh hotels"],
    placesNearby: [
      { name: "Girnar Hill", distance: "5 km", type: "Pilgrimage" },
      { name: "Ashoka's Edicts", distance: "1 km", type: "Historical" },
      { name: "Gir National Park", distance: "60 km", type: "Wildlife" },
      { name: "Mahabat Maqbara", distance: "2 km", type: "Monument" }
    ]
  },

  { 
    id: "diu-fort", 
    name: "Diu Fort", 
    location: "Diu", 
    region: "gujarat", 
    type: "fort", 
    category: "hidden-gem",
    image: diuFortImg, 
    tagline: "Portuguese sea fortress with lighthouse", 
    openTime: "7:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Built by Portuguese in 16th century. One of the best preserved Portuguese forts in Asia.", 
    history: "Built in 1535 when Portuguese captured Diu. Used cannons from ships for defense.", 
    architecture: "Portuguese colonial fortress architecture with bastions and lighthouse", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Sunset from lighthouse", "See the old cannons", "Combine with Diu beaches"], 
    rating: 4.2, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Nagoa Beach", "St. Paul's Church", "Naida Caves"], 
    facilities: ["Lighthouse", "Parking"],
    googleMapsUrl: "https://maps.google.com/?q=Diu+Fort",
    food: ["Seafood", "Portuguese-influenced cuisine"],
    shopping: ["Seashells", "Liquor (Diu special)"],
    accommodation: ["Beach resorts", "Budget hotels"],
    placesNearby: [
      { name: "Nagoa Beach", distance: "7 km", type: "Beach" },
      { name: "St. Paul's Church", distance: "1 km", type: "Church" },
      { name: "Naida Caves", distance: "3 km", type: "Caves" },
      { name: "Gangeshwar Temple", distance: "3 km", type: "Temple" }
    ]
  },

  { 
    id: "aina-mahal-bhuj", 
    name: "Aina Mahal", 
    location: "Bhuj", 
    region: "gujarat", 
    type: "fort", 
    category: "hidden-gem",
    image: ainaMahalBhujImg, 
    tagline: "Hall of Mirrors - Kutchi royal palace", 
    openTime: "9:00 AM", 
    closeTime: "12:00 PM, 3:00 PM - 6:00 PM", 
    entryFee: { indian: 30, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "18th century palace known for its Hall of Mirrors. Showcases Kutchi craftsmanship.", 
    history: "Built by Rao Lakhpatji in 18th century. Ram Singh Malam created the intricate mirror work.", 
    architecture: "European-Kutchi fusion with glass and mirror work", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["See the Hall of Mirrors", "Visit Prag Mahal next door", "Photography limited"], 
    rating: 4.0, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Prag Mahal", "White Desert (Rann of Kutch)", "Kutch Museum"], 
    facilities: ["Museum", "Parking"],
    googleMapsUrl: "https://maps.google.com/?q=Aina+Mahal+Bhuj",
    food: ["Kutchi dabeli", "Kutchi thali", "Local snacks"],
    shopping: ["Kutchi embroidery", "Bandhani", "Silver jewelry"],
    accommodation: ["Bhuj hotels", "Rann resorts"],
    placesNearby: [
      { name: "Prag Mahal", distance: "0.1 km", type: "Palace" },
      { name: "Kutch Museum", distance: "1 km", type: "Museum" },
      { name: "White Desert", distance: "80 km", type: "Desert" },
      { name: "Mandvi Beach", distance: "56 km", type: "Beach" }
    ]
  },

  // ==================== TRUE HIDDEN GEMS - UNIQUE ARCHAEOLOGICAL & HISTORICAL SITES ====================
  
  // NAGPUR REGION - True Hidden Gems
  { 
    id: "vakataka-caves-ghatotkacha", 
    name: "Ghatotkacha Vakataka Caves", 
    location: "Wardha, Vidarbha", 
    region: "nagpur", 
    type: "temple", 
    category: "hidden-gem",
    image: vakatakaCavesImg, 
    tagline: "Ancient Vakataka dynasty rock-cut caves - Predecessors to Ajanta", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "These 4th-5th century rock-cut caves were created by the Vakataka dynasty, the same patrons who funded the later phase of Ajanta Caves. Archaeological treasure virtually unknown to tourists.", 
    history: "The Vakatakas (250-500 CE) ruled from Vidarbha and were master patrons of art. Their daughter-in-law married into the Gupta dynasty. These caves predate their famous Ajanta patronage.", 
    architecture: "Early Vakataka rock-cut architecture with Buddhist viharas and chaityas carved into hillside", 
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, 
    tips: ["Hire local guide from Wardha", "Virtually no tourists - pristine experience", "Combine with Sevagram Ashram visit", "Carry food and water"], 
    rating: 4.2, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Sevagram Ashram", "Paunar Ashram", "Wardha town"], 
    facilities: ["Parking at base", "Basic paths"],
    googleMapsUrl: "https://maps.google.com/?q=Ghatotkacha+Caves+Wardha",
    food: ["Pack your own", "Wardha town restaurants", "Sevagram Ashram meals"],
    shopping: ["Khadi products from Sevagram", "Organic items", "Gandhi memorabilia"],
    accommodation: ["Sevagram Ashram guest house", "Wardha hotels"],
    placesNearby: [
      { name: "Sevagram Ashram", distance: "15 km", type: "Ashram" },
      { name: "Paunar Ashram", distance: "8 km", type: "Ashram" },
      { name: "Wardha City", distance: "12 km", type: "City" }
    ]
  },

  { 
    id: "mansar-excavations", 
    name: "Mansar Archaeological Site", 
    location: "Mansar, Ramtek", 
    region: "nagpur", 
    type: "temple", 
    category: "hidden-gem",
    image: mansarRuinsImg, 
    tagline: "Vakataka palace ruins and Pravara Sena's royal complex", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 100 }, 
    vipPassAvailable: false, 
    importance: "Active archaeological excavation revealing Vakataka king Pravara Sena II's palace complex. Terracotta seals, sculptures, and structural remains of 5th century royal residence.", 
    history: "Excavations by ASI have uncovered the Pravareshwar Shiva Temple and royal palace. Pravara Sena II was the poet-king who wrote Setubandha in Prakrit.", 
    architecture: "Vakataka-era brick and stone structures with temple ruins", 
    averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹1500+" }, 
    tips: ["Visit the on-site museum", "Combine with Ramtek Temple", "Early morning for best light", "Ongoing excavations - parts may be restricted"], 
    rating: 4.0, 
    bestTimeToVisit: "October to February", 
    nearbyAttractions: ["Ramtek Temple", "Khindsi Lake", "Nagardhan Fort"], 
    facilities: ["Small museum", "Parking", "Guides available"],
    googleMapsUrl: "https://maps.google.com/?q=Mansar+Archaeological+Site+Ramtek",
    food: ["Pack snacks", "Ramtek town eateries"],
    shopping: ["Archaeological replicas", "Local crafts"],
    accommodation: ["MTDC Ramtek", "Hotels in Nagpur"],
    placesNearby: [
      { name: "Ramtek Temple", distance: "5 km", type: "Temple" },
      { name: "Khindsi Lake", distance: "8 km", type: "Lake" },
      { name: "Nagardhan Fort", distance: "6 km", type: "Fort" }
    ]
  },

  // MAHARASHTRA - True Hidden Gems
  { 
    id: "markanda-temple-ruins", 
    name: "Markanda Temple Complex", 
    location: "Gadchiroli, Vidarbha", 
    region: "maharashtra", 
    type: "temple", 
    category: "hidden-gem",
    image: markandaTempleImg, 
    tagline: "8th century Hemadpanthi ruins in remote Vidarbha forests", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "An 8th century temple complex hidden deep in Gadchiroli forests. Features remarkably preserved Hemadpanthi stone carvings that rival Khajuraho in intricacy.", 
    history: "Built by the Nagavanshi rulers, later patronized by the Gond kings. The temple survived due to its remote forest location.", 
    architecture: "Hemadpanthi style with intricate erotic sculptures and mythological panels", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1500-2500", premium: "₹4000+" }, 
    tips: ["Check local security situation before visiting", "Hire local guide mandatory", "4WD vehicle recommended", "Truly off-the-beaten-path"], 
    rating: 4.3, 
    bestTimeToVisit: "November to February", 
    nearbyAttractions: ["Chaprala Wildlife Sanctuary", "Gadchiroli forests", "Tribal villages"], 
    facilities: ["Very basic", "Local guides"],
    googleMapsUrl: "https://maps.google.com/?q=Markanda+Temple+Gadchiroli",
    food: ["Pack your own food", "Simple tribal cuisine available"],
    shopping: ["Tribal handicrafts", "Bamboo products", "Forest honey"],
    accommodation: ["Forest rest houses", "Basic lodges in Gadchiroli"],
    placesNearby: [
      { name: "Chaprala Wildlife Sanctuary", distance: "40 km", type: "Wildlife" },
      { name: "Gadchiroli Town", distance: "35 km", type: "Town" }
    ]
  },

  { 
    id: "anjaneri-caves", 
    name: "Anjaneri Buddhist Caves", 
    location: "Nashik, Maharashtra", 
    region: "maharashtra", 
    type: "temple", 
    category: "hidden-gem",
    image: anjaneriCavesImg, 
    tagline: "Ancient Buddhist caves on Hanuman's legendary birthplace hill", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Hidden Buddhist caves on Anjaneri hill, believed to be Lord Hanuman's birthplace. 2nd-3rd century rock-cut monastery cells with panoramic Nashik valley views.", 
    history: "These caves were carved by Buddhist monks during the Satavahana period. The hill is also sacred in Hindu tradition as Anjani Mata's abode.", 
    architecture: "Hinayana Buddhist rock-cut cells (viharas) with simple stone beds and water cisterns", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["Moderate trek required", "Sunrise trek highly recommended", "Combine with Trimbakeshwar", "Carry 2L water minimum"], 
    rating: 4.1, 
    bestTimeToVisit: "October to February, Monsoon for greenery", 
    nearbyAttractions: ["Trimbakeshwar Temple", "Brahmagiri Hill", "Pandavleni Caves"], 
    facilities: ["Trek route", "No facilities at caves"],
    googleMapsUrl: "https://maps.google.com/?q=Anjaneri+Hill+Nashik",
    food: ["Pack your own", "Trimbakeshwar town food"],
    shopping: ["Religious items at Trimbakeshwar", "Local produce"],
    accommodation: ["Trimbakeshwar hotels", "Nashik city hotels"],
    placesNearby: [
      { name: "Trimbakeshwar Temple", distance: "8 km", type: "Temple" },
      { name: "Brahmagiri Hill", distance: "10 km", type: "Trekking" },
      { name: "Pandavleni Caves", distance: "25 km", type: "Caves" }
    ]
  },

  // KARNATAKA - True Hidden Gems
  { 
    id: "aihole-temples", 
    name: "Aihole Temple Complex", 
    location: "Bagalkot, Karnataka", 
    region: "karnataka", 
    type: "temple", 
    category: "hidden-gem",
    image: aiholeTemplesImg, 
    tagline: "Cradle of Indian Temple Architecture - 125+ ancient temples", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "The laboratory where Indian temple architecture was invented. 125+ temples spanning 6th-12th century, each experimenting with different styles that became Dravidian architecture.", 
    history: "The Chalukyas of Badami (543-753 CE) used Aihole as their architectural workshop. Temples here show evolution from Buddhist caves to the grand Dravidian style.", 
    architecture: "Proto-Dravidian experimental styles - Durga Temple (apsidal), Lad Khan (flat roof), Meguti (Jain)", 
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, 
    tips: ["Hire guide to understand architectural evolution", "Visit Durga Temple and Lad Khan Temple", "Less crowded than Badami/Pattadakal", "Full day needed"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Pattadakal", "Badami Caves", "Mahakuta"], 
    facilities: ["Guides", "Parking", "Small museum", "Cafeteria"],
    googleMapsUrl: "https://maps.google.com/?q=Aihole+Temples+Karnataka",
    food: ["Local North Karnataka cuisine", "Jolada rotti", "Simple eateries"],
    shopping: ["Stone carvings", "Local handicrafts", "Temple souvenirs"],
    accommodation: ["Badami hotels", "KSTDC properties"],
    placesNearby: [
      { name: "Pattadakal", distance: "10 km", type: "UNESCO Site" },
      { name: "Badami Caves", distance: "35 km", type: "Caves" },
      { name: "Mahakuta Temple", distance: "20 km", type: "Temple" },
      { name: "Banashankari Temple", distance: "25 km", type: "Temple" }
    ]
  },

  { 
    id: "yana-rocks", 
    name: "Yana Caves & Rock Formations", 
    location: "Uttara Kannada, Karnataka", 
    region: "karnataka", 
    type: "temple", 
    category: "hidden-gem",
    image: yanaCavesImg, 
    tagline: "Mysterious black crystalline rock formations with ancient cave temple", 
    openTime: "6:00 AM", 
    closeTime: "6:00 PM", 
    entryFee: { indian: 0, foreign: 0 }, 
    vipPassAvailable: false, 
    importance: "Unique black limestone (karst) formations rising 120m from dense forest. Contains Bhairaveshwara and Mohini rock peaks with a Shiva cave temple.", 
    history: "Ancient pilgrimage site with Swayambhu Shiva lingam in natural cave. The unique geology creates otherworldly landscape unlike anywhere in India.", 
    architecture: "Natural rock formations with cave temple", 
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4000+" }, 
    tips: ["2km forest trek from parking", "Monsoon is spectacular but slippery", "Photography paradise", "Carry rain gear in monsoon"], 
    rating: 4.4, 
    bestTimeToVisit: "October to March, Monsoon for dramatic views", 
    nearbyAttractions: ["Vibhooti Falls", "Sirsi", "Gokarna"], 
    facilities: ["Parking", "Basic trek path", "Forest department guides"],
    googleMapsUrl: "https://maps.google.com/?q=Yana+Caves+Karnataka",
    food: ["Pack snacks", "Sirsi town restaurants", "Forest cuisine"],
    shopping: ["Forest products", "Spices", "Honey"],
    accommodation: ["Sirsi hotels", "Jungle lodges", "Gokarna stays"],
    placesNearby: [
      { name: "Vibhooti Falls", distance: "8 km", type: "Waterfall" },
      { name: "Sirsi", distance: "30 km", type: "Town" },
      { name: "Gokarna", distance: "70 km", type: "Temple Town" }
    ]
  },

  // TAMIL NADU - True Hidden Gems
  { 
    id: "adichanallur-excavation", 
    name: "Adichanallur Iron Age Site", 
    location: "Thoothukudi, Tamil Nadu", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "hidden-gem",
    image: adichanallurSiteImg, 
    tagline: "3,000 year old Iron Age burial site - India's earliest civilization", 
    openTime: "9:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 25, foreign: 200 }, 
    vipPassAvailable: false, 
    importance: "One of India's most significant archaeological discoveries. 3,000-year-old Iron Age burial urns containing human remains, bronze items, and early Tamil Brahmi inscriptions.", 
    history: "Discovered in 1876, systematic excavations revealed burial urns from 1000-500 BCE. Proves advanced civilization existed in Tamil Nadu contemporary to Vedic period.", 
    architecture: "Archaeological excavation site with burial urns and artifacts", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Visit the on-site museum", "Hire archaeological guide", "Combine with Korkai ancient port", "Photography permitted"], 
    rating: 4.0, 
    bestTimeToVisit: "November to March", 
    nearbyAttractions: ["Korkai ancient port", "Tiruchendur Temple", "Thoothukudi town"], 
    facilities: ["Museum", "Parking", "Guides available"],
    googleMapsUrl: "https://maps.google.com/?q=Adichanallur+Archaeological+Site",
    food: ["Thoothukudi fish curry", "South Indian meals"],
    shopping: ["Salt", "Palmyra products", "Local handicrafts"],
    accommodation: ["Thoothukudi hotels", "Tiruchendur stays"],
    placesNearby: [
      { name: "Tiruchendur Murugan Temple", distance: "40 km", type: "Temple" },
      { name: "Korkai Ancient Port", distance: "15 km", type: "Archaeological" },
      { name: "Thoothukudi", distance: "20 km", type: "City" }
    ]
  },

  { 
    id: "sittanavasal-cave", 
    name: "Sittanavasal Jain Cave Paintings", 
    location: "Pudukkottai, Tamil Nadu", 
    region: "tamil-nadu", 
    type: "temple", 
    category: "hidden-gem",
    image: sittanavasalCavesImg, 
    tagline: "Ajanta of the South - 7th century Jain cave with paintings", 
    openTime: "9:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 25, foreign: 200 }, 
    vipPassAvailable: false, 
    importance: "The only surviving example of Jain paintings in Tamil Nadu. 7th century Pandya-era frescoes depicting Samavasarana (Jain cosmic assembly) with lotus pond and wildlife.", 
    history: "Created during the Pandya period (7th century CE), these caves housed Jain monks. The paintings survived due to the cave's dry micro-climate.", 
    architecture: "Rock-cut Jain cave with ancient frescoes and inscriptions", 
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, 
    tips: ["Photography may be restricted", "See the faded but beautiful lotus pool painting", "Combine with Pudukkottai museums", "ASI protected site"], 
    rating: 4.2, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Pudukkottai Museum", "Tirumayam Fort", "Avudaiyarkoil"], 
    facilities: ["Parking", "Basic facilities"],
    googleMapsUrl: "https://maps.google.com/?q=Sittanavasal+Cave+Paintings",
    food: ["Pudukkottai local food", "South Indian meals"],
    shopping: ["Terracotta items", "Local crafts"],
    accommodation: ["Pudukkottai hotels", "Trichy hotels"],
    placesNearby: [
      { name: "Pudukkottai Museum", distance: "16 km", type: "Museum" },
      { name: "Tirumayam Fort", distance: "25 km", type: "Fort" },
      { name: "Trichy", distance: "50 km", type: "City" }
    ]
  },

  // GUJARAT - True Hidden Gems
  { 
    id: "lothal-harappan-site", 
    name: "Lothal Harappan City", 
    location: "Ahmedabad, Gujarat", 
    region: "gujarat", 
    type: "fort", 
    category: "hidden-gem",
    image: lothalRuinsImg, 
    tagline: "World's oldest dock - 4,500 year old Indus Valley port city", 
    openTime: "8:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 25, foreign: 300 }, 
    vipPassAvailable: false, 
    importance: "The world's earliest known dock (2400 BCE). A major Harappan trading port with planned streets, drainage, and bead-making workshops. India's most accessible Indus Valley site.", 
    history: "Thriving port city from 2400-1900 BCE trading with Mesopotamia and Egypt. Excavated 1955-1960 revealing 5,000 year old urban planning and maritime technology.", 
    architecture: "Harappan/Indus Valley urban planning with brick structures, dock, and warehouse", 
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, 
    tips: ["Visit the excellent ASI museum first", "See the ancient dock structure", "Combine with Ahmedabad heritage", "Early morning best"], 
    rating: 4.5, 
    bestTimeToVisit: "October to March", 
    nearbyAttractions: ["Ahmedabad", "Nal Sarovar Bird Sanctuary", "Modhera"], 
    facilities: ["Museum", "Parking", "Guides", "Cafeteria"],
    googleMapsUrl: "https://maps.google.com/?q=Lothal+Archaeological+Site",
    food: ["Pack snacks", "Ahmedabad food", "Highway dhabas"],
    shopping: ["Replica artifacts", "Local crafts"],
    accommodation: ["Ahmedabad hotels (85 km)", "Highway motels"],
    placesNearby: [
      { name: "Ahmedabad", distance: "85 km", type: "City" },
      { name: "Nal Sarovar", distance: "70 km", type: "Bird Sanctuary" },
      { name: "Bhurkhi", distance: "6 km", type: "Village" }
    ]
  },

  { 
    id: "dholavira-harappan", 
    name: "Dholavira - UNESCO Harappan City", 
    location: "Kutch, Gujarat", 
    region: "gujarat", 
    type: "fort", 
    category: "hidden-gem",
    image: dholaviraRuinsImg, 
    tagline: "UNESCO World Heritage - 5,000 year old planned city with world's first signboard", 
    openTime: "8:00 AM", 
    closeTime: "5:00 PM", 
    entryFee: { indian: 40, foreign: 600 }, 
    vipPassAvailable: false, 
    importance: "UNESCO World Heritage Site (2021). Fifth largest Harappan city featuring world's earliest signboard (10 symbols), sophisticated water harvesting, and unique fortification.", 
    history: "Flourished 3000-1500 BCE. Unique among Harappan sites for its three-part city division - citadel, middle town, and lower town. Abandoned possibly due to climate change.", 
    architecture: "Harappan urban planning with stone walls, reservoirs, and ceremonial ground", 
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, 
    tips: ["Combine with Rann of Kutch visit", "Stay overnight for White Rann experience", "Carry water and sun protection", "New museum opened 2024"], 
    rating: 4.6, 
    bestTimeToVisit: "November to February", 
    nearbyAttractions: ["Rann of Kutch", "Fossil Park Khadir", "Bhuj"], 
    facilities: ["Modern museum", "Parking", "Guides", "Restrooms"],
    googleMapsUrl: "https://maps.google.com/?q=Dholavira+Archaeological+Site",
    food: ["Pack food", "Resort dining", "Kutchi cuisine at Bhuj"],
    shopping: ["Kutchi embroidery", "Rann Utsav items", "Fossil replicas"],
    accommodation: ["Dholavira tented resorts", "Bhuj hotels", "Rann resorts"],
    placesNearby: [
      { name: "White Rann", distance: "30 km", type: "Desert" },
      { name: "Fossil Park", distance: "10 km", type: "Geological" },
      { name: "Bhuj", distance: "250 km", type: "City" }
    ]
  },
];

// Helper function to check if a site is currently open
export const isSiteOpen = (openTime: string, closeTime: string): boolean => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  const parseTime = (time: string): number => {
    const [hourStr, minutePart] = time.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minutePart.split(' ')[0]);
    const isPM = time.toLowerCase().includes('pm');
    const isAM = time.toLowerCase().includes('am');
    
    let adjustedHour = hour;
    if (isPM && hour !== 12) adjustedHour += 12;
    if (isAM && hour === 12) adjustedHour = 0;
    
    return adjustedHour * 60 + minute;
  };

  const openTimeInMinutes = parseTime(openTime);
  const closeTimeInMinutes = parseTime(closeTime);

  return currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes;
};

// Helper function to get sites by region
export const getSitesByRegion = (regionId: string): HeritageSite[] => {
  return heritageSitesData.filter(site => site.region === regionId);
};

// Helper function to get site by ID
export const getSiteById = (siteId: string): HeritageSite | undefined => {
  return heritageSitesData.find(site => site.id === siteId);
};

// Helper function to get sites by category
export const getSitesByCategory = (category: SiteCategory): HeritageSite[] => {
  return heritageSitesData.filter(site => site.category === category);
};

// Helper function to get region by ID
export const getRegionById = (regionId: string): Region | undefined => {
  return regions.find(region => region.id === regionId);
};
