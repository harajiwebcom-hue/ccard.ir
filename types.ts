import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  processSteps?: { title: string; desc: string }[];
  price?: string;
  icon: LucideIcon;
  featured?: boolean;
  whatsappMessage?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  image: string;
  contact?: {
    type: 'whatsapp' | 'telegram' | 'phone';
    value: string;
  }[];
}

export type PageView = 'home' | 'services' | 'about' | 'contact' | 'blog' | 'service-detail';
