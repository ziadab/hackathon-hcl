import { IBook } from "../utils/interfaces/IBook";

export const getAdminBooks = (): Promise<IBook[]> => {
  const books: Promise<IBook[]> = fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((books) => books);

  return books;
};
