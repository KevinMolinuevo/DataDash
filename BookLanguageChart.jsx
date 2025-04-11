// components/BookLanguageChart.jsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function BookLanguageChart({ books }) {
  const langCount = books.reduce((acc, book) => {
    const lang = book.language?.[0] || 'Unknown';
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(langCount),
    datasets: [
      {
        data: Object.values(langCount),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#C9CBCF'
        ],
      },
    ],
  };

  return (
    <div style={{ width: '300px' }}>
      <h3>Books by Language</h3>
      <Pie data={data} />
    </div>
  );
}
