import type { Notice, Photo, Achievement, Faculty, Inquiry, BlogPost } from "../types";

export const SEED_NOTICES: Notice[] = [
  { id: 1, title: "Final Examination Schedule 2081", body: "The final examinations for classes 1–10 will commence from Baisakh 15, 2082. Students are advised to collect their admit cards from the school office.", date: "2025-04-10", type: "Exam" },
  { id: 2, title: "Annual Sports Day Notice", body: "Annual Sports Day is scheduled for Jestha 5, 2082. All students must report in sports uniform by 7:00 AM.", date: "2025-04-08", type: "Event" },
  { id: 3, title: "Summer Vacation 2082", body: "School will remain closed from Ashadh 1 to Ashadh 30 for summer vacation. Classes will resume from Shrawan 1.", date: "2025-03-25", type: "Holiday" },
  { id: 4, title: "Parent-Teacher Meeting", body: "A parent-teacher meeting is scheduled for Baisakh 25. Parents are cordially invited to discuss their ward's academic progress.", date: "2025-04-15", type: "Meeting" },
];

export const SEED_FACULTY: Faculty[] = [
  { id: 1, name: "Sita Sharma", subject: "Mathematics", photo: "https://i.pravatar.cc/150?img=47", bio: "M.Sc. Mathematics, 15 years of teaching experience." },
  { id: 2, name: "Ram Bahadur Thapa", subject: "Science", photo: "https://i.pravatar.cc/150?img=11", bio: "M.Sc. Physics, passionate about hands-on learning." },
  { id: 3, name: "Gita Rai", subject: "Nepali", photo: "https://i.pravatar.cc/150?img=48", bio: "M.A. Nepali Literature, expert in creative writing." },
  { id: 4, name: "Bikash Adhikari", subject: "English", photo: "https://i.pravatar.cc/150?img=12", bio: "M.A. English, IELTS trainer with 10 years experience." },
  { id: 5, name: "Anita Gurung", subject: "Social Studies", photo: "https://i.pravatar.cc/150?img=49", bio: "M.A. History, committed to civic education." },
  { id: 6, name: "Deepak Shrestha", subject: "Computer Science", photo: "https://i.pravatar.cc/150?img=15", bio: "B.Tech IT, brings modern tech into the classroom." },
];

export const SEED_ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    student: "Priya Koirala",
    title: "National Science Olympiad Gold",
    desc: "Won first place at the National Science Olympiad representing Bagmati Province, competing against 200+ students from across Nepal.",
    type: "Academic",
    year: "2081",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    student: "Arjun Tamang",
    title: "Inter-School Football Champion",
    desc: "Led the school football team to win the district inter-school championship, scoring the winning goal in the final match.",
    type: "Sports",
    year: "2081",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    student: "Manisha Poudel",
    title: "National Essay Writing 2nd Place",
    desc: "Secured second position in the national-level Nepali essay writing competition with her essay on 'Education in Modern Nepal'.",
    type: "Academic",
    year: "2080",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    student: "Suraj Shrestha",
    title: "Robotics Competition Winner",
    desc: "Built an award-winning autonomous robot at the Kathmandu Youth Tech Expo, impressing judges with innovative design.",
    type: "Technology",
    year: "2081",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 5,
    student: "Anjali Bhandari",
    title: "District Level Dance Champion",
    desc: "Won first place in the inter-school cultural dance competition with a classical Nepali dance performance.",
    type: "Cultural",
    year: "2081",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 6,
    student: "Rajan Gurung",
    title: "Math Olympiad Silver Medal",
    desc: "Secured silver medal at the National Mathematics Olympiad, solving complex problems with exceptional speed.",
    type: "Academic",
    year: "2080",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
];

