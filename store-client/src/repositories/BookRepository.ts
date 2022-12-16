import Book from "../models/Book";

export interface IRepository<T> { 
  getAll(filter: any|undefined): Promise<T[] | null>; 
}

export class BookRepository implements IRepository<Book> {

  async getAll(): Promise<Book[] | null> {
    return [
      {
        id: 1, title: 'Harry Potter', price: 560, stockAmount: 10,
        category: { id: 1, title: 'Fantasy' }
      },
    ]
  }
}