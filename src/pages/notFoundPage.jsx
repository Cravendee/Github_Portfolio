import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../components/notFound';

const NotFoundPage = () => {
  return (
    <div className='not-found-container'>
      <div>
        <nav className='navigation'>
          <Link to="/">Home</Link>
          <Link to="/errorTestPage">Error Boundary</Link>
          <Link to="/notFoundPage">404 Page</Link>
        </nav>
        <NotFound />
      </div>
    </div>
  );
};

export default NotFoundPage;
