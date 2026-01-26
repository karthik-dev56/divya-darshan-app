// Heritage Sites Data for Indian Historical Places
// Includes both Temples and Forts with comprehensive details

export type SiteType = "temple" | "fort";

export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  region: string;
  type: SiteType;
  image: string;
  tagline: string;
  
  // Timings
  openTime: string;
  closeTime: string;
  darshanTimings?: string; // For temples
  
  // Fees & Passes
  entryFee: {
    indian: number;
    foreign: number;
    children?: number;
  };
  vipPassAvailable: boolean;
  vipPassPrice?: number;
  
  // Details
  importance: string;
  history: string;
  architecture?: string;
  
  // Practical Info
  averageExpenses: {
    budget: string;
    mid: string;
    premium: string;
  };
  tips: string[];
  rating: number; // Out of 5
  
  // Additional
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
  { 
    id: "nagpur", 
    name: "Nagpur",
    description: "Deep Maratha and British colonial history with ancient temples and forts"
  },
  { 
    id: "maharashtra", 
    name: "Maharashtra",
    description: "Land of Shivaji Maharaj with magnificent forts and sacred Jyotirlingas"
  },
  { 
    id: "karnataka", 
    name: "Karnataka",
    description: "Rich Vijayanagara, Chalukyan and Hoysala architecture heritage"
  },
  { 
    id: "tamil-nadu", 
    name: "Tamil Nadu",
    description: "Dravidian temples and ancient forts spanning centuries of history"
  },
  { 
    id: "gujarat", 
    name: "Gujarat",
    description: "Sacred pilgrimage sites and historic trading port heritage"
  },
];

// Placeholder images based on site type
const getPlaceholderImage = (type: SiteType, index: number): string => {
  return `/placeholder.svg`;
};

