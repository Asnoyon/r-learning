import React from "react";

function FormList() {
  let curDate = new Date().toLocaleDateString();
  let curTime = new Date().toLocaleTimeString();
  return (
    <div>
      <h1>Today time and Date Showing</h1>
      <p>Today date is {curDate}</p>
      <p>Today time is {curTime}</p>
    </div>
  );
}

export default FormList;
