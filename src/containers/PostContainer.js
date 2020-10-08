import React, { useState } from "react";
import EditNew from "../components/EditNew";
import View from "../components/View";

export default function PostContainer(props) {
  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("Dream");
  const [newEvent, setNewEvent] = useState("");
  const [newDate, setNewDate] = useState(new Date());
  const [newId, setNewId] = useState("");
  const [newView, setNewView] = useState("look");

  const setEditState = () => {
    setNewDescription(props.description);
    setNewType(props.newType);
    setNewEvent(props.event);
    setNewDescription(props.date);
    setNewId(props.id);
  };

  const createNewState = () => {
    setNewDescription("");
    setNewType("");
    setNewEvent("");
    setNewDescription("");
    setNewId("");
  };

  const switchView = (view) => {
    switch (view) {
      case "view":
        setNewView("view");
        break;
      case "edit":
        setEditState();
      case "new":
        createNewState();
      default:
        break;
    }
    setNewView(view);
  };

  const inFields = {
    newDescription,
    newType,
    newEvent,
    newDate,
    newId,
    newView,
  };

  const stateHandlers = {
    setNewDescription,
    setNewType,
    setNewEvent,
    setNewDescription,
    setNewId,
  };

  let createView = (view) => {
    switch (view) {
      case "look":
        return <View post={props.post} switchView={switchView} />;
      case "touch":
        return (
          <EditNew
            post={inFields}
            switchView={switchView}
            stateHandlers={stateHandlers}
          />
        );
      case "new":
        return (
          <EditNew
            post={inFields}
            switchView={switchView}
            stateHandlers={stateHandlers}
          />
        );
      default:
        return <View post={props.post} switchView={switchView} />;
    }
  };

  return (
    <div className="Post-Container">
      <div className="Post"></div>
    </div>
  );
}
