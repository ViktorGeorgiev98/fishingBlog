import { useState, useEffect } from "react";
import PostListElement from "./PostListElement";

const Posts = () => {
  const baseUrl = `http://localhost:3030`;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/data/fishCatches`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setPosts(data))
        .catch(error => {
            console.error('Fetch error:', error);
            // Handle the error gracefully without crashing the app
            setPosts([]);
        });
}, []);


  return (
    <>
      <h1>Posts</h1>
<div className="all-posts">
  <ul className="list-posts">
    {posts.length <= 0 ? (
      <p className="no-posts">There are no posts at the moment...</p>
    ) : (
      posts.map(post => (
          <PostListElement
            key={post._id}
            id={post._id}
            imageUrl={post.imageUrl}
            fishSpecies={post.fishSpecies}
            anglerName={post.anglerName}
            fishLength={post.fishLength}
            catchMethod={post.catchMethod}
            lure={post.lure}
            location={post.location}
          />
      ))
    )}
  </ul>
</div>

    </>
  );
}

export default Posts;
