import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../features/posts/postsSlice";

import { selectAllUsers } from "../features/users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [userId, setUserId] = useState(" ");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onSavePostSubmit = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <h2>Add a New Post</h2>

      <form action="">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content">Post Content</label>
        <input
          type="text"
          id="content"
          value={content}
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="author">Author :</label>
        <select
          name="author"
          id="author"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <button onClick={onSavePostSubmit} disabled={!canSave} type="button">
          Save post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
