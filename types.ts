import { LucideIcon } from 'lucide-react';

export interface Phase {
  id: number;
  week: string;
  title: string;
  description: string;
  items: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PainPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChecklistItem {
  text: string;
}