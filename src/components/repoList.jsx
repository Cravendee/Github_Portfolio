import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Cravendee/repos');
        setRepos(response.data);
        setFilteredRepos(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredRepos(filtered);
    setCurrentPage(1);
  };

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='repo-list-container'>
      <input
        type="text"
        placeholder="Search Repositories"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {currentRepos.map((repo) => (
          <li key={repo.id}>
            <a href={`/repo/${repo.name}`}>{repo.name}</a>
          </li>
        ))}
      </ul>
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={filteredRepos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <span key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => paginate(number)}>{number}</button>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default RepoList;
