import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import RepoPage from "./pages/repoPage";
import ErrorTestPage from "./pages/errorTestPage";
import NotFoundPage from "./pages/notFoundPage";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/repo/:repoName" element={<RepoPage />} />
          <Route path="/errorTestPage" element={<ErrorTestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
};

export default App;
