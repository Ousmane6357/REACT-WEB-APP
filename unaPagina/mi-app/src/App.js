import React from "react";
import Saludo from "./saludo";
import Mensaje from "./Mensaje";


function App() {
  return (
    <div>
      <Saludo nombre="Ousmane" />
      <Mensaje mensaje='Bienvdnido a mi app REACT'/>
    </div>
  );
}

export default App;