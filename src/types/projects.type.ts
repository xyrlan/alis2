export type AspectRatio = '16:9' | '9:16' | '1:1';

export interface Project {
  id: number;
  title: string;
  year: number;
  category: string;
  client: string;
  mainVideo: string;
  aspectRatio: AspectRatio;
  overview: {
    title: string;
    description: string;
  };
  credits: {
    name: string;
    role: string;
  }[];
  videos: Video[];
}

export interface Video {
  title: string;
  description: string;
  video: string;
}
