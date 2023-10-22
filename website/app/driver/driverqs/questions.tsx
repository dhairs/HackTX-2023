import { FormEvent } from "react";
import "./questions.css";
import Link from "next/link";
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
      <Link href={"/book"}>book</Link>
    </div>
  );
};

export default questions;
