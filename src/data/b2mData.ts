import { ProgramItem, StatItem, Testimonial, SponsorshipTier, CampScheduleSlot, PartnerOrg } from '../types';

export const ORG_DETAILS = {
  name: 'Boys 2 Men South Africa (B2M SA)',
  npoRegistration: '053-899 NPO',
  foundedYear: '2022',
  foundingMembers: 'Founded by three dedicated female community leaders in 2022 to uplift adolescent boys in fatherless homes',
  type: 'Non-Profit Organisation',
  chairperson: 'Ingihlengile Ntuli',
  incomeTaxNumber: '9152129277',
  csdNumber: 'MAAA 1468265',
  address: {
    street: 'D1510 Shangase Village, Thafamasi Area',
    municipality: 'Ndwedwe Local Municipality, Ward 18',
    province: 'KwaZulu-Natal',
    postalCode: '4342',
    country: 'South Africa',
  },
  contacts: {
    treasurer: {
      name: 'Mandisi Nkala',
      role: 'Treasurer',
      phone: '076 176 6768',
      email: 'mandisinkala@gmail.com',
    },
    secretary: {
      name: 'Zamamvula Cebekhulu',
      role: 'Secretary',
      phone: '068 454 5045',
      email: 'b2msouthafrica@gmail.com',
    },
    generalEmail: 'info@boys2mensa.co.za',
    donationsEmail: 'donations@boys2mensa.co.za',
  },
  banking: {
    bankName: 'FNB (First National Bank)',
    accountType: 'FNB Business Current Account',
    accountNumber: '63011495305',
    branchName: 'Musgrave',
    branchCode: '221126',
    referencePrompt: 'Name + Cell / Donor Name',
  },
  motto: 'Grooming Boys into Upright Leaders',
  vision: 'Creating a wholesome and healthy society through developing and nurturing boys into becoming responsible leaders in their communities.',
  mission: 'To empower adolescent boys (ages 9–18) growing up in fatherless homes through dedicated male mentorship, essential life skills, 4IR STEM education, career guidance, and character development.',
  provincialAlignment: 'Directly aligned with KZN Provincial Goal ("Provide social protection to vulnerable groups, especially in rural areas") and South Africa National Development Plan Priority #5 ("Social cohesion and safe communities").',
};

export const KEY_METRICS: StatItem[] = [
  {
    number: '40+',
    label: 'Adolescent Boys Mentored Yearly',
    sublabel: 'Ages 9 to 18 receiving multi-year guidance from adult male role models',
  },
  {
    number: '12+',
    label: 'Hands-on Vocational & Trade Skills',
    sublabel: 'Plumbing, Mechanics, First Aid, Carpentry, Cooking & Housekeeping',
  },
  {
    number: '4IR',
    label: 'STEM & Robotics Training',
    sublabel: 'AI concepts, Robotics assembly, Math acceleration & Drones for youth',
  },
  {
    number: 'KZN',
    label: 'Reach Across KwaZulu-Natal',
    sublabel: 'Targeting high-risk communities across KwaZulu-Natal to curb Grade 10 school dropouts',
  },
];

