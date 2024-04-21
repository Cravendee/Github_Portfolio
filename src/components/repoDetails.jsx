import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/Cravendee/${repoName}`);
        setRepo(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [repoName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!repo) {
    return <div>Repository not found</div>;
  }

  return (
    <div className='repodetails-container'>
      <h2>{repo.name}</h2>
      <p>Owner: {repo.owner.login}</p>
      <p>URL: {repo.url}</p>
      <p>Description: {repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Watchers: {repo.watchers_count}</p>
      <p>Open Issues: {repo.open_issues_count}</p>
      <p>Size: {repo.size}</p>
      <p>Default Branch: {repo.default_branch}</p>
      <p>Visibility: {repo.visibility}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Language: {repo.language}</p>
      <p>Created: {new Date(repo.created_at).toLocaleDateString()}</p>
      <p>Last Push: {new Date(repo.pushed_at).toLocaleDateString()}</p>
      <p>Archived: {repo.archived ? 'Yes' : 'No'}</p>
      <p>License: {repo.license ? repo.license.name : 'None'}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default RepoDetails;
