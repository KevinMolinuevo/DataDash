// components/BookYearChart.jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function BookYearChart({ books }) {
  const yearCount = books.reduce((acc, book) => {
    const year = book.first_publish_year;
    if (year) acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const sortedYears = Object.entries(yearCount).sort((a, b) => a[0] - b[0]);

  const data = {
    labels: sortedYears.map(([year]) => year),
    datasets: [
      {
        label: 'Books Published',
        data: sortedYears.map(([_, count]) => count),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div style={{ width: '600px' }}>
      <h3>Books by First Publish Year</h3>
      <Bar data={data} />
    </div>
  );
}
