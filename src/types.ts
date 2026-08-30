export interface ProgramItem {
  id: string;
  title: string;
  category: 'camp' | 'stem' | 'lifeskills' | 'career' | 'sports' | 'wellness';
  icon: string;
  summary: string;
  description: string;
  skillsTaught: string[];
  ageGroup: string;
  duration: string;
  highlight: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
  source?: string;
  trend?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  highlight: string;
}

export interface SponsorshipTier {
  id: string;
  title: string;
  amountZAR: number;
  description: string;
  impact: string;
  includes: string[];
  popular?: boolean;
}

export interface CampScheduleSlot {
  time: string;
  activity: string;
  category: string;
  description: string;
  pillar: 'Fitness' | 'Life Skills' | 'STEM' | 'Personal Development' | 'Reflection';
}

export interface PartnerOrg {
  name: string;
  role: string;
  badge: string;
}
