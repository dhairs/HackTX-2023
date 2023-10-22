import React, { FormEvent } from "react";
import "./questions.css";
const questions = () => {
  const saveInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    var elemArr = [];
    for (var i = 0; i < event.currentTarget.elements.length; i++) {
      elemArr.push(event.currentTarget.elements[i]);
    }

    console.log(elemArr);
  };
  return (
    <div className="something">
      <h1>First Name: </h1>
      <form onSubmit={saveInput}>
        <input type="text" id="answer"></input>
        <button>Firebase Submission</button>
      </form>
    </div>
  );
};

export default questions;
