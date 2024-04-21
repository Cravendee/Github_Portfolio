import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RepoDetails from '../components/repoDetails';

const RepoPage = () => {
  const { repoName } = useParams();

  return (
    <div className='page-container'>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/errorTestPage">Error Boundary</Link>
        <Link to="/notFoundPage">404 Page</Link>
      </nav>
      <h1>Repository Details</h1>
      <RepoDetails repoName={repoName} />
    </div>
  );
};

export default RepoPage;
