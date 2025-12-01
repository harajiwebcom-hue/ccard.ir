import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GoogleGenAI } from "@google/genai";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Landmark, 
  Code2, 
  Building2, 
  CreditCard, 
  GraduationCap, 
  ShoppingBag, 
  Phone,
  MapPin,
  Car,
  Bot,
  Globe,
  MonitorCheck,
  Container,
  ChevronLeft,
  MessageCircle,
  Video,
  Loader2,
  Play,
  BrainCircuit,
  X,
  Calendar,
  ArrowRight,
  Clock,
  Users,
  Trophy,
  ShieldCheck,
  Zap,
  Download,
  // Added Quote import
  Quote
} from 'lucide-react';
import { PageView, Service } from './types';

// --- DATA: Services ---
const servicesData: Service[] = [
  { 
    id: 4, 
    title: 'انتقال پول و حواله ارزی', 
    description: 'حواله لیر، یورو و دلار به کلیه حساب‌های بانکی ترکیه و جهان. وسترن یونیون.', 
    longDescription: 'انتقال پول بین ایران و خارج از کشور، به ویژه ترکیه، تخصص اصلی ماست. ما امکان انتقال وجه به صورت حواله بانکی (SWIFT/EFT) به حساب‌های زراعت بانک، ایش بانک و... و همچنین خدمات دریافت و پرداخت نقدی در استانبول و آنتالیا را فراهم کرده‌ایم.',
    features: ['نرخ لحظه‌ای و رقابتی', 'تسویه آنی', 'امکان تحویل دستی', 'بدون محدودیت سقف', 'رسید معتبر'],
    processSteps: [
       { title: 'استعلام نرخ', desc: 'تماس برای قیمت لحظه‌ای.' },
       { title: 'واریز ریالی', desc: 'واریز به حساب ایران.' },
       { title: 'انجام حواله', desc: 'ارسال ارز به مقصد.' }
    ],
    icon: Landmark, 
    featured: true,
    whatsappMessage: 'سلام، نرخ روز حواله لیر/دلار چند است؟ قصد انتقال وجه دارم.'
  },
  { 
    id: 10, 
    title: 'مشاوره صادرات و واردات', 
    description: 'سورسینگ کالا، بازاریابی بین‌المللی و راهکارهای دور زدن تحریم‌ها.', 
    longDescription: 'همراه شما در مسیر تجارت جهانی هستیم. از تامین کالا (Sourcing) از کارخانه‌های ترکیه تا صادرات محصولات ایرانی و تسهیل تراکنش‌های مالی.',
    features: ['یافتن تامین‌کنندگان', 'عقد قرارداد تجاری', 'پرداخت امن', 'مشاوره گمرکی', 'بازاریابی محصول'],
    processSteps: [
       { title: 'درخواست کالا', desc: 'مشخصات را اعلام کنید.' },
       { title: 'تحقیق بازار', desc: 'شناسایی بهترین گزینه‌ها.' },
       { title: 'ارائه گزارش', desc: 'لیست قیمت و شرایط.' },
       { title: 'اجرا', desc: 'خرید و حمل.' }
    ],
    icon: Globe, 
    whatsappMessage: 'سلام، درخواست مشاوره در زمینه صادرات/واردات دارم.'
  },
  { 
    id: 1, 
    title: 'خدمات هوش مصنوعی (AI)', 
    description: 'خرید اکانت‌های ChatGPT Plus، Midjourney، Claude و سرویس‌های پرمیوم.', 
    longDescription: 'دسترسی قانونی و مستقیم به ابزارهای هوش مصنوعی. خرید اشتراک‌های پرمیوم سرویس‌های ChatGPT Plus، Midjourney و Claude Pro با گارانتی کامل.',
    features: ['فعالسازی روی ایمیل شخصی', 'پشتیبانی کامل', 'پرداخت ریالی', 'تحویل فوری', 'دسترسی به آخرین مدل‌ها'],
    processSteps: [
       { title: 'انتخاب پلن', desc: 'سرویس مورد نظر را انتخاب کنید.' },
       { title: 'ارسال مشخصات', desc: 'ایمیل خود را بفرستید.' },
       { title: 'تحویل اکانت', desc: 'اکانت پرمیوم ارسال می‌شود.' }
    ],
    icon: Bot, 
    featured: true,
    price: 'شروع از ۳۰۰ هزار تومان',
    whatsappMessage: 'سلام، متقاضی خرید اکانت هوش مصنوعی (ChatGPT/Midjourney) هستم.'
  },
  { 
    id: 2, 
    title: 'ثبت‌نام‌های آنلاین و آزمون', 
    description: 'پرداخت هزینه آزمون‌های TOEFL, GRE, Duolingo و سایت‌های خارجی.', 
    longDescription: 'پرداخت هزینه ثبت‌نام آزمون‌های بین‌المللی و Application Fee دانشگاه‌ها با کارت‌های اعتباری معتبر.',
    features: ['نرخ واقعی', 'ارسال رسید رسمی', 'انجام سریع', 'پشتیبانی ریفاند'],
    processSteps: [
      { title: 'ارسال اطلاعات', desc: 'یوزرنیم و پسورد را بفرستید.' },
      { title: 'برآورد هزینه', desc: 'محاسبه قیمت دلار.' },
      { title: 'انجام پرداخت', desc: 'ارسال رسید نهایی.' }
    ],
    icon: MonitorCheck, 
    whatsappMessage: 'سلام، برای پرداخت هزینه آزمون / ثبت نام آنلاین کمک می‌خواهم.'
  },
  { 
    id: 3, 
    title: 'خدمات دانشجویی ترکیه', 
    description: 'مشاوره تحصیلی، پذیرش دانشگاه، پرداخت شهریه و خوابگاه.', 
    longDescription: 'از انتخاب رشته تا اسکان در ترکیه. اخذ پذیرش از دانشگاه‌های خصوصی و دولتی، ثبت نام آزمون‌های YOS و SAT.',
    features: ['پذیرش رایگان (برخی دانشگاه‌ها)', 'مشاوره انتخاب رشته', 'امور معادلسازی', 'پرداخت شهریه'],
    processSteps: [
       { title: 'مشاوره', desc: 'بررسی مدارک.' },
       { title: 'انتخاب دانشگاه', desc: 'ارسال لیست پیشنهادی.' },
       { title: 'اخذ پذیرش', desc: 'دریافت برگه پذیرش.' }
    ],
    icon: GraduationCap, 
    whatsappMessage: 'سلام، در مورد تحصیل در ترکیه سوال دارم.'
  },
  { 
    id: 5, 
    title: 'ثبت شرکت و اقامت', 
    description: 'مشاوره و انجام امور ثبت شرکت در ترکیه، اخذ اقامت توریستی و کاری.', 
    longDescription: 'ثبت شرکت در ترکیه در کمتر از ۵ روز کاری. خدمات اخذ اقامت توریستی (کیملیک) و کاری.',
    features: ['ثبت شرکت در ۵ روز', 'افتتاح حساب شرکتی', 'خدمات حسابداری', 'آفیس مجازی'],
    processSteps: [
       { title: 'ارسال مدارک', desc: 'پاسپورت و عکس.' },
       { title: 'تنظیم اساسنامه', desc: 'تعیین نام شرکت.' },
       { title: 'امضا در نوتر', desc: 'حضور در دفترخانه.' }
    ],
    icon: Building2, 
    whatsappMessage: 'سلام، در مورد ثبت شرکت و اقامت در ترکیه سوال دارم.'
  },
  { 
    id: 6, 
    title: 'ری‌اکسپورت و کارگو', 
    description: 'خدمات بازرگانی، ارسال بار و ری‌اکسپورت کالا از ترکیه.', 
    longDescription: 'خدمات جامع لجستیک، دریافت کالا در ترکیه، انبارداری و ارسال مجدد به ایران یا سایر کشورها.',
    features: ['انبارداری', 'ترخیص کالا', 'ارسال هوایی/زمینی', 'خرید کالا', 'بیمه بار'],
    processSteps: [
       { title: 'مشاوره', desc: 'بررسی نوع بار.' },
       { title: 'تحویل', desc: 'دریافت در انبار ما.' },
       { title: 'حمل', desc: 'ارسال به مقصد.' }
    ],
    icon: Container, 
    whatsappMessage: 'سلام، برای خدمات کارگو و ری‌اکسپورت راهنمایی می‌خواهم.'
  },
  { 
    id: 7, 
    title: 'خرید از سایت‌های خارجی', 
    description: 'خرید از آمازون، ترندیول و تحویل درب منزل در ایران.', 
    longDescription: 'خرید مستقیم از برندهای جهانی و تحویل در ایران. محاسبه شفاف قیمت تمام شده.',
    features: ['خرید بدون واسطه', 'محاسبه شفاف', 'تحویل ۲-۳ هفته‌ای', 'خرید دارو/مکمل'],
    processSteps: [
       { title: 'ارسال لینک', desc: 'لینک محصول را بفرستید.' },
       { title: 'صدور فاکتور', desc: 'محاسبه قیمت.' },
       { title: 'ارسال', desc: 'حمل به ایران.' }
    ],
    icon: ShoppingBag, 
    whatsappMessage: 'سلام، لینک کالایی را برای خرید دارم.'
  },
  { 
    id: 8, 
    title: 'اجاره خودرو در ترکیه', 
    description: 'رزرو خودروهای اکونومی و لوکس بدون نیاز به کردیت کارت.', 
    longDescription: 'اجاره خودرو در فرودگاه‌های استانبول، آنتالیا و ازمیر بدون نیاز به کردیت کارت.',
    features: ['بدون کردیت کارت', 'خودروهای جدید', 'بیمه کامل', 'تحویل در فرودگاه'],
    processSteps: [
       { title: 'انتخاب', desc: 'تعیین تاریخ و مدل.' },
       { title: 'رزرو', desc: 'پرداخت بیعانه.' },
       { title: 'تحویل', desc: 'تحویل خودرو در ترکیه.' }
    ],
    icon: Car, 
    whatsappMessage: 'سلام، قیمت اجاره خودرو در ترکیه را می‌خواستم.'
  },
  { 
    id: 9, 
    title: 'طراحی سایت و دیجیتال مارکتینگ', 
    description: 'طراحی وبسایت، سئو و تبلیغات گوگل برای بازارهای جهانی.', 
    longDescription: 'زیرساخت دیجیتال برای ورود به بازار جهانی. طراحی سایت چندزبانه و سئو.',
    features: ['طراحی اختصاصی', 'سئو بین‌المللی', 'گوگل ادز', 'مدیریت سوشال'],
    processSteps: [
       { title: 'نیازسنجی', desc: 'جلسه آنلاین.' },
       { title: 'اجرا', desc: 'طراحی و پیاده‌سازی.' },
       { title: 'پشتیبانی', desc: 'آموزش و نگهداری.' }
    ],
    icon: Code2, 
    whatsappMessage: 'سلام، برای طراحی سایت و سئو نیاز به مشاوره دارم.'
  }
];

