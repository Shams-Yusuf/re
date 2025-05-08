
import ref from "../assets/images/refresh.png"


    

function Buttons({ plus, minus, reset }) {

    
    

    return (
        <div className="container">
            <div className="butt">
               <button className="btn-plus" onClick={plus}>+</button>
               <button className="btn-ref" onClick={reset}><img src={ref} alt="ref" /></button>
               <button className="btn-minus" onClick={minus}>-</button>
           </div>
           
           
           
        </div>
    );
  }
 
  export default Buttons;
  