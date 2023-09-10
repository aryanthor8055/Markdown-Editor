import React,{useState} from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

function App() {

  const handleChange=(e)=>{
setText(e.target.value)
  }

  const [text,setText]=useState("#sup")
  return (
    <div className="app">
      <textarea value={text} onChange={handleChange}/>

      {/* <div className="preview" dangerouslySetInnerHTML={{__html: marked(text)}}/> */}

      <ReactMarkdown className='preview' source={text}/>
    </div>
  );
}

export default App;