// --- SEO Schema Component ---
const JsonLdSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ccard.ir | تیم ایران ترکیه",
    "url": "https://ccard.ir",
    "logo": "https://ccard.ir/logo.png",
    "description": "مرجع تخصصی خدمات پرداخت بین‌المللی، خرید اکانت هوش مصنوعی، ثبت شرکت و خدمات دانشجویی در ترکیه.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+98-912-377-2681",
        "contactType": "customer service",
        "areaServed": "IR",
        "availableLanguage": "Persian"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-555-000-7062",
        "contactType": "customer service",
        "areaServed": "TR",
        "availableLanguage": ["Persian", "Turkish"]
      }
    ],
    "founders": [
      { "@type": "Person", "name": "Mohadese Torabi" },
      { "@type": "Person", "name": "Ali Oveysi" }
    ],
    "sameAs": [
      "https://instagram.com/ccard.ir",
      "https://linkedin.com/company/ccard-ir"
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
  );
};

// --- Veo Video Generator ---
const VeoVideoGenerator = ({ serviceTitle, serviceDesc }: { serviceTitle: string, serviceDesc: string }) => {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleGenerateVideo = async () => {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        return;
      }
      setLoading(true);
      setStatus('در حال ارتباط با هوش مصنوعی Veo...');
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Cinematic commercial for "${serviceTitle}". Description: "${serviceDesc}". Professional, 4k, clean corporate style.`;
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
      });

      while (!operation.done) {
        setStatus('در حال پردازش...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        setVideoUrl(`${operation.response.generatedVideos[0].video.uri}&key=${process.env.API_KEY}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('خطا در تولید ویدیو.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl mt-12 relative p-8 text-white border border-slate-800">
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/30 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <Video className="h-6 w-6 text-indigo-400" />
        <h3 className="font-bold text-lg font-latin tracking-wide">AI Video Generator (Veo)</h3>
      </div>
      {videoUrl ? (
        <div className="space-y-4">
          <video controls className="w-full rounded-2xl border border-slate-700 shadow-lg" autoPlay src={videoUrl} />
          <a href={videoUrl} download="promo-video.mp4" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors font-bold text-sm">
            <Download className="h-4 w-4" /> دانلود ویدیو
          </a>
        </div>
      ) : (
        <div className="text-center space-y-5">
          <div className="aspect-video bg-slate-800/40 rounded-2xl flex items-center justify-center border border-slate-700/50 border-dashed backdrop-blur-sm">
             {loading ? <Loader2 className="animate-spin h-8 w-8 text-indigo-500"/> : <Play className="h-12 w-12 text-slate-500 opacity-50"/>}
          </div>
          <p className="text-xs text-slate-400 font-latin">Powered by Google Veo 3.1 AI Model</p>
          <button onClick={handleGenerateVideo} disabled={loading} className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-lg shadow-indigo-900/50">
            {loading ? status : 'ساخت ویدیو معرفی هوشمند'}
          </button>
        </div>
      )}
    </div>
  );
};

