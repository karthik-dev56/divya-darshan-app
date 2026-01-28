export interface DayTripStop {
  name: string;
  type: 'site' | 'food' | 'shopping' | 'rest';
  duration: string;
  time: string;
  description: string;
  tips?: string;
}

export interface DayTrip {
  id: string;
  name: string;
  region: string;
  tagline: string;
  image: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  totalDuration: string;
  bestTime: string;
  estimatedCost: {
    budget: string;
    comfort: string;
    premium: string;
  };
  highlights: string[];
  stops: DayTripStop[];
  transportOptions: string[];
  whatToPack: string[];
}

export const dayTripsData: DayTrip[] = [
  // NAGPUR REGION - 4 trips
  {
    id: 'nagpur-heritage-trail',
    name: 'Nagpur Heritage Trail',
    region: 'Nagpur',
    tagline: 'Explore the Orange City\'s rich Buddhist & Maratha legacy',
    image: '/src/assets/sites/sitabuldi-fort.jpg',
    difficulty: 'easy',
    totalDuration: '8-10 hours',
    bestTime: 'October to February',
    estimatedCost: {
      budget: '₹800-1,200',
      comfort: '₹1,500-2,500',
      premium: '₹3,500-5,000'
    },
    highlights: ['Sitabuldi Fort', 'Deekshabhoomi', 'Dragon Palace Temple', 'Ramtek Fort'],
    stops: [
      { name: 'Deekshabhoomi', type: 'site', duration: '1.5 hours', time: '7:00 AM', description: 'Sacred Buddhist monument where Dr. B.R. Ambedkar embraced Buddhism with 500,000 followers in 1956', tips: 'Early morning is peaceful; free entry' },
      { name: 'Sitabuldi Fort', type: 'site', duration: '1 hour', time: '9:00 AM', description: 'Historic fort built by Bhonsle rulers, witness to the 1817 Anglo-Maratha battle', tips: 'Entry ₹25; drone shows on special occasions' },
      { name: 'Haldiram\'s Nagpur', type: 'food', duration: '45 mins', time: '10:30 AM', description: 'Famous for Nagpuri Saoji cuisine and authentic sweets', tips: 'Try the famous Orange Barfi ₹400/kg' },
      { name: 'Dragon Palace Temple', type: 'site', duration: '1 hour', time: '11:30 AM', description: 'Japanese-style Buddhist temple with stunning pagoda architecture', tips: 'Photography allowed; free entry' },
      { name: 'Koradi Mata Temple', type: 'site', duration: '1 hour', time: '1:00 PM', description: 'Ancient temple on Koradi Lake, dating back to Vakataka period', tips: 'Evening aarti at 7 PM is spectacular' },
      { name: 'Vidarbha Lunch', type: 'food', duration: '1 hour', time: '2:30 PM', description: 'Authentic Saoji mutton and Patodi curry at local restaurant', tips: 'Budget ₹200-350 per person' },
      { name: 'Ramtek Fort & Temple', type: 'site', duration: '2 hours', time: '4:00 PM', description: 'Ancient fort-temple complex associated with Lord Rama\'s visit during exile', tips: 'Entry ₹15; sunset views breathtaking' },
      { name: 'Ramtek Light Show', type: 'site', duration: '1 hour', time: '7:00 PM', description: 'Evening light & sound show narrating Ramtek\'s mythology', tips: 'Tickets ₹50; shows at 7 & 8 PM' }
    ],
    transportOptions: ['Private car ₹2,500-3,000', 'Auto-rickshaw ₹800-1,200', 'Ola/Uber available'],
    whatToPack: ['Comfortable walking shoes', 'Water bottle', 'Sun protection', 'Camera', 'Cash for entry fees']
  },
  {
    id: 'nagpur-vakataka-trail',
    name: 'Vakataka Heritage Circuit',
    region: 'Nagpur',
    tagline: 'Discover 5th-century cave temples and ancient ruins',
    image: '/src/assets/sites/vakataka-caves.jpg',
    difficulty: 'moderate',
    totalDuration: '10-12 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹1,000-1,500',
      comfort: '₹2,500-3,500',
      premium: '₹5,000-7,000'
    },
    highlights: ['Nagardhan Fort', 'Mansar Lake', 'Pavnar Ashram', 'Markanda Temple'],
    stops: [
      { name: 'Nagardhan Fort', type: 'site', duration: '1.5 hours', time: '6:30 AM', description: 'Ancient Vakataka capital with excavated ruins dating to 4th-5th century CE', tips: 'ASI site; entry ₹25; best in morning light' },
      { name: 'Mansar Lake & Ruins', type: 'site', duration: '2 hours', time: '8:30 AM', description: 'Royal Vakataka lake with Pravareshwar Temple ruins and Hidimba Tekdi', tips: 'Scenic boat rides available ₹100' },
      { name: 'Local Breakfast', type: 'food', duration: '45 mins', time: '11:00 AM', description: 'Traditional poha and kachori at Ramtek town', tips: 'Budget ₹60-100 per person' },
      { name: 'Ramtek Temples', type: 'site', duration: '1.5 hours', time: '12:00 PM', description: 'Complex of 14 temples including Kalidasa\'s Meghdoot inspiration', tips: 'Remove footwear; carry socks' },
      { name: 'Lunch Break', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Maharashtrian thali at highway restaurant', tips: 'Try tarri poha; ₹150-250' },
      { name: 'Pavnar Ashram', type: 'site', duration: '1 hour', time: '3:30 PM', description: 'Vinoba Bhave\'s ashram, center of Bhoodan movement', tips: 'Peaceful meditation spot; donations welcome' },
      { name: 'Markanda Temple', type: 'site', duration: '1.5 hours', time: '5:00 PM', description: '12th-century Hemadpanthi temple with Khajuraho-style sculptures', tips: 'Entry free; photography allowed' }
    ],
    transportOptions: ['Private car essential ₹3,000-3,500', 'Innova with driver ₹4,500'],
    whatToPack: ['Trekking shoes', 'Sun hat', 'Insect repellent', 'Binoculars', 'Water 2L minimum']
  },
  {
    id: 'nagpur-spiritual-journey',
    name: 'Spiritual Vidarbha Trail',
    region: 'Nagpur',
    tagline: 'Sacred temples and peaceful ashrams of Eastern Maharashtra',
    image: '/src/assets/sites/poddareshwar-temple.jpg',
    difficulty: 'easy',
    totalDuration: '7-8 hours',
    bestTime: 'Year-round',
    estimatedCost: {
      budget: '₹500-800',
      comfort: '₹1,200-1,800',
      premium: '₹2,500-3,500'
    },
    highlights: ['Poddareshwar Temple', 'Tekdi Ganesh', 'Koradi Mata', 'Shani Mandir'],
    stops: [
      { name: 'Poddareshwar Ram Mandir', type: 'site', duration: '1 hour', time: '6:00 AM', description: 'Beautiful marble temple with morning aarti, peaceful atmosphere', tips: 'Aarti at 6 AM; free prasad distribution' },
      { name: 'Tekdi Ganesh Temple', type: 'site', duration: '45 mins', time: '7:30 AM', description: 'Hilltop Ganesh temple, one of Nagpur\'s most revered shrines', tips: 'Tuesdays very crowded; visit weekdays' },
      { name: 'Temple Breakfast', type: 'food', duration: '30 mins', time: '8:30 AM', description: 'Traditional puri-sabzi near Tekdi temple', tips: 'Famous local joints; ₹50-80' },
      { name: 'Koradi Mata Temple', type: 'site', duration: '1.5 hours', time: '9:30 AM', description: 'Shakti peeth on scenic lake, ancient Vakataka-era temple', tips: 'Navaratri celebrations are spectacular' },
      { name: 'Shani Mandir Telangkhedi', type: 'site', duration: '45 mins', time: '11:30 AM', description: 'Powerful Shani temple, especially crowded on Saturdays', tips: 'Oil offering tradition; carry mustard oil' },
      { name: 'Vegetarian Lunch', type: 'food', duration: '1 hour', time: '12:30 PM', description: 'Pure veg thali at temple area restaurants', tips: 'Satvik food; ₹120-180' },
      { name: 'Rest & Darshan', type: 'rest', duration: '1 hour', time: '2:00 PM', description: 'Rest during afternoon heat, optional temple visits', tips: 'AC restaurants available nearby' },
      { name: 'Evening Aarti at Koradi', type: 'site', duration: '1 hour', time: '6:30 PM', description: 'Grand evening aarti ceremony at Koradi Mata', tips: 'Arrive early for front spots' }
    ],
    transportOptions: ['Auto-rickshaw circuit ₹600-800', 'Ola/Uber', 'Self-drive ₹1,500'],
    whatToPack: ['Temple-appropriate clothing', 'Prasad containers', 'Small cash for donations', 'Water bottle']
  },

  // MAHARASHTRA REGION - 4 trips
  {
    id: 'pune-fort-trail',
    name: 'Pune Maratha Fort Trail',
    region: 'Maharashtra',
    tagline: 'Relive Maratha glory through historic forts',
    image: '/src/assets/sites/sinhagad-fort.jpg',
    difficulty: 'moderate',
    totalDuration: '10-12 hours',
    bestTime: 'September to February',
    estimatedCost: {
      budget: '₹800-1,300',
      comfort: '₹2,000-3,000',
      premium: '₹4,500-6,500'
    },
    highlights: ['Sinhagad Fort', 'Shaniwarwada', 'Aga Khan Palace', 'Light & Sound Show'],
    stops: [
      { name: 'Sinhagad Fort Trek', type: 'site', duration: '3 hours', time: '5:30 AM', description: 'Sunrise trek to the iconic Lion\'s Fort, site of Tanaji Malusare\'s heroic battle', tips: 'Trek starts from Sinhagad base; entry ₹20' },
      { name: 'Kaka chi Wada Breakfast', type: 'food', duration: '45 mins', time: '9:00 AM', description: 'Legendary pithla-bhakri and fresh curd at fort-top stalls', tips: 'Cash only; ₹150-200 per person' },
      { name: 'Shaniwarwada Palace', type: 'site', duration: '1.5 hours', time: '11:00 AM', description: 'Seat of the Peshwa rulers, heart of 18th-century Maratha Empire', tips: 'Entry ₹25 Indians; audio guide ₹100' },
      { name: 'Lunch at Shreyas', type: 'food', duration: '1 hour', time: '1:00 PM', description: 'Unlimited Maharashtrian thali with 15+ items', tips: 'Reservations recommended; ₹400 per person' },
      { name: 'Aga Khan Palace', type: 'site', duration: '1 hour', time: '2:30 PM', description: 'Italian-style palace where Gandhi was imprisoned; Kasturba\'s samadhi', tips: 'Entry ₹25; beautiful gardens' },
      { name: 'Pataleshwar Caves', type: 'site', duration: '45 mins', time: '4:00 PM', description: '8th-century rock-cut Shiva temple in heart of city', tips: 'Free entry; hidden gem' },
      { name: 'FC Road Food Walk', type: 'shopping', duration: '1 hour', time: '5:00 PM', description: 'Famous street for shopping and legendary street food', tips: 'Try Wadeshwar\'s vada pav' },
      { name: 'Shaniwarwada Light Show', type: 'site', duration: '1 hour', time: '7:30 PM', description: 'Spectacular show narrating Maratha history in fort complex', tips: 'Tickets ₹50; Hindi show 7:30 PM' }
    ],
    transportOptions: ['Private car essential ₹3,500', 'Bike rental ₹400/day', 'Ola/Uber for city'],
    whatToPack: ['Trekking shoes', 'Torch/flashlight', 'Energy bars', 'First aid kit', 'Rain gear (monsoon)']
  },
  {
    id: 'ajanta-ellora-day',
    name: 'Ajanta-Ellora Day Explorer',
    region: 'Maharashtra',
    tagline: 'UNESCO World Heritage cave temples in a day',
    image: '/src/assets/sites/kailash-temple-ellora.jpg',
    difficulty: 'moderate',
    totalDuration: '12-14 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹1,200-1,800',
      comfort: '₹3,000-4,500',
      premium: '₹6,000-8,000'
    },
    highlights: ['Ellora Caves', 'Kailasa Temple', 'Daulatabad Fort', 'Bibi Ka Maqbara'],
    stops: [
      { name: 'Ellora Caves', type: 'site', duration: '4 hours', time: '6:00 AM', description: 'Rock-cut Buddhist, Hindu & Jain caves spanning 600 years (600-1000 CE)', tips: 'Entry ₹40 Indians; closed Tuesdays' },
      { name: 'Kailasa Temple (Cave 16)', type: 'site', duration: 'Included', time: '8:00 AM', description: 'World\'s largest monolithic rock excavation, carved top-down', tips: 'Allow 1.5 hours just for this masterpiece' },
      { name: 'Light Breakfast', type: 'food', duration: '30 mins', time: '10:30 AM', description: 'Quick snacks at Ellora cafeteria', tips: 'Limited options; carry some snacks' },
      { name: 'Daulatabad Fort', type: 'site', duration: '2 hours', time: '11:30 AM', description: 'Impregnable 12th-century fortress with innovative defenses', tips: 'Entry ₹25; torch needed for dark passages' },
      { name: 'Lunch at Aurangabad', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Famous Aurangabadi biryani and naan-qaliya', tips: 'Try Tara Pan Centre for best biryani; ₹250' },
      { name: 'Bibi Ka Maqbara', type: 'site', duration: '1 hour', time: '3:30 PM', description: '17th-century Mughal tomb, called "Mini Taj Mahal"', tips: 'Entry ₹25; beautiful at sunset' },
      { name: 'Ellora Light & Sound Show', type: 'site', duration: '1 hour', time: '6:30 PM', description: 'Spectacular show illuminating the cave history', tips: 'Tickets ₹50; seasonal timings' }
    ],
    transportOptions: ['Private car from Aurangabad ₹2,500', 'MSRTC tour bus ₹800', 'Shared tempo ₹400'],
    whatToPack: ['Comfortable shoes (lots of stairs)', 'Torch/flashlight', 'Water 2L', 'Sun protection', 'Camera']
  },
  {
    id: 'konkan-coast-temples',
    name: 'Konkan Temple Trail',
    region: 'Maharashtra',
    tagline: 'Coastal heritage from Ganpati Pule to Kolhapur',
    image: '/src/assets/sites/ambaji-temple.jpg',
    difficulty: 'moderate',
    totalDuration: '12-14 hours',
    bestTime: 'October to May',
    estimatedCost: {
      budget: '₹1,500-2,000',
      comfort: '₹3,500-4,500',
      premium: '₹6,000-8,000'
    },
    highlights: ['Ganpati Pule', 'Mahalaxmi Kolhapur', 'Jyotirlinga temples', 'Coastal cuisine'],
    stops: [
      { name: 'Mahalaxmi Temple Kolhapur', type: 'site', duration: '2 hours', time: '5:00 AM', description: 'One of 51 Shakti Peethas, ancient Ambabai temple', tips: 'Morning darshan less crowded; special aarti 5 AM' },
      { name: 'Temple Breakfast', type: 'food', duration: '45 mins', time: '7:30 AM', description: 'Famous Kolhapuri misal pav near temple', tips: 'Padma Guest House misal is legendary; ₹80' },
      { name: 'Panhala Fort', type: 'site', duration: '2 hours', time: '9:00 AM', description: 'Massive Maratha fort, Shivaji\'s favorite retreat', tips: 'Entry free; stunning views' },
      { name: 'Rankala Lake', type: 'rest', duration: '45 mins', time: '11:30 AM', description: 'Scenic lake with boating and heritage monuments', tips: 'Boat rides ₹50; good photo spot' },
      { name: 'Kolhapuri Lunch', type: 'food', duration: '1 hour', time: '12:30 PM', description: 'Authentic Kolhapuri mutton thali with tambda-pandhra rassa', tips: 'Opal restaurant famous; ₹350 non-veg thali' },
      { name: 'Jotiba Temple', type: 'site', duration: '1.5 hours', time: '2:30 PM', description: 'Hilltop temple of Jyotirlinga with panoramic views', tips: '3.5 km climb or vehicle road available' },
      { name: 'Kopeshwar Temple', type: 'site', duration: '1.5 hours', time: '5:00 PM', description: '12th-century Shiva temple with unique roofless sanctum', tips: 'Architectural marvel; entry free' }
    ],
    transportOptions: ['Private car essential ₹4,000', 'Tempo traveller for groups ₹6,000'],
    whatToPack: ['Temple clothing', 'Umbrella', 'Mosquito repellent', 'Light jacket', 'Cash for prasad']
  },

  // KARNATAKA REGION - 4 trips
  {
    id: 'hampi-day-explorer',
    name: 'Hampi Heritage Explorer',
    region: 'Karnataka',
    tagline: 'Walk through the ruins of mighty Vijayanagara Empire',
    image: '/src/assets/sites/hampi-vittala.jpg',
    difficulty: 'moderate',
    totalDuration: '10-12 hours',
    bestTime: 'November to February',
    estimatedCost: {
      budget: '₹1,000-1,500',
      comfort: '₹2,500-3,500',
      premium: '₹5,000-7,000'
    },
    highlights: ['Vittala Temple', 'Virupaksha Temple', 'Stone Chariot', 'Royal Enclosure'],
    stops: [
      { name: 'Virupaksha Temple', type: 'site', duration: '1.5 hours', time: '6:00 AM', description: 'Ancient functioning temple dedicated to Lord Shiva, UNESCO World Heritage', tips: 'Attend morning puja at 6:30 AM; entry ₹40' },
      { name: 'Hampi Bazaar', type: 'shopping', duration: '30 mins', time: '8:00 AM', description: 'Walk through ancient market street with ruins of 15th-century shops', tips: 'Great for photos in morning light' },
      { name: 'Mango Tree Breakfast', type: 'food', duration: '45 mins', time: '8:30 AM', description: 'Iconic riverside restaurant with stunning boulder views', tips: 'Famous banana pancakes; ₹200' },
      { name: 'Vittala Temple Complex', type: 'site', duration: '2 hours', time: '9:30 AM', description: 'Famous Stone Chariot and 56 Musical Pillars, architectural marvel', tips: 'Hire guide ₹500 for acoustic demonstrations' },
      { name: 'Royal Enclosure', type: 'site', duration: '1.5 hours', time: '12:00 PM', description: 'Queen\'s Bath, Lotus Mahal, and Elephant Stables', tips: 'Combined ticket ₹40; carry umbrella' },
      { name: 'Tamarind Tree Lunch', type: 'food', duration: '1 hour', time: '1:30 PM', description: 'Traditional unlimited South Indian thali in heritage setting', tips: 'Rest during peak heat 2-4 PM' },
      { name: 'Hemakuta Hill Sunset', type: 'site', duration: '1.5 hours', time: '4:30 PM', description: 'Cluster of temples with 360° panoramic views of Hampi', tips: 'Best sunset photography spot' },
      { name: 'Light & Sound Show', type: 'site', duration: '1 hour', time: '6:30 PM', description: 'Evening show at Royal Enclosure narrating Vijayanagara glory', tips: 'Tickets ₹100; seasonal timings' }
    ],
    transportOptions: ['Rented bicycle ₹200/day', 'Auto tour ₹800-1,000', 'Moped ₹400/day'],
    whatToPack: ['Comfortable shoes', 'Sunscreen & hat', 'Water minimum 3L', 'Snacks', 'Power bank']
  },
  {
    id: 'badami-aihole-pattadakal',
    name: 'Chalukyan Triangle',
    region: 'Karnataka',
    tagline: 'Temple architecture evolution from 6th-8th century CE',
    image: '/src/assets/sites/badami-caves.jpg',
    difficulty: 'moderate',
    totalDuration: '10-12 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹1,200-1,800',
      comfort: '₹2,800-3,800',
      premium: '₹5,500-7,500'
    },
    highlights: ['Badami Caves', 'Aihole temples', 'Pattadakal UNESCO site', 'Agastya Lake'],
    stops: [
      { name: 'Badami Cave Temples', type: 'site', duration: '2.5 hours', time: '6:00 AM', description: 'Four rock-cut caves with Vishnu, Shiva & Jain sculptures', tips: 'Entry ₹25; Cave 3 has 18-armed Nataraja' },
      { name: 'Agastya Lake View', type: 'site', duration: '30 mins', time: '9:00 AM', description: 'Scenic lake flanked by sandstone cliffs and temples', tips: 'Boat rides available; beautiful reflections' },
      { name: 'Local Breakfast', type: 'food', duration: '45 mins', time: '9:30 AM', description: 'North Karnataka breakfast - jolada rotti and chutney', tips: 'Budget ₹80-120' },
      { name: 'Aihole Temple Complex', type: 'site', duration: '2 hours', time: '10:30 AM', description: '"Cradle of Indian temple architecture" with 125+ temples', tips: 'Entry ₹25; hire guide ₹400 for insights' },
      { name: 'Durga Temple', type: 'site', duration: 'Included', time: '11:30 AM', description: 'Unique apsidal temple with Buddhist influences', tips: 'Most photographed temple in Aihole' },
      { name: 'Lunch at Pattadakal', type: 'food', duration: '1 hour', time: '1:00 PM', description: 'Simple meals at roadside restaurants', tips: 'Limited options; ₹100-150' },
      { name: 'Pattadakal UNESCO Site', type: 'site', duration: '2.5 hours', time: '2:30 PM', description: 'Group of 7th-8th century temples blending Dravidian & Nagara styles', tips: 'Entry ₹40; Virupaksha Temple is highlight' },
      { name: 'Mahakuta Temple', type: 'site', duration: '1 hour', time: '5:30 PM', description: 'Ancient Shiva temple with sacred tank in forest setting', tips: 'Peaceful evening; natural spring water' }
    ],
    transportOptions: ['Private car essential ₹3,500', 'Taxi from Badami ₹2,500'],
    whatToPack: ['Sturdy shoes for climbing', 'Hat & sunscreen', 'Water 2L', 'Torch for caves', 'Camera']
  },
  {
    id: 'mysore-heritage-day',
    name: 'Mysore Royal Heritage',
    region: 'Karnataka',
    tagline: 'Experience the grandeur of Wodeyar dynasty',
    image: '/src/assets/sites/mysore-palace-light-show.jpg',
    difficulty: 'easy',
    totalDuration: '9-11 hours',
    bestTime: 'October to February',
    estimatedCost: {
      budget: '₹800-1,200',
      comfort: '₹2,000-3,000',
      premium: '₹4,000-6,000'
    },
    highlights: ['Mysore Palace', 'Chamundeshwari Temple', 'Palace Illumination', 'Silk shopping'],
    stops: [
      { name: 'Chamundeshwari Temple', type: 'site', duration: '1.5 hours', time: '6:00 AM', description: 'Hilltop temple atop Chamundi Hills, 12 km from city', tips: 'Drive up; 1000 steps optional; entry free' },
      { name: 'Nandi Bull Statue', type: 'site', duration: '20 mins', time: '8:00 AM', description: 'Massive 15-ft monolithic Nandi carved from single rock', tips: 'Good viewpoint for city panorama' },
      { name: 'Breakfast at Mylari', type: 'food', duration: '45 mins', time: '8:30 AM', description: 'Legendary Mylari dosa - fluffy, buttery, divine', tips: 'Opens 7 AM; queue up early; ₹100' },
      { name: 'Mysore Palace', type: 'site', duration: '2.5 hours', time: '10:00 AM', description: 'Indo-Saracenic palace with 98,000 bulb illumination', tips: 'Entry ₹100; audio guide ₹200; no phones inside' },
      { name: 'Jaganmohan Palace Art Gallery', type: 'site', duration: '1 hour', time: '12:30 PM', description: 'Royal collection with Ravi Varma paintings', tips: 'Entry ₹50; often overlooked gem' },
      { name: 'Lunch at Vinayaka', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Traditional Mysore thali with bisibelebath & payasa', tips: 'Full meal ₹200; banana leaf style' },
      { name: 'Devaraja Market Shopping', type: 'shopping', duration: '1.5 hours', time: '3:30 PM', description: '130-year-old market for Mysore silk, sandalwood, spices', tips: 'Bargain hard; authentic products' },
      { name: 'Palace Illumination', type: 'site', duration: '1 hour', time: '7:00 PM', description: '98,000 bulbs light up the palace - magical experience', tips: 'Sundays and holidays 7-7:45 PM; free' }
    ],
    transportOptions: ['Auto for day ₹1,200', 'Ola/Uber', 'Private car ₹2,500'],
    whatToPack: ['Comfortable walking shoes', 'Modest temple clothing', 'Cash for shopping', 'Camera', 'Water']
  },
  {
    id: 'belur-halebidu-day',
    name: 'Hoysala Temple Circuit',
    region: 'Karnataka',
    tagline: 'Exquisite 12th-century sculptural masterpieces',
    image: '/src/assets/sites/chennakeshava-belur.jpg',
    difficulty: 'easy',
    totalDuration: '8-10 hours',
    bestTime: 'Year-round',
    estimatedCost: {
      budget: '₹1,000-1,500',
      comfort: '₹2,200-3,200',
      premium: '₹4,500-6,000'
    },
    highlights: ['Chennakeshava Temple', 'Hoysaleswara Temple', 'Sravanabelagola', 'Intricate carvings'],
    stops: [
      { name: 'Chennakeshava Temple Belur', type: 'site', duration: '2 hours', time: '7:00 AM', description: 'Star-shaped temple with 48 unique Shilabalika (bracket figures)', tips: 'Entry free; guide ₹300 essential for understanding' },
      { name: 'Temple Breakfast', type: 'food', duration: '30 mins', time: '9:30 AM', description: 'Simple South Indian breakfast at temple town', tips: 'Idli-vada; ₹60-80' },
      { name: 'Hoysaleswara Temple Halebidu', type: 'site', duration: '2 hours', time: '10:30 AM', description: 'Twin-shrine temple with 12,000+ sculptural panels', tips: 'Entry free; finest Hoysala architecture' },
      { name: 'Kedareshwara Temple', type: 'site', duration: '45 mins', time: '1:00 PM', description: 'Less-visited gem with intricate carvings', tips: '2 km from main temple; often empty' },
      { name: 'Lunch at Halebidu', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Karnataka-style meals at local hotel', tips: 'Vegetarian thali ₹120-150' },
      { name: 'Sravanabelagola', type: 'site', duration: '2 hours', time: '4:00 PM', description: '57-ft monolithic Gommateshwara Bahubali statue on hilltop', tips: '614 steps; entry free; barefoot climbing' }
    ],
    transportOptions: ['Private car from Hassan ₹2,500', 'Private car from Mysore ₹4,000'],
    whatToPack: ['Comfortable shoes (lots of walking)', 'Socks for temples', 'Water', 'Hat', 'Camera with good zoom']
  },

  // TAMIL NADU REGION - 4 trips
  {
    id: 'madurai-temple-circuit',
    name: 'Madurai Temple Circuit',
    region: 'Tamil Nadu',
    tagline: 'Experience the temple city\'s 2,500-year divine grandeur',
    image: '/src/assets/sites/meenakshi-temple.jpg',
    difficulty: 'easy',
    totalDuration: '8-10 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹600-1,000',
      comfort: '₹1,500-2,500',
      premium: '₹3,000-4,500'
    },
    highlights: ['Meenakshi Temple', 'Thirumalai Nayak Palace', 'Evening Ceremony', 'Tamil cuisine'],
    stops: [
      { name: 'Meenakshi Amman Temple', type: 'site', duration: '3 hours', time: '5:00 AM', description: '14 gopurams, 33,000 sculptures, living heritage since 6th century', tips: 'Early morning for shortest queues; special darshan ₹100' },
      { name: 'Temple Tank & Pillars', type: 'site', duration: '45 mins', time: '8:30 AM', description: 'Golden Lotus Tank and famous musical pillars hall', tips: 'Listen to different notes from each pillar' },
      { name: 'Traditional Breakfast', type: 'food', duration: '45 mins', time: '9:30 AM', description: 'Authentic dosa and filter coffee near temple', tips: 'Try kothu parotta; ₹80-120' },
      { name: 'Thirumalai Nayak Palace', type: 'site', duration: '1.5 hours', time: '10:30 AM', description: '17th-century Indo-Saracenic palace with 240-ft dance hall', tips: 'Entry ₹50; evening show worth returning' },
      { name: 'Gandhi Memorial Museum', type: 'site', duration: '1 hour', time: '12:30 PM', description: 'Blood-stained cloth Gandhi wore during assassination', tips: 'Free entry; deeply moving' },
      { name: 'Murugan Idli Lunch', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Famous chain for soft idlis and variety chutneys', tips: 'Signature podi idli ₹80' },
      { name: 'Rest Break', type: 'rest', duration: '1.5 hours', time: '3:00 PM', description: 'Beat the heat - essential rest at hotel or café', tips: 'Madurai gets 40°C+; AC breaks crucial' },
      { name: 'Evening Ceremony', type: 'site', duration: '1.5 hours', time: '8:30 PM', description: 'Mesmerizing night procession of Lord Sundareswarar', tips: 'Reach 8 PM for viewing spot' }
    ],
    transportOptions: ['Walking (temple area)', 'Auto-rickshaw ₹500/day', 'Ola/Uber'],
    whatToPack: ['Temple-appropriate clothing', 'Socks (barefoot temples)', 'Shoe bag', 'Small towel', 'Water']
  },
  {
    id: 'thanjavur-chola-trail',
    name: 'Thanjavur Chola Trail',
    region: 'Tamil Nadu',
    tagline: 'UNESCO temples of the great Chola dynasty',
    image: '/src/assets/sites/thanjavur-temple.jpg',
    difficulty: 'easy',
    totalDuration: '9-11 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹700-1,100',
      comfort: '₹1,800-2,800',
      premium: '₹3,500-5,000'
    },
    highlights: ['Brihadeeswara Temple', 'Thanjavur Palace', 'Gangaikonda Temple', 'Bronze museum'],
    stops: [
      { name: 'Brihadeeswara Temple', type: 'site', duration: '2.5 hours', time: '6:00 AM', description: '1000-year-old granite marvel with 216-ft vimana, UNESCO World Heritage', tips: 'Entry free; sunrise light on gopuram spectacular' },
      { name: 'Shadow of Nandi', type: 'site', duration: 'Included', time: '8:00 AM', description: 'Witness the famous phenomenon - temple shadow doesn\'t fall on ground', tips: 'Morning best for observing' },
      { name: 'Palace Breakfast', type: 'food', duration: '45 mins', time: '9:00 AM', description: 'Traditional tiffin at hotel near palace', tips: 'Try Thanjavur filter coffee; ₹70' },
      { name: 'Thanjavur Palace & Museum', type: 'site', duration: '2 hours', time: '10:00 AM', description: 'Nayak-Maratha palace with Saraswati Mahal Library & Art Gallery', tips: 'Entry ₹50; amazing bronze collection' },
      { name: 'Schwartz Church', type: 'site', duration: '30 mins', time: '12:30 PM', description: '18th-century Danish church with Maratha royal tomb', tips: 'Often overlooked; beautiful architecture' },
      { name: 'Lunch', type: 'food', duration: '1 hour', time: '1:00 PM', description: 'Traditional banana leaf meals', tips: 'Sathars Hotel famous; ₹100 unlimited thali' },
      { name: 'Gangaikonda Cholapuram', type: 'site', duration: '2 hours', time: '3:00 PM', description: 'Rajendra Chola\'s capital with equally grand temple (55 km)', tips: 'Entry free; less crowded than Thanjavur' },
      { name: 'Darasuram Temple', type: 'site', duration: '1.5 hours', time: '5:30 PM', description: 'Airavatesvara Temple, third Great Living Chola Temple', tips: 'Exquisite stone chariot; entry free' }
    ],
    transportOptions: ['Private car essential ₹3,000', 'Train + auto combination'],
    whatToPack: ['Comfortable shoes', 'Temple wear', 'Sunscreen', 'Water 2L', 'Camera']
  },
  {
    id: 'mahabalipuram-day',
    name: 'Mahabalipuram Coastal Heritage',
    region: 'Tamil Nadu',
    tagline: 'Pallava rock-cut wonders by the sea',
    image: '/src/assets/sites/shore-temple.jpg',
    difficulty: 'easy',
    totalDuration: '8-9 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹700-1,100',
      comfort: '₹1,600-2,400',
      premium: '₹3,500-5,000'
    },
    highlights: ['Shore Temple', 'Pancha Rathas', 'Arjuna\'s Penance', 'Beach sunset'],
    stops: [
      { name: 'Shore Temple', type: 'site', duration: '1.5 hours', time: '6:00 AM', description: '8th-century structural temple overlooking Bay of Bengal, UNESCO site', tips: 'Entry ₹40; sunrise lighting magical' },
      { name: 'Arjuna\'s Penance', type: 'site', duration: '1 hour', time: '8:00 AM', description: 'World\'s largest open-air bas-relief, 27m x 9m rock carving', tips: 'Morning light best for photos' },
      { name: 'Krishna\'s Butter Ball', type: 'site', duration: '30 mins', time: '9:30 AM', description: 'Giant 250-ton balancing rock, natural wonder', tips: 'Fun photo opportunity' },
      { name: 'Seafood Breakfast', type: 'food', duration: '45 mins', time: '10:00 AM', description: 'Fresh catch at beach shacks', tips: 'Try prawns; ₹200-350' },
      { name: 'Pancha Rathas', type: 'site', duration: '1.5 hours', time: '11:00 AM', description: 'Five monolithic rock-cut temples shaped like chariots', tips: 'Entry ₹40; detailed Dravidian architecture' },
      { name: 'Mahishasuramardini Cave', type: 'site', duration: '45 mins', time: '1:00 PM', description: 'Stunning Durga panel and Vishnu reliefs', tips: 'Climb to hilltop for sea views' },
      { name: 'Lunch at Moonrakers', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Beachside restaurant with sea breeze', tips: 'Famous lobster; ₹400-600' },
      { name: 'Beach & Sculpture Workshops', type: 'shopping', duration: '2 hours', time: '3:30 PM', description: 'Watch artisans carve stone; browse sculpture shops', tips: 'Bargain for stone souvenirs' },
      { name: 'Beach Sunset', type: 'rest', duration: '1 hour', time: '6:00 PM', description: 'Spectacular Bay of Bengal sunset from shore', tips: 'Perfect end to the day' }
    ],
    transportOptions: ['ECR bus from Chennai ₹100', 'Cab from Chennai ₹2,500', 'Self-drive'],
    whatToPack: ['Light clothing', 'Sunscreen SPF50', 'Hat', 'Swimwear', 'Camera', 'Cash']
  },
  {
    id: 'rameswaram-pilgrimage',
    name: 'Rameswaram Sacred Circuit',
    region: 'Tamil Nadu',
    tagline: 'Walk the path of Lord Rama to Lanka',
    image: '/src/assets/sites/ramanathaswamy-temple.jpg',
    difficulty: 'easy',
    totalDuration: '10-12 hours',
    bestTime: 'October to April',
    estimatedCost: {
      budget: '₹800-1,200',
      comfort: '₹1,800-2,800',
      premium: '₹3,500-5,000'
    },
    highlights: ['Ramanathaswamy Temple', '22 Wells Bath', 'Pamban Bridge', 'Dhanushkodi'],
    stops: [
      { name: 'Ramanathaswamy Temple', type: 'site', duration: '3 hours', time: '5:00 AM', description: 'Jyotirlinga temple with world\'s longest corridor (1212m)', tips: 'Bathe in 22 wells (theerthams) ritual; allow 2 hours' },
      { name: 'Gandhamadhana Parvatham', type: 'site', duration: '45 mins', time: '8:30 AM', description: 'Hillock with Rama\'s footprint impression', tips: 'Panoramic island views' },
      { name: 'Temple Breakfast', type: 'food', duration: '45 mins', time: '9:30 AM', description: 'Simple South Indian breakfast near temple', tips: 'Pure veg only island; ₹60' },
      { name: 'Pamban Bridge View', type: 'site', duration: '30 mins', time: '10:30 AM', description: 'India\'s first sea bridge, engineering marvel since 1914', tips: 'Watch train crossing if timed right' },
      { name: 'Dhanushkodi Ghost Town', type: 'site', duration: '2 hours', time: '11:30 AM', description: 'Ruins of town destroyed in 1964 cyclone, land\'s end point', tips: 'Jeep safari ₹600; see two seas meeting' },
      { name: 'Seafood Lunch', type: 'food', duration: '1 hour', time: '2:00 PM', description: 'Fresh catch at Rameswaram town', tips: 'Try crab curry; ₹250-400' },
      { name: 'Abdul Kalam Memorial', type: 'site', duration: '1 hour', time: '3:30 PM', description: 'Tribute to India\'s Missile Man at his birthplace', tips: 'Entry ₹25; inspiring exhibits' },
      { name: 'Agni Theertham', type: 'site', duration: '45 mins', time: '5:00 PM', description: 'Sacred sea bathing ghat at temple shore', tips: 'Sunset ritual bathing' },
      { name: 'Evening Temple Aarti', type: 'site', duration: '1 hour', time: '7:00 PM', description: 'Grand evening puja at Ramanathaswamy', tips: 'Most powerful spiritual experience' }
    ],
    transportOptions: ['Train from Madurai ₹200', 'Private car ₹4,500 from Madurai'],
    whatToPack: ['Multiple sets of clothes (ritual bathing)', 'Plastic bags for wet items', 'Sunscreen', 'Water', 'Temple-appropriate dress']
  },

  // GUJARAT REGION - 4 trips
  {
    id: 'ahmedabad-heritage-walk',
    name: 'Ahmedabad Heritage Walk',
    region: 'Gujarat',
    tagline: 'India\'s first UNESCO World Heritage City',
    image: '/src/assets/sites/adalaj-stepwell.jpg',
    difficulty: 'easy',
    totalDuration: '9-11 hours',
    bestTime: 'November to February',
    estimatedCost: {
      budget: '₹700-1,200',
      comfort: '₹1,800-2,800',
      premium: '₹4,000-6,000'
    },
    highlights: ['Adalaj Stepwell', 'Sabarmati Ashram', 'Old City Pols', 'Street food'],
    stops: [
      { name: 'Sabarmati Ashram', type: 'site', duration: '1.5 hours', time: '6:30 AM', description: 'Gandhi\'s residence and headquarters of freedom struggle 1917-1930', tips: 'Entry free; morning peaceful riverfront walk' },
      { name: 'Lucky Restaurant Breakfast', type: 'food', duration: '45 mins', time: '8:30 AM', description: 'Iconic spot since 1955 for Irani chai and bun maska', tips: 'Must-try; ₹80-120' },
      { name: 'Old City Heritage Walk', type: 'site', duration: '2.5 hours', time: '9:30 AM', description: 'Ancient pols (neighborhoods) with intricate wooden architecture', tips: 'Join official AMC walk at 8 AM; ₹100' },
      { name: 'Sidi Saiyyed Mosque', type: 'site', duration: '30 mins', time: '12:30 PM', description: 'Iconic Tree of Life jali window, symbol of Ahmedabad', tips: 'Best from outside; IIM logo inspiration' },
      { name: 'Gujarati Thali Lunch', type: 'food', duration: '1 hour', time: '1:00 PM', description: 'Unlimited traditional thali at Agashiye or Vishalla', tips: 'Agashiye ₹700; Vishalla ₹500 with folk show' },
      { name: 'Adalaj Stepwell', type: 'site', duration: '1.5 hours', time: '3:00 PM', description: '15th-century five-story stepwell with stunning Indo-Islamic architecture', tips: 'Entry free; afternoon light magical' },
      { name: 'Akshardham Temple', type: 'site', duration: '2 hours', time: '5:00 PM', description: 'Magnificent modern temple complex with exhibitions', tips: 'Entry free; water show 7:15 PM (seasonal)' },
      { name: 'Manek Chowk Night Market', type: 'food', duration: '1 hour', time: '8:00 PM', description: 'Famous street food destination with endless options', tips: 'Must-try: chocolate sandwich, kulfi; ₹200 budget' }
    ],
    transportOptions: ['Walking (Old City)', 'Auto ₹600-800', 'Private car for Adalaj ₹2,000'],
    whatToPack: ['Comfortable walking shoes', 'Camera', 'Light clothing', 'Sunglasses', 'Cash for street food']
  },
  {
    id: 'dwarka-somnath-trail',
    name: 'Dwarka-Somnath Sacred Trail',
    region: 'Gujarat',
    tagline: 'Two of India\'s most revered Jyotirlingas',
    image: '/src/assets/sites/somnath-temple.jpg',
    difficulty: 'moderate',
    totalDuration: '14-16 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹1,500-2,200',
      comfort: '₹3,500-5,000',
      premium: '₹7,000-10,000'
    },
    highlights: ['Somnath Jyotirlinga', 'Dwarkadhish Temple', 'Nageshwar', 'Sea views'],
    stops: [
      { name: 'Somnath Temple', type: 'site', duration: '2 hours', time: '5:00 AM', description: 'First among 12 Jyotirlingas, rebuilt after countless invasions', tips: 'Mangal aarti 6 AM; entry free' },
      { name: 'Somnath Beach', type: 'site', duration: '30 mins', time: '7:30 AM', description: 'Sacred confluence of three rivers with Arabian Sea', tips: 'Sunrise photography' },
      { name: 'Temple Breakfast', type: 'food', duration: '30 mins', time: '8:00 AM', description: 'Simple satvik breakfast at trust premises', tips: '₹50; pure veg' },
      { name: 'Bhalka Tirth', type: 'site', duration: '45 mins', time: '9:00 AM', description: 'Where Lord Krishna was struck by hunter\'s arrow', tips: '5 km from Somnath; touching spot' },
      { name: 'Drive to Dwarka', type: 'rest', duration: '5 hours', time: '10:00 AM', description: '235 km scenic drive along Gujarat coast', tips: 'Stop at Porbandar for Gandhi birthplace if time' },
      { name: 'Lunch en route', type: 'food', duration: '1 hour', time: '1:00 PM', description: 'Gujarati thali at highway restaurant', tips: '₹200-300' },
      { name: 'Nageshwar Jyotirlinga', type: 'site', duration: '1 hour', time: '3:00 PM', description: 'One of 12 Jyotirlingas with 82-ft Shiva statue', tips: '15 km before Dwarka; quick darshan' },
      { name: 'Dwarkadhish Temple', type: 'site', duration: '2 hours', time: '5:00 PM', description: 'Krishna\'s legendary kingdom, char dham destination', tips: 'Evening aarti spectacular; entry free' },
      { name: 'Dwarka Sunset', type: 'site', duration: '1 hour', time: '7:00 PM', description: 'Sunset at Gomti Ghat and temple lit up', tips: 'Photography allowed outside' }
    ],
    transportOptions: ['Private car only ₹6,000-7,000', 'Innova recommended'],
    whatToPack: ['Temple clothing', 'Water bottles', 'Snacks for journey', 'Medicines', 'Chargers', 'Pillow for car']
  },
  {
    id: 'kutch-heritage-day',
    name: 'Kutch Cultural Odyssey',
    region: 'Gujarat',
    tagline: 'Handicrafts, white desert, and living traditions',
    image: '/src/assets/sites/kutch-drone-show.jpg',
    difficulty: 'moderate',
    totalDuration: '12-14 hours',
    bestTime: 'November to February (Rann Utsav)',
    estimatedCost: {
      budget: '₹1,800-2,500',
      comfort: '₹4,000-5,500',
      premium: '₹8,000-12,000'
    },
    highlights: ['White Rann', 'Bhuj palaces', 'Handicraft villages', 'Sunset spectacle'],
    stops: [
      { name: 'Aina Mahal Palace', type: 'site', duration: '1.5 hours', time: '8:00 AM', description: '18th-century "Hall of Mirrors" with Venetian glass work', tips: 'Entry ₹50; earthquake damage partially restored' },
      { name: 'Prag Mahal', type: 'site', duration: '1 hour', time: '10:00 AM', description: 'Gothic-Italian palace with clock tower views', tips: 'Entry ₹40; climb tower for panorama' },
      { name: 'Kutchi Breakfast', type: 'food', duration: '45 mins', time: '11:30 AM', description: 'Dabeli, khaman, and Kutchi chai', tips: 'Dabeli at local stalls ₹20-30' },
      { name: 'Bhujodi Village', type: 'shopping', duration: '2 hours', time: '12:30 PM', description: 'Living craft village - weaving, embroidery, bandhani', tips: 'Direct from artisans; fair prices' },
      { name: 'Lunch at Bhuj', type: 'food', duration: '1 hour', time: '3:00 PM', description: 'Traditional Kutchi thali with kharek', tips: 'Annapurna restaurant; ₹200' },
      { name: 'Drive to White Rann', type: 'site', duration: '2 hours', time: '4:00 PM', description: '80 km drive to the Great Rann of Kutch', tips: 'Rann Utsav permit ₹100' },
      { name: 'White Desert Sunset', type: 'site', duration: '2 hours', time: '5:30 PM', description: 'Endless white salt desert turning golden at sunset', tips: 'Best during full moon nights' },
      { name: 'Cultural Show', type: 'site', duration: '2 hours', time: '7:30 PM', description: 'Folk music, dance, and Kutchi cuisine at tent city', tips: 'During Rann Utsav only (Nov-Feb)' }
    ],
    transportOptions: ['Private car essential ₹4,000-5,000', '4x4 for Rann ₹6,000'],
    whatToPack: ['Warm layers (desert nights cold)', 'Sunglasses', 'Camera', 'Torch', 'Cash for crafts', 'Sunscreen']
  },
  {
    id: 'champaner-pavagadh',
    name: 'Champaner-Pavagadh Heritage',
    region: 'Gujarat',
    tagline: 'UNESCO archaeological park with Jain & Islamic marvels',
    image: '/src/assets/sites/champaner-pavagadh.jpg',
    difficulty: 'moderate',
    totalDuration: '8-10 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹800-1,200',
      comfort: '₹1,800-2,600',
      premium: '₹4,000-5,500'
    },
    highlights: ['Kalika Mata Temple', 'Jami Masjid', 'Kevda Masjid', 'Ropeway'],
    stops: [
      { name: 'Pavagadh Ropeway', type: 'site', duration: '30 mins', time: '7:00 AM', description: 'Cable car ride up sacred Pavagadh hill', tips: 'First ropeway 7 AM; ₹180 return' },
      { name: 'Kalika Mata Temple', type: 'site', duration: '1.5 hours', time: '8:00 AM', description: 'Shakti peeth on hilltop with panoramic views', tips: '250 steps from ropeway; morning darshan peaceful' },
      { name: 'Jain Temples', type: 'site', duration: '45 mins', time: '10:00 AM', description: '10th-century Jain temples on descent path', tips: 'Beautiful carvings; often missed' },
      { name: 'Light Breakfast', type: 'food', duration: '30 mins', time: '11:00 AM', description: 'Tea and snacks at base village', tips: 'Simple fare; ₹50' },
      { name: 'Champaner Archaeological Park', type: 'site', duration: '3 hours', time: '12:00 PM', description: 'UNESCO site with 114 monuments - mosques, gates, tombs', tips: 'Entry ₹40 (combined); hire cycle ₹100' },
      { name: 'Jami Masjid', type: 'site', duration: 'Included', time: '1:00 PM', description: 'Gujarat\'s finest mosque with 172 pillars', tips: 'Incredible acoustics; clap to test' },
      { name: 'Lunch Break', type: 'food', duration: '1 hour', time: '2:30 PM', description: 'Gujarati thali at nearby restaurant', tips: '₹150-200' },
      { name: 'Kevda & Nagina Mosques', type: 'site', duration: '1.5 hours', time: '4:00 PM', description: 'Elegant smaller mosques with intricate jalis', tips: 'Less crowded; great for photography' },
      { name: 'Sunset at Citadel', type: 'site', duration: '1 hour', time: '5:30 PM', description: 'Ancient fortress walls with sunset views', tips: 'Peaceful end to heritage walk' }
    ],
    transportOptions: ['Private car from Vadodara ₹2,500', 'Bus + auto ₹400'],
    whatToPack: ['Comfortable shoes (lots of walking)', 'Water 2L', 'Sun protection', 'Camera', 'Light snacks']
  }
];
