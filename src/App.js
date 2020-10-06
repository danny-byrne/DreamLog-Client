import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import EventInput from "./components/EventInput";
import styled from "styled-components";
// import EventList from './components/EventList';
// import "bootstrap/dist/css/bootstrap.min.css";

import HorizontalTimeline from "./components/timeline/HorizontalTimeline";
import dummyData from "./resources/content";

const MainContainer = styled.div`
  background-color: blue;
  color: white;
  display: flex;
  flex-direction: column;
  height 100%;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
`;

const App = () => {
  const [data, setData] = useState({ value: 0, previous: 0 });

  useEffect(() => {
    let data = dummyData.map((game, index) => {
      return {
        date: game.date,
        component: (
          <div className="container" key={index}>
            <h1>{`The Elder Scrolls ${index + 1}:`}</h1>
            <h2>{game.subtitle}</h2>
            <hr />
            <p>{game.content}</p>
            <hr />
          </div>
        ),
      };
    });
    setData(data);
  }, []);

  return (
    <MainContainer>
      <Title>DreamLog</Title>
      {/* <Signup /> */}
      <EventInput />
      {/* <HorizontalTimeline data={this.data} /> */}
    </MainContainer>
  );
};

export default App;
