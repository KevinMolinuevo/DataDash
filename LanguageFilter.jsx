export function LanguageFilter({ books, selectedLang, setSelectedLang }) {
  const languageOptions = Array.from(
    new Set(books.flatMap((book) => book.language || []))
  );

  return (
    <div>
      <label>
        Language:
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="All">All</option>
          {languageOptions.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
