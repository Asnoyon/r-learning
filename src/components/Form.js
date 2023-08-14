import React, { useState } from "react";
import Hover from "./Hover";
const Form = () => {
  const [click, setClick] = useState(0);
  const increment = () => {
    setClick(click + 1);
  };
  const [over, setOver] = useState(0);
  const mouseOver = () => {
    setOver(over + 1);
  };
  const [input, setInput] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("");
  const handleSubmit = (e) => {
    alert(`${input} ${comments} ${topic}`);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <input
          type="text"
          placeholder="UserName"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        <br />
        <br />
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <br /> <br />
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>React</option>
          <option>CSS</option>
          <option>Html</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <Hover onClick={increment} click={click} over={over} onOver={mouseOver} />
    </div>
  );
};

export default Form;
