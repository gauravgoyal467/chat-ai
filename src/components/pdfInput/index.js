import React, { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";

function PdfInput({setResult}) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    event.preventDefault();
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type === "application/pdf") {
        setFile(file);
        toast.success("File uploaded Successfully")
        setResult(true);
        // Logic for uploading pdf to the server for parsing
        console.log("Selected PDF file: " + file.name);
      } else {
        toast.error("Please upload a valid file")
      }
    }
    setDragging(false);
  };

  // Function to handle drag over the drop zone
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  // Function to handle drag leave the drop zone
  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  return (
    <div className="App">
      <div
        className={`drop-zone ${dragging ? "drag-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleFileSelect}
        onClick={() => document.getElementById("file-input").click()}
      >
        {file!=null ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag & drop or Browse your PDF here</p>
        )}
        <input
          type="file"
          id="file-input"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </div>
    </div>
  );
}

export default PdfInput;
