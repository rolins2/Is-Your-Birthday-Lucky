import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  var [luckyNumber, setluckyNumber] = useState(0);

  var [message, setmessage] = useState("");

  var [dateofbirth, setdateofbirth] = useState("");

  function clickHandler() {
    console.log("Button clicked");
    console.log(luckyNumber);
    console.log(dateofbirth);
    checkLuck();
  }

  function checkLuck() {
    if (luckyNumber === 0 && dateofbirth === "") {
      setmessage("Please fill out all the input fields");
    } else {
      var sum = 0;
      for (var i = 0; i < dateofbirth.length; i++) {
        sum = sum + Number(dateofbirth.charAt(i));
      }
      if (sum % luckyNumber === 0) {
        setmessage("Your birthdate is lucky");
      } else {
        setmessage("Your birthdate is not soo lucky ");
      }
    }
  }

  function handleInputChan(event) {
    var v = event.target.value;
    v = v.replaceAll("-", "");
    setdateofbirth(v);
  }
  function handleInputChange(event) {
    var val = event.target.value;
    setluckyNumber(val);
  }

  return (
    <div className="App">
      <h1>
        Is Your Birthday Lucky? <span>🤔 </span>
      </h1>
      <div> Enter Your Date of Birth and your lucky number </div>
      <label for dob>
        {" "}
        Date of Birth:{" "}
      </label>
      <input id="dob" type="date" onChange={handleInputChan} />

      <div>
        <label for num>
          Lucky Number{" "}
        </label>
        <input
          id="num"
          type="number"
          placeholder="Enter your lucky number"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button onClick={clickHandler}>Submit</button>
      </div>

      <div className="msg">{message}</div>

      <div className="footer">
        <div>
          {" "}
          Add your lucky number and your birthdate
          <p> The code will run and chek if your birthday is lucky too </p>
          <p>
            {" "}
            <strong>Note: </strong>We do not collect any of your data{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
