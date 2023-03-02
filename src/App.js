import React from "react";
import "./App.css";
import AddPostForm from "./components/AddPostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
