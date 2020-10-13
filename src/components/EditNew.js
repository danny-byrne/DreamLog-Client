import React from "react";
import classes from "./Input.module.scss";
import DatePicker from "react-datepicker";

export default function EditNew(props) {
  const { newDescription, newType, newEvent, newDate, newId } = props.post;
  const {
    setNewDescription,
    setNewType,
    setNewEvent,
    setNewDate,
  } = props.stateHandlers;
  const { updatePost } = props;
  // console.log("in EditNew post is", props.post);

  return (
    <>
      <form
        onSubmit={() => {
          console.log("updating event", props.post);
          updatePost(props.post);
        }}
      >
        <header className={classes.header}>
          <div className={classes.subHeader}>
            <label>Description</label>
            <input
              type="text"
              required
              className={classes.input}
              name="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div className={classes.subHeader}>
            <label>Type</label>
            <input
              type="text"
              required
              className={classes.input}
              name="type"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            />
          </div>
          <div className={classes.subHeader}>
            <label>Date </label>
            <DatePicker
              className={classes.input}
              selected={Date.parse(newDate)}
              required
              name="date"
              onChange={(e) => setNewDate(e)}
            />
          </div>
        </header>

        <label>Event</label>
        <article>
          <input
            type="text"
            required
            className={classes.input}
            name="event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
        </article>

        <input type="submit" value="Save Event" className={classes.button} />
      </form>
    </>
  );
}
