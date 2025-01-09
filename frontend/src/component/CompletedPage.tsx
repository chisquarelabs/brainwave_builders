import React from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import "./CompletedPage.css"; 

const CompletedPage: React.FC = () => {
  const location = useLocation();
  const results = location.state?.results;  // Retrieve results from navigation state

  return (
    <div className="completed-container">
      <h1>Survey Completed!</h1>
      <h2>Your Responses:</h2>
      {results ? (
        <div>
          {results.map((result: { questionText: string; answerText: string }, index: number) => (
            <div key={index} className="response">
              <strong>{result.questionText}</strong>{result.answerText}
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
      <Link to="/appointment ">
      <button>Restart survey</button></Link>
      
    </div>
  );
};

export default CompletedPage;
