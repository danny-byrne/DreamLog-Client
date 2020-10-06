import React, { Component, useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import classes from "./Input.module.css";
import Event from "./Event";

import "react-datepicker/dist/react-datepicker.css";

const EventInput = () => {
  const [description, setDescription] = useState("Some Description");
  const [type, setType] = useState("Dream");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/events")
      .then((res) => res.json())
      .then((res) => {
        setEvents(res.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      event,
      date,
      description,
      type,
    };

    axios
      .post("http://localhost:5000/events/add", event)
      .then((res) => console.log(res.data))
      .then(() => this.update());
    setDescription("");
    setType("");
    setEvent("");
    setDate(new Date());
  };

  let eventList = events.map((e) => {
    return (
      <Event
        key={e._id}
        updateParent={this.update}
        id={e._id}
        description={e.description}
        type={e.type}
        event={e.event}
        date={e.date}
      />
    );
  });

  return (
    <div className={classes.container}>
      <h3>Edit Event</h3>
      <form onSubmit={handleSubmit}>
        <label>Event</label>
        <input
          type="text"
          required
          className={classes.input}
          name="event"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />

        <label>Type</label>
        <input
          type="text"
          required
          className={classes.input}
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          required
          className={classes.input}
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Date</label>

        <DatePicker
          className={classes.input}
          selected={date}
          required
          name="date"
          onChange={(date) => setDate(date)}
        />

        <input type="submit" value="Create Event" className={classes.button} />
      </form>
      <ul>{eventList}</ul>
    </div>
  );
};

export default EventInput;
