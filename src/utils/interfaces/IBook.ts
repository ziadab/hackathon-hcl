export interface IBook {
  id: number;
  title: string;
  author: string;
  category: string;
  status: string;
  borrowed_by: string;
  return_date: Date | string;
  additional_fees: string;
}
