import React, { useState, useEffect } from "react";
import PostsScroll from "../components/PostsScroll";
import PostContainer from "./PostContainer";
import axios from "axios";

let { log } = console;

const dummyPosts = [
  {
    description: "The Fountain",
    type: "Dream",
    body:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",

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
  const [posts, setPosts] = useState(dummyPosts);
  const [curPost, setCurPost] = useState(0);

  const getPosts = () => {
    log("fetching posts");
    //async call to firebase
    //on res, parse response and setPosts(res.data)
  };

  const deletePost = (id) => {
    log("deleting post ", id);
    //delete request with id
    //on success go through posts and delete corresponding post with id property
  };

  const updatePost = (data) => {
    log("updating post", data);
    //extract id from data and put request with id and data
    //on success update within posts as well
    axios
      .post("http://localhost:5000/events/update/", data)
      .then((res) => console.log(res.data));
  };

  const createPost = (data) => {
    log("creating post");
  };

  const setPost = (num) => {
    setCurPost(num);
  };

  const htmlHandlers = { createPost, deletePost, updatePost };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Posts-Container">
      <PostsScroll posts={posts} setPost={setPost} />
      <PostContainer htmlHandlers={htmlHandlers} post={posts[curPost]} />
    </div>
  );
}
