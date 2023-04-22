export interface DataProps {
  id: number;
  name: string;
  price: string;
  type: "entry" | "exit";
  category: string;
  created_at: string;
}
