import React from "react";
import classes from "./Input.module.css";
import DatePicker from "react-datepicker";

export default function EditNew(props) {
  console.log("");
  const { createPost, updatePost, deletePost } = props.htmlHandlers;
  const { newDescription, newType, newEvent, newDate, newId } = props.post;
  const {
    setNewDescription,
    setNewType,
    setNewEvent,
    setNewDate,
  } = props.stateHandlers;

  //pull in and destructure stateHandlers
  //if new pass createPost to onSubmit
  //if edit updatePost
  let curCreateMethod = (view) => {
    switch (view) {
      case "edit":
        return updatePost;
      case "new":
        return createPost;
      default:
        break;
    }
  };

  return (
    <>
      <form
        onSubmit={curCreateMethod(props.view)({
          newEvent,
          newType,
          newDescription,
          newDate,
          newId,
        })}
      >
        <label>Event</label>
        <input
          type="text"
          required
          className={classes.input}
          name="event"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />

        <label>Type</label>
        <input
          type="text"
          required
          className={classes.input}
          name="type"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          required
          className={classes.input}
          name="description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <label>Date </label>
        <DatePicker
          className={classes.input}
          selected={Date.parse(newDate)}
          required
          name="date"
          onChange={(e) => setNewDate()}
        />

        <input type="submit" value="Save Event" className={classes.button} />
      </form>
    </>
  );
}
