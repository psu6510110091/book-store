import { IRepository } from "./IRepository";
import Category from "../models/Category";

export class CategoryRepository implements IRepository<Category> {
  async getAll(): Promise<Category[] | null> {
    return [
      {id: 1, title: 'Programming'},
      {id: 2, title: 'Life Style'}
    ]
  }
}