export const heritageSitesData: HeritageSite[] = [
  // ==================== NAGPUR REGION ====================
  // Forts
  {
    id: "sitabuldi-fort",
    name: "Sitabuldi Fort",
    location: "Sitabuldi, Nagpur",
    region: "nagpur",
    type: "fort",
    image: getPlaceholderImage("fort", 1),
    tagline: "Historic British-era fort from the Battle of Sitabuldi",
    openTime: "10:00 AM",
    closeTime: "5:00 PM",
    entryFee: { indian: 25, foreign: 100, children: 10 },
    vipPassAvailable: false,
    importance: "Built by the British in 1817 after the Battle of Sitabuldi, this fort stands as a testament to the Anglo-Maratha wars. It offers panoramic views of Nagpur city and houses a war memorial.",
    history: "The fort was constructed following the Third Anglo-Maratha War. The battle fought here in 1817 was a significant conflict between British East India Company forces and Maratha armies.",
    architecture: "British colonial military architecture with stone ramparts and bastions",
    averageExpenses: { budget: "₹200-300", mid: "₹500-700", premium: "₹1000+" },
    tips: [
      "Best visited in morning for photography",
      "Carry water as facilities are limited",
      "ID proof required for entry (military area)",
      "Photography may be restricted in certain areas"
    ],
    rating: 3.8,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Zero Mile Stone", "Nagpur Museum", "Ambazari Lake"],
    facilities: ["Parking", "Security", "Information Center"]
  },
  {
    id: "ramtek-fort-temple",
    name: "Ramtek Fort Temple",
    location: "Ramtek, Nagpur",
    region: "nagpur",
    type: "temple",
    image: getPlaceholderImage("temple", 1),
    tagline: "Ancient fort-temple complex associated with Lord Rama's exile",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "This sacred hilltop temple is believed to be where Lord Rama rested during his 14-year exile. The site holds immense religious significance and offers stunning views of the surrounding landscape.",
    history: "Dating back to ancient times, this site has references in the Ramayana. The current temple structures were built during the Vakatakas and later renovated by Bhonsle rulers.",
    architecture: "Blend of Nagara and Hemadpanthi styles with intricate stone carvings",
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" },
    tips: [
      "Climb is steep - wear comfortable shoes",
      "Visit during Rama Navami for grand celebrations",
      "Evening aarti is particularly beautiful",
      "Monkeys are common - secure your belongings"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Khindsi Lake", "Ambala Lake", "Nagardhan Fort"],
    facilities: ["Parking", "Shoe Counter", "Prasad Counter", "Restrooms"]
  },
  {
    id: "tekdi-ganesh-temple",
    name: "Shri Ganesh Mandir Tekdi",
    location: "Sitabuldi, Nagpur",
    region: "nagpur",
    type: "temple",
    image: getPlaceholderImage("temple", 2),
    tagline: "250-year-old Ganesha temple on a hillock",
    openTime: "5:00 AM",
    closeTime: "10:00 PM",
    darshanTimings: "5:00 AM - 12:00 PM, 4:00 PM - 10:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 100,
    importance: "One of the most revered Ganesha temples in central India, this 250-year-old temple attracts thousands of devotees daily. The idol is believed to be self-manifested (swayambhu).",
    history: "Built around 1770 during the Bhonsle reign, this temple has been a center of faith for Nagpur residents for over two centuries.",
    architecture: "Traditional Marathi temple architecture with a mandapa and garbhagriha",
    averageExpenses: { budget: "₹100-200", mid: "₹300-500", premium: "₹800+" },
    tips: [
      "Visit early morning to avoid crowds",
      "Wednesday and Sankashti Chaturthi are very crowded",
      "Prasad modak is a must-try",
      "Remove footwear at designated area"
    ],
    rating: 4.7,
    bestTimeToVisit: "Year-round, especially during Ganesh Chaturthi",
    nearbyAttractions: ["Sitabuldi Fort", "Zero Mile Stone", "Nagpur Central Museum"],
    facilities: ["Free Parking", "Prasad Counter", "Shoe Counter", "Restrooms", "Donation Counter"]
  },
  {
    id: "adasa-ganpati",
    name: "Adasa Ganpati Temple",
    location: "Adasa, Nagpur",
    region: "nagpur",
    type: "temple",
    image: getPlaceholderImage("temple", 3),
    tagline: "4,000-year-old temple with largest Ganesha idol",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    darshanTimings: "5:00 AM - 12:30 PM, 3:30 PM - 9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 150,
    importance: "Home to one of the largest Ganesha idols in the region, this ancient temple is believed to be over 4,000 years old. It is one of the Ashtavinayak-like temples of Vidarbha.",
    history: "According to legends, this temple was established during the Tretayuga. The current structure has been renovated multiple times over millennia.",
    architecture: "Ancient stone temple with later additions in Hemadpanthi style",
    averageExpenses: { budget: "₹200-400", mid: "₹600-900", premium: "₹1500+" },
    tips: [
      "Located 45 km from Nagpur - plan half-day trip",
      "Best to visit during Maghi Ganesh Jayanti",
      "Carry drinking water",
      "Photography allowed in outer areas only"
    ],
    rating: 4.4,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Nagardhan Fort", "Ramtek Temple", "Markanda Temple"],
    facilities: ["Parking", "Prasad Counter", "Rest Area", "Temple Guest House"]
  },
  {
    id: "poddareshwar-ram-temple",
    name: "Shri Poddareshwar Ram Temple",
    location: "Sitabuldi, Nagpur",
    region: "nagpur",
    type: "temple",
    image: getPlaceholderImage("temple", 4),
    tagline: "Marble temple built in 1920s with red sandstone",
    openTime: "5:30 AM",
    closeTime: "9:30 PM",
    darshanTimings: "5:30 AM - 12:00 PM, 4:00 PM - 9:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "A beautiful temple made of marble and red sandstone, this is one of the most architecturally stunning temples in Nagpur. Known for grand Ram Navami celebrations.",
    history: "Built in the 1920s by the Poddar family, this temple showcases exquisite craftsmanship blending North and South Indian temple styles.",
    architecture: "Blend of marble and red sandstone with intricate carvings",
    averageExpenses: { budget: "₹100-200", mid: "₹300-500", premium: "₹700+" },
    tips: [
      "Ram Navami celebrations are spectacular",
      "Evening aarti at 7 PM is recommended",
      "Temple is well-maintained and clean",
      "Photography permitted in courtyard"
    ],
    rating: 4.3,
    bestTimeToVisit: "Year-round",
    nearbyAttractions: ["Tekdi Ganesh Temple", "Nagpur Museum", "Ambazari Garden"],
    facilities: ["Parking", "Prasad Counter", "Restrooms", "Drinking Water"]
  },
  {
    id: "dragon-palace-temple",
    name: "Dragon Palace Buddhist Temple",
    location: "Kamptee, Nagpur",
    region: "nagpur",
    type: "temple",
    image: getPlaceholderImage("temple", 5),
    tagline: "Modern Buddhist temple representing peace and harmony",
    openTime: "9:00 AM",
    closeTime: "5:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "A stunning modern Buddhist temple promoting world peace and harmony. Features beautiful architecture inspired by Japanese and Indian Buddhist traditions.",
    history: "Built in 2002 by Soka Gakkai International, this temple represents the vision of Buddhist master Daisaku Ikeda for global peace.",
    architecture: "Modern Buddhist architecture with Japanese influences and beautiful gardens",
    averageExpenses: { budget: "₹200-300", mid: "₹500-700", premium: "₹1000+" },
    tips: [
      "Maintain silence inside the temple",
      "Photography may be restricted inside",
      "Meditation sessions available on request",
      "Beautiful gardens for peaceful walks"
    ],
    rating: 4.2,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Deekshabhoomi", "Ambazari Lake", "Japanese Garden"],
    facilities: ["Parking", "Meditation Hall", "Garden", "Information Center"]
  },
  {
    id: "deekshabhoomi",
    name: "Deekshabhoomi",
    location: "Nagpur Central",
    region: "nagpur",
    type: "temple",
    image: getPlaceholderImage("temple", 6),
    tagline: "Sacred site of Dr. Ambedkar's historic Buddhist conversion",
    openTime: "6:00 AM",
    closeTime: "9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "The sacred site where Dr. B.R. Ambedkar converted to Buddhism along with 380,000 followers on October 14, 1956. A major pilgrimage center for Buddhists worldwide.",
    history: "This is where the historic mass conversion to Buddhism took place, making it the largest religious conversion in modern history.",
    architecture: "Grand white stupa with a dome inspired by Sanchi Stupa",
    averageExpenses: { budget: "₹200-400", mid: "₹600-900", premium: "₹1500+" },
    tips: [
      "Visit during Dhammachakra Pravartan Din (October)",
      "Museum inside is very informative",
      "Early morning is peaceful for meditation",
      "Dress modestly as it's a religious site"
    ],
    rating: 4.6,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Dragon Palace", "Nagpur Museum", "Ambazari Lake"],
    facilities: ["Parking", "Museum", "Library", "Meditation Hall", "Bookshop"]
  },
  {
    id: "koradi-fort",
    name: "Koradi Fort",
    location: "Koradi, Nagpur",
    region: "nagpur",
    type: "fort",
    image: getPlaceholderImage("fort", 2),
    tagline: "Ancient fort near the famous Koradi temple complex",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 20, foreign: 50 },
    vipPassAvailable: false,
    importance: "A historical fort situated near the Koradi Mata Temple, offering insights into the region's military past and providing scenic views of the surrounding area.",
    history: "Built during the medieval period, this fort has witnessed various rulers from the Gonds to the Marathas.",
    architecture: "Stone fortification with typical Deccan military architecture",
    averageExpenses: { budget: "₹300-500", mid: "₹700-1000", premium: "₹1500+" },
    tips: [
      "Combine visit with Koradi Mata Temple",
      "Best to visit in morning",
      "Carry water and snacks",
      "Wear comfortable walking shoes"
    ],
    rating: 3.5,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Koradi Mata Temple", "Waki Woods", "Ambazari Lake"],
    facilities: ["Limited Parking", "Basic Amenities"]
  },

  // ==================== MAHARASHTRA REGION ====================
  // Forts
  {
    id: "raigad-fort",
    name: "Raigad Fort",
    location: "Raigad District",
    region: "maharashtra",
    type: "fort",
    image: getPlaceholderImage("fort", 1),
    tagline: "Capital of the Maratha Empire - Shivaji's coronation site",
    openTime: "9:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 50, foreign: 200, children: 25 },
    vipPassAvailable: true,
    vipPassPrice: 500,
    importance: "The capital of the Maratha Empire where Chhatrapati Shivaji Maharaj was crowned in 1674. This fort represents the pinnacle of Maratha glory and independence.",
    history: "Originally known as Rairi, Shivaji Maharaj captured it in 1656 and transformed it into an impregnable capital. He was crowned here as the first Maratha Chhatrapati.",
    architecture: "Maratha military architecture with massive walls, bastions, and royal structures",
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" },
    tips: [
      "Take the ropeway for easier access (₹400 return)",
      "Carry sufficient water and snacks",
      "Guide recommended for historical context",
      "Visit Shivaji's Samadhi and Raj Sabha"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Lingana Fort", "Pachad Village", "Kashid Beach"],
    facilities: ["Ropeway", "Parking", "Restaurant", "Restrooms", "Guides Available"]
  },
  {
    id: "shivneri-fort",
    name: "Shivneri Fort",
    location: "Junnar, Pune",
    region: "maharashtra",
    type: "fort",
    image: getPlaceholderImage("fort", 2),
    tagline: "Birthplace of Chhatrapati Shivaji Maharaj",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 100 },
    vipPassAvailable: false,
    importance: "The birthplace of Chhatrapati Shivaji Maharaj, this fort holds immense historical and emotional significance for every Maratha. The spot where he was born is marked with his statue.",
    history: "Shivaji was born here on February 19, 1630. His mother Jijabai stayed here during his childhood years.",
    architecture: "Hill fort with Buddhist caves, Maratha additions, and seven gates",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2000", premium: "₹3500+" },
    tips: [
      "Start early - climbing takes 1-2 hours",
      "Visit Shivaji's birth chamber and statue",
      "Explore the Buddhist caves nearby",
      "Carry plenty of water"
    ],
    rating: 4.7,
    bestTimeToVisit: "July to March",
    nearbyAttractions: ["Lenyadri Caves", "Ozar Ganpati", "Naneghat"],
    facilities: ["Parking", "Local Guides", "Basic Refreshments"]
  },
  {
    id: "sinhagad-fort",
    name: "Sinhagad Fort",
    location: "Pune",
    region: "maharashtra",
    type: "fort",
    image: getPlaceholderImage("fort", 3),
    tagline: "Lion's Fort - Famous for Tanaji Malusare's sacrifice",
    openTime: "5:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 20, foreign: 100 },
    vipPassAvailable: false,
    importance: "Famous for the Battle of Sinhagad where Tanaji Malusare sacrificed his life. Shivaji's words 'Gad aala pan Sinha gela' immortalized this fort.",
    history: "Originally called Kondana, this fort was won by Tanaji Malusare in 1670 in a night attack, giving it the name Sinhagad (Lion's Fort).",
    architecture: "Hill fort with two main gates - Pune Darwaza and Kalyan Darwaza",
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" },
    tips: [
      "Tanaji memorial is a must-visit",
      "Try the famous Pitla Bhakri at the fort",
      "Trek route from Sinhagad village is popular",
      "Sunset views are spectacular"
    ],
    rating: 4.6,
    bestTimeToVisit: "Monsoon and Winter",
    nearbyAttractions: ["Khadakwasla Dam", "Torna Fort", "Rajgad Fort"],
    facilities: ["Parking", "Food Stalls", "Restrooms", "Trekking Route"]
  },
  {
    id: "pratapgad-fort",
    name: "Pratapgad Fort",
    location: "Satara",
    region: "maharashtra",
    type: "fort",
    image: getPlaceholderImage("fort", 4),
    tagline: "Site of Shivaji's legendary battle with Afzal Khan",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 100 },
    vipPassAvailable: false,
    importance: "Site of the famous meeting between Shivaji and Afzal Khan in 1659. The Bhavani Temple here was special to Shivaji Maharaj.",
    history: "Built in 1656, this fort witnessed the legendary encounter where Shivaji killed Afzal Khan. Afzal Khan's tomb still stands at the base of the fort.",
    architecture: "Maratha military fort with upper and lower sections",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2000", premium: "₹3500+" },
    tips: [
      "Visit Bhavani Temple at the top",
      "See Afzal Khan's tomb at the base",
      "Shivaji's statue at entrance is iconic",
      "Combine with Mahabaleshwar trip"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to May",
    nearbyAttractions: ["Mahabaleshwar", "Panchgani", "Wai"],
    facilities: ["Parking", "Temple", "Food Stalls", "Restrooms"]
  },
  // Temples
  {
    id: "trimbakeshwar-temple",
    name: "Trimbakeshwar Temple",
    location: "Nashik",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 1),
    tagline: "One of the 12 sacred Jyotirlingas",
    openTime: "5:30 AM",
    closeTime: "9:00 PM",
    darshanTimings: "5:30 AM - 12:00 PM, 5:00 PM - 9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 500,
    importance: "One of the 12 Jyotirlingas in India, this temple is unique as it represents all three forms of the divine - Brahma, Vishnu, and Maheshwara. Origin of river Godavari.",
    history: "The temple was rebuilt by Peshwa Balaji Baji Rao in the 18th century. The ancient Shiva lingam has three faces representing the Trinity.",
    architecture: "Black stone Hemadpanthi architecture with intricate carvings",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" },
    tips: [
      "Narayan Nagbali and Kalsarp Shanti pujas are famous",
      "Non-Hindus not allowed in inner sanctum",
      "Book VIP darshan online in advance",
      "Visit early morning to avoid crowds"
    ],
    rating: 4.8,
    bestTimeToVisit: "Shravan month (July-August)",
    nearbyAttractions: ["Brahmagiri Hill", "Anjneri Fort", "Nashik Caves"],
    facilities: ["VIP Darshan", "Prasad Counter", "Cloakroom", "Guides"]
  },
  {
    id: "shirdi-sai-temple",
    name: "Shirdi Sai Baba Temple",
    location: "Shirdi, Ahmednagar",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 2),
    tagline: "Samadhi Mandir of the beloved Sai Baba",
    openTime: "4:00 AM",
    closeTime: "11:00 PM",
    darshanTimings: "4:00 AM - 11:00 PM (Aarti times: 5:15 AM, 12:00 PM, 6:00 PM, 10:00 PM)",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "One of the most visited pilgrimage sites in India. Sai Baba's teachings of love, forgiveness, and charity continue to inspire millions worldwide.",
    history: "Sai Baba lived in Shirdi from 1858 until his mahasamadhi in 1918. The temple was built over his samadhi in 1922.",
    architecture: "Modern temple complex with marble flooring and Italian marble idol",
    averageExpenses: { budget: "₹1000-1500", mid: "₹2500-4000", premium: "₹7000+" },
    tips: [
      "Thursday is very crowded - the holy day",
      "Book accommodation well in advance",
      "Attend the 4 daily aartis for full experience",
      "Visit Dwarkamai and Chavadi nearby"
    ],
    rating: 4.9,
    bestTimeToVisit: "Year-round",
    nearbyAttractions: ["Dwarkamai", "Chavadi", "Shani Shingnapur", "Ellora Caves"],
    facilities: ["VIP Darshan", "Free Accommodation", "Prasadalaya", "Parking", "Medical Facility"]
  },
  {
    id: "siddhivinayak-temple",
    name: "Siddhivinayak Temple",
    location: "Prabhadevi, Mumbai",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 3),
    tagline: "Most visited Ganesh temple in Mumbai",
    openTime: "5:30 AM",
    closeTime: "10:00 PM",
    darshanTimings: "5:30 AM - 12:00 PM, 12:30 PM - 10:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "One of the richest and most visited temples in India. Celebrities, politicians, and millions of devotees seek blessings here for success.",
    history: "Built in 1801, the original small temple was constructed by Laxman Vithu and Deubai Patil. The current grand structure was developed over time.",
    architecture: "Modern temple with gold-plated dome and wooden doors with Ashtavinayak carvings",
    averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹2000+" },
    tips: [
      "Tuesday is the main day - expect huge crowds",
      "Online VIP booking highly recommended",
      "Visit early morning for peaceful darshan",
      "Modak prasad is famous"
    ],
    rating: 4.7,
    bestTimeToVisit: "Year-round, avoid Tuesdays if possible",
    nearbyAttractions: ["Mahalaxmi Temple", "Haji Ali Dargah", "Bandra-Worli Sea Link"],
    facilities: ["VIP Darshan", "Online Booking", "Prasad Counter", "Security"]
  },
  {
    id: "mahalaxmi-kolhapur",
    name: "Mahalaxmi Temple",
    location: "Kolhapur",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 4),
    tagline: "One of the Shakti Peethas of Goddess Mahalaxmi",
    openTime: "4:00 AM",
    closeTime: "10:00 PM",
    darshanTimings: "4:00 AM - 10:00 PM (Aarti: 5:00 AM, 8:00 AM, 12:30 PM, 8:00 PM)",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 300,
    importance: "One of the three and a half Shakti Peethas in India. The idol is made of gemstone and weighs about 40 kg. The temple is over 2000 years old.",
    history: "Built by Chalukya rulers in the 7th century, this temple has been renovated by Shilahara and Yadava dynasties.",
    architecture: "Hemadpanthi style with later additions, unique Chalukyan pillars",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" },
    tips: [
      "Kirnotsav in Nov/Feb when sunrays fall on idol",
      "Visit during Navratri for grand celebrations",
      "Don't miss the old town exploration",
      "Try Kolhapuri Misal and Tambda Rassa"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Panhala Fort", "Rankala Lake", "Jyotiba Temple"],
    facilities: ["VIP Darshan", "Prasad Counter", "Cloakroom", "Parking"]
  },
  {
    id: "kailash-temple-ellora",
    name: "Kailash Temple (Ellora)",
    location: "Aurangabad",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 5),
    tagline: "World's largest monolithic rock excavation",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "A UNESCO World Heritage Site, this 8th-century temple was carved from top to bottom out of a single rock. It represents Mount Kailash, the abode of Lord Shiva.",
    history: "Built by Rashtrakuta king Krishna I around 756-773 CE. Approximately 200,000 tonnes of rock was excavated to create this marvel.",
    architecture: "Dravidian architecture carved from basalt rock - an architectural wonder",
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹5000+" },
    tips: [
      "Hire a guide to understand the architecture",
      "Visit early morning for best lighting",
      "Don't miss the elephant sculptures",
      "Combine with other Ellora caves visit"
    ],
    rating: 4.9,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Ajanta Caves", "Daulatabad Fort", "Bibi Ka Maqbara"],
    facilities: ["Guides", "Parking", "Refreshments", "Museum"]
  },
  {
    id: "pandharpur-vitthal",
    name: "Vitthal Rukmini Temple",
    location: "Pandharpur, Solapur",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 6),
    tagline: "Sacred pilgrimage destination for Warkaris",
    openTime: "4:00 AM",
    closeTime: "11:00 PM",
    darshanTimings: "4:00 AM - 11:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "The most important pilgrimage center for the Warkari sect. Millions walk hundreds of kilometers during the Ashadhi and Kartiki Ekadashi Wari.",
    history: "The temple dates back to the 12th century. The Warkari tradition of pilgrimage has continued for over 800 years.",
    architecture: "Traditional Hemadpanthi architecture with later additions",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-2000", premium: "₹3500+" },
    tips: [
      "Ashadhi Ekadashi sees millions of pilgrims",
      "Experience the Wari procession for authentic spirituality",
      "Visit Chandrabhaga River ghat",
      "Simple vegetarian food is recommended"
    ],
    rating: 4.7,
    bestTimeToVisit: "Ashadhi Ekadashi (June-July)",
    nearbyAttractions: ["Chandrabhaga River", "Pundalik Temple", "Rukmini Temple"],
    facilities: ["VIP Darshan", "Free Meals", "Dharamshala", "Parking"]
  },
  {
    id: "bhimashankar-temple",
    name: "Bhimashankar Temple",
    location: "Pune",
    region: "maharashtra",
    type: "temple",
    image: getPlaceholderImage("temple", 7),
    tagline: "Jyotirlinga amidst lush green forests",
    openTime: "4:30 AM",
    closeTime: "9:30 PM",
    darshanTimings: "4:30 AM - 12:00 PM, 4:00 PM - 9:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 300,
    importance: "One of the 12 Jyotirlingas, set in the Sahyadri mountains. The temple is surrounded by the Bhimashankar Wildlife Sanctuary.",
    history: "According to mythology, this is where Shiva killed the demon Tripurasura. The temple is believed to be ancient with later renovations.",
    architecture: "Nagara style with ancient stone construction",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" },
    tips: [
      "Trek from Khandas village is popular",
      "Monsoon makes the trek challenging but scenic",
      "Watch for the Indian Giant Squirrel",
      "Carry rain gear in monsoon"
    ],
    rating: 4.6,
    bestTimeToVisit: "July to February",
    nearbyAttractions: ["Bhimashankar Wildlife Sanctuary", "Gupt Bhimashankar", "Nagphani"],
    facilities: ["VIP Darshan", "Prasad Counter", "Dharamshala", "Parking"]
  },
  {
    id: "daulatabad-fort",
    name: "Daulatabad Fort",
    location: "Aurangabad",
    region: "maharashtra",
    type: "fort",
    image: getPlaceholderImage("fort", 5),
    tagline: "Medieval fortress once made capital by Muhammad bin Tughlaq",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 300 },
    vipPassAvailable: false,
    importance: "One of the most powerful medieval forts in India, considered impregnable. Muhammad bin Tughlaq shifted his entire capital here from Delhi.",
    history: "Originally named Devagiri, it was ruled by Yadavas, Delhi Sultanate, Bahmani Sultanate, and finally the Mughals.",
    architecture: "Multi-layered defense system with moat, dark passages, and cannons",
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" },
    tips: [
      "Carry a torch for dark passages",
      "Guide is essential - many hidden routes",
      "Climb to Chand Minar for views",
      "Combine with Ellora Caves visit"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Ellora Caves", "Bibi Ka Maqbara", "Aurangabad Caves"],
    facilities: ["Guides", "Parking", "Restrooms"]
  },

  // ==================== KARNATAKA REGION ====================
  // Temples
  {
    id: "vittala-temple-hampi",
    name: "Vittala Temple",
    location: "Hampi",
    region: "karnataka",
    type: "temple",
    image: getPlaceholderImage("temple", 1),
    tagline: "Famous for stone chariot and musical pillars",
    openTime: "8:30 AM",
    closeTime: "5:30 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "The iconic stone chariot of Hampi is located here. The temple is famous for its 56 musical pillars that produce musical notes when struck.",
    history: "Built in the 15th century during the Vijayanagara Empire reign of Devaraya II and later expanded by Krishnadevaraya.",
    architecture: "Vijayanagara architecture with Dravidian influences, featuring the famous stone chariot",
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" },
    tips: [
      "The Stone Chariot is on the ₹50 note",
      "Visit during sunrise for photography",
      "Hire a guide for historical context",
      "Musical pillars playing is restricted now"
    ],
    rating: 4.9,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Virupaksha Temple", "Lotus Mahal", "Elephant Stables"],
    facilities: ["Guides", "Parking", "Refreshments", "Restrooms"]
  },
  {
    id: "virupaksha-temple",
    name: "Virupaksha Temple",
    location: "Hampi",
    region: "karnataka",
    type: "temple",
    image: getPlaceholderImage("temple", 2),
    tagline: "UNESCO World Heritage Site dedicated to Lord Shiva",
    openTime: "6:00 AM",
    closeTime: "9:00 PM",
    darshanTimings: "6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "One of the oldest functioning temples in India, it has been a pilgrimage site since the 7th century. The temple elephant Lakshmi blesses visitors.",
    history: "Predates the Vijayanagara Empire, with parts dating to the 7th century. It was the royal temple of the Vijayanagara kings.",
    architecture: "Dravidian style with a towering gopuram",
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" },
    tips: [
      "Meet Lakshmi the temple elephant in the morning",
      "Attend the evening aarti for spiritual experience",
      "The inverted shadow of the gopuram is magical",
      "Explore the bazaar street leading to temple"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Vittala Temple", "Hemakuta Hill", "Tungabhadra River"],
    facilities: ["Prasad Counter", "Shoe Counter", "Guides", "Restrooms"]
  },
  {
    id: "badami-caves",
    name: "Badami Cave Temples",
    location: "Badami, Bagalkot",
    region: "karnataka",
    type: "temple",
    image: getPlaceholderImage("temple", 3),
    tagline: "6th-century rock-cut cave temples",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 300 },
    vipPassAvailable: false,
    importance: "These 4 rock-cut caves represent Hindu, Buddhist, and Jain art. They showcase the earliest examples of Chalukyan architecture.",
    history: "Created in the 6th century under the rule of Pulakeshin I and later Chalukyan kings. The caves are carved out of red sandstone.",
    architecture: "Early Chalukyan rock-cut architecture with intricate carvings",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" },
    tips: [
      "Cave 3 has the most intricate carvings",
      "Best light for photography is morning",
      "Combine with Aihole and Pattadakal",
      "Carry water - climbing involved"
    ],
    rating: 4.6,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Aihole", "Pattadakal", "Agastya Lake", "Bhutanatha Temple"],
    facilities: ["Guides", "Parking", "Refreshments"]
  },
  {
    id: "chennakeshava-temple-belur",
    name: "Chennakeshava Temple",
    location: "Belur",
    region: "karnataka",
    type: "temple",
    image: getPlaceholderImage("temple", 4),
    tagline: "Hoysala architecture masterpiece",
    openTime: "7:30 AM",
    closeTime: "5:30 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "A stunning example of Hoysala craftsmanship, every inch of this temple is covered with intricate carvings. UNESCO World Heritage Site.",
    history: "Built by Hoysala king Vishnuvardhana to commemorate his victory over Cholas in 1117 CE. Took over 103 years to complete.",
    architecture: "Hoysala style with soapstone carvings, star-shaped platform",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" },
    tips: [
      "Hire a guide to understand the carvings",
      "Look for the Mohini and Darpana Sundari sculptures",
      "Combine with Halebidu visit (17 km)",
      "Morning light is best for photography"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Halebidu", "Shravanabelagola", "Yagachi Dam"],
    facilities: ["Guides", "Parking", "Museum", "Restrooms"]
  },
  {
    id: "murudeshwar-temple",
    name: "Murudeshwar Temple",
    location: "Bhatkal, Uttara Kannada",
    region: "karnataka",
    type: "temple",
    image: getPlaceholderImage("temple", 5),
    tagline: "World's second tallest Shiva statue",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    darshanTimings: "6:00 AM - 1:00 PM, 3:00 PM - 8:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "Features the world's second-tallest Shiva statue (123 feet) overlooking the Arabian Sea. The temple complex also has the tallest gopuram in the world.",
    history: "Modern temple built in 2008 by R.N. Shetty. The original ancient temple exists with an atma linga that was dropped by Ravana.",
    architecture: "Modern temple with traditional elements, 20-story Raja Gopura",
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2800", premium: "₹4500+" },
    tips: [
      "Take the elevator in the gopuram for sea views",
      "Sunset views from here are spectacular",
      "Beach nearby is good for relaxation",
      "Water sports available"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to May",
    nearbyAttractions: ["Netrani Island", "Murdeshwar Beach", "Kollur Mookambika"],
    facilities: ["Parking", "Restaurants", "Gopuram Elevator", "Beach Access"]
  },
  {
    id: "gol-gumbaz",
    name: "Gol Gumbaz",
    location: "Bijapur (Vijayapura)",
    region: "karnataka",
    type: "fort",
    image: getPlaceholderImage("fort", 1),
    tagline: "World's second largest dome - famous for whispering gallery",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 300 },
    vipPassAvailable: false,
    importance: "The mausoleum of Mohammed Adil Shah has the world's second-largest dome. The whispering gallery can repeat sounds up to 11 times.",
    history: "Built in 1656 as the tomb of Adil Shah, Sultan of Bijapur. The construction took 30 years.",
    architecture: "Indo-Islamic architecture with the massive unsupported dome",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" },
    tips: [
      "Experience the whispering gallery acoustics",
      "Climb to the gallery for panoramic views",
      "Visit early to avoid crowds for acoustics",
      "Combine with other Bijapur monuments"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Ibrahim Rouza", "Jama Masjid Bijapur", "Bara Kaman"],
    facilities: ["Guides", "Parking", "Restrooms", "Museum"]
  },
  {
    id: "bidar-fort",
    name: "Bidar Fort",
    location: "Bidar",
    region: "karnataka",
    type: "fort",
    image: getPlaceholderImage("fort", 2),
    tagline: "Known for its extensive ruins and Rangin Mahal",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 200 },
    vipPassAvailable: false,
    importance: "One of the most formidable forts of the Deccan, featuring the beautiful Rangin Mahal with intricate tilework and wood carvings.",
    history: "Originally built by the Chalukyas, expanded by the Bahmani Sultanate in the 15th century. It served as the Bahmani capital.",
    architecture: "Indo-Islamic architecture with Persian influences",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" },
    tips: [
      "Don't miss Rangin Mahal and Solah Khamba Mosque",
      "Guide recommended for hidden sections",
      "Famous for Bidriware craft - buy souvenirs",
      "Explore the triple moat system"
    ],
    rating: 4.4,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Ashtur Tombs", "Narasimha Jhira Cave Temple", "Basavakalyan"],
    facilities: ["Guides", "Parking", "Museum"]
  },
  {
    id: "chitradurga-fort",
    name: "Chitradurga Fort",
    location: "Chitradurga",
    region: "karnataka",
    type: "fort",
    image: getPlaceholderImage("fort", 3),
    tagline: "Stone Fortress - Famous for Onake Obavva's bravery",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 25, foreign: 200 },
    vipPassAvailable: false,
    importance: "Known as Kallina Kote (Stone Fortress), this fort is famous for the legendary bravery of Onake Obavva who defended it single-handedly.",
    history: "Built by the Nayakas, expanded by Hyder Ali and Tipu Sultan. The fort has 19 gateways and 38 secret entry points.",
    architecture: "Massive stone walls built from boulders, featuring multiple layers of fortification",
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" },
    tips: [
      "Visit the hole through which Obavva fought",
      "Oil pits and granaries are fascinating",
      "Carry water - extensive walking required",
      "Morning is best for exploration"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Chandravalli Caves", "Jogimatti Hills", "Murugha Mutt"],
    facilities: ["Guides", "Parking", "Restrooms", "Museum"]
  },

  // ==================== TAMIL NADU REGION ====================
  // Temples
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    location: "Madurai",
    region: "tamil-nadu",
    type: "temple",
    image: getPlaceholderImage("temple", 1),
    tagline: "Historic marvel with 14 colorful gopurams",
    openTime: "5:00 AM",
    closeTime: "10:00 PM",
    darshanTimings: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 100,
    importance: "One of the largest temple complexes in India with 14 gopurams. The temple is dedicated to Meenakshi, an avatar of Parvati, and her consort Sundareswarar (Shiva).",
    history: "Original temple built by the Pandyas, destroyed by Malik Kafur in 1311, rebuilt by Nayak rulers in the 17th century.",
    architecture: "Dravidian architecture with 14 towering gopurams covered in stucco figures",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2500", premium: "₹4000+" },
    tips: [
      "Don't miss the Hall of 1000 Pillars",
      "Evening ceremony of Shiva going to Meenakshi is beautiful",
      "Golden Lotus Tank is serene",
      "Non-Hindus cannot enter inner sanctum"
    ],
    rating: 4.9,
    bestTimeToVisit: "Year-round, Chithirai Festival (April-May)",
    nearbyAttractions: ["Thirumalai Nayakkar Palace", "Gandhi Museum", "Vaigai Dam"],
    facilities: ["VIP Darshan", "Guides", "Shoe Counter", "Restrooms"]
  },
  {
    id: "brihadeeswarar-temple",
    name: "Brihadeeswarar Temple",
    location: "Thanjavur",
    region: "tamil-nadu",
    type: "temple",
    image: getPlaceholderImage("temple", 2),
    tagline: "UNESCO World Heritage - The Big Temple",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    darshanTimings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "A UNESCO World Heritage Site, this is one of the largest temples in India. The vimana (tower) is 66 meters tall with a single stone on top weighing 80 tonnes.",
    history: "Built by Raja Raja Chola I in 1010 CE. The engineering marvel of placing an 80-tonne stone atop without cranes remains a mystery.",
    architecture: "Chola architecture with the tallest vimana in South India",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-2000", premium: "₹3500+" },
    tips: [
      "Visit at noon to see no shadow of the vimana",
      "The Nandi statue is one of the largest monolithic ones",
      "Attend the evening aarti",
      "Hire a guide for architectural insights"
    ],
    rating: 4.9,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Thanjavur Palace", "Saraswathi Mahal Library", "Art Gallery"],
    facilities: ["Guides", "Shoe Counter", "Parking", "Restrooms"]
  },
  {
    id: "ramanathaswamy-temple",
    name: "Ramanathaswamy Temple",
    location: "Rameswaram",
    region: "tamil-nadu",
    type: "temple",
    image: getPlaceholderImage("temple", 3),
    tagline: "Sacred Jyotirlinga with the longest temple corridor",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    darshanTimings: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "One of the Char Dham and one of the 12 Jyotirlingas. It has the longest corridor among all Hindu temples in India (1,212 meters).",
    history: "According to legend, Lord Rama built the original lingam here. The current structure was built by Pandya, Chola, and Nayak kings.",
    architecture: "Dravidian architecture with the world's longest temple corridor and 22 wells",
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" },
    tips: [
      "Bathing in the 22 wells (theerthams) is sacred",
      "Carry extra clothes for well bathing",
      "Visit Pamban Bridge and Dhanushkodi",
      "Early morning is best for rituals"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to April",
    nearbyAttractions: ["Pamban Bridge", "Dhanushkodi", "Abdul Kalam Memorial"],
    facilities: ["VIP Darshan", "Well Bathing", "Prasad Counter", "Accommodation"]
  },
  {
    id: "shore-temple",
    name: "Shore Temple",
    location: "Mahabalipuram",
    region: "tamil-nadu",
    type: "temple",
    image: getPlaceholderImage("temple", 4),
    tagline: "8th-century structural temple by the sea",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "A UNESCO World Heritage Site, this is one of the oldest structural temples in South India. It overlooks the Bay of Bengal.",
    history: "Built by the Pallava king Narasimhavarman II (Rajasimha) in the 8th century. Part of a group of monuments at Mahabalipuram.",
    architecture: "Dravidian architecture carved from granite, structural (not rock-cut)",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" },
    tips: [
      "Best visited during sunrise or sunset",
      "Combine with Five Rathas and other monuments",
      "The beach behind is peaceful",
      "Weathering has affected some carvings"
    ],
    rating: 4.6,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Pancha Rathas", "Arjuna's Penance", "Krishna's Butterball"],
    facilities: ["Guides", "Parking", "Restrooms"]
  },
  // Forts
  {
    id: "gingee-fort",
    name: "Gingee Fort",
    location: "Villupuram",
    region: "tamil-nadu",
    type: "fort",
    image: getPlaceholderImage("fort", 1),
    tagline: "Troy of the East - One of the most impregnable forts",
    openTime: "8:00 AM",
    closeTime: "5:00 PM",
    entryFee: { indian: 25, foreign: 300 },
    vipPassAvailable: false,
    importance: "Called the 'Troy of the East' by the British. The fort complex spans three hills and was considered impregnable.",
    history: "Built by the Chola dynasty, expanded by Vijayanagara Empire, later held by Marathas, Mughals, and the British.",
    architecture: "Military architecture spanning multiple hills with massive walls",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" },
    tips: [
      "Climbing Rajagiri is strenuous but rewarding",
      "Carry at least 2 liters of water",
      "Start early in the morning",
      "Wear sturdy shoes for the climb"
    ],
    rating: 4.4,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Sathyanatheswarar Temple", "Melalcheri Village", "Pondicherry"],
    facilities: ["Parking", "Basic Restrooms", "Guides"]
  },
  {
    id: "vellore-fort",
    name: "Vellore Fort",
    location: "Vellore",
    region: "tamil-nadu",
    type: "fort",
    image: getPlaceholderImage("fort", 2),
    tagline: "16th-century fort known for Vijayanagara architecture",
    openTime: "8:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 15, foreign: 200 },
    vipPassAvailable: false,
    importance: "One of the grandest forts in South India with a wide moat. Houses the beautiful Jalakandeswarar Temple inside.",
    history: "Built by Chinna Bommi Nayak under Vijayanagara rule in the 16th century. It has seen battles with Marathas, Mughals, and British.",
    architecture: "Vijayanagara military architecture with granite walls and moat",
    averageExpenses: { budget: "₹300-500", mid: "₹900-1400", premium: "₹2500+" },
    tips: [
      "Don't miss Jalakandeswarar Temple inside",
      "The moat still has crocodiles",
      "Visit the Government Museum",
      "St. John's Church nearby is also historic"
    ],
    rating: 4.3,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Jalakandeswarar Temple", "Government Museum", "Golden Temple"],
    facilities: ["Parking", "Museum", "Restrooms"]
  },
  {
    id: "fort-st-george",
    name: "Fort St. George",
    location: "Chennai",
    region: "tamil-nadu",
    type: "fort",
    image: getPlaceholderImage("fort", 3),
    tagline: "First British fortress in India (1644)",
    openTime: "9:00 AM",
    closeTime: "5:00 PM",
    entryFee: { indian: 20, foreign: 200 },
    vipPassAvailable: false,
    importance: "The first British fortress in India, now houses the Tamil Nadu Legislative Assembly and an excellent museum.",
    history: "Built in 1644 by the British East India Company. It was the nucleus of the city of Chennai (Madras).",
    architecture: "British colonial military architecture",
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" },
    tips: [
      "Visit the Fort Museum for colonial artifacts",
      "St. Mary's Church inside is the oldest Anglican church in India",
      "Flagstaff is one of the tallest in India",
      "Closed on Fridays"
    ],
    rating: 4.2,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Marina Beach", "Government Museum", "Kapaleeshwarar Temple"],
    facilities: ["Museum", "Parking", "Guided Tours"]
  },
  {
    id: "nataraja-temple",
    name: "Nataraja Temple",
    location: "Chidambaram",
    region: "tamil-nadu",
    type: "temple",
    image: getPlaceholderImage("temple", 5),
    tagline: "Home of the cosmic dancer Shiva Nataraja",
    openTime: "6:00 AM",
    closeTime: "10:00 PM",
    darshanTimings: "6:00 AM - 12:00 PM, 4:00 PM - 10:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 150,
    importance: "One of the Pancha Bootha Sthalas representing Space (Akasha). The temple enshrines the cosmic dance pose of Shiva as Nataraja.",
    history: "Ancient temple with references dating back to the 2nd century CE. Current structure built by Chola kings in the 10th century.",
    architecture: "Chola-era Dravidian architecture with four magnificent gopurams",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-2000", premium: "₹3500+" },
    tips: [
      "The Chidambara Rahasya (secret) is intriguing",
      "Witness the Dikshitars perform rituals",
      "Evening aarti is spectacular",
      "Visit during Natyanjali Festival"
    ],
    rating: 4.7,
    bestTimeToVisit: "Year-round, February for Natyanjali",
    nearbyAttractions: ["Pichavaram Mangroves", "Annamalai University", "Thillai Kali Temple"],
    facilities: ["VIP Darshan", "Shoe Counter", "Prasad Counter", "Restrooms"]
  },
  {
    id: "kapaleeshwarar-temple",
    name: "Kapaleeshwarar Temple",
    location: "Mylapore, Chennai",
    region: "tamil-nadu",
    type: "temple",
    image: getPlaceholderImage("temple", 6),
    tagline: "7th-century Dravidian architectural masterpiece",
    openTime: "5:30 AM",
    closeTime: "12:00 PM",
    darshanTimings: "5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "One of the most important Shiva temples in Chennai. The temple hosts the famous Arubathimoovar Festival with 63 Nayanmars.",
    history: "Original temple destroyed by Portuguese, rebuilt by Vijayanagara rulers in the 16th century in Dravidian style.",
    architecture: "Dravidian architecture with colorful gopuram",
    averageExpenses: { budget: "₹200-400", mid: "₹600-1000", premium: "₹2000+" },
    tips: [
      "Visit during Panguni Festival (March-April)",
      "The sacred tank is peaceful",
      "Evening aarti is recommended",
      "Explore Mylapore's traditional streets"
    ],
    rating: 4.5,
    bestTimeToVisit: "Year-round",
    nearbyAttractions: ["San Thome Cathedral", "Marina Beach", "Theosophical Society"],
    facilities: ["Shoe Counter", "Prasad Counter", "Restrooms"]
  },

  // ==================== GUJARAT REGION ====================
  // Temples
  {
    id: "somnath-temple",
    name: "Somnath Temple",
    location: "Prabhas Patan, Gir Somnath",
    region: "gujarat",
    type: "temple",
    image: getPlaceholderImage("temple", 1),
    tagline: "First among the 12 Jyotirlingas",
    openTime: "6:00 AM",
    closeTime: "9:30 PM",
    darshanTimings: "6:00 AM - 9:30 PM (Aarti: 7:00 AM, 12:00 PM, 7:00 PM)",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "The first and most sacred of the 12 Jyotirlingas. Despite being destroyed and rebuilt 17 times, it remains a symbol of Indian resilience.",
    history: "Originally built by Moon God, destroyed multiple times by invaders including Mahmud of Ghazni. Current temple completed in 1951.",
    architecture: "Chalukya style with maritime elements, overlooks the Arabian Sea",
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" },
    tips: [
      "Evening light and sound show is a must",
      "Witness the aarti at the sea shore",
      "Visit the museum near the temple",
      "Triveni Sangam nearby is sacred"
    ],
    rating: 4.9,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Triveni Sangam", "Bhalka Tirth", "Gir National Park"],
    facilities: ["VIP Darshan", "Light Show", "Museum", "Parking", "Dharamshala"]
  },
  {
    id: "dwarkadhish-temple",
    name: "Dwarkadhish Temple",
    location: "Dwarka",
    region: "gujarat",
    type: "temple",
    image: getPlaceholderImage("temple", 2),
    tagline: "One of the Char Dham pilgrimage sites",
    openTime: "6:30 AM",
    closeTime: "9:30 PM",
    darshanTimings: "6:30 AM - 1:00 PM, 5:00 PM - 9:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "One of the four Char Dham sites, this is where Lord Krishna established his kingdom after leaving Mathura. Also a Shakti Peeth.",
    history: "The original Dwarka was submerged. The current temple is believed to be 2,500 years old, rebuilt multiple times.",
    architecture: "Five-story structure supported by 72 pillars with intricate carvings",
    averageExpenses: { budget: "₹800-1200", mid: "₹2000-3000", premium: "₹5000+" },
    tips: [
      "Take the 52-step descent to reach the temple",
      "Visit Nageshwar Jyotirlinga nearby",
      "Bet Dwarka island is worth exploring",
      "Sunset at Dwarka beach is beautiful"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to March, Janmashtami",
    nearbyAttractions: ["Nageshwar Jyotirlinga", "Bet Dwarka", "Rukmini Temple"],
    facilities: ["VIP Darshan", "Prasad Counter", "Dharamshala", "Parking"]
  },
  {
    id: "akshardham-gandhinagar",
    name: "Akshardham Temple",
    location: "Gandhinagar",
    region: "gujarat",
    type: "temple",
    image: getPlaceholderImage("temple", 3),
    tagline: "Magnificent complex showcasing Indian culture",
    openTime: "9:30 AM",
    closeTime: "7:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "A cultural complex dedicated to Bhagwan Swaminarayan featuring stunning architecture, exhibitions, gardens, and the water show.",
    history: "Built by BAPS Swaminarayan Sanstha, inaugurated in 1992. Showcases 10,000 years of Indian culture.",
    architecture: "Traditional Swaminarayan architecture with 6,000 tonnes of pink sandstone",
    averageExpenses: { budget: "₹400-700", mid: "₹1200-1800", premium: "₹3000+" },
    tips: [
      "Water show in evening is spectacular",
      "Plan at least 4-5 hours for full experience",
      "No mobile phones or bags allowed inside",
      "Boat ride through Indian history is amazing"
    ],
    rating: 4.7,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Adalaj Stepwell", "Sabarmati Ashram", "Gandhinagar Capital Complex"],
    facilities: ["Lockers", "Food Court", "Exhibitions", "Water Show", "Parking"]
  },
  {
    id: "ambaji-temple",
    name: "Ambaji Temple",
    location: "Ambaji, Banaskantha",
    region: "gujarat",
    type: "temple",
    image: getPlaceholderImage("temple", 4),
    tagline: "One of the 51 Shakti Peethas",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    darshanTimings: "5:00 AM - 9:00 PM (Aarti: 7:00 AM, 12:00 PM, 7:30 PM)",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: true,
    vipPassPrice: 200,
    importance: "One of the 51 Shakti Peethas where the heart of Goddess Sati fell. The temple has no idol - just a Shri Yantra.",
    history: "Ancient temple mentioned in various Puranas. The current structure has been renovated multiple times.",
    architecture: "Simple temple with marble exterior, features holy Shri Yantra",
    averageExpenses: { budget: "₹500-800", mid: "₹1500-2200", premium: "₹3500+" },
    tips: [
      "Take ropeway to Gabbar Hill for panoramic views",
      "Visit during Bhadarvi Poonam fair (September)",
      "The temple has no idol, only a Shri Yantra",
      "Mount Abu is nearby (42 km)"
    ],
    rating: 4.6,
    bestTimeToVisit: "October to March, Bhadarvi Poonam",
    nearbyAttractions: ["Gabbar Hill", "Kumbharia Jain Temple", "Mount Abu"],
    facilities: ["VIP Darshan", "Ropeway", "Dharamshala", "Parking"]
  },
  // Forts
  {
    id: "champaner-pavagadh",
    name: "Champaner-Pavagadh",
    location: "Panchmahal",
    region: "gujarat",
    type: "fort",
    image: getPlaceholderImage("fort", 1),
    tagline: "UNESCO World Heritage Site with Hindu-Islamic architecture",
    openTime: "6:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "A UNESCO World Heritage Site showcasing perfect blend of Hindu and Islamic architecture. Features the Kalika Mata Temple atop the hill.",
    history: "Capital of Gujarat Sultanate in 15th-16th century. Contains mosques, palaces, and the ancient Kalika Mata Temple.",
    architecture: "Mix of Hindu Maru-Gurjara and Indo-Islamic architecture",
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2500", premium: "₹4000+" },
    tips: [
      "Take the ropeway or trek to Pavagadh",
      "Kalika Mata Temple on top is ancient",
      "Jami Masjid is architectural marvel",
      "Carry water for the trek"
    ],
    rating: 4.5,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Jami Masjid", "Kalika Mata Temple", "Vadodara Palace"],
    facilities: ["Ropeway", "Parking", "Guides", "Restrooms"]
  },
  {
    id: "lakhota-palace-fort",
    name: "Lakhota Palace & Fort",
    location: "Jamnagar",
    region: "gujarat",
    type: "fort",
    image: getPlaceholderImage("fort", 2),
    tagline: "Palace-fort on Lakhota Lake with museum",
    openTime: "10:30 AM",
    closeTime: "5:30 PM",
    entryFee: { indian: 10, foreign: 100 },
    vipPassAvailable: false,
    importance: "A beautiful palace-fort built in the middle of Lakhota Lake. Houses a museum with artifacts from the Jadeja dynasty.",
    history: "Built by Jam Ranmalji in the 19th century. It served as a royal residence and fort.",
    architecture: "Rajput architecture with arched bridges connecting to the mainland",
    averageExpenses: { budget: "₹300-500", mid: "₹800-1200", premium: "₹2000+" },
    tips: [
      "Visit the museum inside",
      "Best views during sunset",
      "Boating available in the lake",
      "Combine with Bala Hanuman Temple visit"
    ],
    rating: 4.0,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Bala Hanuman Temple", "Darbargadh", "Khijadiya Bird Sanctuary"],
    facilities: ["Museum", "Parking", "Boating"]
  },
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav",
    location: "Patan",
    region: "gujarat",
    type: "fort",
    image: getPlaceholderImage("fort", 3),
    tagline: "UNESCO Heritage stepwell - Queen's Stepwell",
    openTime: "8:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "A UNESCO World Heritage Site, this is the finest example of stepwell architecture. Featured on the new ₹100 note.",
    history: "Built in the 11th century by Queen Udayamati in memory of her husband King Bhimdev I of the Solanki dynasty.",
    architecture: "Maru-Gurjara architectural style with 7 levels and over 500 principal sculptures",
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" },
    tips: [
      "Featured on the Indian ₹100 note",
      "Visit in morning for best photographs",
      "Hire a guide to understand the sculptures",
      "Combine with Patan Patola weaving visit"
    ],
    rating: 4.7,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Sahasralinga Talav", "Patan Patola Centre", "Modhera Sun Temple"],
    facilities: ["Guides", "Parking", "Restrooms"]
  },
  {
    id: "palitana-temples",
    name: "Palitana Temples",
    location: "Palitana, Bhavnagar",
    region: "gujarat",
    type: "temple",
    image: getPlaceholderImage("temple", 5),
    tagline: "900+ Jain temples atop Shatrunjaya Hill",
    openTime: "6:30 AM",
    closeTime: "6:30 PM",
    entryFee: { indian: 0, foreign: 0 },
    vipPassAvailable: false,
    importance: "The most sacred pilgrimage site for Jains with over 900 temples built over 900 years. One of the holiest places in Jainism.",
    history: "Temples built from the 11th century onwards. The first Tirthankara Rishabhadeva is said to have attained Moksha here.",
    architecture: "White marble temples in Maru-Gurjara style covering two hill summits",
    averageExpenses: { budget: "₹600-1000", mid: "₹1800-2500", premium: "₹4000+" },
    tips: [
      "Start climb at 6:30 AM - takes 2-3 hours",
      "3,800+ steps to climb - prepare physically",
      "Dolis (palanquins) available for hire",
      "Carry water and light food"
    ],
    rating: 4.8,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Ghogha Beach", "Bhavnagar Palace", "Velavadar Blackbuck Sanctuary"],
    facilities: ["Doli Service", "Dharamshala", "Prasad Counter"]
  },
  {
    id: "modhera-sun-temple",
    name: "Sun Temple Modhera",
    location: "Modhera, Mehsana",
    region: "gujarat",
    type: "temple",
    image: getPlaceholderImage("temple", 6),
    tagline: "11th-century sun temple with stunning architecture",
    openTime: "7:00 AM",
    closeTime: "6:00 PM",
    entryFee: { indian: 40, foreign: 600 },
    vipPassAvailable: false,
    importance: "Built so that the first rays of the sun fall on the main deity during equinox. Though no worship takes place now, it's an architectural marvel.",
    history: "Built by Bhima I of the Chaulukya dynasty in 1026-27 CE. Similar in design to the Konark Sun Temple.",
    architecture: "Maru-Gurjara architecture with intricate carvings and the Surya Kund",
    averageExpenses: { budget: "₹400-600", mid: "₹1000-1500", premium: "₹2500+" },
    tips: [
      "Visit during equinox for special sunlight effect",
      "Surya Kund stepwell is magnificent",
      "Evening light and sound show available",
      "No active worship - it's an ASI monument"
    ],
    rating: 4.6,
    bestTimeToVisit: "October to March, Equinox days",
    nearbyAttractions: ["Rani ki Vav", "Patan", "Little Rann of Kutch"],
    facilities: ["Guides", "Light Show", "Parking", "Restrooms"]
  }
];

// Helper function to check if site is currently open
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
  const openMinutes = parseTime(openTime);
  const closeMinutes = parseTime(closeTime);

  return currentTime >= openMinutes && currentTime <= closeMinutes;
};

// Get sites by region
export const getSitesByRegion = (regionId: string): HeritageSite[] => {
  return heritageSitesData.filter((site) => site.region === regionId);
};

// Get site by ID
export const getSiteById = (siteId: string): HeritageSite | undefined => {
  return heritageSitesData.find((site) => site.id === siteId);
};

// Get sites by type
export const getSitesByType = (type: SiteType): HeritageSite[] => {
  return heritageSitesData.filter((site) => site.type === type);
};
