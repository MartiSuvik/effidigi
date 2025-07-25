export interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  date?: string;
  author?: string;
  readTime?: number;
  tags?: string[];
}

export interface Testimonial {
  type: string;
  users: string;
  content: string;
  name: string;
  role: string;
  image: string;
}

export interface AIEmployee {
  id: string;
  name: string;
  role: string;
  description: string;
  splineScene?: string;
  avatar: string;
  specialties: string[];
}