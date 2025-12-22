export interface About {
  title: string;
  title2: string;
  description: string;
  description2: string;
  items: {
    title: string;
    value: string;
  }[];
  ourTeam: {
    name: string;
    role: string;
    image: string;
  }[];
  clients: {
    name: string;
    image: string;
  }[];
}
