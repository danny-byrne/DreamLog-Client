import React, { useState, useEffect } from "react";
import PostsScroll from "../components/PostsScroll";
import PostContainer from "./PostContainer";

let { log } = console;

const dummyPosts = [
  {
    description: "some description",
    type: "dream",
    body: "text body",
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
  const [posts, setPosts] = useState([...dummyPosts]);
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
  };

  const setPost = (num) => {
    setCurPost(num);
  };

  const handlers = { getPosts, deletePost, updatePost };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Posts-Container">
      <PostsScroll posts={posts} setPost={setPost} />
      <PostContainer handlers={handlers} post={posts[curPost]} />
    </div>
  );
}
