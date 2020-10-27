import React, { useState } from "react";

function App() {
  //GETTING INPUTS INFORMATION
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    console.log(newValue);
    console.log(inputName);

    setContact((prevValue) => {
      console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        };
      }
    });
  }

  //CHANGING BUTTON COLOR:
  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h2>React Forms Testing </h2>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>Your email is: {contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="Enter First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Enter Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Enter Email"
          value={contact.email}
        />

        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "#ff5f40" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
