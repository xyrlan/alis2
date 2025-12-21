export interface Project {
  id: number;
  title: string;
  year: number;
  category: string;
  client: string;
  mainVideo: string;
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
