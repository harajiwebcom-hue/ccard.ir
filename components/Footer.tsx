import React from 'react';
import { Instagram, Send, MapPin, Mail, Phone, ShieldCheck, ArrowLeft, MessageCircle, DownloadCloud } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-indigo-200 shadow-lg">
                <span className="font-black font-latin text-xs">C</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-latin tracking-tight">ccard.ir</h3>
            </div>
            <p className="text-slate-500 text-sm leading-loose text-justify">
              سی کارت؛ پیشرو در ارائه خدمات پرداخت بین‌المللی، خرید اکانت‌های هوش مصنوعی و خدمات بازرگانی ایران و ترکیه. <br/>
              ما پلی مطمئن میان شما و دنیای تجارت جهانی هستیم.
            </p>
            <div className="flex space-x-reverse space-x-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/989123772681" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#229ED9] hover:text-white hover:border-transparent transition-all shadow-sm">
                <Send className="h-5 w-5 pr-0.5 pt-0.5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg relative inline-block">
              خدمات پرطرفدار
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group"><ArrowLeft className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300"/> خرید اکانت هوش مصنوعی</button></li>
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group"><ArrowLeft className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300"/> ثبت نام آزمون‌های تافل/GRE</button></li>
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group"><ArrowLeft className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300"/> حواله وسترن یونیون</button></li>
              <li><button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group"><ArrowLeft className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300"/> خدمات دانشجویی ترکیه</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg relative inline-block">
              راه‌های ارتباطی
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-teal-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                   <MapPin className="h-4 w-4 text-indigo-600 group-hover:text-white" />
                </div>
                <span className="mt-1.5 leading-relaxed">تهران، سعادت آباد، میدان کاج،<br/>مجتمع تجاری سرو، طبقه ۳</span>
              </li>
              
              {/* General Management - Ali Oveysi */}
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                   <Phone className="h-4 w-4 text-indigo-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">مدیریت (علی اویسی)</span>
                  <a href="https://wa.me/989123772681" target="_blank" className="hover:text-indigo-600 font-bold font-latin text-base" dir="ltr">
                    +98 912 377 2681
                  </a>
                </div>
              </li>

              {/* Mrs. Torabi Contact */}
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                   <MessageCircle className="h-4 w-4 text-teal-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs text-slate-400">مدیریت ترکیه (محدثه ترابی)</span>
                   <div className="flex flex-col items-start">
                      <a href="https://wa.me/905550007062" target="_blank" className="hover:text-teal-600 font-bold font-latin text-base" dir="ltr">
                         +90 555 000 70 62
                      </a>
                      <a href="https://wa.me/905550007062" target="_blank" className="text-teal-600 font-bold text-[10px] flex items-center gap-1 hover:underline mt-0.5">
                          ارتباط در واتساپ
                      </a>
                   </div>
                </div>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                   <Mail className="h-4 w-4 text-slate-500 group-hover:text-white" />
                </div>
                <span className="font-latin mt-1 group-hover:text-slate-900 transition-colors">info@ccard.ir</span>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg relative inline-block">
              اعتماد شما
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-slate-300 rounded-full"></span>
            </h4>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
               <div className="flex items-center gap-2 mb-3 text-teal-600 font-bold">
                  <ShieldCheck className="h-6 w-6" />
                  <span>ضمانت کیفیت</span>
               </div>
               <p className="text-xs text-slate-500 text-justify leading-relaxed opacity-80">
                  تمامی سرویس‌های ccard.ir دارای گارانتی بازگشت وجه و پشتیبانی فنی تا پایان دوره اشتراک یا انجام کامل خدمات می‌باشند.
               </p>
            </div>
            <div className="mt-4">
               <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
                 <DownloadCloud className="h-4 w-4" /> دانلود کاتالوگ خدمات
               </button>
            </div>
            <div className="mt-6 flex gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {/* Placeholders for Trust Logos */}
               <div className="h-12 w-14 bg-white border border-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                 <span className="text-[9px] font-black text-slate-400">ENAMAD</span>
               </div>
               <div className="h-12 w-14 bg-white border border-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                 <span className="text-[9px] font-black text-slate-400">SAMANDEHI</span>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2025 سی کارت (ccard.ir) - تمامی حقوق برای خانم ترابی و آقای اویسی محفوظ است.</p>
          <div className="flex gap-6">
             <span className="hover:text-slate-600 cursor-pointer transition-colors">قوانین و مقررات</span>
             <span className="hover:text-slate-600 cursor-pointer transition-colors">حریم خصوصی</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;