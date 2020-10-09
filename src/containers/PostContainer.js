import React, { useState, useEffect } from "react";
import EditNew from "../components/EditNew";
import View from "../components/View";

export default function PostContainer(props) {
  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("Dream");
  const [newEvent, setNewEvent] = useState("");
  const [newDate, setNewDate] = useState(new Date());
  const [newId, setNewId] = useState("");
  const [curView, setCurView] = useState("view");

  const { post } = props;

  console.log("rendering PostContainer ", post);

  useEffect(() => {
    console.log("re-rendering");
    return () => {
      // cleanup;
    };
  });

  const setEditState = () => {
    console.log("setting edit state ");
    setNewDescription(props.post.description);
    setNewType(props.post.type);
    setNewEvent(props.post.body);
    setNewDate(props.post.date);
  };

  const createNewState = () => {
    setNewDescription("");
    setNewType("");
    setNewEvent("");
    setNewDescription("");
    setNewId("");
  };

  const switchView = (view) => {
    console.log("switching view to ", view);
    switch (view) {
      case "view":
        setCurView("view");
        break;
      case "edit":
        setEditState();
        setCurView("edit");
        break;
      case "new":
        createNewState();
        setCurView("new");
        break;
      default:
        break;
    }
    setCurView(view);
  };

  const inFields = {
    newDescription,
    newType,
    newEvent,
    newDate,
    newId,
  };

  const stateHandlers = {
    setNewDescription,
    setNewType,
    setNewEvent,
    setNewId,
    setNewDate,
  };

  let createView = (curView) => {
    switch (curView) {
      case "view":
        return <View post={post} switchView={switchView} />;
      case "edit":
        return (
          <EditNew
            post={inFields}
            switchView={switchView}
            stateHandlers={stateHandlers}
            htmlHandlers={props.htmlHandlers}
            view={curView}
          />
        );
      case "new":
        return (
          <EditNew
            post={inFields}
            switchView={switchView}
            stateHandlers={stateHandlers}
            // htmlHandlers={props.htmlHandlers}
          />
        );
      default:
        return (
          <View
            post={post}
            switchView={switchView}
            htmlHandlers={props.htmlHandlers}
          />
        );
    }
  };

  return (
    <div className="Post-Container">
      <div className="Post">{createView(curView)}</div>
    </div>
  );
}
