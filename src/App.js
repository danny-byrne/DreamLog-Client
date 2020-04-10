import React from 'react';
import Signup from './components/Signup';
import EventInput from './components/EventInput';
import styled from 'styled-components';
import EventList from './components/EventList';
// import "bootstrap/dist/css/bootstrap.min.css";

const MainContainer = styled.div`
  background-color: blue;
  color: white;
  display: flex;
  flex-direction: column;
  height 100%;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
`

function App() {
  return (
    <MainContainer >
      <Title>Main Container</Title>
      <Signup />
      <EventInput />
      {/* <EventList /> */}
    </MainContainer>
  );
}

export default App;
