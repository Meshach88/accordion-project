import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToogle((prev) => !prev);
          }}
          className="btn"
        >
          {toogle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toogle && <p>{info}</p>}
    </article>
  );
};

export default Question;
