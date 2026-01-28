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
  {
    id: 'nagpur-heritage-trail',
    name: 'Nagpur Heritage Trail',
    region: 'Nagpur',
    tagline: 'Explore the Orange City\'s rich historical legacy',
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
      {
        name: 'Deekshabhoomi',
        type: 'site',
        duration: '1.5 hours',
        time: '7:00 AM',
        description: 'Start your day at this sacred Buddhist monument where Dr. B.R. Ambedkar embraced Buddhism',
        tips: 'Early morning is peaceful and less crowded'
      },
      {
        name: 'Sitabuldi Fort',
        type: 'site',
        duration: '1 hour',
        time: '9:00 AM',
        description: 'Historic fort built by Bhonsle rulers, witness to the 1817 battle',
        tips: 'Check for drone show timings'
      },
      {
        name: 'Haldiram\'s Nagpur',
        type: 'food',
        duration: '45 mins',
        time: '10:30 AM',
        description: 'Famous for Nagpuri Saoji cuisine and sweets',
        tips: 'Try the famous Nagpuri Orange Barfi'
      },
      {
        name: 'Dragon Palace Temple',
        type: 'site',
        duration: '1 hour',
        time: '11:30 AM',
        description: 'Unique Japanese-style Buddhist temple with stunning architecture',
        tips: 'Photography allowed in outer areas'
      },
      {
        name: 'Koradi Mata Temple',
        type: 'site',
        duration: '1 hour',
        time: '1:00 PM',
        description: 'Ancient temple dedicated to Goddess Koradi Devi',
        tips: 'Evening aarti is spectacular'
      },
      {
        name: 'Local Lunch',
        type: 'food',
        duration: '1 hour',
        time: '2:30 PM',
        description: 'Enjoy authentic Vidarbha cuisine at a local restaurant',
        tips: 'Try Saoji mutton and Patodi curry'
      },
      {
        name: 'Ramtek Fort & Temple',
        type: 'site',
        duration: '2 hours',
        time: '4:00 PM',
        description: 'Ancient fort with Ram temple, associated with Lord Rama\'s visit',
        tips: 'Sunset views from the fort are breathtaking'
      },
      {
        name: 'Light & Sound Show',
        type: 'site',
        duration: '1 hour',
        time: '7:00 PM',
        description: 'End your day with the evening light show at Ramtek',
        tips: 'Book tickets in advance on weekends'
      }
    ],
    transportOptions: ['Private car (recommended)', 'Auto-rickshaw for city sites', 'Ola/Uber available'],
    whatToPack: ['Comfortable walking shoes', 'Water bottle', 'Sun protection', 'Camera', 'Cash for entry fees']
  },
  {
    id: 'hampi-day-explorer',
    name: 'Hampi Day Explorer',
    region: 'Karnataka',
    tagline: 'Walk through the ruins of the Vijayanagara Empire',
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
      {
        name: 'Virupaksha Temple',
        type: 'site',
        duration: '1.5 hours',
        time: '6:00 AM',
        description: 'Ancient functioning temple dedicated to Lord Shiva, UNESCO World Heritage',
        tips: 'Attend the morning puja for a spiritual experience'
      },
      {
        name: 'Hampi Bazaar',
        type: 'shopping',
        duration: '30 mins',
        time: '8:00 AM',
        description: 'Walk through the ancient market street with ruins of old shops',
        tips: 'Great for photos in morning light'
      },
      {
        name: 'Breakfast at Mango Tree',
        type: 'food',
        duration: '45 mins',
        time: '8:30 AM',
        description: 'Iconic riverside restaurant with stunning boulder views',
        tips: 'Try the banana pancakes'
      },
      {
        name: 'Vittala Temple Complex',
        type: 'site',
        duration: '2 hours',
        time: '9:30 AM',
        description: 'Famous for the Stone Chariot and Musical Pillars',
        tips: 'Hire a guide to understand the acoustic marvel of musical pillars'
      },
      {
        name: 'Royal Enclosure',
        type: 'site',
        duration: '1.5 hours',
        time: '12:00 PM',
        description: 'Royal complex with Queen\'s Bath, Lotus Mahal, and Elephant Stables',
        tips: 'Carry umbrella for sun protection'
      },
      {
        name: 'Lunch at Tamarind Tree',
        type: 'food',
        duration: '1 hour',
        time: '1:30 PM',
        description: 'Traditional South Indian thali in a heritage setting',
        tips: 'Rest during peak afternoon heat'
      },
      {
        name: 'Hemakuta Hill',
        type: 'site',
        duration: '1 hour',
        time: '4:00 PM',
        description: 'Cluster of temples with panoramic views of Hampi',
        tips: 'Best spot for sunset photography'
      },
      {
        name: 'Light & Sound Show',
        type: 'site',
        duration: '1 hour',
        time: '6:30 PM',
        description: 'Evening show narrating the glory of Vijayanagara Empire',
        tips: 'Reach 15 mins early for good seats'
      }
    ],
    transportOptions: ['Rented bicycle (adventurous)', 'Auto-rickshaw tour', 'Private car with driver'],
    whatToPack: ['Comfortable shoes (lots of walking)', 'Sunscreen & hat', 'Water (minimum 2L)', 'Snacks', 'Power bank']
  },
  {
    id: 'madurai-temple-circuit',
    name: 'Madurai Temple Circuit',
    region: 'Tamil Nadu',
    tagline: 'Experience the temple city\'s divine grandeur',
    image: '/src/assets/sites/meenakshi-temple.jpg',
    difficulty: 'easy',
    totalDuration: '8-10 hours',
    bestTime: 'October to March',
    estimatedCost: {
      budget: '₹600-1,000',
      comfort: '₹1,500-2,500',
      premium: '₹3,000-4,500'
    },
    highlights: ['Meenakshi Temple', 'Thirumalai Nayak Palace', 'Gandhi Museum', 'Evening Ceremony'],
    stops: [
      {
        name: 'Meenakshi Amman Temple',
        type: 'site',
        duration: '3 hours',
        time: '5:00 AM',
        description: 'Marvel at the 14 gopurams and 33,000 sculptures of this architectural wonder',
        tips: 'Early morning has shortest queues; special darshan available'
      },
      {
        name: 'Temple Tank & Hall of Pillars',
        type: 'site',
        duration: '45 mins',
        time: '8:30 AM',
        description: 'Golden Lotus Tank and the famous musical pillars hall',
        tips: 'Listen to the different musical notes from each pillar'
      },
      {
        name: 'Traditional Breakfast',
        type: 'food',
        duration: '45 mins',
        time: '9:30 AM',
        description: 'Authentic South Indian breakfast near temple',
        tips: 'Try idli with Madurai special kothu parotta'
      },
      {
        name: 'Thirumalai Nayak Palace',
        type: 'site',
        duration: '1.5 hours',
        time: '10:30 AM',
        description: '17th-century Indo-Saracenic palace with grand courtyard',
        tips: 'Sound & light show in evening is worth revisiting'
      },
      {
        name: 'Gandhi Memorial Museum',
        type: 'site',
        duration: '1 hour',
        time: '12:30 PM',
        description: 'Museum housing Gandhi\'s blood-stained clothes worn during assassination',
        tips: 'Free entry; moving historical experience'
      },
      {
        name: 'Lunch - Murugan Idli',
        type: 'food',
        duration: '1 hour',
        time: '2:00 PM',
        description: 'Famous chain known for soft idlis and chutneys',
        tips: 'Try their signature podi idli'
      },
      {
        name: 'Rest Break',
        type: 'rest',
        duration: '1.5 hours',
        time: '3:00 PM',
        description: 'Beat the afternoon heat - rest at hotel or café',
        tips: 'Madurai gets very hot; this break is essential'
      },
      {
        name: 'Evening Ceremony at Meenakshi',
        type: 'site',
        duration: '1.5 hours',
        time: '8:30 PM',
        description: 'Witness the mesmerizing night ceremony carrying Lord Sundareswarar',
        tips: 'Reach by 8 PM to get a good viewing spot'
      }
    ],
    transportOptions: ['Walking (temple area)', 'Auto-rickshaw', 'City bus', 'Ola/Uber'],
    whatToPack: ['Temple-appropriate clothing', 'Socks (temples require barefoot)', 'Carry bag for shoes', 'Small towel']
  },
  {
    id: 'gujarat-heritage-day',
    name: 'Ahmedabad Heritage Walk',
    region: 'Gujarat',
    tagline: 'Discover India\'s first UNESCO World Heritage City',
    image: '/src/assets/sites/adalaj-stepwell.jpg',
    difficulty: 'easy',
    totalDuration: '9-11 hours',
    bestTime: 'November to February',
    estimatedCost: {
      budget: '₹700-1,200',
      comfort: '₹1,800-2,800',
      premium: '₹4,000-6,000'
    },
    highlights: ['Adalaj Stepwell', 'Sabarmati Ashram', 'Old City Pols', 'Sidi Saiyyed Mosque'],
    stops: [
      {
        name: 'Sabarmati Ashram',
        type: 'site',
        duration: '1.5 hours',
        time: '6:30 AM',
        description: 'Gandhi\'s residence and headquarters of the freedom struggle',
        tips: 'Peaceful morning walk along the riverfront'
      },
      {
        name: 'Breakfast at Lucky Restaurant',
        type: 'food',
        duration: '45 mins',
        time: '8:30 AM',
        description: 'Iconic Ahmedabad breakfast spot since 1955',
        tips: 'Famous for their chai and bun maska'
      },
      {
        name: 'Old City Heritage Walk',
        type: 'site',
        duration: '2.5 hours',
        time: '9:30 AM',
        description: 'Explore ancient pols (neighborhoods) with intricate wooden architecture',
        tips: 'Join the official AMC heritage walk for best experience'
      },
      {
        name: 'Sidi Saiyyed Mosque',
        type: 'site',
        duration: '30 mins',
        time: '12:30 PM',
        description: 'Famous for the iconic Tree of Life stone lattice window',
        tips: 'Best photographed from outside'
      },
      {
        name: 'Gujarati Thali Lunch',
        type: 'food',
        duration: '1 hour',
        time: '1:00 PM',
        description: 'Unlimited traditional Gujarati thali experience',
        tips: 'Try Agashiye or Vishalla for authentic experience'
      },
      {
        name: 'Adalaj Stepwell',
        type: 'site',
        duration: '1.5 hours',
        time: '3:00 PM',
        description: '15th-century five-story stepwell with stunning Indo-Islamic architecture',
        tips: 'The light filtering down is magical in afternoon'
      },
      {
        name: 'Akshardham Temple',
        type: 'site',
        duration: '2 hours',
        time: '5:00 PM',
        description: 'Magnificent modern temple complex with exhibitions',
        tips: 'Water show starts at 7:15 PM (seasonal)'
      },
      {
        name: 'Manek Chowk Night Market',
        type: 'food',
        duration: '1 hour',
        time: '8:00 PM',
        description: 'Famous street food destination with endless options',
        tips: 'Try the chocolate sandwich and Kulfi'
      }
    ],
    transportOptions: ['Walking (Old City)', 'Auto-rickshaw', 'BRTS Bus', 'Private car for Adalaj'],
    whatToPack: ['Comfortable walking shoes', 'Camera', 'Light clothing', 'Sunglasses', 'Cash for street food']
  },
  {
    id: 'maharashtra-fort-trail',
    name: 'Pune Fort Trail',
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
    highlights: ['Sinhagad Fort', 'Shaniwarwada', 'Shivneri Fort', 'Authentic Marathi Cuisine'],
    stops: [
      {
        name: 'Sinhagad Fort Trek',
        type: 'site',
        duration: '3 hours',
        time: '5:30 AM',
        description: 'Sunrise trek to the iconic Lion\'s Fort with panoramic views',
        tips: 'Start early to avoid heat; carry water and snacks'
      },
      {
        name: 'Kaka chi Wada Breakfast',
        type: 'food',
        duration: '45 mins',
        time: '9:00 AM',
        description: 'Famous for pithla-bhakri and curd at the fort top',
        tips: 'The curd and pithla here is legendary'
      },
      {
        name: 'Shaniwarwada Palace',
        type: 'site',
        duration: '1.5 hours',
        time: '11:00 AM',
        description: 'Seat of the Peshwa rulers, heart of Maratha Empire',
        tips: 'Light & Sound show in evening is excellent'
      },
      {
        name: 'Lunch at Shreyas',
        type: 'food',
        duration: '1 hour',
        time: '1:00 PM',
        description: 'Traditional unlimited Maharashtrian thali',
        tips: 'Try solkadhi and modak for dessert'
      },
      {
        name: 'Aga Khan Palace',
        type: 'site',
        duration: '1 hour',
        time: '2:30 PM',
        description: 'Italian-style palace where Gandhi was imprisoned',
        tips: 'Beautiful gardens for peaceful walk'
      },
      {
        name: 'Pataleshwar Caves',
        type: 'site',
        duration: '45 mins',
        time: '4:00 PM',
        description: '8th-century rock-cut cave temple dedicated to Shiva',
        tips: 'Hidden gem in the middle of the city'
      },
      {
        name: 'FC Road Evening Walk',
        type: 'shopping',
        duration: '1 hour',
        time: '5:00 PM',
        description: 'Famous street for shopping and street food',
        tips: 'Try Vada Pav at various stalls'
      },
      {
        name: 'Shaniwarwada Light & Sound',
        type: 'site',
        duration: '1 hour',
        time: '7:30 PM',
        description: 'Spectacular show narrating Maratha history',
        tips: 'Book tickets online; Hindi show at 7:30 PM'
      }
    ],
    transportOptions: ['Private car (essential for fort)', 'Two-wheeler for city', 'Ola/Uber'],
    whatToPack: ['Trekking shoes', 'Torch/flashlight', 'Energy bars', 'First aid kit', 'Rain gear (monsoon)']
  }
];
