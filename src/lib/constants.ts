// ============================================================
// ⚙️  EDIT THIS FILE TO CUSTOMIZE ALL SITE CONTENT & CONFIG
// ============================================================

export const SITE_CONFIG = {
  name:        "URO FITNESS",
  tagline:     "BUILT DIFFERENT",
  description: "Premium fitness training for those who demand more.",
  // ⚙️ Change this to your WhatsApp number (country code + number, no + or spaces)
  whatsappNumber: "919876543210",
  email:       "hello@urofitness.in",
  phone:       "+91 98765 43210",
  address:     "Plot 42, Industrial Estate, Pimpri, Pune — 411018, Maharashtra",
  socials: {
    instagram: "https://instagram.com/urofitness",
    youtube:   "https://youtube.com/@urofitness",
    facebook:  "https://facebook.com/urofitness",
  },
};

export const STATS = [
  { number: 2400, suffix: "+", label: "Active Members" },
  { number: 18,   suffix: "",  label: "Elite Trainers"  },
  { number: 950,  suffix: "+", label: "Transformations" },
];

export const PROGRAMS = [
  {
    number: "01",
    icon: "⚡",
    name: "Strength & Power",
    desc: "Build raw strength with our periodized program. Designed for athletes who want to push past plateaus.",
  },
  {
    number: "02",
    icon: "🔥",
    name: "Fat Loss Elite",
    desc: "Science-backed fat loss combining HIIT, metabolic conditioning, and nutrition for rapid, sustainable results.",
  },
  {
    number: "03",
    icon: "⚔️",
    name: "CrossFit WOD",
    desc: "High-intensity functional training that builds total body athleticism with our competitive CrossFit community.",
  },
];

export const TESTIMONIALS = [
  {
    initials: "AK",
    name:     "Arjun Kapoor",
    role:     "Member since 2022",
    text:     "URO FITNESS changed my life. The trainers are elite-level, the equipment is world-class, and the community pushes you harder than you ever thought possible.",
    result:   "Lost 28 KG — 8 Months",
  },
  {
    initials: "PS",
    name:     "Priya Sharma",
    role:     "Strength Program",
    text:     "In 6 months I doubled my deadlift and completely transformed my physique. This gym doesn't play around.",
    result:   "Deadlift: 60 → 120 KG",
  },
  {
    initials: "RV",
    name:     "Rahul Verma",
    role:     "CrossFit Program",
    text:     "The CrossFit program at URO is the most intense and well-structured I've tried. Coach Vikram is phenomenal.",
    result:   "CrossFit L1 Certified",
  },
  {
    initials: "NM",
    name:     "Neha Mehta",
    role:     "Fat Loss Elite",
    text:     "Premium doesn't even begin to describe it. Every detail is perfect — from the locker rooms to the coaching.",
    result:   "-22% Body Fat in 5 Months",
  },
];

export const TRAINERS = [
  {
    name:      "Vikram Rathore",
    specialty: "Head Coach & Founder",
    exp:       "12 Years Experience",
    // ⚙️ Replace with your trainer's image URL
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
  },
  {
    name:      "Ananya Desai",
    specialty: "Fat Loss & Nutrition",
    exp:       "8 Years Experience",
    image: "https://images.unsplash.com/photo-1618330834871-dd3c04d13d32?w=600&q=80",
  },
  {
    name:      "Rohan Khanna",
    specialty: "CrossFit & HIIT",
    exp:       "CrossFit L3 Certified",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
  },
];

export const EQUIPMENT = [
  { emoji: "🏋️", name: "Free Weights Zone",    desc: "Premium Olympic barbells, dumbbells up to 100kg, and Eleiko power racks" },
  { emoji: "⚙️", name: "Cable & Machines",      desc: "Full Technogym machine suite with cable stations, leg press, and more" },
  { emoji: "🏃", name: "Cardio Floor",           desc: "Technogym treadmills, assault bikes, rowers, and ski ergs" },
  { emoji: "🤸", name: "CrossFit Rig",           desc: "Competition-grade rig with pull-up bars, rings, and plyometric boxes" },
  { emoji: "🎯", name: "Turf & Functional",      desc: "30m sprint turf with sleds, battle ropes, and functional stations" },
  { emoji: "🧘", name: "Recovery Zone",          desc: "Foam rollers, massage guns, stretching area, and infrared sauna pod" },
  { emoji: "📊", name: "Body Composition",       desc: "InBody 770 analyzer — track every metric of your progress" },
  { emoji: "🚿", name: "Premium Locker Rooms",   desc: "Spa-grade showers, steam room, and towel service included" },
];

export const WHY_US = [
  { num: "01", title: "Science-Backed Programming",  desc: "Every program is built on peer-reviewed sports science. Our methodology has been refined through thousands of client transformations." },
  { num: "02", title: "Elite Coach-to-Member Ratio", desc: "18 certified coaches for 2,400 members. Every session, someone is watching your form and pushing your limits." },
  { num: "03", title: "Premium Environment",         desc: "Every inch of URO FITNESS is designed to inspire intensity, focus, and greatness in every training session." },
  { num: "04", title: "Guaranteed Results",          desc: "Follow our programs for 90 days and if you don't see results, we refund your membership. That's our promise." },
  { num: "05", title: "24/7 App & Community",        desc: "Access training plans, track workouts, and connect with the URO community through our mobile app." },
  { num: "06", title: "Nutrition Guidance Included", desc: "All memberships include access to certified nutritionists and meal planning tools. Training is only half the equation." },
];

export const BUSINESS_HOURS = [
  { day: "Monday – Friday", time: "5:00 AM – 11:00 PM", today: true  },
  { day: "Saturday",        time: "6:00 AM – 10:00 PM", today: false },
  { day: "Sunday",          time: "7:00 AM – 8:00 PM",  today: false },
  { day: "Public Holidays", time: "8:00 AM – 6:00 PM",  today: false },
];
