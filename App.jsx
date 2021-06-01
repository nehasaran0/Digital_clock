

//---------------------------digital time ---------------------------------------------



import React, { useState } from 'react';

const App= ()=>{
 
let newTime= new Date().toLocaleTimeString();
const[Ctime, setCtime]=useState(newTime);

const UpdatedTime =()=>{
  newTime = new Date().toLocaleTimeString();
  setCtime(newTime);
};
//const UpadteCtime=()=>{
   setInterval(UpdatedTime,1000)    

  


  return(
    <div>
    <h1>{Ctime}</h1>
    
    </div>
  );

};
export default App;




