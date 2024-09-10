import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className='single-question'>
      <header>
        <h4>{title}</h4>
        <button type='button' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
