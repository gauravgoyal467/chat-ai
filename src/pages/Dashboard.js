import React, { useState } from "react";
import "../App.css";
import PdfInput from "../components/pdfInput";
import QuestionInput from "../components/QuestionInput";

const Dashboard = ({ user}) => {
  const [result,setResult]=useState(false);
  return (
    <div className="dashboard">
      {!result ? (
        <p className="dash-heading">
          Hello <span>{user ? user : "Human"}</span>, i was waiting for you
          only...
        </p>
      ) : (
        <p className="dash-heading">
          Your can now ask me questions <span>{user ? user : "Human"}</span>
        </p>
      )}
      
      <div className="pdf-upload">
        <PdfInput setResult={setResult}/>
      </div>
      <div className="text-inp">
        <QuestionInput result={result}/>
      </div>

    </div>
  );
};

export default Dashboard;
