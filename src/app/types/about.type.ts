export interface About {
  title: string;
  description: string;
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