export const FATHERHOOD_CRISIS_STATS: StatItem[] = [
  {
    number: '1 in 2',
    label: 'SA Children in Fatherless Homes',
    sublabel: 'National surveys show over half of South African children live without their biological fathers.',
    source: 'South African Institute of Race Relations & Stats SA',
  },
  {
    number: '4 in 10',
    label: 'Have Not Seen Father in > 1 Year',
    sublabel: 'Leading to lack of male emotional modeling and guidance during critical developmental years.',
    source: 'Human Sciences Research Council (HSRC)',
  },
  {
    number: 'Grade 10',
    label: 'Vulnerable Dropout Threshold',
    sublabel: 'Without mentorship, adolescent boys in rural townships often disconnect from education.',
    source: 'B2M SA Field Research in KZN',
  },
  {
    number: '4x Higher',
    label: 'Emotional Vulnerability',
    sublabel: 'Studies highlight absent/dysfunctional father dynamics increase risk of internalized hostility & substance abuse.',
    source: 'HSRC Adolescent Study',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'annual-camp',
    title: 'Annual Mentorship Camp',
    category: 'camp',
    icon: 'Campfire',
    summary: 'A 5-day immersive residential camp providing an activity-based learning environment for fatherless boys.',
    description: 'Designed to break the cycle of learned helplessness and emotional hurt. Each day combines physical discipline, goal setting, trade crafts, STEM projects, and ends with intimate Youth Circles where boys process challenges in a safe, brotherly environment.',
    skillsTaught: ['Goal Setting & Planning', 'Youth Circle Processing', 'Survival & Outdoor Living', 'Emotional Resilience', 'Self-Control & Teamwork'],
    ageGroup: 'Ages 9 – 18 (divided into Junior 9-13 & Senior 14-18)',
    duration: '5 Days Intensive + Year-Round Mentorship Journey',
    highlight: 'Adult male mentors make multi-year commitments to journey with each cohort of boys.',
  },
  {
    id: 'life-skills',
    title: 'Practical Life Skills & Trade Workshop',
    category: 'lifeskills',
    icon: 'Wrench',
    summary: 'Hands-on practical vocational skills that a father normally teaches his son to foster independence.',
    description: 'Fatherless boys often miss out on practical household and trade basics. We run experiential workshops covering home mechanics, plumbing, carpentry, culinary essentials, and basic housekeeping so boys develop self-sufficiency and pride in their environment.',
    skillsTaught: ['Plumbing Repairs', 'Basic Mechanics', 'Carpentry & Sawing', 'Cooking & Nutrition', 'Housekeeping & Laundry', 'Certified First Aid'],
    ageGroup: 'Ages 9 – 18',
    duration: 'Interactive Modules across Camp & Weekend Workshops',
    highlight: 'Building practical self-reliance and dignity through useful craftsmanship.',
  },
  {
    id: 'stem-robotics',
    title: 'STEM & 4IR Digital Literacy',
    category: 'stem',
    icon: 'Bot',
    summary: 'Democratizing Fourth Industrial Revolution technology for disadvantaged boys.',
    description: 'Bridging the digital divide by familiarizing boys across KwaZulu-Natal with Artificial Intelligence concepts, robotics assembly, engineering principles, mathematical problem solving, drone piloting, and VR edutainment.',
    skillsTaught: ['AI Concepts & Ethics', 'Robotics Assembly', 'Engineering Principles', 'Applied Mathematics', 'Drone Piloting Basics', 'Computer Literacy'],
    ageGroup: 'Ages 9 – 18',
    duration: 'Integrated throughout Camps & School Holiday Clinics',
    highlight: 'Equipping youth for high-value future careers in technology and engineering.',
  },
  {
    id: 'career-guidance',
    title: 'KZN Career Guidance Weeks',
    category: 'career',
    icon: 'Compass',
    summary: 'Empowering high school students to explore tertiary options, write CVs, and register with CAO & NSFAS.',
    description: 'Strategic intervention across KwaZulu-Natal to reverse the trend of boys dropping out in Grade 10 to loiter at local tuck shops and salons. We provide hands-on assistance registering for tertiary bursaries (NSFAS) and applications (CAO), alongside TVET pathways, entrepreneurship panels, and job shadowing.',
    skillsTaught: ['CAO Registration Assistance', 'NSFAS Bursary Application', 'CV Writing & Interviewing', 'TVET & University Navigation', 'Startup & Entrepreneurship Exposure'],
    ageGroup: 'High School Learners (Grades 9 – 12)',
    duration: 'Annual Career Weeks & Follow-up Application Clinics',
    highlight: 'Direct partnerships with CAO, NSFAS, TVET Colleges, Universities, SEDA & SETAs.',
  },
  {
    id: 'sports-outdoor',
    title: 'Outdoor Athletics & Sports Clinics',
    category: 'sports',
    icon: 'Trophy',
    summary: 'Professional coaching in soccer, rugby, hockey, golf, and archery to build discipline and character.',
    description: 'Sport is used as a powerful metaphor for overcoming adversity in life. Juniors are coached in agility, motor skills, and ball control, while seniors compete in structured local touch rugby and soccer tournaments. We also introduce boys to new sports like field hockey, golf, and archery.',
    skillsTaught: ['Soccer & Touch Rugby', 'Field Hockey Clinic', 'Archery & Precision', 'Golf Basics', 'Agility & Fitness', 'Sportsmanship & Conflict Resolution'],
    ageGroup: 'Ages 9 – 18',
    duration: 'Daily Camp Coaching & Community Tournaments',
    highlight: 'Partnered with regional sports coaches and outdoor activity facilitators.',
  },
  {
    id: 'personal-dev-gbv',
    title: 'Character, Grooming & GBV Prevention',
    category: 'wellness',
    icon: 'ShieldCheck',
    summary: 'Teaching positive masculinity, male grooming & health, and active prevention of Gender-Based Violence.',
    description: 'Crucial "things only your dad can tell you" discussions covering personal hygiene, reproductive health, mental wellness, and respect for women. Boys participate in hard-hitting workshops on GBV prevention, teenage pregnancy awareness, emotional processing, and social media responsibility.',
    skillsTaught: ["Personal Hygiene & Grooming", "Men's Health & Mental Wellness", 'GBV Prevention & Respect', 'Healthy Relationship Dynamics', 'Conflict De-escalation', 'Youth Circle Vulnerability'],
    ageGroup: 'Ages 9 – 18',
    duration: 'Ongoing Weekly Youth Circles & Seminars',
    highlight: 'Breaking the toxic generational cycle and modeling compassionate, upright masculinity.',
  },
];

