import './App.css';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import useClipboard from "react-use-clipboard";




function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
      successDuration:1000
  });
  const startlistening= ()=>SpeechRecognition.startListening({ continuous: true,language:'en-IN' });
  const stoplstening = ()=>SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    // return 'sahi se bol bhai';
  }
  return (
    <div className="container">
      <h2>Convert  Speech to Text</h2>
      <label> <a href="https://www.linkedin.com/in/wakar-mujtaba-457520190/"> By Wakar Mujtaba</a> </label>
      <br />

      <p >  </p>
       <button onClick={startlistening} style={{background:'maroon', marginTop:'1px'}}>Start</button>
      <div className='main-content' onClick={() =>  setTextToCopy(transcript)}>
      {transcript}
      </div>

      <div className='btn-style' >
      <button onClick={setCopied} style={{background:'chartreuse'}}>
       {isCopied ? 'Copied!' : 'Copy'}
       
      </button>

        <button onClick={refreshpage}>Reset</button>
        <button onClick={stoplstening} style={{background:'red'}}>stop</button>
      </div>
    </div>
  );
}

function refreshpage(){
window.location.reload(false);
}
export default App;
