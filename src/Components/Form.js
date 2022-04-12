import React, { useState } from 'react';
//useState is a hook use to manipulate state.
//State is the actual form of any given component. If any text is written in small letter it is its state and
//if we want to change its original state, say to Uppercase then we use state here.

export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to UpperCase', 'success');
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to LowerCase', 'success');
  }
  const handleSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed', 'success');
  }
  const handleCopy = () => {
    let txt=document.getElementById('myBox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert('Copied to clipboard', 'success');
  }
  const handleClear = () => {
    let newText = "";
    setText(newText)
    props.showAlert('Text cleared', 'success');
  }
  //we cant able to edit the text in the box as value is set to text. so to do that we use this
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  //Here we have declared setText which will call text.for now the value of text is written in (). and we cant
  //directly change the value of text. for this we have to assigned it to setText.
  const [text, setText] = useState('');
  // setText("New value of text");
  return (
    <>
      <div className="mb-3">
        <b><label htmlFor="myBox" className="form-label my-3" style={{color:props.mode==='light'?'black':'white'}}>Enter Your Text To Modify</label></b>
        <textarea className="form-control" value={text} placeholder="Enter text here" style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>

      </div>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h5>Word and character counter</h5>
 {/* here if we split only with space then when we will go to next line directly then it will again start counting from 0
 so to resolve that we will use (/\s+) which means split with spaces and new line.       */}
        <p> {text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  )
}
