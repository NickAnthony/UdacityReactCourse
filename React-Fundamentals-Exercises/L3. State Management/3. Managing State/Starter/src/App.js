import corgi from "./corgi.jpg";
import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [likeCount, setLikeCount] = useState(0);
  const corgiClickCallback = () => {
    setLikeCount(likeCount+1);
  }
  const resetLikeCount = () => {
    setLikeCount(0);
  }
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi" onClick={(event) => corgiClickCallback()}></img>
      <p>Amount of likes: </p>
      <p>{likeCount}</p>
      <button onClick={(event) => resetLikeCount()}>Reset Like Count</button>
    </div>
  );
};

export default App;
