import React, { useState, useEffect } from "react";
import PostsScroll from "../components/PostsScroll";
import PostContainer from "./PostContainer";
// import axios from "axios";

const dummyPosts = [
  {
    description: "PlaceHolder Text",
    type: "Translation",
    body: "Some text",
    id: 1,
    date: new Date(),
  },
  {
    description: "some other description",
    type: "dream2",
    body: "text body",
    id: 2,
    date: new Date(),
  },
];

export default function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [curPost, setCurPost] = useState(0);
  // const [error, setError] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // getPosts();
    // console.log("in useEffect, setting posts", dummyPosts);
    setPosts(dummyPosts);
  }, []);

  const getPosts = () => {
    console.log("fetching posts");
    //async call to firebase
    //on res, parse response and setPosts(res.data)
  };

  const deletePost = (id) => {
    console.log("deleting post ", id);
    //delete request with id
    //on success go through posts and delete corresponding post with id property
  };

  const createPost = (data) => {
    console.log("creating post", data);
    //make post request to firebase db
    //on success, update posts with res.data
  };

  const updatePost = (data) => {
    const newData = {
      description: data.newDescription,
      type: data.newType,
      body: data.newEvent,
      id: data.newId,
      date: data.newDate,
    };

    if (newData.id === null) {
      createPost(newData);
    } else {
      let newPosts = [...posts];
      for (let i = 0; i < newPosts.length; i++) {
        if (newPosts[i].id === newData.id) {
          newPosts[i] = newData;
        }
      }
      setPosts(newPosts);
    }
    // console.log("updating post", newData);
    //extract id from data and put request with id and data
    //on success update within posts as well
    // axios
    //   .post("http://localhost:5000/events/update/", data)
    //   .then((res) => console.log(res.data));
  };

  const setPost = (num) => {
    setCurPost(num);
  };

  const htmlHandlers = { createPost, deletePost, updatePost };

  let loader = (
    <>
      <span>Loading</span>
    </>
  );

  let content =
    posts.length > 0 ? (
      <div className="Posts-Container">
        <PostsScroll posts={posts} setPost={setPost} />
        <PostContainer htmlHandlers={htmlHandlers} post={posts[curPost]} />
      </div>
    ) : (
      loader
    );

  return content;
}
