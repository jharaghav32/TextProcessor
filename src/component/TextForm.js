import React from 'react';
// import PropTypes from 'prop-types'
import  { useState } from 'react';



export default function TextForm() {
  const [btnText,setbtnText] = useState("Enable DarkMode");
  const[stylec,setstylec]=useState({
    backgroundColor:'white',
    color:'black'
  })
  
  const handleOnclick = (e)=>{
    e.preventDefault();
    setText(text.toUpperCase());
  };
  const handleLowclick = (e)=>{
    e.preventDefault();
    setText(text.toLowerCase());
  };
  const handleClear = (e)=>{
    e.preventDefault();
  setText(" ");
  };
  const handleCopy = ()=>{
  
  navigator.clipboard.writeText(text);
  };
  const handleSpace = ()=>{
  var char = text.split(/[ ]+/);
  setText(char.join(" "));
  };
  const handleOnchange =(event)=>{
    
    
    setText(event.target.value);
    
  };
  const [text , setText] = useState(" ");
    return (
      <div >
        <nav class="navbar navbar-dark bg-dark"/>
        <h1>Enter your Text Here!!!!</h1>
<form>
<div className="form-group" > 
    <label htmlFor="exampleFormControlTextarea1"></label>
    <textarea className="form-control " id="exampleFormControlTextarea1" rows="6" cols="10" value={text} onChange={handleOnchange}></textarea>
  </div>
  
  <button type="button" class="btn btn-primary" onClick ={handleOnclick}>Uppercase</button>
<button type="button" class="btn btn-secondary" onClick ={handleLowclick}>LowerCase</button>
<button type="button" class="btn btn-success" onClick={handleClear}>clearText</button>
<button type="button" class="btn btn-danger" onClick ={handleCopy}>CopyText</button>
<button type="button" class="btn btn-warning" onClick={handleSpace}>DeleteExtraSpace</button>



</form>
<div className = "summary">
  <h2>Processing your Text</h2>
  <p >{text.trim().replace(/  +/g, " ").split(" ").length} words  and {text.length} characters </p>
   
   <div>
     Time to read(in minute) : {.003*(text.split(" ").length-1)}
   </div>
</div>

</div>
          
    )
}

