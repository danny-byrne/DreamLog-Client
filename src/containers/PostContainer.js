import React, { useState } from "react";

export default function PostContainer(props) {
  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("Dream");
  const [newEvent, setNewEvent] = useState("");
  const [newDate, setNewDate] = useState(new Date());
  const [newEvents, setNewEvents] = useState([]);
  const [newId, setNewId] = useState("");
  const [newView, setNewView] = useState("look");

  let look = (
    <div className="look">
      Event:{event}Type:{type}Description:{description}Date:{date}
      <button className="changeView" onClick={this.switchView}>
        Edit
      </button>
      <button onClick={this.delete}>Delete</button>
    </div>
  );

  let touch = (
    <form onSubmit={this.update}>
      <label>Event</label>
      <input
        type="text"
        required
        className={classes.input}
        name="event"
        value={this.state.event}
        onChange={this.handleChange}
      />

      <label>Type</label>
      <input
        type="text"
        required
        className={classes.input}
        name="type"
        value={this.state.type}
        onChange={this.handleChange}
      />

      <label>Description</label>
      <input
        type="text"
        required
        className={classes.input}
        name="description"
        value={this.state.description}
        onChange={this.handleChange}
      />

      <label>Date </label>
      <DatePicker
        className={classes.input}
        selected={Date.parse(this.state.date)}
        required
        name="date"
        onChange={(newDate) => this.setState({ date: newDate })}
      />

      <input type="submit" value="Save Event" className={classes.button} />
    </form>
  );

  let createView = (view) => {
    switch(view){
    case 'look':
      return look;

    case 'touch':
      return touch;
    case 'new':
      return new;
    default:
      return look
  }

  return (
    <div className="Post-Container">
      <div className="Post"></div>
    </div>
  );
}
