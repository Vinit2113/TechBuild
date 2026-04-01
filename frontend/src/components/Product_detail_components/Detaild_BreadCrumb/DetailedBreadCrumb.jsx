import { Link } from 'react-router';
import './detailedBreadCrumb.css';

const DetailedBreadCrumb = () => {
  return (
    <div className="breadcrumb-container">
      {/* Use Link for client-side routing */}
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/components">Components</Link>
      <span>/</span>
      <Link to="/graphic-cards">Graphic Cards</Link>
      <span>/</span>
      <span>ZEBRONICS GT740</span>
    </div>
  );
}

export default DetailedBreadCrumb;