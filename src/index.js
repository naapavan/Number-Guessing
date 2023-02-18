import ReactDOM  from "react-dom/client";
import RandomNum from "./App"
import { useState } from "react";
import  "./index.css";

let randomVal=RandomNum();

const Main = () => {

    const [cond,setcond] = useState(null);
    const [data,setdata] = useState(null);
    const [hint,sethint] = useState();
    const [chances,setchances] = useState(10);

    const Handle = (e) =>  {


        setdata(e.target.value);
    }

    const Validate = () => {

        if(+data >0 && +data <100){

          setchances(chances-1);
        }
        
        if(+data<1 || +data >100){
            setcond("Enter valid number")
        }

        else if(+data === +randomVal){
   
           setcond("🎊 Hurrah! You got it Correct 🎊");
        }
   
        else{
        
          setcond("🤔 No! Try Again. ");
          if(+randomVal < +data ){

            if(Number(data)-Number(randomVal)>10){
            sethint("You entered too high");
          }

          else{

            sethint("You entered high Value but Your Guess is very close");
          }
        }

        else{

            if(Number(randomVal)-Number(data)>10){
                sethint("You entered too low");
              }
    
              else{
    
                sethint("You entered low Value but Your Guess is very close");
              }
        }
        }
   }

   if(cond === "🎊 Hurrah! You got it Correct 🎊" && chances !== 0){

    return<div className="whole" align="center">
        <h1 className="cond">{cond}</h1>
    </div>
   }

   if(chances === 0){

    return<div className="whole" align="center">
        <h1> ☹️ Oops! You are out of chances </h1>
        <br></br><br></br>
        <h1>Try Again !!</h1>
    </div>

   }
    return <div align="center" className="window">
    <h1>Let's Play Something...</h1>
    <div className="whole" align="center">
        <div className="contents">
        <h3 className="chance ">Chances left : {chances}</h3>
        <h1 className="heading">Guess Number Between 1 - 100 </h1>
        <input className="ip" type="number" placeholder="Guess" onChange={Handle}/><br></br><br></br>
        <button className="bt" onClick={Validate}>Check</button>
        {/* <h6 className="random">{randomVal}</h6> */}
        <h4 className="data">You Entered: {data}</h4>
        <h1 className="cond">{cond}</h1>
        <div>
            <h3>{hint}</h3>
        </div>
    </div>
    </div>

    </div>

}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);
export default Main;
