// import React from 'react'
// import { useState } from 'react';
// function Home() {

//   const [transcript, setTranscript] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [response, setResponse] = useState('');

//   // Speech recognition setup
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.interimResults = false;
//   recognition.lang = 'en-US';

//   // Start listening for voice input
//   const startListening = () => {
//     setIsListening(true);
//     recognition.start();

//     recognition.onresult = (event) => {
//       const speechResult = event.results[0][0].transcript;
//       setTranscript(speechResult);
//       setIsListening(false);
      
//       // Simulate a response and speak it aloud
//       handleSearchResponse(speechResult);
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech recognition error detected: ', event.error);
//       setIsListening(false);
//     };
//   };

//   // Simulate a search response and use speech synthesis to read it aloud
//   const handleSearchResponse = (query) => {
//     const simulatedResponse = `You searched for ${query}. Here are some related products.`;
//     setResponse(simulatedResponse);

//     // Use Web Speech API for text-to-speech
//     const utterance = new SpeechSynthesisUtterance(simulatedResponse);
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <div className='container'>
//       <h3>This is home page</h3>
//       <div style={{ padding: '50px', textAlign: 'center' }}>
//       <h1>Voice Search E-commerce</h1>
      
//       <div style={{ marginBottom: '20px' }}>
//         <button onClick={startListening} disabled={isListening}>
//           {isListening ? 'Listening...' : '🎤 Start Voice Search'}
//         </button>
//       </div>
      
//       <div>
//         <input 
//           type="text" 
//           value={transcript} 
//           placeholder="Voice result will appear here..." 
//           readOnly
//           style={{ width: '300px', padding: '10px', fontSize: '16px' }}
//         />
//       </div>
      
//       <div style={{ marginTop: '20px' }}>
//         <p>{response}</p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Home

import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [destinations, setDestinations] = useState(["Balghar"]);

  useEffect(() => {
    // axios.get("/api/destinations").then((res) => setDestinations(res.data));
  }, []);

  return (
    <div>
      <h1>Explore Destinations</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination._id}>{destination.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
