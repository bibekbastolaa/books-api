import internal from "stream";

export interface BaseItem {
    isbn: string;
    title: string;
    subtitle: string;
    author: string;
    published: string;
    publisher: string;
    pages: number;
    price: number;
    description: string;
    image: string;
    website: string;
  }
  
  export interface Item extends BaseItem {
    id: number;
  }