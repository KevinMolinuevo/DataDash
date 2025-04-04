// fetch.jsx
import { useEffect, useState } from "react";
import { BookSearch } from "./BookSearch";

export function Books() {
  const [books, setBooks] = useState([]);
  const [selectedLang, setSelectedLang] = useState("All");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
      const data = await res.json();
      setBooks(data.docs);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h2>Books Dashboard</h2>
      <BookSearch
        books={books}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />
    </>
  );
}
