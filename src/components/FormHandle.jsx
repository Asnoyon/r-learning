import React, { useState } from "react";

const FormHandle = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
  };
  const eventChange = (e) => {
    const { value, name } = e.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      //   console.log(preValue);
      //   if (name === "fName") {
      //     return {
      //       fName: value,
      //       lName: preValue.lName,
      //       email: preValue.email,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fName: preValue.fName,
      //       lName: value,
      //       email: preValue.email,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fName: preValue.fName,
      //       lName: preValue.lName,
      //       email: value,
      //     };
      //   }
    });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your First Name"
          name="fName"
          onChange={eventChange}
          value={fullName.fName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="lName"
          onChange={eventChange}
          value={fullName.lName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={eventChange}
          value={fullName.email}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormHandle;
