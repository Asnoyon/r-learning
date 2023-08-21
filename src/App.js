import React, { createContext } from "react";
// import ToDoList from "./components/ToDoList";
// import "./styles/Todo.css";

// import "./index.css";
// import FormHandle from "./components/FormHandle";
// import Netflix from "./components/Netflix";
// import data from "./data";
// import Form from "./components/Form";
// import FormList from "./components/FormList";
import ComA from "./contextApi/ComA";
import ComX from "./contextApi/ComX";
import ComZ from "./useContext/ComZ";

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <div>
      {/* <Form />
      <FormList /> */}
      {/* <h1 className="heading_style">Top 9 Web Series </h1>

      {data.map((item) => {
        return <Netflix item={item} key={item.id} />;
      })} */}
      {/* <FormHandle /> */}
      {/* <ToDoList /> */}
      <FirstName.Provider value={"Ashadujjaman"}>
        <ComA />
        <ComX />
        <LastName.Provider value={"Noyon"}>
          <ComZ />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
