import React, { useState } from "react";
import "./style.css";
import Button from "../Button";

function QuestionInput({ result }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if(question){
    setQuestion("");
    // logic here for sending question to backend and then setting the answer with response
    setAnswer(question);
    }
  };

  return (
    <div className="QuestionAnswer">
      <textarea
        cols="50"
        placeholder="Enter your Question here"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        disabled={!result}
      />
      <Button text={"Submit"} onClick={handleSubmit} />
      {answer && (
        <div className="answer">
          <h2>Search result :</h2>
          <div className="answer-para">
            {answer}
          </div>
        </div>
       )} 
    </div>
  );
}

export default QuestionInput;
