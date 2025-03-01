import { Star, Sun, Moon, CalendarDays } from "lucide-react";

export interface ZodiacSign {
  name: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  ruling_planet: string;
  date_range: string;
  traits: string[];
  color: string;
  icon: typeof Star;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    ruling_planet: "Mars",
    date_range: "March 21 - April 19",
    traits: ["Bold", "Independent", "Courageous", "Impulsive"],
    color: "zodiac-aries",
    icon: Star,
  },
  {
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    ruling_planet: "Venus",
    date_range: "April 20 - May 20",
    traits: ["Patient", "Reliable", "Practical", "Devoted"],
    color: "zodiac-taurus",
    icon: Star,
  },
  {
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    ruling_planet: "Mercury",
    date_range: "May 21 - June 20",
    traits: ["Adaptable", "Curious", "Affectionate", "Versatile"],
    color: "zodiac-gemini",
    icon: Star,
  },
  {
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    ruling_planet: "Moon",
    date_range: "June 21 - July 22",
    traits: ["Loyal", "Emotional", "Sympathetic", "Intuitive"],
    color: "zodiac-cancer",
    icon: Star,
  },
  {
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    ruling_planet: "Sun",
    date_range: "July 23 - August 22",
    traits: ["Generous", "Proud", "Creative", "Passionate"],
    color: "zodiac-leo",
    icon: Star,
  },
  {
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    ruling_planet: "Mercury",
    date_range: "August 23 - September 22",
    traits: ["Analytical", "Practical", "Diligent", "Perfectionist"],
    color: "zodiac-virgo",
    icon: Star,
  },
  {
    name: "Libra",
    symbol: "♎",
    element: "Air",
    ruling_planet: "Venus",
    date_range: "September 23 - October 22",
    traits: ["Diplomatic", "Graceful", "Fair-minded", "Social"],
    color: "zodiac-libra",
    icon: Star,
  },
  {
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    ruling_planet: "Pluto",
    date_range: "October 23 - November 21",
    traits: ["Passionate", "Determined", "Intuitive", "Mysterious"],
    color: "zodiac-scorpio",
    icon: Star,
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    ruling_planet: "Jupiter",
    date_range: "November 22 - December 21",
    traits: ["Optimistic", "Adventurous", "Independent", "Restless"],
    color: "zodiac-sagittarius",
    icon: Star,
  },
  {
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    ruling_planet: "Saturn",
    date_range: "December 22 - January 19",
    traits: ["Disciplined", "Responsible", "Self-control", "Practical"],
    color: "zodiac-capricorn",
    icon: Star,
  },
  {
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    ruling_planet: "Uranus",
    date_range: "January 20 - February 18",
    traits: ["Progressive", "Original", "Independent", "Humanitarian"],
    color: "zodiac-aquarius",
    icon: Star,
  },
  {
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    ruling_planet: "Neptune",
    date_range: "February 19 - March 20",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
    color: "zodiac-pisces",
    icon: Star,
  },
];

export interface PlanetaryInfluence {
  planet: string;
  position: string;
  effect: string;
  icon: typeof Sun | typeof Moon | typeof Star;
  startDate: Date;
  endDate: Date;
}

// Current planetary influences
export const CURRENT_INFLUENCES: PlanetaryInfluence[] = [
  {
    planet: "Mercury",
    position: "in Gemini",
    effect: "Enhanced communication and quick thinking",
    icon: Star,
    startDate: new Date(2023, 4, 3),
    endDate: new Date(2023, 5, 27),
  },
  {
    planet: "Venus",
    position: "in Taurus",
    effect: "Strong relationships and appreciation for beauty",
    icon: Star,
    startDate: new Date(2023, 3, 29),
    endDate: new Date(2023, 5, 23),
  },
  {
    planet: "Mars",
    position: "in Cancer",
    effect: "Actions guided by emotions and intuition",
    icon: Star,
    startDate: new Date(2023, 4, 10),
    endDate: new Date(2023, 6, 5),
  },
  {
    planet: "Jupiter",
    position: "in Aries",
    effect: "Expansion of self and new beginnings",
    icon: Star,
    startDate: new Date(2022, 11, 20),
    endDate: new Date(2023, 4, 16),
  },
  {
    planet: "Saturn",
    position: "Retrograde in Pisces",
    effect: "Reflection on spiritual growth and limitations",
    icon: Star,
    startDate: new Date(2023, 5, 17),
    endDate: new Date(2023, 10, 4),
  },
];

export const getZodiacSign = (month: number, day: number): ZodiacSign | null => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return ZODIAC_SIGNS[0]; // Aries
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return ZODIAC_SIGNS[1]; // Taurus
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return ZODIAC_SIGNS[2]; // Gemini
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return ZODIAC_SIGNS[3]; // Cancer
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return ZODIAC_SIGNS[4]; // Leo
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return ZODIAC_SIGNS[5]; // Virgo
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return ZODIAC_SIGNS[6]; // Libra
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return ZODIAC_SIGNS[7]; // Scorpio
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return ZODIAC_SIGNS[8]; // Sagittarius
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return ZODIAC_SIGNS[9]; // Capricorn
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return ZODIAC_SIGNS[10]; // Aquarius
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return ZODIAC_SIGNS[11]; // Pisces
  }
  return null;
};

