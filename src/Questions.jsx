import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section>
      <h1>frequently asked questions</h1>
      {questions.map((questionObj) => {
        return <SingleQuestion key={questionObj.id} {...questionObj} />;
      })}
    </section>
  );
};

export default Questions;
