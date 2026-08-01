import { BookOpen, GraduationCap, Building2, Smile, Dna } from 'lucide-react';

// NOTE: This data drives ONLY the Navbar services dropdown and the /services
// overview grid. Each individual service has its own dedicated, uniquely
// designed static page under src/pages/services/ — those pages do NOT read
// from this file.
const servicesData = [
  {
    id: 'mind-power',
    path: '/services/mind-power',
    navLabel: 'Mind Power Unlimited For Publick for Public',
    title: 'Mind Power Unlimited For Publick for Public',
    shortTitle: 'Mind Power Unlimited For Publick for Public',
    icon: BookOpen,
    category: 'Public Workshop',
    accentColor: '#0ea5e9',
    image: 'https://cdn.pixabay.com/photo/2017/03/03/20/32/mindset-2114876_1280.jpg',
    imageAlt: 'Workshop photo representing mind power coaching and mindset transformation',
    heroLabel: 'For growth-minded professionals and families',
    homeSummary:
      'An immersive public workshop that blends subconscious reprogramming, Alpha state work, and practical goal setting for life and business.',
    audience:
      'Business owners, solopreneurs, professionals, homemakers, students, and senior citizens who want faster progress with greater clarity.',
    duration: 'Immersive success workshop',
  },
  {
    id: 'super-student',
    path: '/services/super-student',
    navLabel: 'Super Student Unlimited For Students',
    title: 'Super Student Unlimited For Students',
    shortTitle: 'Super Student Unlimited For Students',
    icon: GraduationCap,
    category: 'Student Empowerment',
    accentColor: '#6366f1',
    image: 'https://cdn.pixabay.com/photo/2019/03/10/03/36/reading-4045414_1280.jpg',
    imageAlt: 'Study photo representing student learning, memory, and focus',
    heroLabel: 'For students who want focus, confidence, and direction',
    homeSummary:
      'A student-centered workshop built to improve concentration, memory, emotional balance, and goal clarity in an increasingly distracted world.',
    audience:
      'School students, college students, competitive exam aspirants, and parents seeking structured support for academic growth.',
    duration: 'Experiential student workshop',
  },
  {
    id: 'corporate-power',
    path: '/services/corporate-power',
    navLabel: 'Unleash The Power Within for Corporates',
    title: 'Unleash The Power Within for Corporates',
    shortTitle: 'Unleash The Power Within for Corporates',
    icon: Building2,
    category: 'Corporate Training',
    accentColor: '#0f766e',
    image: 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg',
    imageAlt: 'Office teamwork photo representing team alignment, leadership, and corporate growth',
    heroLabel: 'For leaders and teams working under real pressure',
    homeSummary:
      'A corporate performance program that aligns people, sharpens decision-making, and improves resilience, innovation, and collaboration.',
    audience:
      'Corporate leaders, managers, HR teams, sales professionals, and enterprise organizations looking for stronger performance culture.',
    duration: 'Customized corporate performance intervention',
  },
  {
    id: 'stress-free',
    path: '/services/stress-free',
    navLabel: 'Stress Free Living',
    title: 'Stress Free Living Workshop',
    shortTitle: 'Stress Free Living',
    icon: Smile,
    category: 'Health and Wellness',
    accentColor: '#16a34a',
    image: 'https://cdn.pixabay.com/photo/2023/11/15/08/20/meditation-8389494_1280.jpg',
    imageAlt: 'Meditation photo representing calm, balance, and stress relief',
    heroLabel: 'For people who want calm without losing momentum',
    homeSummary:
      'A practical wellness workshop focused on stress release, better energy, emotional balance, and supportive daily rituals.',
    audience:
      'Working professionals, homemakers, senior executives, and anyone dealing with chronic pressure, fatigue, or emotional overload.',
    duration: 'Focused wellness workshop',
  },
  {
    id: 'dmit-counselling',
    path: '/services/dmit-counselling',
    navLabel: 'DMIT Family Counselling',
    title: 'One-on-One Family Counselling using DMIT',
    shortTitle: 'DMIT Family Counselling',
    icon: Dna,
    category: 'DMIT and Family Counselling',
    accentColor: '#c2410c',
    image: 'https://cdn.pixabay.com/photo/2016/09/03/09/18/girl-1641215_1280.jpg',
    imageAlt: 'Family photo representing guidance, growth, and counselling support',
    heroLabel: 'For families seeking clarity about natural potential',
    homeSummary:
      'A personalised counselling service that uses DMIT-based insight to understand natural intelligence, learning style, and career direction.',
    audience:
      'Parents, children aged 3+, students, and career changers who want more informed guidance around strengths and future direction.',
    duration: 'Personalised assessment and one-on-one counselling session',
  },
];

export const servicesNavItems = servicesData.map(({ id, path, navLabel }) => ({
  id,
  path,
  name: navLabel,
}));

export const getServiceById = (serviceId) => servicesData.find((service) => service.id === serviceId);

export default servicesData;
