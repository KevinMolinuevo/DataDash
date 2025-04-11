
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
      <h3>Library Dashboard</h3>
      <Link to="/">Home</Link>
    </div>
  );
}