export const CURRICULUM_ITEMS = [
  {
    pillar: 'Vocational & Trade',
    skills: [
      { name: 'Plumbing Basics', desc: 'Pipe fittings, fixing leaks, water conservation, household valve management', icon: 'Pipette' },
      { name: 'Auto Mechanics', desc: 'Understanding engine components, tire changing, oil check, preventive maintenance', icon: 'Wrench' },
      { name: 'Sawing & Carpentry', desc: 'Measuring, woodworking safety, wood jointing, constructing utility frames', icon: 'Hammer' },
      { name: 'Housekeeping & Cooking', desc: 'Nutritional food prep, hygiene, laundering, keeping personal space dignified', icon: 'Utensils' },
      { name: 'Certified First Aid', desc: 'Wound care, CPR basics, emergency response, burn treatment, outdoor safety', icon: 'HeartPulse' },
      { name: 'Outdoor Camping & Survival', desc: 'Shelter setup, knot tying, navigation, fire safety, environmental stewardship', icon: 'Tent' },
    ],
  },
  {
    pillar: '4IR & STEM Innovation',
    skills: [
      { name: 'Artificial Intelligence & Robotics', desc: 'Robotics kits, algorithmic thinking, sensors, coding logic for beginners', icon: 'Cpu' },
      { name: 'Practical Mathematics', desc: 'Mental arithmetic, spatial reasoning, applying math to carpentry and budgeting', icon: 'Calculator' },
      { name: 'Engineering Problem Solving', desc: 'Structural design challenges, load testing, mechanical linkage systems', icon: 'Cog' },
      { name: 'Drone Piloting & VR Tech', desc: 'Flight physics, aerial safety, VR immersion educational scenarios', icon: 'Plane' },
      { name: 'Computer Literacy', desc: 'Typing, research skills, internet safety, using word processors and cloud tools', icon: 'Laptop' },
    ],
  },
  {
    pillar: 'Personal Character & Grooming',
    skills: [
      { name: "Men's Grooming & Hygiene", desc: 'Shaving safety, skin care, neatness, self-respect, and dressing with pride', icon: 'Sparkles' },
      { name: "Men's Physical & Mental Health", desc: 'Puberty navigation, emotional regulation, anxiety management, talking things through', icon: 'Smile' },
      { name: 'GBV & Violence Prevention', desc: 'Consent, dismantling toxic behaviors, protecting women, non-violent communication', icon: 'ShieldAlert' },
      { name: 'Teenage Pregnancy & Sex Ed', desc: 'Responsibility, consequence understanding, reproductive education, family values', icon: 'Users' },
      { name: 'Social Media & Digital Ethics', desc: 'Cyberbullying awareness, digital footprints, online integrity and reputation', icon: 'Share2' },
      { name: 'Youth Circle Safe Spaces', desc: 'Processing the grief and hurt of father absence, peer support, mutual brotherhood', icon: 'MessageCircle' },
    ],
  },
  {
    pillar: 'Sports & Athletic Mastery',
    skills: [
      { name: 'Soccer Ball Agility', desc: 'Dribbling, passing drills, strategic positioning, fitness endurance', icon: 'Trophy' },
      { name: 'Touch Rugby', desc: 'Tackling mechanics, fast paced passing, camaraderie and disciplined team coordination', icon: 'Activity' },
      { name: 'Hockey Coaching Clinic', desc: 'Introducing rural boys to field hockey stick handling and tactical teamwork', icon: 'Target' },
      { name: 'Archery & Focus', desc: 'Breath control, stillness, mental focus, aiming accuracy and patience', icon: 'Crosshair' },
      { name: 'Golf Fundamentals', desc: 'Stance, swing mechanics, etiquette, focus and emotional composure', icon: 'Flag' },
    ],
  },
];

