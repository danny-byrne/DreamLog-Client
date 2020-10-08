import React from "react";

//pull in delete modal

export default function View(props) {
  const { description, type, body, date } = props.post;
  console.log("rendering view", props.htmlHandlers);
  // const { deletePost, updatePost } = props.htmlHandlers;
  return (
    <div className="look">
      Type:{type}
      <br />
      Description:
      {description}
      <br />
      Date:
      {date.toString().substring(0, 15)}
      <br />
      {body}
      <br />
      <button className="changeView" onClick={() => props.switchView("edit")}>
        Edit
      </button>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
}
