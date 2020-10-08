import React, { useState } from "react";
import "./App.scss";
import PostsContainer from "./containers/PostsContainer";

// import HorizontalTimeline from "./components/timeline/HorizontalTimeline";
// import dummyData from "./resources/content";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="App-Container">
      <div className="App-header">
        <h1>DreamLog</h1>
      </div>
      <PostsContainer />
    </div>
  );
};

export default App;
