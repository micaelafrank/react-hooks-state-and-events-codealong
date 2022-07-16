import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return <button style={{ background: isOn ? "red" : "white" }} onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
































//   function handleButton(){
//     switchButton((isOn) => !isOn);
//   }

//   const color = isOn ? "green" : "red";
  
//   return <button onClick={handleButton} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;

// }