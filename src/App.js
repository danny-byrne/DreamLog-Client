import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import "./App.scss";

// import HorizontalTimeline from "./components/timeline/HorizontalTimeline";
// import dummyData from "./resources/content";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="App-Container">
      <div className="App-header">
        <h1>DreamLog</h1>
      </div>
      <div className="Posts-Container">
        <div className="Posts-Scroll">Posts Scroll</div>
        <div className="Post-Container">
          <div className="Post"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
