import React from "react";
import classes from "./Input.module.scss";

//pull in delete modal

export default function View(props) {
  const { description, type, body, date } = props.post;
  // console.log("rendering view", props.htmlHandlers);
  let subHeaders = [description, type, date.toString().substring(0, 15)].map(
    (e) => (
      <div key={e} className={classes.subheader}>
        {e}
      </div>
    )
  );

  return (
    <>
      <header className={classes.header}>{subHeaders}</header>
      <article>{body}</article>
      <button className="changeView" onClick={() => props.switchView("edit")}>
        Edit
      </button>
      <button onClick={props.delete}>Delete</button>
    </>
  );
}
