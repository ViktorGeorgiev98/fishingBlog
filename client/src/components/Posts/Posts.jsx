import { useState, useEffect } from "react";
import PostListElement from "./PostListElement";

const Posts = () => {
  const baseUrl = `http://localhost:3030`;
  const [posts, setPosts] = useState([]);
  // 3f9c969801286f797eb73a43f108c533e4e77f12986a5b536546c8783316fa31
  useEffect(() => {
    fetch(`${baseUrl}/data/fishCatches`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch((e) => console.log(e));
  }, []);

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
<div className="all-posts">
  <ul className="list-posts">
    {posts.length <= 0 ? (
      <p className="no-posts">There are no posts at the moment...</p>
    ) : (
      posts.map(post => (
        <li className="post-container" key={post._id}>
          <PostListElement
            id={post._id}
            imageUrl={post.imageUrl}
            fishSpecies={post.fishSpecies}
            anglerName={post.anglerName}
            fishLength={post.fishLength}
            catchMethod={post.catchMethod}
            lure={post.lure}
            location={post.location}
          />
        </li>
      ))
    )}
  </ul>
</div>

    </>
  );
}

export default Posts;
