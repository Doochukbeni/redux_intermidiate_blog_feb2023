import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import PostAuthor from "../features/posts/PostAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <div className="post" key={post.id}>
      <h3>{post.title} </h3>
      <p>{post.content.substring(0, 100)} </p>
      <PostAuthor userId={post.userId} />
    </div>
  ));
  return (
    <div className="posts">
      <h1>Posts</h1>
      {renderPosts}
    </div>
  );
};

export default PostList;