export const SEED_PHOTOS: Photo[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=70", caption: "Annual Prize Distribution 2081", category: "Event" },
  { id: 2, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=70", caption: "Science Lab Activities", category: "Academic" },
  { id: 3, url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=70", caption: "School Sports Day", category: "Sports" },
  { id: 4, url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=70", caption: "Library Reading Program", category: "Academic" },
  { id: 5, url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&q=70", caption: "Cultural Program 2081", category: "Event" },
  { id: 6, url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=70", caption: "Classroom Learning", category: "Academic" },
];

export const SEED_INQUIRIES: Inquiry[] = [
  { id: 1, name: "Sunita Maharjan", email: "sunita@gmail.com", phone: "9841234567", grade: "Class 6", msg: "Interested in admission for my daughter.", date: "2025-04-12", status: "Pending" },
  { id: 2, name: "Kapil Dev Bhatta", email: "kapil@gmail.com", phone: "9851234567", grade: "Class 1", msg: "Please let me know the admission process.", date: "2025-04-10", status: "Contacted" },
  { id: 3, name: "Ritu Shrestha", email: "ritu@gmail.com", phone: "9861234567", grade: "Class 9", msg: "Looking for a good school with science faculty.", date: "2025-04-08", status: "Pending" },
];


export const SEED_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "The River That Taught Me Patience",
    author: "Priya Koirala",
    authorClass: "Class 10",
    content: `Every monsoon, the Bagmati swells. I used to be afraid of it — the muddy surge that swallowed the ghats and crept toward the road. But last year, sitting on the steps with my grandfather, I began to understand something.\n\nMy grandfather said rivers don't rush to reach the sea. They take every curve the land offers, fill every hollow, and only then move on. He said people are the same — the ones who last are the ones who learn the shape of their obstacles before pushing past them.\n\nI thought about my Mathematics exam then. I had been panicking for weeks, trying to memorise formulas without understanding where they came from. That evening I went home and started again — slowly, from the first principle. By the time the exam arrived, I wasn't fast, but I was steady.\n\nThe river is flooding again this year. I watch it from the same steps, and I am no longer afraid. I am taking notes.`,
    excerpt: "Every monsoon the Bagmati swells — and last year it taught me something my textbooks never could about patience and persistence.",
    category: "Essay",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70",
    publishedAt: "2025-04-05",
    featured: true,
  },
  {
    id: 2,
    title: "Why I Want to Become a Software Engineer",
    author: "Suraj Shrestha",
    authorClass: "Class 10",
    content: `When I was eight years old, the electricity went out during a storm and I discovered that my father's old Nokia still worked in the dark. I pressed every button trying to understand why it did what it did. That curiosity never left me.\n\nIn Class 7, our computer teacher Mr. Deepak showed us a simple Python script that printed our names in a loop. To me it looked like magic — instructions that the machine followed without question. I stayed after school every day for a week to write my own.\n\nNepal has some of the most talented young engineers in the world, yet we still import most of our software. I want to change that, even in a small way. I want to build tools that work offline, that work on low-end phones, that work for people in Humla and Jumla, not just Kathmandu.\n\nBeing a software engineer is not just about writing code. It is about solving real problems for real people. And there is no shortage of problems in Nepal waiting to be solved.`,
    excerpt: "A story that starts with a Nokia phone in a blackout and ends with a dream to build software for every corner of Nepal.",
    category: "Opinion",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=70",
    publishedAt: "2025-03-28",
    featured: false,
  },
  {
    id: 3,
    title: "Grandmother's Hands",
    author: "Nisha Karki",
    authorClass: "Class 8",
    content: `My grandmother's hands smell of turmeric and mustard oil.\nThey have kneaded a thousand loaves of bread,\ncarried water from a hill I have never climbed,\nand braided my hair every school morning\nwithout being asked.\n\nShe does not know the English word for love.\nShe says "khana khayou?" — have you eaten? —\nand means the same thing.\n\nI used to think I would leave this village,\nleave the smell of the kitchen,\nleave her slow songs.\n\nNow I think I will carry all of it —\nthe turmeric, the bread, the question —\nwherever I go,\nlike a lamp I did not know I was holding.`,
    excerpt: "A poem about a grandmother who says 'have you eaten?' and means 'I love you' — and the village a girl thought she wanted to leave.",
    category: "Poetry",
    coverImage: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&q=70",
    publishedAt: "2025-03-15",
    featured: true,
  },
  {
    id: 4,
    title: "What the Science Fair Taught Me About Failure",
    author: "Rohan Bista",
    authorClass: "Class 9",
    content: `My project was supposed to demonstrate electrolysis — splitting water into hydrogen and oxygen using a battery and two pencils. I had watched three YouTube videos and felt completely prepared.\n\nOn the day of the fair, nothing happened. The wires connected. The battery was new. But the water sat in its cup, utterly unimpressed.\n\nMr. Ram came over, looked at my setup, and asked one question: "Did you add salt?" I had not. Distilled water does not conduct electricity well enough. Three videos, zero mentions of salt.\n\nI added a pinch of table salt. Bubbles immediately appeared on both pencils. The crowd around my table grew.\n\nI did not win that year, but I learned something more useful than the prize: a failed experiment is not a failed scientist. It is just an experiment that still has one variable left to test. Now I always ask myself — what is the salt I forgot?`,
    excerpt: "How a cup of plain water, two pencils, and a missing pinch of salt turned into the most important science lesson of the year.",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=70",
    publishedAt: "2025-02-20",
    featured: false,
  },
];
 


export const TYPE_COLORS: Record<string, string> = {
  Exam: "bg-red-100 text-red-700",
  Event: "bg-blue-100 text-blue-700",
  Holiday: "bg-green-100 text-green-700",
  Meeting: "bg-yellow-100 text-yellow-700",
  Academic: "bg-indigo-100 text-indigo-700",
  Sports: "bg-orange-100 text-orange-700",
  Technology: "bg-teal-100 text-teal-700",
};