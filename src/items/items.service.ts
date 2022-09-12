
/**
 * Data Model Interfaces
 */
 import { BaseItem, Item } from "./item.interface";
 import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
 let items: Items = {
    1: {
        id: 1,
        isbn: "9781593279509",
        title: "Eloquent JavaScript, Third Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2018-12-04T00:00:00.000Z",
        publisher: "No Starch Press",
        pages: 472,
        price: 23.99,
        description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        website: "http://eloquentjavascript.net/",
        image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
      },
      2: {
        id: 2,
        isbn: "9781491943533",
        title: "Practical Modern JavaScript",
        subtitle: "Dive into ES6 and the Future of JavaScript",
        author: "Nicolás Bevacqua",
        published: "2017-07-16T00:00:00.000Z",
        publisher: "O'Reilly Media",
        pages: 334,
        price: 24.99,
        description: "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        website: "https://github.com/mjavascript/practical-modern-javascript",
        image: "https://images-na.ssl-images-amazon.com/images/I/813hbklwWBL.jpg"
      },
      3: {
        id:3,
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
        publisher: "No Starch Press",
        pages: 352,
        price: 39.99,
        description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        website: "https://leanpub.com/understandinges6/read",
        image: "https://images-na.ssl-images-amazon.com/images/I/512T+d+VK6L._SX376_BO1,204,203,200_.jpg"
      }
    };

/**
 * Service Methods
 */
 export const findAll = async (): Promise<Item[]> => Object.values(items);

 export const find = async (id: number): Promise<Item> => items[id];

 export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
  
    items[id] = {
      id,
      ...newItem,
    };
  
    return items[id];
  };

  export const update = async (
    id: number,
    itemUpdate: BaseItem
  ): Promise<Item | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    items[id] = { id, ...itemUpdate };
  
    return items[id];
  };

  export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete items[id];
  };