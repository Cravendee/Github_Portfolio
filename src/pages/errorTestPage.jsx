import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/errorBoundary';
import ErrorTestButton from '../components/errorTestButton';

const ErrorTestPage = () => {
  return (
    <div className='page-container'>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/errorTestPage">Error Boundary</Link>
        <Link to="/notFoundPage">404 Page</Link>
      </nav>
      <ErrorBoundary>
        <ErrorTestButton />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorTestPage;