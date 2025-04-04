import { useState } from "react";
import { LanguageFilter } from "./LanguageFilter";

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
          <strong>{book.title}</strong><br />
          Author: {book.author_name?.[0] || "Unknown"}
        </div>
      ))}
    </>
  );
}
