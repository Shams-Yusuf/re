import Numbers  from "./Numbers";
import Buttons from  "./Buttons";
import React, { useState } from "react";

function Main() {
  
   const [counter, setCounter] =  useState (0);


   const plus = () => {
   setCounter(counter + 1);
};
   const minus = () => {
    setCounter(counter - 1);
};
   const reset = () => {
    setCounter(0);
};
 

    return (
        <div className="container">
            <div>
              <Numbers counter={counter} />
              <Buttons plus={plus} minus={minus} reset={reset}/>
            </div>
        </div>
    )
  }
    export default Main;

  