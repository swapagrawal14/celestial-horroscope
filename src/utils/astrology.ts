
import { getZodiacSign, getDailyHoroscope, getLifePathNumber, getNumerologyMeaning } from './zodiacData';

export interface UserProfile {
  birthdate?: Date;
  zodiacSign?: string;
  lifePathNumber?: number;
}

// Global state to store user profile (in a real app, we'd use proper state management)
let userProfile: UserProfile = {
  birthdate: undefined,
  zodiacSign: undefined,
  lifePathNumber: undefined,
};

export const setUserBirthdate = (date: Date): void => {
  userProfile.birthdate = date;
  
  // Get month and day
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();
  
  // Calculate zodiac sign
  const zodiacSignObj = getZodiacSign(month, day);
  if (zodiacSignObj) {
    userProfile.zodiacSign = zodiacSignObj.name;
  }
  
  // Calculate life path number
  userProfile.lifePathNumber = getLifePathNumber(date);
};

export const getUserProfile = (): UserProfile => {
  return { ...userProfile };
};

export const getUserHoroscope = (): string => {
  if (!userProfile.zodiacSign) {
    return "Please set your birthdate to receive your personalized horoscope.";
  }
  return getDailyHoroscope(userProfile.zodiacSign);
};

export const getUserNumerology = (): string => {
  if (!userProfile.lifePathNumber) {
    return "Please set your birthdate to discover your life path number.";
  }
  return getNumerologyMeaning(userProfile.lifePathNumber);
};

export const generateRandomInsight = (): string => {
  const insights = [
    "Your intuitive powers are heightened today. Listen to your inner voice.",
    "A surprising connection from the past may resurface. Be open to its message.",
    "The alignment of Venus suggests harmony in relationships. Express your feelings openly.",
    "Jupiter's position indicates expansion in your financial sector. Consider new opportunities.",
    "Mercury retrograde ends soon. Prepare for clearer communication and forward movement.",
    "The new moon brings fertile ground for setting intentions. What seeds will you plant?",
    "Saturn's influence asks you to establish boundaries. What deserves your energy?",
    "Uranus brings unexpected changes. Stay flexible and embrace innovation.",
    "Neptune's dreamy influence enhances your creativity. Make time for artistic pursuits.",
    "Pluto's transformative energy helps you release what no longer serves you.",
  ];
  
  return insights[Math.floor(Math.random() * insights.length)];
};

// For demo purposes - setting a default profile
// In a real app, we'd get this from user input
setUserBirthdate(new Date(1990, 5, 15)); // June 15, 1990