export const getCurrentPlanetaryInfluences = (): PlanetaryInfluence[] => {
  const today = new Date();
  return CURRENT_INFLUENCES.filter(
    influence => influence.startDate <= today && influence.endDate >= today
  );
};

// Placeholder for daily horoscopes
export const getDailyHoroscope = (sign: string): string => {
  const horoscopes: Record<string, string> = {
    "Aries": "Today is all about fresh beginnings. Your natural energy is at its peak, making it an excellent day to start new projects or take the initiative in matters close to your heart. Trust your instincts, but remember to think before acting impulsively.",
    "Taurus": "Stability and comfort are highlighted today. Focus on building security in your finances and relationships. Your practical nature will help you make wise decisions, especially regarding resources. Take time to appreciate the beauty around you.",
    "Gemini": "Your communication skills are enhanced today. It's a perfect time for important conversations, writing, or networking. Your natural curiosity leads you to valuable information. Be open to different perspectives and ideas.",
    "Cancer": "Emotional matters take center stage today. Your intuition is particularly strong, guiding you through any sensitive situations. Home and family connections bring comfort. Take time for self-care and nurturing your inner world.",
    "Leo": "Your creative energy shines brightly today. It's an excellent time for self-expression and bringing joy to others. Leadership opportunities may arise—embrace them with your natural confidence. Recognition for past efforts may come your way.",
    "Virgo": "Details matter today. Your analytical skills help you solve complex problems and improve systems. Health and wellness routines benefit from your attention. Don't forget to balance your perfectionist tendencies with self-compassion.",
    "Libra": "Harmony in relationships is your focus today. Your diplomatic skills help resolve conflicts and create balance. Aesthetic pursuits bring satisfaction. Take time to consider what truly brings equilibrium to your life.",
    "Scorpio": "Transformation is highlighted today. Your intensity helps you dive deep and uncover hidden truths. Financial matters may require your attention. Trust your powerful intuition when making important decisions.",
    "Sagittarius": "Adventure calls to you today. Your optimistic outlook opens doors to new possibilities and perspectives. Learning and travel (even mental journeys) are favored. Keep your vision broad while attending to necessary details.",
    "Capricorn": "Professional matters and long-term goals are emphasized today. Your discipline and practical approach lead to steady progress. Authority figures may play an important role. Remember that even small steps contribute to your larger ambitions.",
    "Aquarius": "Innovation and social connections are highlighted today. Your unique perspective helps you see possibilities others miss. Humanitarian concerns may capture your attention. Embrace your originality while finding common ground with others.",
    "Pisces": "Your imaginative and compassionate nature is enhanced today. Creative and spiritual pursuits bring fulfillment. Your sensitivity helps you connect deeply with others. Remember to maintain boundaries to protect your energy.",
  };
  
  return horoscopes[sign] || "Your horoscope is currently unavailable. Check back later for cosmic insights.";
};

export const getLifePathNumber = (birthdate: Date): number => {
  const dateString = birthdate.toISOString().split('T')[0]; // format: YYYY-MM-DD
  const digits = dateString.replace(/-/g, '').split('').map(Number);
  const sum = digits.reduce((acc, curr) => acc + curr, 0);
  
  // Keep reducing until we get a single digit (unless it's 11, 22, or 33)
  let result = sum;
  while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
    const digits = result.toString().split('').map(Number);
    result = digits.reduce((acc, curr) => acc + curr, 0);
  }
  
  return result;
};

export const getNumerologyMeaning = (number: number): string => {
  const meanings: Record<number, string> = {
    1: "The Leader: Independent, creative, original, and ambitious. You're a natural-born leader with strong determination.",
    2: "The Mediator: Cooperative, diplomatic, and sensitive. You excel in partnerships and bring harmony to relationships.",
    3: "The Expressive: Creative, social, and optimistic. You have a gift for communication and bring joy to others.",
    4: "The Builder: Practical, reliable, and disciplined. You create solid foundations and value stability.",
    5: "The Freedom Seeker: Versatile, adventurous, and progressive. You embrace change and crave variety in life.",
    6: "The Nurturer: Responsible, caring, and harmonious. You're a natural caretaker with a strong sense of duty.",
    7: "The Seeker: Analytical, intuitive, and perfectionist. You have profound inner wisdom and spiritual awareness.",
    8: "The Achiever: Ambitious, authoritative, and successful. You excel in business and manifest material abundance.",
    9: "The Humanitarian: Compassionate, selfless, and visionary. You see the bigger picture and work for collective good.",
    11: "The Intuitive: Inspirational, idealistic, and spiritually aware. You're a visionary with heightened intuition.",
    22: "The Master Builder: Practical, visionary, and powerful. You can transform dreams into reality on a large scale.",
    33: "The Master Teacher: Compassionate, nurturing, and inspiring. You elevate others through wisdom and service.",
  };
  
  return meanings[number] || "This number contains unique vibrations that blend multiple numerological influences.";
};
