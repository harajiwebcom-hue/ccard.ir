import React from 'react';
import { Instagram, Send, MapPin, Mail, Phone, ShieldCheck, ArrowLeft, MessageCircle, DownloadCloud } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200/50">
                <span className="font-black font-latin text-sm">C</span>
              </div>
              <h3 className="text-2xl font-black font-latin tracking-tight text-slate-900">
                ccard<span className="text-indigo-600">.ir</span>
              </h3>
            </div>
            <p className="text-slate-500 text-sm leading-8 text-justify pl-4">
              سی کارت؛ پیشرو در ارائه خدمات پرداخت بین‌المللی، خرید اکانت‌های هوش مصنوعی و خدمات بازرگانی ایران و ترکیه. <br/>
              ما پلی مطمئن میان شما و دنیای تجارت جهانی هستیم.
            </p>
            <div className="flex space-x-reverse space-x-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/+989123772681" target="_blank" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#229ED9] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <Send className="h-5 w-5 pr-0.5 pt-0.5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:pr-8">
            <h4 className="font-bold text-slate-900 mb-8 text-lg relative inline-block">
              خدمات پرطرفدار
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group w-full text-right"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors"></span> خرید اکانت هوش مصنوعی</button></li>
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group w-full text-right"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors"></span> ثبت نام آزمون‌های تافل/GRE</button></li>
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group w-full text-right"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors"></span> حواله وسترن یونیون</button></li>
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group w-full text-right"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors"></span> خدمات دانشجویی ترکیه</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-8 text-lg relative inline-block">
              راه‌های ارتباطی
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-teal-500 rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-sm text-slate-500">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                   <MapPin className="h-5 w-5 text-indigo-600 group-hover:text-white" />
                </div>
                <span className="mt-2 leading-relaxed">تهران، سعادت آباد، میدان کاج،<br/>مجتمع تجاری سرو، طبقه ۳</span>
              </li>
              
              {/* General Management - Ali Oveysi */}
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                   <Phone className="h-5 w-5 text-indigo-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">مدیریت (علی اویسی)</span>
                  <a href="https://wa.me/989123772681" target="_blank" className="hover:text-indigo-600 font-bold font-latin text-lg tracking-wide transition-colors" dir="ltr">
                    +98 912 377 2681
                  </a>
                </div>
              </li>

              {/* Mrs. Torabi Contact */}
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                   <MessageCircle className="h-5 w-5 text-teal-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs text-slate-400 font-medium">مدیریت ترکیه (محدثه ترابی)</span>
                   <div className="flex flex-col items-start">
                      <a href="https://wa.me/905550007062" target="_blank" className="hover:text-teal-600 font-bold font-latin text-lg tracking-wide transition-colors" dir="ltr">
                         +90 555 000 70 62
                      </a>
                   </div>
                </div>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                   <Mail className="h-5 w-5 text-slate-500 group-hover:text-white" />
                </div>
                <span className="font-latin mt-1 font-medium group-hover:text-slate-900 transition-colors">info@ccard.ir</span>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="font-bold text-slate-900 mb-8 text-lg relative inline-block">
              کاتالوگ و مجوزها
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-slate-300 rounded-full"></span>
            </h4>
            <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
               <div className="flex items-center gap-2 mb-3 text-teal-600 font-bold">
                  <ShieldCheck className="h-6 w-6" />
                  <span>ضمانت رسمی</span>
               </div>
               <p className="text-xs text-slate-500 text-justify leading-relaxed opacity-90">
                  تمامی سرویس‌های ccard.ir دارای گارانتی بازگشت وجه و پشتیبانی فنی تا پایان دوره اشتراک می‌باشند.
               </p>
            </div>
            <div className="mt-4">
               <button className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                 <DownloadCloud className="h-4 w-4" /> دانلود کاتالوگ خدمات PDF
               </button>
            </div>
            <div className="mt-6 flex gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {/* Placeholders for Trust Logos */}
               <div className="h-14 w-16 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
                 <span className="text-[10px] font-black font-latin text-slate-400">ENAMAD</span>
               </div>
               <div className="h-14 w-16 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
                 <span className="text-[10px] font-black font-latin text-slate-400">SAMANDEHI</span>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p className="font-medium">© 2025 سی کارت (ccard.ir) - تمامی حقوق برای خانم ترابی و آقای اویسی محفوظ است.</p>
          <div className="flex gap-8">
             <span className="hover:text-slate-600 cursor-pointer transition-colors font-bold">قوانین و مقررات</span>
             <span className="hover:text-slate-600 cursor-pointer transition-colors font-bold">حریم خصوصی</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;