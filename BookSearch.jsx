import { useState } from "react";
import { LanguageFilter } from "./LanguageFilter";
import { Link } from "react-router-dom";


export function BookSearch({ books, selectedLang, setSelectedLang }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang =
      selectedLang === "All" || (book.language && book.language.includes(selectedLang));
    return matchesSearch && matchesLang;
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <LanguageFilter
        books={books}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />
      {filteredBooks.map((book, i) => (
        <div key={i}>
           <Link to={`/book/${book.key?.replace('/works/', '')}`}>
          <strong>{book.title}</strong>
          </Link><br />
          Author: {book.author_name?.[0] || "Unknown"}
        </div>
      ))}
    </>
  );
}
