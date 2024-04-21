import React from 'react';
import { Link } from 'react-router-dom';
import RepoList from '../components/repoList';
import '../index.css';


const MainPage = () => {
  return (
    <div className='page-container'>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/errorTestPage">Error Boundary</Link>
        <Link to="/notFoundPage">404 Page</Link>
      </nav>
      <h1>My GitHub Repositories</h1>
      <RepoList />
    </div>
  );
};

export default MainPage;
