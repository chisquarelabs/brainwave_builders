import React from "react";
import { useLocation } from "react-router-dom";

const CompletedPage: React.FC = () => {
  const location = useLocation();
  const results = location.state?.results;  // Retrieve results from navigation state

  return (
    <div className="completed-container">
      <h1>Survey Completed!</h1>
      <h2>Your Responses:</h2>
      <pre>{JSON.stringify(results, null, 2)}</pre>  {/* Display results in a readable format */}
      <button onClick={() => window.location.reload()}>Take Survey Again</button>
    </div>
  );
};

export default CompletedPage;
