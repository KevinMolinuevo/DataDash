import { useEffect, useState } from "react";
import { BookSearch } from "./BookSearch";
import { BookLanguageChart } from "./BookLanguageChart";
import { BookYearChart } from "./BookYearChart";
import { Sidebar } from "./Sidebar";

export function Books() {
  const [books, setBooks] = useState([]);
  const [selectedLang, setSelectedLang] = useState("All");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
      );
      const data = await res.json();
      setBooks(data.docs);
    };
    fetchBooks();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Books Dashboard</h2>

        <BookSearch
          books={books}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />

        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <BookLanguageChart books={books} />
          <BookYearChart books={books} />
        </div>
      </div>
    </div>
  );
}