// --- Promo Slider ---
const PromoSlider = () => {
  const [curr, setCurr] = useState(0);
  const slides = [
    { id: 1, title: "دور زدن تحریم‌ها", sub: "آزادی مالی بدون مرز", desc: "انتقال پول و درآمدهای ارزی به صورت امن و آنی", color: "from-slate-900 via-slate-800 to-slate-900", accent: "text-indigo-400", icon: Globe },
    { id: 2, title: "دروازه تجارت جهانی", sub: "صادرات و واردات", desc: "تامین کالا و بازاریابی بین‌المللی با تیم متخصص", color: "from-slate-900 via-slate-800 to-slate-900", accent: "text-emerald-400", icon: Container },
    { id: 3, title: "دسترسی نامحدود", sub: "ابزارهای دیجیتال", desc: "هوش مصنوعی و اکانت‌های پرمیوم با گارانتی معتبر", color: "from-slate-900 via-slate-800 to-slate-900", accent: "text-purple-400", icon: BrainCircuit }
  ];
  useEffect(() => { const t = setInterval(() => setCurr(c => (c+1)%slides.length), 6000); return () => clearInterval(t); }, []);

  return (
    <header className="relative w-full h-[360px] md:h-[480px] overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl mb-8 md:mb-0 bg-slate-900 group">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/80 z-10"></div>
      
      {slides.map((s, i) => (
        <div key={s.id} className={`absolute inset-0 flex items-center justify-center text-center p-6 bg-gradient-to-br ${s.color} transition-all duration-1000 ease-in-out ${i===curr?'opacity-100 z-10 scale-100':'opacity-0 z-0 scale-105'}`}>
          <div className="max-w-4xl relative z-20 animate-fade-in-up flex flex-col items-center">
            <div className={`mb-6 inline-flex p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl ${s.accent}`}>
               <s.icon className="h-10 w-10 md:h-14 md:w-14"/>
            </div>
            <h2 className={`text-sm md:text-lg font-bold tracking-[0.2em] mb-3 uppercase font-latin ${s.accent}`}>{s.sub}</h2>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-xl">{s.title}</h1>
            <p className="text-sm md:text-xl text-slate-300 font-medium max-w-lg mx-auto leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurr(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === curr ? 'w-12 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'}`} 
          />
        ))}
      </div>
    </header>
  );
};

