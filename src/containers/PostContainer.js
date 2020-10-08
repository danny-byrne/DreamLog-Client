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

  useEffect(() => {
    console.log("re-rendering");
    return () => {
      // cleanup;
    };
  }, []);

  const setEditState = () => {
    console.log("setting edit state ", props.post);
    setNewDescription(props.post.description);
    setNewType(props.post.newType);
    setNewEvent(props.post.event);
    setNewDescription(props.post.date);
    setNewId(props.post.id);
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
      case "new":
        createNewState();
        setCurView("new");
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
    console.log();
    switch (curView) {
      case "view":
        return <View post={props.post} switchView={switchView} />;
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
            htmlHandlers={props.htmlHandlers}
          />
        );
      default:
        return (
          <View
            post={props.post}
            switchView={switchView}
            delete={props.htmlHandlers.deletePost}
            switchView={switchView}
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
