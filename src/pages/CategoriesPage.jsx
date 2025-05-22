import { useEffect } from "react";

export default function CategoriesPage() {
  useEffect(() => {
    async function getCategories() {
      const API = 'https://openlibrary.org/search.json?subject=children+stories&limit=20';
      const res = await fetch(API);
      const data = await res.json();
      const books = data.docs;

      for (const book of books) {
        const key = book.key; 
        const newAPI = `https://openlibrary.org${key}.json`;
        const subjectRes = await fetch(newAPI);
        const bookSubjects = await subjectRes.json();

        console.log(bookSubjects.subjects);  
      }
    }
    getCategories();
  }, []);

  return (
    <h1>Categories page</h1>
  );
}