// Heritage Sites Data for Indian Historical Places

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

export type SiteType = "temple" | "fort";

export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  region: string;
  type: SiteType;
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
}

export interface Region {
  id: string;
  name: string;
  description: string;
}

export const regions: Region[] = [
  { id: "nagpur", name: "Nagpur", description: "Deep Maratha and British colonial history with ancient temples and forts" },
  { id: "maharashtra", name: "Maharashtra", description: "Land of Shivaji Maharaj with magnificent forts and sacred Jyotirlingas" },
  { id: "karnataka", name: "Karnataka", description: "Rich Vijayanagara, Chalukyan and Hoysala architecture heritage" },
  { id: "tamil-nadu", name: "Tamil Nadu", description: "Dravidian temples and ancient forts spanning centuries of history" },
  { id: "gujarat", name: "Gujarat", description: "Sacred pilgrimage sites and historic trading port heritage" },
];

export const heritageSitesData: HeritageSite[] = [
  // NAGPUR
  { id: "sitabuldi-fort", name: "Sitabuldi Fort", location: "Sitabuldi, Nagpur", region: "nagpur", type: "fort", image: indianFortImg, tagline: "Historic British-era fort from the Battle of Sitabuldi", openTime: "10:00 AM", closeTime: "5:00 PM", entryFee: { indian: 25, foreign: 100, children: 10 }, vipPassAvailable: false, importance: "Built by the British in 1817 after the Battle of Sitabuldi, this fort stands as a testament to the Anglo-Maratha wars.", history: "The fort was constructed following the Third Anglo-Maratha War in 1817.", architecture: "British colonial military architecture", averageExpenses: { budget: "₹200-300", mid: "₹500-700", premium: "₹1000+" }, tips: ["Best visited in morning", "ID proof required", "Photography may be restricted"], rating: 3.8, bestTimeToVisit: "October to March", nearbyAttractions: ["Zero Mile Stone", "Nagpur Museum"], facilities: ["Parking", "Security"] },
  
  { id: "ramtek-fort-temple", name: "Ramtek Fort Temple", location: "Ramtek, Nagpur", region: "nagpur", type: "temple", image: ramtekRamMandirImg, tagline: "Ancient fort-temple complex associated with Lord Rama's exile", openTime: "5:00 AM", closeTime: "9:00 PM", darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 200, importance: "This sacred hilltop temple is believed to be where Lord Rama rested during his 14-year exile.", history: "Dating back to ancient times with references in the Ramayana.", architecture: "Blend of Nagara and Hemadpanthi styles", averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, tips: ["Climb is steep", "Visit during Rama Navami", "Evening aarti is beautiful"], rating: 4.5, bestTimeToVisit: "October to March", nearbyAttractions: ["Khindsi Lake", "Nagardhan Fort"], facilities: ["Parking", "Shoe Counter", "Prasad Counter"] },
  
  { id: "tekdi-ganesh-temple", name: "Shri Ganesh Mandir Tekdi", location: "Sitabuldi, Nagpur", region: "nagpur", type: "temple", image: tekdiGaneshImg, tagline: "250-year-old Ganesha temple on a hillock", openTime: "5:00 AM", closeTime: "10:00 PM", darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 10:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 100, importance: "One of the most revered Ganesha temples in central India.", history: "Built around 1770 during the Bhonsle reign.", architecture: "Traditional Marathi temple architecture", averageExpenses: { budget: "₹100-200", mid: "₹300-500", premium: "₹800+" }, tips: ["Visit early morning", "Wednesday is very crowded", "Prasad modak is famous"], rating: 4.7, bestTimeToVisit: "Year-round", nearbyAttractions: ["Sitabuldi Fort", "Zero Mile Stone"], facilities: ["Parking", "Prasad Counter", "Shoe Counter"] },
  
  { id: "deekshabhoomi", name: "Deekshabhoomi", location: "Nagpur Central", region: "nagpur", type: "temple", image: deekshabhoomiImg, tagline: "Sacred site of Dr. Ambedkar's historic Buddhist conversion", openTime: "6:00 AM", closeTime: "9:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "Where Dr. B.R. Ambedkar converted to Buddhism with 380,000 followers in 1956.", history: "The largest religious conversion in modern history took place here.", architecture: "Grand white stupa inspired by Sanchi Stupa", averageExpenses: { budget: "₹200-400", mid: "₹600-900", premium: "₹1500+" }, tips: ["Visit during Dhammachakra Pravartan Din", "Museum inside is informative"], rating: 4.6, bestTimeToVisit: "October to March", nearbyAttractions: ["Dragon Palace", "Nagpur Museum"], facilities: ["Parking", "Museum", "Library"] },

  { id: "koradi-mata", name: "Koradi Mata Temple", location: "Koradi, Nagpur", region: "nagpur", type: "temple", image: koradiMataImg, tagline: "Popular Shakti Peeth with powerful goddess energy", openTime: "5:00 AM", closeTime: "9:30 PM", darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:30 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 150, importance: "One of the most popular Shakti Peeths in Vidarbha region.", history: "Ancient temple dedicated to Goddess Mahalakshmi.", architecture: "Traditional temple architecture with modern additions", averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹1500+" }, tips: ["Visit during Navratri", "Early morning is best", "Prasad is famous"], rating: 4.4, bestTimeToVisit: "October to March", nearbyAttractions: ["Koradi Fort", "Waki Woods"], facilities: ["Parking", "Prasad Counter", "Restrooms"] },

  // MAHARASHTRA
  { id: "raigad-fort", name: "Raigad Fort", location: "Raigad District", region: "maharashtra", type: "fort", image: raigadFortImg, tagline: "Capital of the Maratha Empire - Shivaji's coronation site", openTime: "9:00 AM", closeTime: "6:00 PM", entryFee: { indian: 50, foreign: 200, children: 25 }, vipPassAvailable: true, vipPassPrice: 500, importance: "The capital where Chhatrapati Shivaji Maharaj was crowned in 1674.", history: "Originally known as Rairi, transformed into an impregnable capital.", architecture: "Maratha military architecture with massive walls", averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, tips: ["Take the ropeway (₹400)", "Carry water and snacks", "Visit Shivaji's Samadhi"], rating: 4.8, bestTimeToVisit: "October to March", nearbyAttractions: ["Lingana Fort", "Kashid Beach"], facilities: ["Ropeway", "Parking", "Restaurant"] },
  
  { id: "shivneri-fort", name: "Shivneri Fort", location: "Junnar, Pune", region: "maharashtra", type: "fort", image: indianFortImg, tagline: "Birthplace of Chhatrapati Shivaji Maharaj", openTime: "6:00 AM", closeTime: "6:00 PM", entryFee: { indian: 25, foreign: 100 }, vipPassAvailable: false, importance: "The birthplace of Shivaji Maharaj on February 19, 1630.", history: "Shivaji was born here, his mother Jijabai stayed during his childhood.", architecture: "Hill fort with Buddhist caves and seven gates", averageExpenses: { budget: "₹500-800", mid: "₹1500-2000", premium: "₹3500+" }, tips: ["Start early - climbing takes 1-2 hours", "Visit Shivaji's birth chamber", "Carry plenty of water"], rating: 4.7, bestTimeToVisit: "July to March", nearbyAttractions: ["Lenyadri Caves", "Ozar Ganpati"], facilities: ["Parking", "Local Guides"] },
  
  { id: "sinhagad-fort", name: "Sinhagad Fort", location: "Pune", region: "maharashtra", type: "fort", image: indianFortImg, tagline: "Lion's Fort - Famous for Tanaji Malusare's sacrifice", openTime: "5:00 AM", closeTime: "6:00 PM", entryFee: { indian: 20, foreign: 100 }, vipPassAvailable: false, importance: "Famous for the Battle of Sinhagad where Tanaji Malusare sacrificed his life.", history: "Originally called Kondana, won by Tanaji in 1670 in a night attack.", architecture: "Hill fort with two main gates", averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" }, tips: ["Try the famous Pitla Bhakri", "Trek route is popular", "Sunset views are spectacular"], rating: 4.6, bestTimeToVisit: "Monsoon and Winter", nearbyAttractions: ["Khadakwasla Dam", "Torna Fort"], facilities: ["Parking", "Food Stalls", "Restrooms"] },
  
  { id: "trimbakeshwar-temple", name: "Trimbakeshwar Temple", location: "Nashik", region: "maharashtra", type: "temple", image: trimbakeshwarImg, tagline: "One of the 12 sacred Jyotirlingas", openTime: "5:30 AM", closeTime: "9:00 PM", darshanTimings: "5:30 AM - 12:00 PM, 5:00 PM - 9:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 500, importance: "One of the 12 Jyotirlingas representing Brahma, Vishnu, and Maheshwara.", history: "Rebuilt by Peshwa Balaji Baji Rao in the 18th century.", architecture: "Black stone Hemadpanthi architecture", averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" }, tips: ["Narayan Nagbali puja is famous", "Book VIP darshan online", "Visit early morning"], rating: 4.8, bestTimeToVisit: "Shravan month", nearbyAttractions: ["Brahmagiri Hill", "Anjneri Fort"], facilities: ["VIP Darshan", "Prasad Counter", "Cloakroom"] },
  
  { id: "shirdi-sai-temple", name: "Shirdi Sai Baba Temple", location: "Shirdi, Ahmednagar", region: "maharashtra", type: "temple", image: shirdiSaiBabaImg, tagline: "Samadhi Mandir of the beloved Sai Baba", openTime: "4:00 AM", closeTime: "11:00 PM", darshanTimings: "4:00 AM - 11:00 PM (Aarti: 5:15 AM, 12:00 PM, 6:00 PM, 10:00 PM)", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 200, importance: "One of the most visited pilgrimage sites in India.", history: "Sai Baba lived in Shirdi from 1858 until 1918.", architecture: "Modern temple complex with marble flooring", averageExpenses: { budget: "₹1000-1500", mid: "₹2500-4000", premium: "₹7000+" }, tips: ["Thursday is very crowded", "Book accommodation in advance", "Attend the 4 daily aartis"], rating: 4.9, bestTimeToVisit: "Year-round", nearbyAttractions: ["Dwarkamai", "Shani Shingnapur"], facilities: ["VIP Darshan", "Free Accommodation", "Prasadalaya"] },
  
  { id: "siddhivinayak-temple", name: "Siddhivinayak Temple", location: "Prabhadevi, Mumbai", region: "maharashtra", type: "temple", image: siddhivinayakImg, tagline: "Most visited Ganesh temple in Mumbai", openTime: "5:30 AM", closeTime: "10:00 PM", darshanTimings: "5:30 AM - 12:00 PM, 12:30 PM - 10:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 200, importance: "One of the richest and most visited temples in India.", history: "Built in 1801 by Laxman Vithu and Deubai Patil.", architecture: "Modern temple with gold-plated dome", averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹2000+" }, tips: ["Tuesday is main day", "Online VIP booking recommended", "Visit early morning"], rating: 4.7, bestTimeToVisit: "Year-round", nearbyAttractions: ["Mahalaxmi Temple", "Haji Ali Dargah"], facilities: ["VIP Darshan", "Online Booking", "Prasad Counter"] },
  
  { id: "mahalaxmi-kolhapur", name: "Mahalaxmi Temple", location: "Kolhapur", region: "maharashtra", type: "temple", image: mahalaxmiKolhapurImg, tagline: "One of the Shakti Peethas of Goddess Mahalaxmi", openTime: "4:00 AM", closeTime: "10:00 PM", darshanTimings: "4:00 AM - 10:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 300, importance: "One of the three and a half Shakti Peethas in India.", history: "Built by Chalukya rulers in the 7th century.", architecture: "Hemadpanthi style with Chalukyan pillars", averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" }, tips: ["Kirnotsav in Nov/Feb", "Visit during Navratri", "Try Kolhapuri food"], rating: 4.8, bestTimeToVisit: "October to March", nearbyAttractions: ["Panhala Fort", "Rankala Lake"], facilities: ["VIP Darshan", "Prasad Counter", "Cloakroom"] },

  // KARNATAKA
  { id: "vittala-temple-hampi", name: "Vittala Temple", location: "Hampi", region: "karnataka", type: "temple", image: hampiVittalaImg, tagline: "Famous for stone chariot and musical pillars", openTime: "8:30 AM", closeTime: "5:30 PM", entryFee: { indian: 40, foreign: 600 }, vipPassAvailable: false, importance: "The iconic stone chariot of Hampi is located here. Famous for 56 musical pillars.", history: "Built in the 15th century during the Vijayanagara Empire.", architecture: "Vijayanagara architecture with Dravidian influences", averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, tips: ["Stone Chariot is on the ₹50 note", "Visit during sunrise", "Hire a guide"], rating: 4.9, bestTimeToVisit: "October to February", nearbyAttractions: ["Virupaksha Temple", "Lotus Mahal"], facilities: ["Guides", "Parking", "Refreshments"] },
  
  { id: "virupaksha-temple", name: "Virupaksha Temple", location: "Hampi", region: "karnataka", type: "temple", image: hampiVittalaImg, tagline: "UNESCO World Heritage Site dedicated to Lord Shiva", openTime: "6:00 AM", closeTime: "9:00 PM", darshanTimings: "6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "One of the oldest functioning temples in India since the 7th century.", history: "Predates the Vijayanagara Empire, was their royal temple.", architecture: "Dravidian style with towering gopuram", averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, tips: ["Meet Lakshmi the elephant", "Attend evening aarti", "Explore the bazaar street"], rating: 4.8, bestTimeToVisit: "October to February", nearbyAttractions: ["Vittala Temple", "Hemakuta Hill"], facilities: ["Prasad Counter", "Shoe Counter", "Guides"] },
  
  { id: "badami-caves", name: "Badami Cave Temples", location: "Badami, Bagalkot", region: "karnataka", type: "temple", image: mysoreTempleImg, tagline: "6th-century rock-cut cave temples", openTime: "6:00 AM", closeTime: "6:00 PM", entryFee: { indian: 25, foreign: 300 }, vipPassAvailable: false, importance: "4 rock-cut caves representing Hindu, Buddhist, and Jain art.", history: "Created in the 6th century under Chalukyan kings.", architecture: "Early Chalukyan rock-cut architecture", averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, tips: ["Cave 3 has best carvings", "Morning light is best", "Combine with Aihole"], rating: 4.6, bestTimeToVisit: "October to March", nearbyAttractions: ["Aihole", "Pattadakal", "Agastya Lake"], facilities: ["Guides", "Parking", "Refreshments"] },
  
  { id: "murudeshwar-temple", name: "Murudeshwar Temple", location: "Bhatkal, Uttara Kannada", region: "karnataka", type: "temple", image: indianTempleImg, tagline: "World's second tallest Shiva statue", openTime: "6:00 AM", closeTime: "8:30 PM", darshanTimings: "6:00 AM - 1:00 PM, 3:00 PM - 8:30 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "Features the world's second-tallest Shiva statue (123 feet).", history: "Modern temple built in 2008 by R.N. Shetty.", architecture: "Modern temple with 20-story Raja Gopura", averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" }, tips: ["Take elevator for sea views", "Sunset views are spectacular", "Water sports available"], rating: 4.5, bestTimeToVisit: "October to May", nearbyAttractions: ["Netrani Island", "Murdeshwar Beach"], facilities: ["Parking", "Restaurants", "Gopuram Elevator"] },
  
  { id: "chitradurga-fort", name: "Chitradurga Fort", location: "Chitradurga", region: "karnataka", type: "fort", image: indianFortImg, tagline: "Stone Fortress - Famous for Onake Obavva's bravery", openTime: "6:00 AM", closeTime: "6:00 PM", entryFee: { indian: 25, foreign: 200 }, vipPassAvailable: false, importance: "Known as Kallina Kote, famous for Onake Obavva who defended it single-handedly.", history: "Built by Nayakas, expanded by Hyder Ali and Tipu Sultan.", architecture: "Massive stone walls with 19 gateways", averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, tips: ["Visit the hole where Obavva fought", "Carry water", "Morning is best"], rating: 4.5, bestTimeToVisit: "October to February", nearbyAttractions: ["Chandravalli Caves", "Jogimatti Hills"], facilities: ["Guides", "Parking", "Restrooms"] },
  
  { id: "gol-gumbaz", name: "Gol Gumbaz", location: "Bijapur (Vijayapura)", region: "karnataka", type: "fort", image: heritageSiteImg, tagline: "World's second largest dome - famous for whispering gallery", openTime: "6:00 AM", closeTime: "6:00 PM", entryFee: { indian: 25, foreign: 300 }, vipPassAvailable: false, importance: "The mausoleum of Mohammed Adil Shah has world's second-largest dome.", history: "Built in 1656, construction took 30 years.", architecture: "Indo-Islamic architecture with massive unsupported dome", averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, tips: ["Experience the whispering gallery", "Climb for panoramic views", "Visit early"], rating: 4.5, bestTimeToVisit: "October to March", nearbyAttractions: ["Ibrahim Rouza", "Jama Masjid Bijapur"], facilities: ["Guides", "Parking", "Restrooms", "Museum"] },

  // TAMIL NADU
  { id: "meenakshi-temple", name: "Meenakshi Amman Temple", location: "Madurai", region: "tamil-nadu", type: "temple", image: meenakshiTempleImg, tagline: "Historic marvel with 14 colorful gopurams", openTime: "5:00 AM", closeTime: "10:00 PM", darshanTimings: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 100, importance: "One of the largest temple complexes in India with 14 gopurams.", history: "Original temple built by Pandyas, rebuilt by Nayak rulers.", architecture: "Dravidian architecture with towering gopurams", averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" }, tips: ["Don't miss Hall of 1000 Pillars", "Evening ceremony is beautiful", "Golden Lotus Tank is serene"], rating: 4.9, bestTimeToVisit: "Year-round", nearbyAttractions: ["Thirumalai Nayakkar Palace", "Gandhi Museum"], facilities: ["VIP Darshan", "Guides", "Shoe Counter"] },
  
  { id: "brihadeeswarar-temple", name: "Brihadeeswarar Temple", location: "Thanjavur", region: "tamil-nadu", type: "temple", image: thanjavurTempleImg, tagline: "UNESCO World Heritage - The Big Temple", openTime: "6:00 AM", closeTime: "8:30 PM", darshanTimings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "UNESCO World Heritage Site with 66-meter tall vimana.", history: "Built by Raja Raja Chola I in 1010 CE.", architecture: "Chola architecture with the tallest vimana in South India", averageExpenses: { budget: "₹400-700", mid: "₹1200-2000", premium: "₹3500+" }, tips: ["Visit at noon for no shadow", "Nandi statue is massive", "Attend evening aarti"], rating: 4.9, bestTimeToVisit: "October to March", nearbyAttractions: ["Thanjavur Palace", "Saraswathi Mahal Library"], facilities: ["Guides", "Shoe Counter", "Parking"] },
  
  { id: "ramanathaswamy-temple", name: "Ramanathaswamy Temple", location: "Rameswaram", region: "tamil-nadu", type: "temple", image: indianTempleImg, tagline: "Sacred Jyotirlinga with the longest temple corridor", openTime: "5:00 AM", closeTime: "9:00 PM", darshanTimings: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 200, importance: "One of the Char Dham and 12 Jyotirlingas with longest corridor.", history: "Lord Rama built the original lingam here.", architecture: "Dravidian architecture with 1,212m corridor", averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, tips: ["Bathing in 22 wells is sacred", "Carry extra clothes", "Visit Pamban Bridge"], rating: 4.8, bestTimeToVisit: "October to April", nearbyAttractions: ["Pamban Bridge", "Dhanushkodi"], facilities: ["VIP Darshan", "Well Bathing", "Prasad Counter"] },
  
  { id: "shore-temple", name: "Shore Temple", location: "Mahabalipuram", region: "tamil-nadu", type: "temple", image: heritageSiteImg, tagline: "8th-century structural temple by the sea", openTime: "6:00 AM", closeTime: "6:00 PM", entryFee: { indian: 40, foreign: 600 }, vipPassAvailable: false, importance: "UNESCO World Heritage Site, one of oldest structural temples.", history: "Built by Pallava king Narasimhavarman II in 8th century.", architecture: "Dravidian architecture carved from granite", averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" }, tips: ["Best visited during sunrise/sunset", "Combine with Five Rathas", "Beach behind is peaceful"], rating: 4.6, bestTimeToVisit: "October to March", nearbyAttractions: ["Pancha Rathas", "Arjuna's Penance"], facilities: ["Guides", "Parking", "Restrooms"] },
  
  { id: "gingee-fort", name: "Gingee Fort", location: "Villupuram", region: "tamil-nadu", type: "fort", image: indianFortImg, tagline: "Troy of the East - One of the most impregnable forts", openTime: "8:00 AM", closeTime: "5:00 PM", entryFee: { indian: 25, foreign: 300 }, vipPassAvailable: false, importance: "Called the 'Troy of the East' by the British.", history: "Built by Chola dynasty, expanded by Vijayanagara Empire.", architecture: "Military architecture spanning multiple hills", averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, tips: ["Climbing Rajagiri is strenuous", "Carry 2 liters of water", "Start early morning"], rating: 4.4, bestTimeToVisit: "October to February", nearbyAttractions: ["Sathyanatheswarar Temple", "Pondicherry"], facilities: ["Parking", "Basic Restrooms", "Guides"] },
  
  { id: "kapaleeshwarar-temple", name: "Kapaleeshwarar Temple", location: "Mylapore, Chennai", region: "tamil-nadu", type: "temple", image: indianTempleImg, tagline: "7th-century Dravidian architectural masterpiece", openTime: "5:30 AM", closeTime: "12:00 PM", darshanTimings: "5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "One of the most important Shiva temples in Chennai.", history: "Original destroyed by Portuguese, rebuilt in 16th century.", architecture: "Dravidian architecture with colorful gopuram", averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹2000+" }, tips: ["Visit during Panguni Festival", "Evening aarti is recommended", "Explore Mylapore streets"], rating: 4.5, bestTimeToVisit: "Year-round", nearbyAttractions: ["San Thome Cathedral", "Marina Beach"], facilities: ["Shoe Counter", "Prasad Counter", "Restrooms"] },

  // GUJARAT
  { id: "somnath-temple", name: "Somnath Temple", location: "Prabhas Patan, Gir Somnath", region: "gujarat", type: "temple", image: somnathTempleImg, tagline: "First among the 12 Jyotirlingas", openTime: "6:00 AM", closeTime: "9:30 PM", darshanTimings: "6:00 AM - 9:30 PM (Aarti: 7:00 AM, 12:00 PM, 7:00 PM)", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 200, importance: "The first and most sacred of the 12 Jyotirlingas.", history: "Destroyed and rebuilt 17 times, current temple completed in 1951.", architecture: "Chalukya style overlooking the Arabian Sea", averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, tips: ["Evening light show is a must", "Witness aarti at sea shore", "Visit the museum"], rating: 4.9, bestTimeToVisit: "October to March", nearbyAttractions: ["Triveni Sangam", "Gir National Park"], facilities: ["VIP Darshan", "Light Show", "Museum", "Dharamshala"] },
  
  { id: "dwarkadhish-temple", name: "Dwarkadhish Temple", location: "Dwarka", region: "gujarat", type: "temple", image: indianTempleImg, tagline: "One of the Char Dham pilgrimage sites", openTime: "6:30 AM", closeTime: "9:30 PM", darshanTimings: "6:30 AM - 1:00 PM, 5:00 PM - 9:30 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: true, vipPassPrice: 200, importance: "One of the four Char Dham sites where Krishna established his kingdom.", history: "Original Dwarka was submerged, temple is 2,500 years old.", architecture: "Five-story structure supported by 72 pillars", averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" }, tips: ["Take the 52-step descent", "Visit Nageshwar Jyotirlinga", "Bet Dwarka is worth exploring"], rating: 4.8, bestTimeToVisit: "October to March, Janmashtami", nearbyAttractions: ["Nageshwar Jyotirlinga", "Bet Dwarka"], facilities: ["VIP Darshan", "Prasad Counter", "Dharamshala"] },
  
  { id: "rani-ki-vav", name: "Rani ki Vav", location: "Patan", region: "gujarat", type: "fort", image: heritageSiteImg, tagline: "UNESCO Heritage stepwell - Queen's Stepwell", openTime: "8:00 AM", closeTime: "6:00 PM", entryFee: { indian: 40, foreign: 600 }, vipPassAvailable: false, importance: "UNESCO World Heritage Site, finest stepwell architecture.", history: "Built in 11th century by Queen Udayamati for King Bhimdev I.", architecture: "Maru-Gurjara style with 7 levels and 500+ sculptures", averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, tips: ["Featured on ₹100 note", "Visit in morning", "Hire a guide for sculptures"], rating: 4.7, bestTimeToVisit: "October to March", nearbyAttractions: ["Sahasralinga Talav", "Modhera Sun Temple"], facilities: ["Guides", "Parking", "Restrooms"] },
  
  { id: "akshardham-gandhinagar", name: "Akshardham Temple", location: "Gandhinagar", region: "gujarat", type: "temple", image: heritageSiteImg, tagline: "Magnificent complex showcasing Indian culture", openTime: "9:30 AM", closeTime: "7:30 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "Cultural complex dedicated to Bhagwan Swaminarayan.", history: "Built by BAPS Swaminarayan Sanstha, inaugurated in 1992.", architecture: "Traditional Swaminarayan architecture with pink sandstone", averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" }, tips: ["Water show is spectacular", "Plan 4-5 hours", "No phones inside", "Boat ride is amazing"], rating: 4.7, bestTimeToVisit: "October to March", nearbyAttractions: ["Adalaj Stepwell", "Sabarmati Ashram"], facilities: ["Lockers", "Food Court", "Exhibitions", "Water Show"] },
  
  { id: "palitana-temples", name: "Palitana Temples", location: "Palitana, Bhavnagar", region: "gujarat", type: "temple", image: mysoreTempleImg, tagline: "900+ Jain temples atop Shatrunjaya Hill", openTime: "6:30 AM", closeTime: "6:30 PM", entryFee: { indian: 0, foreign: 0 }, vipPassAvailable: false, importance: "The most sacred pilgrimage site for Jains with 900+ temples.", history: "Temples built from 11th century onwards.", architecture: "White marble temples in Maru-Gurjara style", averageExpenses: { budget: "₹600-1000", mid: "₹1800-2500", premium: "₹4000+" }, tips: ["Start climb at 6:30 AM", "3,800+ steps to climb", "Dolis available", "Carry water"], rating: 4.8, bestTimeToVisit: "October to March", nearbyAttractions: ["Ghogha Beach", "Bhavnagar Palace"], facilities: ["Doli Service", "Dharamshala", "Prasad Counter"] },
  
  { id: "modhera-sun-temple", name: "Sun Temple Modhera", location: "Modhera, Mehsana", region: "gujarat", type: "temple", image: heritageSiteImg, tagline: "11th-century sun temple with stunning architecture", openTime: "7:00 AM", closeTime: "6:00 PM", entryFee: { indian: 40, foreign: 600 }, vipPassAvailable: false, importance: "Built so sunrays fall on main deity during equinox.", history: "Built by Bhima I of Chaulukya dynasty in 1026-27 CE.", architecture: "Maru-Gurjara architecture with Surya Kund", averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" }, tips: ["Visit during equinox", "Surya Kund is magnificent", "No active worship - ASI monument"], rating: 4.6, bestTimeToVisit: "October to March, Equinox days", nearbyAttractions: ["Rani ki Vav", "Little Rann of Kutch"], facilities: ["Guides", "Light Show", "Parking"] },
];

// Helper functions
export const isSiteOpen = (openTime: string, closeTime: string): boolean => {
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
  return currentTime >= parseTime(openTime) && currentTime <= parseTime(closeTime);
};

export const getSitesByRegion = (regionId: string): HeritageSite[] => {
  return heritageSitesData.filter((site) => site.region === regionId);
};

export const getSiteById = (siteId: string): HeritageSite | undefined => {
  return heritageSitesData.find((site) => site.id === siteId);
};

export const getSitesByType = (type: SiteType): HeritageSite[] => {
  return heritageSitesData.filter((site) => site.type === type);
};
