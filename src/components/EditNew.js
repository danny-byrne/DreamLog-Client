import React from "react";

export default function EditNew(props) {
  return (
    <>
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
    </>
  );
}
