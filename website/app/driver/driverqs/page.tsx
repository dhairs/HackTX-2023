"use client";
import { FormEvent } from "react";
import "./questions.css";
import Link from "next/link";
import DriverOnboardingForm from "@/components/forms/driverQuestions";
//import OnboardingForm from "./driverQuestions";
//let c1 = OnboardingForm();
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
    //console.log(c1)
    // <div className="something">
    //   <h1>First Name: </h1>
    //   <h1>Last Name: </h1>
    //   <form onSubmit={saveInput}>
    //     <input type="text" id="answer"></input>
    //     <button>Firebase Submission</button>
    //   </form>
    //   <Link href={"/book"}>book</Link>
    // </div>
    <DriverOnboardingForm />
  );
};

export default questions;
