import React, { Component } from "react";
import DatePicker from "react-datepicker";
import classes from "./Input.module.css";
import axios from "axios";

const Event = () => {
  const [description, setDescription] = useState("Some Description");
  const [type, setType] = useState("Dream");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [id, setId] = useState("");

  const delete = () => {
    console.log("deleting", id);
    axios
      .delete("http://localhost:5000/events/delete", {
        data: { id: this.state.id },
      })
      .then((res) => console.log(res.data))
      .then((res) => this.updateParent());
  };

  const update = () => {
    const event = {
      event: this.state.event,
      date: this.state.date,
      description: this.state.description,
      type: this.state.type,
      id: this.state.id,
    };
    axios
      .post("http://localhost:5000/events/update/", event)
      .then((res) => console.log(res.data));

    this.updateParent();
  };

  const updateParent = () => {
    this.props.updateParent();
  };

  const switchView = () => {
    console.log("switching view");
    let newView = !this.state.view;
    this.setState({ view: newView });
  };

  const { event, type, description, date } = this.state;

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

  let view = !this.state.view ? look : touch;

  return <div>{view}</div>;
};

export default Event;
