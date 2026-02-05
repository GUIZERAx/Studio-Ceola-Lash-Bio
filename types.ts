export interface MaintenancePrice {
  days: number;
  price: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  maintenance?: MaintenancePrice[];
  category: 'cilios' | 'sobrancelhas';
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'instagram' | 'whatsapp' | 'map' | 'pdf';
}