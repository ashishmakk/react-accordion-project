import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='faq-container'>
      <h2>frequently asked questions</h2>
      {questions.map((questionObj) => {
        return (
          <SingleQuestion
            key={questionObj.id}
            {...questionObj}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
