import React from "react";
import "./questions.css";
const questions = () => {
  const saveInput = (event: any) => {
    event.preventDefault();

    const elemArray = [...event.target.elements];

    console.log(elemArray);
  };
  return (
    <div className="something">
      <h1>First Name: </h1>
      <form>
        <input type="text" id="answer"></input>
        <button>Firebase Submission</button>
      </form>
    </div>
  );
};

export default questions;