// --- Stats Bar Component ---
const StatsBar = () => {
  const stats = [
    { icon: Trophy, label: "سابقه فعالیت", value: "+۱۰ سال" },
    { icon: Users, label: "مشتری راضی", value: "+۱۵,۰۰۰" },
    { icon: ShieldCheck, label: "تضمین خدمات", value: "۱۰۰٪" },
    { icon: Zap, label: "پشتیبانی", value: "۲۴/۷" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 relative z-30 -mt-10 md:-mt-16 mb-20">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-x-reverse divide-slate-100">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-2 text-center group">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-black text-slate-900 text-xl md:text-2xl font-latin tracking-tight">{item.value}</div>
              <div className="text-xs text-slate-400 font-bold mt-1">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Service Detail Page ---
const ServiceDetailPage = ({ service, onBack }: { service: Service, onBack: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors font-bold group bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
          <ArrowRight className="h-4 w-4 group-hover:mr-1 transition-all" /> بازگشت به خدمات
        </button>
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100/60">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 border-b border-slate-50 pb-8">
            <div className="p-5 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl text-indigo-600 w-fit shadow-inner border border-white/50"><service.icon className="h-12 w-12" /></div>
            <div>
               <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3">{service.title}</h1>
               <p className="text-slate-400 font-bold">{service.description}</p>
            </div>
          </div>
          <div className="prose prose-lg text-slate-600 text-justify mb-12 leading-loose max-w-none">
            {service.longDescription}
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2"><CheckCircle2 className="text-teal-500"/> ویژگی‌های کلیدی</h2>
              <ul className="space-y-4">{service.features?.map((f,i)=><li key={i} className="flex gap-3 text-slate-700 items-start"><div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-indigo-500 shrink-0"/>{f}</li>)}</ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2"><Clock className="text-indigo-500"/> مراحل انجام کار</h2>
              <div className="space-y-8 relative border-r-2 border-indigo-100 pr-6 mr-2">{service.processSteps?.map((s,i)=><div key={i} className="relative"><div className="absolute -right-[33px] top-1.5 w-3 h-3 rounded-full bg-white border-4 border-indigo-500 shadow-sm"/><h4 className="font-bold text-slate-900 text-lg">{s.title}</h4><p className="text-sm text-slate-500 mt-1 leading-relaxed">{s.desc}</p></div>)}</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-slate-900 text-white p-8 md:p-10 rounded-[2rem] relative overflow-hidden shadow-2xl shadow-slate-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 text-center md:text-right">
              <h3 className="text-2xl font-black mb-2">همین حالا سفارش دهید</h3>
              <p className="text-slate-400 font-medium">مشاوره رایگان و استعلام قیمت دقیق در واتساپ</p>
            </div>
            <a href={`https://wa.me/989123772681?text=${encodeURIComponent(service.whatsappMessage || '')}`} target="_blank" className="relative z-10 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20 transform hover:-translate-y-1 w-full md:w-auto justify-center">
              <MessageCircle className="h-5 w-5" /> شروع گفتگو در واتساپ
            </a>
          </div>
          <VeoVideoGenerator serviceTitle={service.title} serviceDesc={service.description} />
        </div>
      </div>
    </div>
  );
};

// --- Blog Section ---
const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "راهنمای افتتاح حساب زراعت بانک ترکیه",
      excerpt: "چگونه بدون اقامت ترکیه در زراعت بانک حساب باز کنیم؟ مدارک لازم و مراحل کامل افتتاح حساب برای ایرانیان.",
      date: "۱۴۰۳/۱۲/۱۵",
      category: "بانکی",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "بهترین ابزارهای هوش مصنوعی برای کسب‌وکار",
      excerpt: "معرفی ۵ ابزار برتر هوش مصنوعی در سال ۲۰۲۵ که بهره‌وری شما را چندین برابر می‌کنند. از ChatGPT تا Midjourney.",
      date: "۱۴۰۳/۱۲/۱۰",
      category: "تکنولوژی",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "روش‌های دریافت درآمد ارزی فریلنسرها",
      excerpt: "چگونه درآمد دلاری خود را نقد کنیم؟ بررسی روش‌های امن و سریع برای دور زدن تحریم‌های بانکی.",
      date: "۱۴۰۳/۱۲/۰۵",
      category: "فریلنسری",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-indigo-600 font-bold bg-indigo-50 px-4 py-1.5 rounded-full text-xs font-latin uppercase tracking-widest">Blog & Articles</span>
        <h1 className="text-4xl md:text-5xl font-black mt-6 mb-6 text-slate-900">دانستنی‌های تجاری و ارزی</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">راهنمای جامع خدمات ارزی، مهاجرتی و تکنولوژی برای ایرانیان</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:-translate-y-2">
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-5 text-xs text-slate-400 font-bold font-latin">
                <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3"/> {post.date}</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{post.title}</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 text-justify">{post.excerpt}</p>
              <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:gap-3 transition-all">ادامه مطلب <ArrowLeft className="h-4 w-4"/></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

// --- About Page ---
const AboutPage = () => {
  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">درباره تیم ccard<span className="text-indigo-600">.ir</span></h1>
        <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
          ما ترکیبی از تجربه بازرگانی و تخصص تکنولوژی هستیم. هدف ما ایجاد پلی مطمئن و سریع برای ایرانیان جهت دسترسی به خدمات جهانی است.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        {/* Mohadese Torabi */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-teal-50 to-white"></div>
          <div className="w-48 h-48 rounded-full border-[6px] border-white shadow-xl mb-8 overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" alt="محدثه ترابی" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">محدثه ترابی</h2>
          <span className="text-teal-600 font-bold text-sm tracking-wide mb-6 uppercase">بنیان‌گذار و مدیر دفتر ترکیه</span>
          <p className="text-slate-500 text-sm leading-8 mb-8 px-4 max-w-sm">
            با بیش از ۱۰ سال سابقه در آنتالیا و استانبول، متخصص در امور اقامتی، ثبت شرکت و سرمایه‌گذاری ملکی. 
            مدیریت تیم عملیاتی در ترکیه بر عهده ایشان است.
          </p>
          <div className="flex gap-4">
             <a href="https://wa.me/905550007062" className="flex items-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white px-6 py-3 rounded-xl text-sm font-bold transition-all font-latin shadow-sm" dir="ltr">
               <Phone className="h-4 w-4" /> +90 555 000 70 62
             </a>
          </div>
        </div>

        {/* Ali Oveysi */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-indigo-50 to-white"></div>
          <div className="w-48 h-48 rounded-full border-[6px] border-white shadow-xl mb-8 overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" alt="علی اویسی" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">علی اویسی</h2>
          <span className="text-indigo-600 font-bold text-sm tracking-wide mb-6 uppercase">هم‌بنیان‌گذار و مدیر دفتر تهران</span>
          <p className="text-slate-500 text-sm leading-8 mb-8 px-4 max-w-sm">
            مدیر فنی و مسئول هماهنگی در ایران. متخصص در حوزه‌های پرداخت ارزی، فناوری اطلاعات و توسعه کسب‌وکارهای دیجیتال.
          </p>
          <div className="flex gap-4">
             <a href="https://wa.me/989123772681" className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white px-6 py-3 rounded-xl text-sm font-bold transition-all font-latin shadow-sm" dir="ltr">
               <Phone className="h-4 w-4" /> +98 912 377 2681
             </a>
          </div>
        </div>
      </div>
      
      {/* Office Info */}
      <div className="bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10 flex-1 text-center md:text-right">
            <h3 className="text-2xl font-black mb-2">دفتر مرکزی تهران</h3>
            <p className="text-slate-400 font-medium">سعادت آباد، میدان کاج، مجتمع تجاری سرو، طبقه ۳</p>
         </div>
         <div className="h-px w-full md:w-px md:h-16 bg-slate-700 relative z-10"></div>
         <div className="relative z-10 flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">دفتر هماهنگی آنتالیا</h3>
            <p className="text-slate-400 font-medium">منطقه لارا، خیابان آزادی، پلاک ۱۲</p>
         </div>
      </div>
    </div>
  );
};

// --- Testimonials ---
const TestimonialsSection = () => {
  const reviews = [
    { name: "امیرحسین رضایی", role: "تریدر بازارهای مالی", text: "سرعت عمل ccard در انتقال حواله لیر بی‌نظیر بود. کمتر از نیم ساعت پول به حساب زراعت من نشست و پشتیبانی عالی بود." },
    { name: "سارا محمدی", role: "دانشجوی پزشکی", text: "برای پرداخت شهریه دانشگاه استرس زیادی داشتم اما تیم خانم ترابی با حوصله تمام کارها رو انجام دادن و رسید رسمی فرستادن." },
    { name: "شرکت بازرگانی آراز", role: "مدیر عامل", text: "خدمات ثبت شرکت و مشاوره مالیاتی بسیار حرفه‌ای بود. تمام کارهای ارزی رو با خیال راحت به این تیم سپردیم." }
  ];
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
       <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2 block font-latin">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">تجربه مشتریان ما</h2>
       </div>
       <div className="grid md:grid-cols-3 gap-8">
         {reviews.map((r,i)=>(
           <div key={i} className="bg-white p-10 rounded-[2rem] shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl transition-all duration-300 relative group">
             <Quote className="absolute top-8 left-8 h-10 w-10 text-indigo-100 group-hover:text-indigo-200 transition-colors" />
             <p className="text-slate-600 text-sm mb-8 leading-8 relative z-10 pt-4">"{r.text}"</p>
             <div>
               <div className="font-bold text-slate-900 text-lg">{r.name}</div>
               <div className="text-xs text-indigo-500 font-bold mt-1">{r.role}</div>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
};

// --- AI Chat Widget ---
const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState([{id: 0, r:'ai',t:'سلام! 👋 من دستیار هوشمند ccard هستم. چطور می‌تونم کمکتون کنم؟'}]);
  const opts = ['خرید اکانت AI', 'ثبت نام آزمون', 'حواله ارزی', 'مشاوره'];
  
  const handle = (t:string) => {
     const nextId = msg.length;
     setMsg(p=>[...p,{id: nextId, r:'u',t}]);
     setTimeout(()=>{
        let r = 'لطفا در واتساپ پیام دهید تا همکارانم راهنمایی کنند.';
        if(t.includes('AI')) r='برای خرید اکانت هوش مصنوعی از بخش خدمات اقدام کنید. تحویل فوری است! 🚀';
        if(t.includes('حواله')) r='انجام حواله به زراعت و ایش بانک با بهترین نرخ روز انجام می‌شود.';
        setMsg(p=>[...p,{id: nextId+1, r:'ai',t:r}]);
     }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
       {!open && <button onClick={()=>setOpen(true)} className="bg-indigo-600 text-white p-4 rounded-full shadow-xl shadow-indigo-500/30 hover:scale-110 transition-transform duration-300 hover:bg-indigo-700"><Bot className="h-7 w-7"/></button>}
       {open && <div className="bg-white rounded-[2rem] shadow-2xl w-80 sm:w-96 border border-slate-100 overflow-hidden animate-fade-in-up">
          <div className="bg-indigo-600 p-5 text-white flex justify-between items-center"><span className="font-bold text-lg">دستیار هوشمند</span><button onClick={()=>setOpen(false)} className="bg-white/20 p-1 rounded-full hover:bg-white/30"><X className="h-5 w-5"/></button></div>
          <div className="h-80 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {msg.map((m)=><div key={m.id} className={`p-3.5 text-sm rounded-2xl max-w-[85%] leading-relaxed shadow-sm ${m.r==='ai'?'bg-white text-slate-700 rounded-tr-sm':'bg-indigo-600 text-white self-end rounded-tl-sm ml-auto'}`}>{m.t}</div>)}
          </div>
          <div className="p-4 bg-white flex flex-wrap gap-2 justify-center border-t border-slate-100">{opts.map((o,i)=><button key={i} onClick={()=>handle(o)} className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-2 rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100">{o}</button>)}</div>
       </div>}
    </div>
  );
};

// --- Main App ---
function App() {
  const [page, setPage] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (s: Service) => { setSelectedService(s); setPage('service-detail'); };
  const goBack = () => { setSelectedService(null); setPage('services'); };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 dir-rtl selection:bg-indigo-500 selection:text-white">
      <JsonLdSchema />
      <Navbar activePage={page} setPage={setPage} />
      
      {page === 'home' && (
        <main className="pt-20">
          <PromoSlider />
          <StatsBar />
          
          <div className="max-w-7xl mx-auto px-4 pb-24">
            <div className="text-center mb-20">
              <span className="text-indigo-600 font-bold bg-indigo-50 px-4 py-1.5 rounded-full text-xs tracking-widest font-latin uppercase">Premium Services</span>
              <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6 text-slate-900">خدمات متمایز ما</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">ارائه راهکارهای جامع مالی، تحصیلی و دیجیتال با بالاترین استاندارد جهانی</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.slice(0, 9).map((service) => (
                <div key={service.id} onClick={() => handleServiceClick(service)} className="group bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-indigo-100 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-bl-[100%] -mr-10 -mt-10 transition-all duration-500 group-hover:scale-150 group-hover:from-indigo-100 group-hover:to-purple-50"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <service.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-7 mb-8 line-clamp-3">{service.description}</p>
                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-50">
                      <span className="text-indigo-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">مشاهده جزئیات <ArrowLeft className="h-4 w-4" /></span>
                      <button onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/989123772681?text=${encodeURIComponent(service.whatsappMessage || '')}`, '_blank'); }} className="bg-white border border-emerald-100 text-emerald-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-50 transition-colors shadow-sm">استعلام قیمت</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <TestimonialsSection />
          </div>
        </main>
      )}

      {page === 'services' && (
        <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h1 className="text-4xl font-black mb-4 text-slate-900">لیست کامل خدمات</h1>
             <p className="text-slate-500">تمامی خدمات ارزی، دانشجویی و تجاری در یک نگاه</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map(s => (
               <div key={s.id} onClick={()=>handleServiceClick(s)} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl cursor-pointer transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-5 mb-6"><div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600"><s.icon className="h-7 w-7"/></div><h3 className="font-bold text-lg text-slate-900">{s.title}</h3></div>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">{s.description}</p>
                  <button className="text-sm font-bold text-indigo-600 w-full text-left flex items-center gap-2 hover:gap-3 transition-all">نمایش جزئیات <ArrowLeft className="h-4 w-4"/></button>
               </div>
            ))}
          </div>
        </div>
      )}

      {page === 'service-detail' && selectedService && <ServiceDetailPage service={selectedService} onBack={goBack} />}
      {page === 'blog' && <BlogPage />}
      {page === 'about' && <AboutPage />}
      
      {page === 'contact' && (
        <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto text-center">
           <h1 className="text-4xl font-black mb-10 text-slate-900">تماس با ما</h1>
           <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-16 -mt-16"></div>
              <p className="text-lg text-slate-600 mb-10 relative z-10 leading-loose">برای دریافت مشاوره رایگان و شروع همکاری، همین حالا با کارشناسان ما تماس بگیرید.</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                 <a href="https://wa.me/989123772681" target="_blank" className="flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:-translate-y-1"><Phone className="h-6 w-6"/> <span dir="ltr" className="font-latin text-lg">0912 377 2681</span></a>
                 <a href="https://wa.me/905550007062" target="_blank" className="flex items-center justify-center gap-3 bg-teal-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-200 hover:-translate-y-1"><Phone className="h-6 w-6"/> <span dir="ltr" className="font-latin text-lg">+90 555 000 70 62</span></a>
              </div>
           </div>
        </div>
      )}

      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;