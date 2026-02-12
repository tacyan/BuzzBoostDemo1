export interface FormData {
  product: string;
  audience: string;
  painPoint: string;
  benefit: string;
  offer: string;
  cta: string;
}

export type ViewState = 'input' | 'processing' | 'completed';

export interface ChecklistItem {
  id: string;
  label: string;
  status: 'pending' | 'checking' | 'completed';
  detail?: string;
  detailColor?: 'text-primary' | 'text-slate-400';
}

export interface VideoTemplate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: { text: string; color: string }[];
  isSelected?: boolean;
}