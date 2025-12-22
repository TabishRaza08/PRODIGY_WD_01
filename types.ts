export interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  description: string;
}

export enum SectionId {
  HOME = 'home',
  BOOKS = 'books',
  ABOUT = 'about',
  CONTACT = 'contact'
}