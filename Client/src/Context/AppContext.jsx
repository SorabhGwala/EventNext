import React, { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState("India");

 const eventsByLocation = {
  India:  [ 
  {
    id: "1",
    title: "India Art Fair 2025",
    date: "March 1-3, 2025",
    time: "11:00 AM - 7:00 PM",
    venue: "NSIC Exhibition Grounds, New Delhi",
    category: "Art",
    imageUrl: "https://images.unsplash.com/photo-1745558342856-3bfffb2a3c5f?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$10 - $30"
  },
  {
    id: "2",
    title: "Sunburn Music Festival",
    date: "December 27-29, 2025",
    time: "5:00 PM - Midnight",
    venue: "Vagator Beach, Goa",
    category: "Music",
    imageUrl: "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=1170&q=80",
    price: "$50 - $150"
  },
  {
    id: "3",
    title: "Jaipur Literature Festival",
    date: "January 24-28, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Diggi Palace, Jaipur",
    category: "Literature",
    imageUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1170&q=80",
    price: "Free - $20"
  },
  {
    id: "4",
    title: "Delhi International Jazz Festival",
    date: "October 7-9, 2025",
    time: "6:00 PM - 10:00 PM",
    venue: "Nehru Park, New Delhi",
    category: "Music",
    imageUrl: "https://images.unsplash.com/photo-1559752067-f30e5f277930?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Free"
  },
  {
    id: "5",
    title: "India Gaming Show",
    date: "February 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    venue: "Bangalore International Exhibition Centre",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1170&q=80",
    price: "$5 - $25"
  },
  {
    id: "6",
    title: "Kumbh Mela 2025",
    date: "April 1-30, 2025",
    time: "All day",
    venue: "Prayagraj",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1737562592785-a5485d58169f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.a1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Free"
  },
  {
    id: "7",
    title: "International Yoga Festival",
    date: "March 1-7, 2025",
    time: "7:00 AM - 8:00 PM",
    venue: "Parmarth Niketan, Rishikesh",
    category: "Health & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1170&q=80",
    price: "$20 - $50"
  },
  {
    id: "8",
    title: "Mumbai International Film Festival",
    date: "June 1-7, 2025",
    time: "Various times",
    venue: "National Centre for the Performing Arts, Mumbai",
    category: "Film",
    imageUrl: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=1170&q=80",
    price: "$10 - $70"
  },
  {
    id: "9",
    title: "Goa Carnival",
    date: "February 22-25, 2025",
    time: "All day",
    venue: "Panaji, Goa",
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1170&q=80",
    price: "Free"
  },
  {
    id: "10",
    title: "India Tech Summit",
    date: "August 10-12, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "HITEX Exhibition Center, Hyderabad",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1170&q=80",
    price: "$100 - $300"
  }
],
  Japan:  [ 
  {
    id: "11",
    title: "Tokyo International Art Fair",
    date: "May 17-18, 2025",
    time: "11:00 AM - 7:00 PM",
    venue: "Belle Salle Roppongi, Tokyo",
    category: "Art",
    imageUrl: "https://images.unsplash.com/photo-1586140711086-2f72f90b2d4b?auto=format&fit=crop&w=1170&q=80",
    price: "$15 - $40"
  },
  {
    id: "12",
    title: "Fuji Rock Festival 2025",
    date: "July 25-27, 2025",
    time: "12:00 PM - 11:00 PM",
    venue: "Naeba Ski Resort, Niigata",
    category: "Music",
    imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1170&q=80",
    price: "$100 - $350"
  },
  {
    id: "13",
    title: "Kyoto International Manga Anime Fair",
    date: "September 21-22, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Miyako Messe, Kyoto",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1598449972690-5c4530f54414?auto=format&fit=crop&w=1170&q=80",
    price: "$10 - $30"
  },
  {
    id: "14",
    title: "Sapporo Snow Festival",
    date: "February 4-11, 2025",
    time: "All day",
    venue: "Odori Park, Sapporo",
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1587271636172-cb251e8f62e0?auto=format&fit=crop&w=1170&q=80",
    price: "Free"
  },
  {
    id: "15",
    title: "Tokyo Game Show 2025",
    date: "September 18-21, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "Makuhari Messe, Chiba",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1620385019690-2cdd8330a93c?auto=format&fit=crop&w=1170&q=80",
    price: "$20 - $70"
  },
  {
    id: "16",
    title: "Gion Matsuri",
    date: "July 1-31, 2025",
    time: "Various times",
    venue: "Yasaka Shrine, Kyoto",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1581338834647-c09c8beccc79?auto=format&fit=crop&w=1170&q=80",
    price: "Free"
  },
  {
    id: "17",
    title: "Nagoya Women's Marathon",
    date: "March 9, 2025",
    time: "9:00 AM",
    venue: "Nagoya Dome, Nagoya",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1170&q=80",
    price: "$60 - $150"
  },
  {
    id: "18",
    title: "Osaka Jazz Festival",
    date: "October 10-12, 2025",
    time: "6:00 PM - 10:00 PM",
    venue: "Nakanoshima Park, Osaka",
    category: "Music",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f13931389?auto=format&fit=crop&w=1170&q=80",
    price: "$25 - $80"
  },
  {
    id: "19",
    title: "Tokyo International Film Festival",
    date: "October 26 - November 3, 2025",
    time: "Various times",
    venue: "Roppongi Hills, Tokyo",
    category: "Film",
    imageUrl: "https://images.unsplash.com/photo-1616003729585-58b771dd69d5?auto=format&fit=crop&w=1170&q=80",
    price: "$15 - $100"
  },
  {
    id: "20",
    title: "Zen & Wellness Retreat",
    date: "May 10-15, 2025",
    time: "6:00 AM - 8:00 PM",
    venue: "Mount Koya, Wakayama",
    category: "Health & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1518684079-0b5f20490ef6?auto=format&fit=crop&w=1170&q=80",
    price: "$200 - $600"
  }
],
  Australia: [ 
  {
    id: "21",
    title: "Melbourne International Comedy Festival",
    date: "March 26 - April 20, 2025",
    time: "Various times",
    venue: "Melbourne Town Hall, Melbourne",
    category: "Comedy",
    imageUrl: "https://images.unsplash.com/photo-1533228100847-e8d9f3c79a91?auto=format&fit=crop&w=1170&q=80",
    price: "$25 - $100"
  },
  {
    id: "22",
    title: "Splendour in the Grass",
    date: "July 25-27, 2025",
    time: "10:00 AM - 11:00 PM",
    venue: "North Byron Parklands, NSW",
    category: "Music",
    imageUrl: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1170&q=80",
    price: "$150 - $400"
  },
  {
    id: "23",
    title: "National Gallery of Australia – Indigenous Art Expo",
    date: "August 10-18, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "NGA, Canberra",
    category: "Art",
    imageUrl: "https://images.unsplash.com/photo-1611338622956-92c9b37b7c64?auto=format&fit=crop&w=1170&q=80",
    price: "$10 - $35"
  },
  {
    id: "24",
    title: "Australian Open 2025",
    date: "January 13-26, 2025",
    time: "10:00 AM - 10:00 PM",
    venue: "Rod Laver Arena, Melbourne",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1558138837-8f4c2e09799a?auto=format&fit=crop&w=1170&q=80",
    price: "$50 - $300"
  },
  {
    id: "25",
    title: "Vivid Sydney",
    date: "May 22 - June 13, 2025",
    time: "6:00 PM - 11:00 PM",
    venue: "Circular Quay, Sydney",
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1557982087-1785310f8d8e?auto=format&fit=crop&w=1170&q=80",
    price: "Free"
  },
  {
    id: "26",
    title: "Adelaide Fringe Festival",
    date: "February 14 - March 16, 2025",
    time: "Various times",
    venue: "Various venues, Adelaide",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1562003389-902fb6fe96cf?auto=format&fit=crop&w=1170&q=80",
    price: "$20 - $150"
  },
  {
    id: "27",
    title: "Techspo Sydney 2025",
    date: "November 6-7, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Hyatt Regency, Sydney",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1581091012184-7a9c704a6b7a?auto=format&fit=crop&w=1170&q=80",
    price: "$99 - $399"
  },
  {
    id: "28",
    title: "Brisbane Writers Festival",
    date: "September 4-8, 2025",
    time: "Various times",
    venue: "State Library of Queensland, Brisbane",
    category: "Literature",
    imageUrl: "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=1170&q=80",
    price: "Free - $40"
  },
  {
    id: "29",
    title: "Byron Bay Film Festival",
    date: "October 18-27, 2025",
    time: "Various times",
    venue: "Byron Community Centre, Byron Bay",
    category: "Film",
    imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1170&q=80",
    price: "$12 - $75"
  },
  {
    id: "30",
    title: "Bondi Yoga Festival",
    date: "December 5-7, 2025",
    time: "6:00 AM - 8:00 PM",
    venue: "Bondi Beach, Sydney",
    category: "Health & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1598514983030-fd7d3bcb1b35?auto=format&fit=crop&w=1170&q=80",
    price: "$30 - $100"
  }
],
  Sydney: [
  {
    id: "31",
    title: "Sydney Film Festival 2025",
    date: "June 5-16, 2025",
    time: "Various times",
    venue: "State Theatre, Sydney",
    category: "Film",
    imageUrl: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1170&q=80",
    price: "$20 - $70"
  },
  {
    id: "32",
    title: "Bondi Winter Magic Festival",
    date: "July 1-31, 2025",
    time: "10:00 AM - 9:00 PM",
    venue: "Bondi Beach, Sydney",
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1604382351602-96c57b54092b?auto=format&fit=crop&w=1170&q=80",
    price: "Free - $25"
  },
  {
    id: "33",
    title: "Sydney Science Festival",
    date: "August 10-18, 2025",
    time: "9:00 AM - 6:00 PM",
    venue: "Powerhouse Museum, Sydney",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1581091870622-6c6619436a1c?auto=format&fit=crop&w=1170&q=80",
    price: "$15 - $45"
  },
  {
    id: "34",
    title: "Sydney Outdoor Cinema Nights",
    date: "November 1-30, 2025",
    time: "7:30 PM - 10:00 PM",
    venue: "Centennial Park, Sydney",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1170&q=80",
    price: "$12 - $25"
  },
  {
    id: "35",
    title: "Sydney Dance Festival",
    date: "September 14-18, 2025",
    time: "10:00 AM - 8:00 PM",
    venue: "Carriageworks, Sydney",
    category: "Dance",
    imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1170&q=80",
    price: "$30 - $90"
  },
  {
    id: "36",
    title: "Harbourview Jazz Nights",
    date: "October 7-10, 2025",
    time: "6:00 PM - 11:00 PM",
    venue: "Opera Bar, Sydney",
    category: "Music",
    imageUrl: "https://images.unsplash.com/photo-1582735685691-cb7e7c7c63bc?auto=format&fit=crop&w=1170&q=80",
    price: "$25 - $60"
  },
  {
    id: "37",
    title: "Sydney Theatre Showcase",
    date: "August 22-28, 2025",
    time: "2:00 PM - 9:00 PM",
    venue: "Sydney Theatre Company",
    category: "Theatre",
    imageUrl: "https://images.unsplash.com/photo-1589927986089-35812388d1de?auto=format&fit=crop&w=1170&q=80",
    price: "$40 - $100"
  },
  {
    id: "38",
    title: "Taronga Zoo Night Safari",
    date: "July 10 - August 10, 2025",
    time: "5:30 PM - 9:00 PM",
    venue: "Taronga Zoo, Sydney",
    category: "Family",
    imageUrl: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=1170&q=80",
    price: "$35 - $75"
  },
  {
    id: "39",
    title: "Sydney Boat Show",
    date: "July 31 - August 4, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "ICC Sydney & Cockle Bay Marina",
    category: "Exhibition",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1170&q=80",
    price: "$25 - $80"
  },
  {
    id: "40",
    title: "Sydney Food Truck Carnival",
    date: "November 10-15, 2025",
    time: "12:00 PM - 10:00 PM",
    venue: "The Domain, Sydney",
    category: "Food & Drink",
    imageUrl: "https://images.unsplash.com/photo-1532635246-c56f89fef9b7?auto=format&fit=crop&w=1170&q=80",
    price: "Free Entry"
  }
],
};



  // Dynamically determine mockEvents based on selectedLocation
  const mockEvents = eventsByLocation[selectedLocation] || [];





 const trendingEvents = mockEvents.slice(0,8);
 const upcomingEvents = [...mockEvents].sort(() => Math.random() - 0.5).slice(0, 8);

 const getEventById = (id) => {
  return mockEvents.find(event => event.id === id);
};

 const mockCategories = [
  {
    id: "music",
    name: "Music",
    icon: "https://cdn-icons-png.flaticon.com/128/3659/3659784.png",
    count: 42
  },
  {
    id: "food-drink",
    name: "Food & Drink",
    icon: "https://cdn-icons-png.flaticon.com/128/2828/2828306.png",
    count: 28
  },
  {
    id: "sports",
    name: "Sports",
    icon: "https://cdn-icons-png.flaticon.com/128/857/857455.png",
    count: 15
  },
  {
    id: "arts",
    name: "Arts",
    icon: "https://cdn-icons-png.flaticon.com/128/5838/5838221.png",
    count: 24
  },
  {
    id: "business",
    name: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/3281/3281363.png",
    count: 18
  },
  {
    id: "comedy",
    name: "Comedy",
    icon: "https://cdn-icons-png.flaticon.com/128/3163/3163478.png",
    count: 10
  },
  {
    id: "nightlife",
    name: "Nightlife",
    icon: "https://cdn-icons-png.flaticon.com/128/4974/4974736.png",
    count: 38
  },
  {
    id: "health",
    name: "Health",
    icon: "https://cdn-icons-png.flaticon.com/128/2382/2382461.png",
    count: 12
  },
  {
    id: "family",
    name: "Family",
    icon: "https://cdn-icons-png.flaticon.com/128/3093/3093030.png",
    count: 17
  },
  {
    id: "workshops",
    name: "Workshops",
    icon: "https://cdn-icons-png.flaticon.com/128/9414/9414163.png",
    count: 22
  },
  {
    id: "festival",
    name: "Festivals",
    icon: "https://cdn-icons-png.flaticon.com/128/3600/3600412.png",
    count: 8
  },
  {
    id: "charity",
    name: "Charity",
    icon: "https://cdn-icons-png.flaticon.com/128/3349/3349218.png",
    count: 14
  }
];

const value={
    selectedLocation,
    setSelectedLocation,
    eventsByLocation,
    mockEvents,
    trendingEvents,
    upcomingEvents,
    getEventById,
    mockCategories
    };
    
   
    
    // const setMockEvents = (events) => {
    //     mockEvents = events;
    
// }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);






