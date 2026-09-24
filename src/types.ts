export interface NewsArticle {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
  gradient: {
    from: string;
    via: string;
    to: string;
    accent: string;
    glow: string;
  };
  keyTakeaway?: string;
  tags: string[];
  featuredInHero?: boolean;
}

export type PortalRole = 'protocol' | 'it-admin';

export type ViewMode = 'hero' | 'news-page' | 'sign-in';