export const CAMP_SCHEDULE: CampScheduleSlot[] = [
  {
    time: '06:00 - 07:15',
    activity: 'Morning Physical Conditioning & Drill',
    category: 'Fitness',
    description: 'Jogging, calisthenics, team stretching and discipline formation on the sports field.',
    pillar: 'Fitness',
  },
  {
    time: '07:15 - 08:30',
    activity: 'Housekeeping, Room Inspections & Nutritious Breakfast',
    category: 'Life Skills',
    description: 'Boys make their beds, clean living quarters, and share a balanced meal together.',
    pillar: 'Life Skills',
  },
  {
    time: '08:30 - 11:30',
    activity: 'Trade Workshop: Plumbing & Mechanical Essentials',
    category: 'Life Skills',
    description: 'Hands-on practical training with tools, pipes, engines, and woodworking.',
    pillar: 'Life Skills',
  },
  {
    time: '11:30 - 13:00',
    activity: 'STEM Lab: Robotics Assembly & AI Concepts',
    category: 'STEM',
    description: 'Interactive STEM building, math puzzles, and drone piloting simulations.',
    pillar: 'STEM',
  },
  {
    time: '13:00 - 14:00',
    activity: 'Community Lunch & Mentorship Bonding',
    category: 'Personal Development',
    description: 'Informal dining conversations with adult male mentors sharing life advice.',
    pillar: 'Personal Development',
  },
  {
    time: '14:00 - 16:30',
    activity: 'Sports Tournaments: Soccer, Touch Rugby & Hockey',
    category: 'Fitness',
    description: 'Competitive yet sportsmanlike matches coached by professional athletic facilitators.',
    pillar: 'Fitness',
  },
  {
    time: '16:30 - 18:00',
    activity: "Grooming & 'What Being a Man Means' Seminar",
    category: 'Personal Development',
    description: 'Guest speaker talks by psychologists, community leaders, and African language educators.',
    pillar: 'Personal Development',
  },
  {
    time: '18:00 - 19:30',
    activity: 'Dinner & First Aid / Life Prep Lessons',
    category: 'Life Skills',
    description: 'Group dinner followed by practical emergency first aid simulations.',
    pillar: 'Life Skills',
  },
  {
    time: '19:30 - 21:00',
    activity: 'Campfire Youth Circle & Brotherhood Dialogue',
    category: 'Reflection',
    description: 'Heart-to-heart storytelling, acknowledging father-absence hurt, mutual affirmation, and closing prayers.',
    pillar: 'Reflection',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mother-kzn',
    quote: 'As a single mother, there were things I simply could not provide for my 14-year-old son without a father in his life. Since attending the Boys2Men program, he takes genuine pride in his appearance, is open to talking about his feelings, and has become a better, more protective brother at home. His school marks improved drastically because of the focus and self-belief they gave him.',
    author: 'Mother of 14-Year-Old Beneficiary',
    role: 'Parent & Community Member',
    location: 'Ndwedwe, KwaZulu-Natal',
    highlight: 'Transformative behavioral & academic breakthrough',
  },
  {
    id: 'mentor-role',
    quote: 'Walking with these young boys over months and years allows us to step into the gap. When a boy realizes he is not defined by who was absent, but by the upright man he chooses to become today, everything changes—his posture, his ambition, and his respect for his family.',
    author: 'Sipho Khumalo',
    role: 'Volunteer Senior Male Mentor',
    location: 'Durban / Ndwedwe District',
    highlight: 'Long-term male role modeling in action',
  },
  {
    id: 'school-principal',
    quote: 'The Grade 10 dropout rate among young boys in rural areas has been an ongoing heartbreak. The Boys2Men Career Guidance and Mentorship initiatives give these young men a tangible roadmap: CAO applications, NSFAS access, and real hope for a university or trade qualification.',
    author: 'Educator & High School Liaison',
    role: 'School Career Coordinator',
    location: 'Thafamasi Circuit, KZN',
    highlight: 'Direct reduction in rural school dropout',
  },
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'tier-kit',
    title: 'Sponsor a Boy’s Camp Kit',
    amountZAR: 650,
    description: 'Equip one adolescent boy with essential camp gear, personal hygiene kit, safety equipment, and workbook.',
    impact: 'Covers boots/footwear, grooming toiletry kit, first-aid handbook, camp T-shirt, and technical materials for 1 boy.',
    includes: ['Full personal grooming kit', 'Camp workbook & trade tools', 'Safety goggles & gloves', 'Official B2M Mentee jersey'],
  },
  {
    id: 'tier-camp',
    title: 'Full Mentorship Camp Sponsorship',
    amountZAR: 2400,
    description: 'Sponsor 1 boy for the entire 5-day residential camp including meals, trade coaching, sports clinics, and STEM lab.',
    impact: 'Provides 100% full sponsorship for 1 fatherless boy to attend the annual camp and receive year-long follow-up.',
    includes: ['5 days accommodation & meals', 'Professional sport & trade coaching', 'Robotics & STEM kit access', 'Year-round mentor check-ins'],
    popular: true,
  },
  {
    id: 'tier-stem',
    title: 'Robotics & 4IR Tech Sponsor',
    amountZAR: 4800,
    description: 'Fund STEM components, robotics circuit kits, and drone workshop gear for a full squad of 10 boys.',
    impact: 'Brings high-tech 4IR innovation equipment directly to KwaZulu-Natal schools and camp labs.',
    includes: ['5x Robotics microcontroller kits', 'STEM coding materials', 'Drone obstacle simulator', 'Certificate of Technology Support'],
  },
  {
    id: 'tier-career',
    title: 'Career Guidance & CAO Drive',
    amountZAR: 9500,
    description: 'Support a full Career Guidance Week in KZN, covering CAO/NSFAS application fees, TVET expo, and VR booth.',
    impact: 'Directly helps 40+ high school boys submit tertiary applications, build CVs, and meet corporate mentors.',
    includes: ['CAO application fee subsidies', 'Internet connectivity & printing hubs', 'VR career immersion equipment', 'Corporate sponsor branding acknowledgement'],
  },
];

export const PARTNERS_LIST: PartnerOrg[] = [
  { name: 'CAO (Central Applications Office)', role: 'Tertiary Admissions Pipeline', badge: 'Higher Education' },
  { name: 'NSFAS', role: 'Student Financial Aid Registration', badge: 'Funding' },
  { name: 'TVET Colleges KZN', role: 'Vocational & Artisan Trades', badge: 'Artisanship' },
  { name: 'SEDA (Small Enterprise Dev)', role: 'Youth Entrepreneurship', badge: 'Business' },
  { name: 'SETA Programs', role: 'Skills Development Authorities', badge: 'Accreditation' },
  { name: 'KZN Provincial Government', role: 'Social Protection Alignment', badge: 'Governance' },
];
