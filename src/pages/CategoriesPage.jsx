import { useEffect, useState } from "react";

export default function CategoriesPage() {
    const [categories, setCategories]=useState([]);
  useEffect(() => {
    async function getCategories() {
      const API = 'https://openlibrary.org/search.json?subject=children+stories&limit=20';
      const res = await fetch(API);
      const data = await res.json();
      const books = data.docs;
        let subjectArray = [];
      for (const book of books) {
        const key = book.key; 
        const newAPI = `https://openlibrary.org${key}.json`;
        const subjectRes = await fetch(newAPI);
        const bookSubjects = await subjectRes.json();
        subjectArray.push(...bookSubjects.subjects);
       
      }
      const uniqueSubjects = [...new Set(subjectArray)];
      const ChosenSubjects = uniqueSubjects.slice(0,15);
      
      console.log(ChosenSubjects);
      setCategories(ChosenSubjects);
    }
    getCategories();
  }, []);

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <a href ='#'>
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}