import {
  CheckCircle, Cpu, GraduationCap, Heart,
  BookOpen, Sparkles, Trophy, Users, Globe,
  FlaskConical, Monitor, Library, Music, Dumbbell,
  Palette, Code2, Lightbulb, Target, Rocket,
  Calendar, Clock, Zap, Brain, School,
  FileText, ArrowRight,  Calculator, PenTool,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import { useLanguage } from "../hooks/useLanguage";

const translations = {
  en: {
    academicExcellence: "Academic Excellence",
    buildingStrong: "Building Strong",
    foundations: "Foundations",
    heroDesc: "A nurturing learning environment from Nursery to Class 8, designed to develop curious minds, strong character, and a lifelong love for learning.",
    ourPrograms: "Our Programs",
    threeStages: "Three Stages of",
    development: "Development",
    stagesDesc: "Each stage is carefully designed to match your child's developmental needs, ensuring a smooth and joyful learning journey.",
    age: "Age:",
    beyondClassroom: "Beyond the Classroom",
    activitiesClubs: "Activities &",
    clubs: "Clubs",
    activitiesDesc: "Holistic development through a diverse range of extracurricular activities that nurture talents, build character, and create lasting memories.",
    ourCampus: "Our Campus",
    modernLearning: "Modern Learning",
    facilities: "Facilities",
    facilitiesDesc: "A safe, stimulating environment with modern amenities that enhance the learning experience for every child.",
    ourApproach: "Our Approach",
    howWe: "How We",
    teach: "Teach",
    approachDesc: "Child-centered teaching methods that make learning engaging, meaningful, and fun for every student.",
    interactiveLearning: "Interactive Learning",
    interactiveDesc: "Engaging, hands-on lessons that make learning fun through experiments, discussions, and real-world applications.",
    smallClass: "Small Class Sizes",
    smallClassDesc: "Maximum 30 students per class ensuring personalized attention and better student-teacher interaction.",
    regularAssessment: "Regular Assessment",
    regularAssessmentDesc: "Continuous evaluation through monthly tests, projects, and presentations to track progress effectively.",
    digitalIntegration: "Digital Integration",
    digitalDesc: "Smart boards, computer classes, and online resources that prepare students for the digital age.",
    bestStart: "Give Your Child the Best Start in Life",
    bestStartDesc: "Join the Dunai Boarding School family and watch your child grow into a confident, curious, and capable young learner.",
    applyAdmission: "Apply for Admission",
    scheduleVisit: "Schedule a Visit",
    earlyChildhood: "Early Childhood",
nurseryKg: "Nursery – KG",
age3to5: "3 – 5 years",
earlyChildhoodDesc: "Play-based learning that sparks curiosity and builds the foundation for lifelong learning through exploration, creativity, and social interaction in a warm, nurturing environment.",
montessori: "Montessori-inspired activities",
languageSkill: "Language & motor skill development",
musicArt: "Music, art & movement",
socialLearning: "Social & emotional learning",
playAreas: "Indoor & outdoor play areas",

primary: "Primary",
class1to5: "Class 1 – 5",
age6to11: "6 – 11 years",
primaryDesc: "Strong foundational education aligned with the national curriculum, emphasizing core subjects while nurturing creativity, critical thinking, and moral values.",
nepaliEnglish: "Nepali, English, Mathematics",
scienceSocial: "Science & Social Studies",
computerBasics: "Computer basics",
artsPE: "Arts & Physical Education",
moralEducation: "Moral & ethical education",

upperPrimary: "Upper Primary",
class6to8: "Class 6 – 8",
age11to14: "11 – 14 years",
upperPrimaryDesc: "Advanced curriculum with specialized subjects, project-based learning, and preparation for secondary education with focus on analytical and problem-solving skills.",
coding: "Computer Science & Coding",
advancedMath: "Advanced Mathematics",
physicsChemistry: "Physics & Chemistry basics",
researchProject: "Research & project work",
careerExploration: "Career exploration",

// Activities
scienceExhibition: "Annual Science Exhibition",
spellingBee: "Spelling Bee Competition",
quizCompetition: "Quiz Competition",
mathOlympiad: "Math Olympiad Training",
schoolMagazine: "School Magazine",
musicDance: "Music & Dance Club",
artCraft: "Art & Craft Workshop",
footballTeam: "Football Team",
cricketTeam: "Cricket Team",
volleyballTeam: "Volleyball Team",
ecoClub: "Eco & Gardening Club",
codingClub: "Computer & Coding Club",

// Facilities
modernClassrooms: "Modern Classrooms",
modernClassroomsDesc: "Spacious, well-ventilated classrooms with comfortable seating, whiteboards, and learning aids for optimal engagement.",
smartSetup: "Smart Setup",
scienceLab: "Science Laboratory",
scienceLabDesc: "Well-equipped lab with modern apparatus for Physics, Chemistry, and Biology experiments and hands-on learning.",
practicalLearning: "Practical Learning",
computerLab: "Computer Lab",
computerLabDesc: "Dedicated computer room with modern systems, internet access, and supervised learning for digital literacy.",
techEnabled: "Tech Enabled",
library: "Library",
libraryDesc: "Rich collection of 3,000+ books in Nepali and English with comfortable reading spaces for young readers.",
books3000: "3,000+ Books",
playground: "Playground",
playgroundDesc: "Large outdoor space for football, cricket, volleyball, athletics, and supervised physical activities.",
sportsZone: "Sports Zone",
activityHall: "Activity Hall",
activityHallDesc: "Multipurpose hall for cultural programs, music classes, indoor games, and school assemblies.",
creativeSpace: "Creative Space",
  },
  ne: {
    academicExcellence: "शैक्षिक उत्कृष्टता",
    buildingStrong: "बलियो",
    foundations: "जग निर्माण",
    heroDesc: "नर्सरीदेखि कक्षा ८ सम्मको पोषणयुक्त सिकाइ वातावरण, जिज्ञासु दिमाग, बलियो चरित्र र जीवनभर सिक्ने प्रेमको विकास गर्न डिजाइन गरिएको।",
    ourPrograms: "हाम्रा कार्यक्रमहरू",
    threeStages: "विकासका तीन",
    development: "चरणहरू",
    stagesDesc: "प्रत्येक चरण तपाईंको बच्चाको विकासात्मक आवश्यकताहरूसँग मेल खाने गरी सावधानीपूर्वक डिजाइन गरिएको छ, सहज र आनन्ददायी सिकाइ यात्रा सुनिश्चित गर्दै।",
    age: "उमेर:",
    beyondClassroom: "कक्षाकोठाभन्दा बाहिर",
    activitiesClubs: "गतिविधि र",
    clubs: "क्लबहरू",
    activitiesDesc: "प्रतिभालाई पोषण गर्ने, चरित्र निर्माण गर्ने र स्थायी सम्झनाहरू सिर्जना गर्ने विविध अतिरिक्त क्रियाकलापहरू मार्फत समग्र विकास।",
    ourCampus: "हाम्रो क्याम्पस",
    modernLearning: "आधुनिक सिकाइ",
    facilities: "सुविधाहरू",
    facilitiesDesc: "प्रत्येक बच्चाको सिकाइ अनुभव बढाउने आधुनिक सुविधाहरू सहितको सुरक्षित, उत्प्रेरक वातावरण।",
    ourApproach: "हाम्रो दृष्टिकोण",
    howWe: "हामी कसरी",
    teach: "सिकाउँछौं",
    approachDesc: "बाल-केन्द्रित शिक्षण विधिहरू जसले प्रत्येक विद्यार्थीको लागि सिकाइलाई आकर्षक, अर्थपूर्ण र रमाइलो बनाउँछ।",
    interactiveLearning: "अन्तरक्रियात्मक सिकाइ",
    interactiveDesc: "प्रयोग, छलफल र वास्तविक-विश्व अनुप्रयोगहरू मार्फत सिकाइलाई रमाइलो बनाउने आकर्षक, हाते पाठहरू।",
    smallClass: "सानो कक्षा आकार",
    smallClassDesc: "प्रति कक्षा अधिकतम ३० विद्यार्थी, व्यक्तिगत ध्यान र राम्रो विद्यार्थी-शिक्षक अन्तरक्रिया सुनिश्चित गर्दै।",
    regularAssessment: "नियमित मूल्याङ्कन",
    regularAssessmentDesc: "प्रगति प्रभावकारी रूपमा ट्र्याक गर्न मासिक परीक्षण, परियोजना र प्रस्तुतीकरण मार्फत निरन्तर मूल्याङ्कन।",
    digitalIntegration: "डिजिटल एकीकरण",
    digitalDesc: "स्मार्ट बोर्ड, कम्प्युटर कक्षा र अनलाइन स्रोतहरू जसले विद्यार्थीहरूलाई डिजिटल युगको लागि तयार गर्छ।",
    bestStart: "आफ्नो बच्चालाई जीवनको सबैभन्दा राम्रो सुरुवात दिनुहोस्",
    bestStartDesc: "दुनै बोर्डिङ स्कूल परिवारमा सामेल हुनुहोस् र आफ्नो बच्चालाई आत्मविश्वासी, जिज्ञासु र सक्षम युवा शिक्षार्थीको रूपमा हुर्केको हेर्नुहोस्।",
    applyAdmission: "भर्नाको लागि आवेदन दिनुहोस्",
    scheduleVisit: "भ्रमणको समय तय गर्नुहोस्",

    earlyChildhood: "प्रारम्भिक बाल्यकाल",
nurseryKg: "नर्सरी – केजी",
age3to5: "३ – ५ वर्ष",
earlyChildhoodDesc: "खेल-आधारित सिकाइ जसले जिज्ञासा जगाउँछ र अन्वेषण, रचनात्मकता र सामाजिक अन्तरक्रिया मार्फत आजीवन सिकाइको जग निर्माण गर्छ।",
montessori: "मोन्टेसरी-प्रेरित गतिविधिहरू",
languageSkill: "भाषा र मोटर सीप विकास",
musicArt: "संगीत, कला र आन्दोलन",
socialLearning: "सामाजिक र भावनात्मक सिकाइ",
playAreas: "भित्री र बाहिरी खेल क्षेत्रहरू",

primary: "प्राथमिक",
class1to5: "कक्षा १ – ५",
age6to11: "६ – ११ वर्ष",
primaryDesc: "राष्ट्रिय पाठ्यक्रमसँग मिल्दो बलियो आधारभूत शिक्षा, मुख्य विषयहरूमा जोड दिँदै रचनात्मकता, आलोचनात्मक सोच र नैतिक मूल्यहरूको पोषण।",
nepaliEnglish: "नेपाली, अंग्रेजी, गणित",
scienceSocial: "विज्ञान र सामाजिक अध्ययन",
computerBasics: "कम्प्युटर आधारभूत",
artsPE: "कला र शारीरिक शिक्षा",
moralEducation: "नैतिक शिक्षा",

upperPrimary: "उच्च प्राथमिक",
class6to8: "कक्षा ६ – ८",
age11to14: "११ – १४ वर्ष",
upperPrimaryDesc: "विशेष विषयहरू, परियोजना-आधारित सिकाइ र विश्लेषणात्मक तथा समस्या-समाधान सीपहरूमा ध्यान केन्द्रित गर्दै उन्नत पाठ्यक्रम।",
coding: "कम्प्युटर विज्ञान र कोडिङ",
advancedMath: "उन्नत गणित",
physicsChemistry: "भौतिकशास्त्र र रसायनशास्त्र आधारभूत",
researchProject: "अनुसन्धान र परियोजना कार्य",
careerExploration: "करियर अन्वेषण",

// Activities
scienceExhibition: "वार्षिक विज्ञान प्रदर्शनी",
spellingBee: "स्पेलिङ बी प्रतियोगिता",
quizCompetition: "क्विज प्रतियोगिता",
mathOlympiad: "गणित ओलम्पियाड प्रशिक्षण",
schoolMagazine: "विद्यालय पत्रिका",
musicDance: "संगीत र नृत्य क्लब",
artCraft: "कला र शिल्प कार्यशाला",
footballTeam: "फुटबल टोली",
cricketTeam: "क्रिकेट टोली",
volleyballTeam: "भलिबल टोली",
ecoClub: "इको र बगैंचा क्लब",
codingClub: "कम्प्युटर र कोडिङ क्लब",

// Facilities
modernClassrooms: "आधुनिक कक्षाकोठाहरू",
modernClassroomsDesc: "आरामदायी बसाइ, ह्वाइटबोर्ड र सिकाइ सामग्री सहित प्रशस्त, हावादार कक्षाकोठाहरू।",
smartSetup: "स्मार्ट सेटअप",
scienceLab: "विज्ञान प्रयोगशाला",
scienceLabDesc: "भौतिकशास्त्र, रसायनशास्त्र र जीवविज्ञान प्रयोगहरूको लागि आधुनिक उपकरण सहितको सुसज्जित प्रयोगशाला।",
practicalLearning: "प्रयोगात्मक सिकाइ",
computerLab: "कम्प्युटर ल्याब",
computerLabDesc: "आधुनिक प्रणाली, इन्टरनेट पहुँच र डिजिटल साक्षरताको लागि पर्यवेक्षित सिकाइ सहितको समर्पित कम्प्युटर कक्ष।",
techEnabled: "प्रविधि सक्षम",
library: "पुस्तकालय",
libraryDesc: "युवा पाठकहरूको लागि आरामदायी पठन स्थान सहित नेपाली र अंग्रेजीमा ३,०००+ पुस्तकहरूको समृद्ध संग्रह।",
books3000: "३,०००+ पुस्तकहरू",
playground: "खेल मैदान",
playgroundDesc: "फुटबल, क्रिकेट, भलिबल, एथलेटिक्स र पर्यवेक्षित शारीरिक गतिविधिहरूको लागि ठूलो बाहिरी स्थान।",
sportsZone: "खेल क्षेत्र",
activityHall: "गतिविधि हल",
activityHallDesc: "सांस्कृतिक कार्यक्रम, संगीत कक्षा, भित्री खेल र विद्यालय सभाहरूको लागि बहुउद्देश्यीय हल।",
creativeSpace: "रचनात्मक स्थान",

  },
};

export default function AcademicsPage() {
  const language = useLanguage();
const t = translations[language];

  const programs = [
    {
      level: t.earlyChildhood,
      grade: t.nurseryKg,
      age: t.age3to5,
      desc: t.earlyChildhoodDesc,
      icon: <Heart size={24} />,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100 text-pink-600",
      badgeBg: "bg-pink-500",
      highlights: [t.montessori, t.languageSkill, t.musicArt, t.socialLearning, t.playAreas],
    },
    {
      level: t.primary,
      grade: t.class1to5,
      age: t.age6to11,
      desc: t.primaryDesc,
      icon: <BookOpen size={24} />,
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
      badgeBg: "bg-blue-500",
      highlights: [t.nepaliEnglish, t.scienceSocial, t.computerBasics, t.artsPE, t.moralEducation],
    },
    {
      level: t.upperPrimary,
      grade: t.class6to8,
      age: t.age11to14,
      desc: t.upperPrimaryDesc,
      icon: <Cpu size={24} />,
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100 text-purple-600",
      badgeBg: "bg-purple-500",
      highlights: [t.coding, t.advancedMath, t.physicsChemistry, t.researchProject, t.careerExploration],
    },
  ];

  const activities = [
    { name: t.scienceExhibition, icon: <FlaskConical size={16} />, category: "Academic" },
    { name: t.spellingBee, icon: <BookOpen size={16} />, category: "Academic" },
    { name: t.quizCompetition, icon: <Brain size={16} />, category: "Academic" },
    { name: t.mathOlympiad, icon: <Calculator size={16} />, category: "Academic" },
    { name: t.schoolMagazine, icon: <PenTool size={16} />, category: "Creative" },
    { name: t.musicDance, icon: <Music size={16} />, category: "Creative" },
    { name: t.artCraft, icon: <Palette size={16} />, category: "Creative" },
    { name: t.footballTeam, icon: <Trophy size={16} />, category: "Sports" },
    { name: t.cricketTeam, icon: <Trophy size={16} />, category: "Sports" },
    { name: t.volleyballTeam, icon: <Dumbbell size={16} />, category: "Sports" },
    { name: t.ecoClub, icon: <Globe size={16} />, category: "Community" },
    { name: t.codingClub, icon: <Code2 size={16} />, category: "Technology" },
  ];

  const facilities = [
    {
      icon: <School size={24} className="text-blue-600" />,
      title: t.modernClassrooms,
      desc: t.modernClassroomsDesc,
      stats: t.smartSetup,
    },
    {
      icon: <FlaskConical size={24} className="text-green-600" />,
      title: t.scienceLab,
      desc: t.scienceLabDesc,
      stats: t.practicalLearning,
    },
    {
      icon: <Monitor size={24} className="text-purple-600" />,
      title: t.computerLab,
      desc: t.computerLabDesc,
      stats: t.techEnabled,
    },
    {
      icon: <Library size={24} className="text-amber-600" />,
      title: t.library,
      desc: t.libraryDesc,
      stats: t.books3000,
    },
    {
      icon: <Trophy size={24} className="text-red-600" />,
      title: t.playground,
      desc: t.playgroundDesc,
      stats: t.sportsZone,
    },
    {
      icon: <Music size={24} className="text-indigo-600" />,
      title: t.activityHall,
      desc: t.activityHallDesc,
      stats: t.creativeSpace,
    },
  ];

  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Sparkles size={14} />
            {t.academicExcellence}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            {t.buildingStrong}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t.foundations}
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
          
       
        </div>
      </FadeIn>

      {/* ═══════════ PROGRAM LEVELS - 3 CARDS ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <School size={14} />
              {t.ourPrograms}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              {t.threeStages}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t.development}
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              {t.stagesDesc}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className={`group relative bg-gradient-to-br ${p.bgColor} border ${p.borderColor} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full`}>
                {/* Decorative gradient blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${p.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative flex-1">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {p.icon}
                    </div>
                    <span className={`${p.badgeBg} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {p.grade}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                    {p.level}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock size={14} />
                    <span>Age: {p.age}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {p.desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    {p.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle size={10} className="text-white" />
                        </div>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${p.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      

      {/* ═══════════ STUDENT ACTIVITIES & CLUBS ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Zap size={14} />
              {t.beyondClassroom}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              {t.academicExcellence}{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.clubs}
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              {t.activitiesDesc}
            </p>
          </div>
        </FadeIn>

        {/* Activities by category */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              category: "Academic",
              color: "from-blue-500 to-blue-700",
              icon: <Brain size={20} className="text-white" />,
            },
            {
              category: "Creative",
              color: "from-pink-500 to-rose-600",
              icon: <Palette size={20} className="text-white" />,
            },
            {
              category: "Sports",
              color: "from-green-500 to-emerald-600",
              icon: <Trophy size={20} className="text-white" />,
            },
            {
              category: "Technology",
              color: "from-purple-500 to-violet-600",
              icon: <Code2 size={20} className="text-white" />,
            },
          ].map(({ category, color, icon }) => {
            const categoryActivities = activities.filter((a) => a.category === category);
            return (
              <FadeIn key={category} delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                  {/* Category header */}
                  <div className={`bg-gradient-to-r ${color} p-4 text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        {icon}
                      </div>
                      <div>
                        <p className="font-bold">{category}</p>
                        <p className="text-xs text-white/70">
                          {categoryActivities.length} activities
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Activity list */}
                  <div className="p-4 space-y-1.5">
                    {categoryActivities.map((activity, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-gray-600">
                          {activity.icon}
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {activity.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ═══════════ FACILITIES ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <School size={14} />
              {t.ourCampus}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              {t.modernLearning}{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {t.facilities}
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              {t.facilitiesDesc}
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                <span className="inline-block text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {f.stats}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ TEACHING METHODOLOGY ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm border border-indigo-100">
                <Lightbulb size={14} />
                {t.ourApproach}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
                {t.howWe}{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {t.teach}
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-2">
                {t.approachDesc}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <Lightbulb size={22} className="text-amber-600" />,
                  title: t.interactiveLearning,
                  desc: t.interactiveDesc,
                },
                {
                  icon: <Users size={22} className="text-blue-600" />,
                  title: t.smallClass,
                  desc: t.smallClassDesc,
                },
                {
                  icon: <Target size={22} className="text-green-600" />,
                  title: t.regularAssessment,
                  desc: t.regularAssessmentDesc,
                },
                {
                  icon: <Globe size={22} className="text-purple-600" />,
                  title: t.digitalIntegration,
                  desc: t.digitalDesc,
                },
              ].map((method, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto py-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25">
            <Rocket size={28} className="text-white" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
            {t.bestStart}
          </h3>
          <p className="text-gray-500 mb-6">
            {t.bestStartDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all shadow-lg hover:shadow-xl text-sm">
              <FileText size={16} />
              {t.applyAdmission}
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl border-2 border-indigo-200 hover:bg-indigo-50 transition-all text-sm">
              <Calendar size={16} />
              {t.scheduleVisit}
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}