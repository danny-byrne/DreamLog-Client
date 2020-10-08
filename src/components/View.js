import React from "react";

export default function View(props) {
  return (
    <div className="look">
      Event:{props.event}Type:{props.type}Description:{props.description}Date:
      {props.date}
      <button className="changeView" onClick={() => props.switchView("edit")}>
        Edit
      </button>
      <button onClick={this.delete}>Delete</button>
    </div>
  );
}
