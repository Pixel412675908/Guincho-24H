
export interface Service {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
}
