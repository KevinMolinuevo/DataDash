// components/BookDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://openlibrary.org/works/${id}.json`);
      const data = await res.json();
      setBook(data);
    };
    fetchDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
        <div style={{ display: 'flex' }}/>
      <Sidebar />
      <div style={{ padding: '10px' }}/>
      <h2>{book.title}</h2>
      <p><strong>Description:</strong> {book.description?.value || book.description || "N/A"}</p>
      <p><strong>Subjects:</strong> {book.subjects?.join(', ') || "N/A"}</p>
    </div>
  );
}
