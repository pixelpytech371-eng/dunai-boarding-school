import {
  Heart, Layers, Globe, Star,
  MapPin, GraduationCap, Target, Eye,
  BookOpen, School, Leaf, TreePine, Crown,
  Users, Building, Shield, Mountain, Sparkles,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import { useLanguage } from "../hooks/useLanguage";
import AngadImage from "../assets/images/angad.jpg";
import BupendraImage from "../assets/images/bupendra.jpg";

const translations = {
  en: {
    aboutSchool: "About Our School",
    ourStory: "Our Story,",
    ourValues: "Our Values",
    heroDesc: "A beacon of quality education in the remote Himalayan valleys of Dolpa, nurturing young minds since its establishment.",
    foundingFathers: "Our Founding Fathers",
    visionaries: "The Visionaries Who",
    startedItAll: "Started It All",
    foundersDesc: "Two remarkable pioneers who brought modern education to the remote mountains of Dolpa, changing countless lives forever.",
    aboutDunai: "About Dunai Boarding School",
    qualityEducation: "Quality Education in the Heart of Dolpa",
    about1: "Dunai Boarding School is a well-known private educational institution located in the remote mountain district of",
    about1Bold: "Dolpa, Nepal",
    about2: "Situated in Thuli Bheri Municipality-3, Dunai — the district headquarters — it serves as an essential hub for quality education in Karnali Province, especially for families living in the isolated Himalayan valleys.",
    about3: "The school provides education from",
    about3Bold: "Early Childhood Development (ECD) / Nursery up to Grade 8",
    about4: "with approximately",
    about4Bold: "350 enrolled students",
    about5: "Because many students come from remote villages that are several days' walk away, the school provides",
    about5Bold: "boarding (hostel) facilities",
    about6: "where students can live and study safely.",
    studentsEnrolled: "Students Enrolled",
    gradeLevels: "Grade Levels",
    location: "Dolpa",
    hostelFacility: "Hostel Facility",
    yes: "Yes",
    whatMakesUnique: "What Makes Us Unique",
    specialInitiatives: "Our Special Initiatives",
    ecoClub: "Eco-Club",
    ecoClubPartner: "In Partnership with WWF Nepal",
    ecoClubDesc: "Our school is highly recognized for its environmental awareness programs. The Eco-Club, run in partnership with WWF Nepal and the Shey Phoksundo National Park, teaches children about wildlife conservation and climate action from an early age. Students learn to protect the unique biodiversity of the Dolpa region.",
    steamLearning: "STEAM Learning",
    steamSubtitle: "Science • Technology • Engineering • Arts • Math",
    steamDesc: "We integrate hands-on practical learning through STEAM (Science, Technology, Engineering, Arts, and Mathematics) to encourage student innovation and critical thinking. Even in this remote area, our students engage with modern educational approaches that prepare them for the future.",
    ourMission: "Our Mission",
    missionText: "To provide holistic, quality education to children of Dolpa and Karnali Province, nurturing intellectual curiosity, moral values, and practical skills.",
    mission1: "Quality English-medium education in remote Dolpa",
    mission2: "Safe boarding facilities for distant village children",
    mission3: "Environmental awareness through Eco-Club programs",
    mission4: "STEAM education for innovation and critical thinking",
    ourVision: "Our Vision",
    visionText: "To be the leading educational institution in Karnali Province — known for academic excellence, environmental stewardship, and responsible citizens.",
    vision1: "Recognized for educational innovation in remote areas",
    vision2: "Producing environmentally conscious leaders",
    vision3: "Bridging Himalayan communities with global opportunities",
    vision4: "A model for sustainable mountain education",
    whatWeStand: "What We Stand For",
    coreValues: "Our Core Values",
    integrity: "Integrity",
    integrityDesc: "We instill honesty and ethical conduct, rooted in the strong moral values of Himalayan communities.",
    excellence: "Excellence",
    excellenceDesc: "Despite our remote location, we set high standards and strive for academic and personal excellence.",
    inclusivity: "Inclusivity",
    inclusivityDesc: "We welcome children from all villages and backgrounds across Dolpa and Karnali Province.",
    resilience: "Resilience",
    resilienceDesc: "Like the Himalayas around us, we teach students to be strong, resilient, and unwavering.",
    closingText: "Dunai Boarding School continues to serve as a vital educational institution in the remote mountains of Dolpa, providing quality education and a safe home away from home for children from across the region.",
    address: "Thuli Bheri Municipality-3, Dunai, Dolpa",
  },
  ne: {
    aboutSchool: "हाम्रो विद्यालयको बारेमा",
    ourStory: "हाम्रो कथा,",
    ourValues: "हाम्रा मूल्यहरू",
    heroDesc: "डोल्पाको दुर्गम हिमाली उपत्यकामा गुणस्तरीय शिक्षाको एक ज्योति, स्थापनाकालदेखि नै युवा दिमागहरूलाई हुर्काउँदै।",
    foundingFathers: "हाम्रा संस्थापक पिताहरू",
    visionaries: "दूरदर्शी जसले",
    startedItAll: "सबै सुरु गरे",
    foundersDesc: "दुई अद्भुत अग्रजहरू जसले डोल्पाको दुर्गम पहाडमा आधुनिक शिक्षा ल्याए, अनगिन्ती जीवनहरू सधैंको लागि परिवर्तन गरे।",
    aboutDunai: "दुनै बोर्डिङ स्कूलको बारेमा",
    qualityEducation: "डोल्पाको मुटुमा गुणस्तरीय शिक्षा",
    about1: "दुनै बोर्डिङ स्कूल एक प्रसिद्ध निजी शैक्षिक संस्था हो जुन दुर्गम पहाडी जिल्ला",
    about1Bold: "डोल्पा, नेपाल",
    about2: "मा अवस्थित छ। ठूलीभेरी नगरपालिका-३, दुनै — जिल्ला सदरमुकाम — मा रहेको यो विद्यालय कर्णाली प्रदेशमा गुणस्तरीय शिक्षाको लागि एक आवश्यक केन्द्रको रूपमा सेवा गर्दछ, विशेष गरी पृथक हिमाली उपत्यकामा बस्ने परिवारहरूको लागि।",
    about3: "विद्यालयले",
    about3Bold: "प्रारम्भिक बाल विकास (ECD) / नर्सरीदेखि कक्षा ८ सम्म",
    about4: "शिक्षा प्रदान गर्दछ, लगभग",
    about4Bold: "३५० भर्ना भएका विद्यार्थीहरू",
    about5: "सहित। धेरै विद्यार्थीहरू धेरै दिनको पैदल दूरीमा रहेको दुर्गम गाउँबाट आउने भएकाले, विद्यालयले",
    about5Bold: "आवासीय (होस्टल) सुविधा",
    about6: "प्रदान गर्दछ जहाँ विद्यार्थीहरू सुरक्षित रूपमा बस्न र अध्ययन गर्न सक्छन्।",
    studentsEnrolled: "भर्ना भएका विद्यार्थी",
    gradeLevels: "कक्षा स्तर",
    location: "डोल्पा",
    hostelFacility: "होस्टल सुविधा",
    yes: "छ",
    whatMakesUnique: "हामीलाई अद्वितीय बनाउने कुरा",
    specialInitiatives: "हाम्रा विशेष पहलहरू",
    ecoClub: "इको-क्लब",
    ecoClubPartner: "WWF नेपालको साझेदारीमा",
    ecoClubDesc: "हाम्रो विद्यालय यसको वातावरणीय जागरूकता कार्यक्रमहरूको लागि अत्यधिक मान्यता प्राप्त छ। WWF नेपाल र शे-फोक्सुण्डो राष्ट्रिय निकुञ्जको साझेदारीमा सञ्चालित इको-क्लबले बालबालिकालाई सानै उमेरदेखि वन्यजन्तु संरक्षण र जलवायु कार्यको बारेमा सिकाउँछ। विद्यार्थीहरूले डोल्पा क्षेत्रको अद्वितीय जैविक विविधताको संरक्षण गर्न सिक्छन्।",
    steamLearning: "STEAM शिक्षा",
    steamSubtitle: "विज्ञान • प्रविधि • इन्जिनियरिङ • कला • गणित",
    steamDesc: "हामी विद्यार्थी नवाचार र आलोचनात्मक सोचलाई प्रोत्साहित गर्न STEAM (विज्ञान, प्रविधि, इन्जिनियरिङ, कला, र गणित) मार्फत हाते प्रयोगात्मक शिक्षालाई एकीकृत गर्छौं। यस दुर्गम क्षेत्रमा पनि, हाम्रा विद्यार्थीहरू भविष्यको लागि तयार गर्ने आधुनिक शैक्षिक दृष्टिकोणहरूसँग संलग्न हुन्छन्।",
    ourMission: "हाम्रो उद्देश्य",
    missionText: "डोल्पा र कर्णाली प्रदेशका बालबालिकाहरूलाई समग्र, गुणस्तरीय शिक्षा प्रदान गर्नु, बौद्धिक जिज्ञासा, नैतिक मूल्य र व्यावहारिक सीपहरूको पोषण गर्नु।",
    mission1: "दुर्गम डोल्पामा गुणस्तरीय अंग्रेजी-माध्यम शिक्षा",
    mission2: "टाढाका गाउँका बालबालिकाहरूको लागि सुरक्षित आवासीय सुविधा",
    mission3: "इको-क्लब कार्यक्रमहरू मार्फत वातावरणीय जागरूकता",
    mission4: "नवाचार र आलोचनात्मक सोचको लागि STEAM शिक्षा",
    ourVision: "हाम्रो दृष्टिकोण",
    visionText: "कर्णाली प्रदेशको अग्रणी शैक्षिक संस्था बन्नु — शैक्षिक उत्कृष्टता, वातावरणीय संरक्षण, र जिम्मेवार नागरिकहरूको लागि परिचित।",
    vision1: "दुर्गम क्षेत्रहरूमा शैक्षिक नवाचारको लागि मान्यता प्राप्त",
    vision2: "वातावरणीय रूपमा सचेत नेताहरू उत्पादन",
    vision3: "हिमाली समुदायहरूलाई विश्वव्यापी अवसरहरूसँग जोड्ने",
    vision4: "दिगो पर्वतीय शिक्षाको लागि एक नमूना",
    whatWeStand: "हामी केको लागि उभिन्छौं",
    coreValues: "हाम्रा मूल मूल्यहरू",
    integrity: "इमानदारिता",
    integrityDesc: "हामी हिमाली समुदायहरूको बलियो नैतिक मूल्यहरूमा आधारित इमानदारी र नैतिक आचरण सिकाउँछौं।",
    excellence: "उत्कृष्टता",
    excellenceDesc: "हाम्रो दुर्गम स्थानको बावजुद, हामी उच्च मापदण्ड राख्छौं र शैक्षिक र व्यक्तिगत उत्कृष्टताको लागि प्रयास गर्छौं।",
    inclusivity: "समावेशिता",
    inclusivityDesc: "हामी डोल्पा र कर्णाली प्रदेशभरका सबै गाउँ र पृष्ठभूमिका बालबालिकाहरूलाई स्वागत गर्छौं।",
    resilience: "लचिलोपन",
    resilienceDesc: "हाम्रो वरपरका हिमालयहरू जस्तै, हामी विद्यार्थीहरूलाई बलियो, लचिलो र अडिग हुन सिकाउँछौं।",
    closingText: "दुनै बोर्डिङ स्कूल डोल्पाको दुर्गम पहाडहरूमा एक महत्त्वपूर्ण शैक्षिक संस्थाको रूपमा सेवा गर्न जारी राख्छ, क्षेत्रभरका बालबालिकाहरूको लागि गुणस्तरीय शिक्षा र घरभन्दा टाढा सुरक्षित घर प्रदान गर्दै।",
    address: "ठूलीभेरी नगरपालिका-३, दुनै, डोल्पा",
  },
};

export default function AboutPage() {
  const language = useLanguage();
  const t = translations[language];

  const coreValues = [
    { icon: <Heart size={22} className="text-red-600" />, title: t.integrity, color: "from-red-50 to-red-100 border-red-200", desc: t.integrityDesc },
    { icon: <Layers size={22} className="text-blue-600" />, title: t.excellence, color: "from-blue-50 to-blue-100 border-blue-200", desc: t.excellenceDesc },
    { icon: <Globe size={22} className="text-green-600" />, title: t.inclusivity, color: "from-green-50 to-green-100 border-green-200", desc: t.inclusivityDesc },
    { icon: <Mountain size={22} className="text-purple-600" />, title: t.resilience, color: "from-purple-50 to-purple-100 border-purple-200", desc: t.resilienceDesc },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <School size={14} />
            {t.aboutSchool}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            {t.ourStory}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t.ourValues}
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto">
            {t.heroDesc}
          </p>
        </div>
      </FadeIn>

      {/* ═══════════ TWO FOUNDERS SECTION ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-200">
              <Crown size={14} />
              {t.foundingFathers}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 tracking-tight">
              {t.visionaries}{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                {t.startedItAll}
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t.foundersDesc}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <FadeIn delay={0.1}>
            <div className="group relative bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100 hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />
              <div className="relative rounded-2xl overflow-hidden m-4">
                <img src={AngadImage} alt="Late Angad K. Hamal" className="w-full h-auto object-cover" loading="lazy" />
              </div>
              <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="group relative bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100 hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400" />
              <div className="relative rounded-2xl overflow-hidden m-4">
                <img src={BupendraImage} alt="Late Bupendra Mukhia" className="w-full h-auto object-cover" loading="lazy" />
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ ABOUT THE SCHOOL ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm mb-3">
                  <School size={16} />
                  {t.aboutDunai}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{t.qualityEducation}</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{t.about1} <span className="font-semibold text-gray-800">{t.about1Bold}</span>. {t.about2}</p>
                  <p>{t.about3} <span className="font-semibold text-gray-800">{t.about3Bold}</span>, {t.about4} <span className="font-semibold text-gray-800">{t.about4Bold}</span>. {t.about5} <span className="font-semibold text-gray-800">{t.about5Bold}</span> {t.about6}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users size={20} className="text-blue-600" />, value: "~350", label: t.studentsEnrolled },
                  { icon: <BookOpen size={20} className="text-green-600" />, value: "Nursery–8", label: t.gradeLevels },
                  { icon: <Building size={20} className="text-purple-600" />, value: t.location, label: t.location },
                  { icon: <HomeIcon />, value: t.yes, label: t.hostelFacility },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-2">{stat.icon}</div>
                    <p className="text-xl font-extrabold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ UNIQUE INITIATIVES ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Leaf size={14} />
              {t.whatMakesUnique}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">{t.specialInitiatives}</h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center"><TreePine size={28} className="text-green-600" /></div>
                <div><h3 className="text-xl font-extrabold text-gray-900">{t.ecoClub}</h3><p className="text-sm text-green-700 font-semibold">{t.ecoClubPartner}</p></div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{t.ecoClubDesc}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center"><Target size={28} className="text-purple-600" /></div>
                <div><h3 className="text-xl font-extrabold text-gray-900">{t.steamLearning}</h3><p className="text-sm text-purple-700 font-semibold">{t.steamSubtitle}</p></div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{t.steamDesc}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ MISSION & VISION ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <FadeIn>
            <div className="h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm"><Target size={28} className="text-white" /></div>
                <h3 className="text-2xl font-extrabold mb-4">{t.ourMission}</h3>
                <p className="text-blue-100 leading-relaxed mb-6">{t.missionText}</p>
                <ul className="space-y-3 text-sm">
                  {[t.mission1, t.mission2, t.mission3, t.mission4].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-100">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><Star size={10} className="text-white fill-white" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="h-full bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm"><Eye size={28} className="text-white" /></div>
                <h3 className="text-2xl font-extrabold mb-4">{t.ourVision}</h3>
                <p className="text-indigo-100 leading-relaxed mb-6">{t.visionText}</p>
                <ul className="space-y-3 text-sm">
                  {[t.vision1, t.vision2, t.vision3, t.vision4].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-indigo-100">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><Star size={10} className="text-white fill-white" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ CORE VALUES ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Heart size={14} />
              {t.whatWeStand}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">{t.coreValues}</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreValues.map((value, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`h-full bg-gradient-to-br ${value.color} border rounded-2xl p-6 sm:p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">{value.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ CLOSING ═══════════ */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto py-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
            <GraduationCap size={28} className="text-white" />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.closingText}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-blue-500" />{t.address}</span>
            <span className="flex items-center gap-2"><MailIcon />dunaiboarding2050@gmail.com</span>
            <span className="flex items-center gap-2"><PhoneIcon />+977-9848303292</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" /><path d="M9 22V12h6v10" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}