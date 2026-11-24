export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  image_1?: string | null;
  image_2?: string | null;
  image_3?: string | null;
  image_4?: string | null;
  published: number;
  published_by: number | null;
  last_save_user: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export type PortalRole = 'protocol' | 'it-admin';

export type ViewMode = 'hero' | 'news-page' | 'sign-in';
