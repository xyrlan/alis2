export interface Service {
  name: string;
  description: string;
}

export interface ServicePhoto {
  src: string;
  alt: string;
}

export interface ServiceDetail {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  photos: ServicePhoto[];
}
