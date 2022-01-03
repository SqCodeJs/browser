// interface Category {
//   location: string;
//   skills: string[];
//   tags: string[];
// }
export type Category = "location" | "skill" | "tag";

export interface Keyword {
  keyword: string;
  category: Category;
}
