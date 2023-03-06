import books from "@mocks/books.json";
import { Product } from "@models/index";

export async function getAllProducts(): Promise<Product[]> {
  return Promise.resolve(books);
}

export async function getProdById(id: string): Promise<Product> {
  const book = books.find((book) => book.id === id);
  return Promise.resolve(book);
}
