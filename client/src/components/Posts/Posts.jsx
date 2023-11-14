import { useState, useEffect } from "react";

const Posts = () => {
  const baseUrl = `http://localhost:3030`;
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(`${baseUrl}/posts`)
//       .then(response => response.json())
//       .then(data => setPosts(data))
//       .catch((e) => alert(e.message));
//   }, []);

  return (
    <>
      <h1>Posts</h1>
      <div className="all-posts">
        <ul className="list-posts">
          {posts.length <= 0 
            ? <p className="no-posts">There are no posts at the moment...</p>
            : posts.map(post => (
                <li key={post._id} id={post._id} className="post">
                  Post
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}

export default Posts;
