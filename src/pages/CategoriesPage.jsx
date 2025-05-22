import { useEffect, useState } from "react";

export default function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {


        async function getCategories() {

            // Initial API to fetch books related to children stories
            const API = 'https://openlibrary.org/search.json?subject=children+stories&limit=20';
            const res = await fetch(API);
            const data = await res.json();
            const books = data.docs;

            let subjectArray = [];

            // Loop through each book to fetch detailed info including subjects
            for (const book of books) {
                const key = book.key;
                const newAPI = `https://openlibrary.org${key}.json`;
                const subjectRes = await fetch(newAPI);
                const bookSubjects = await subjectRes.json();

                // Collect all subjects from each book into a single array
                subjectArray.push(...bookSubjects.subjects);
            }

            // Removing duplicates
            const uniqueSubjects = [...new Set(subjectArray)];

            // Take the first 15 unique subjects for display
            const ChosenSubjects = uniqueSubjects.slice(0, 15);
            console.log(ChosenSubjects);
            setCategories(ChosenSubjects);
        }


        getCategories();
    }, []);

    // Renders the categories list
    return (
        <div className="categories-container">
            <h1 className="categories-title">Popular Story Categories</h1>
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={index} className="category-item">
                        <a
                            className="category-link"
                            href='#'
                        >
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}