import React from "react";
import DatePicker from "react-datepicker";
import classes from "./Input.module.css";
import axios from "axios";

const Event = (props) => {
  const [description, setDescription] = useState("Some Description");
  const [type, setType] = useState("Dream");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("look");

  const update = () => {
    // const event = {
    //   event,
    //   datee,
    //   description,
    //   type,
    //   id,
    // };
    // axios
    //   .post("http://localhost:5000/events/update/", event)
    //   .then((res) => console.log(res.data));
  };

  const switchView = () => {
    console.log("switching view");
  };

  let look = (
    <div className="look">
      Event:{event}Type:{type}Description:{description}Date:{date}
      <button className="changeView" onClick={this.switchView}>
        Edit
      </button>
      <button onClick={this.delete}>Delete</button>
    </div>
  );

  //abstract component
  //if view is look, return component with props.post
  //if view is touch, load post params into state return component inputs with props.post params.
  //if view is new, load blank form and render touch component with state props

  //if view is new,

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

  return <div>{view}</div>;
};

export default Event;
