import React from "react";

function FormList() {
  let curDateTime = new Date();
  let curHours = new Date().getHours();
  let style = {};

  let greetings = "";
  if (curHours >= 1 && curHours < 12) {
    greetings = "Good Morning";
    style.color = "green";
  } else if (curHours >= 12 && curHours < 20) {
    greetings = "Good Afternoon";
    style.color = "blue";
  } else {
    greetings = "Good Night";
    style.color = "red";
  }

  return (
    <div>
      <h1>Today time and Date Showing</h1>
      <p>Today date is {curDateTime.toLocaleDateString()}</p>
      <p>Today time is {curDateTime.toLocaleTimeString()}</p>

      <div className="project">
        <p>
          Hello Sir <span style={style}>{greetings}</span>
        </p>
      </div>
    </div>
  );
}

export default FormList;
