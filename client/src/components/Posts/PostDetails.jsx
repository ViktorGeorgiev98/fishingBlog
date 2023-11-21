import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// TODO: 
// 1/ Make the click handlers
// 2/ The edit handler will be a window popping up on the screen
// 3/ The delete will be normal
// 4/ Make use effect for the comments
// 5/ Make comments post request and update the comments after the request
// 6/ Make buttons and logic visible for logged in users and owners or no owners respectively
const PostDetails = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const baseUrl = `http://localhost:3030/data`;
    

    useEffect(() => {
        fetch(`${baseUrl}/fishCatches/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        fetch(`${baseUrl}/fishCatchesComments`)
        .then(response => response.json())
        .then(data => setComments(data))
        .catch((e) => console.log(e));
    }, []);
    // useEffect(() => {

    // }, []);


    async function postEditHandler(e) {
        e.preventDefault();
        const id = e.target.id;
    }

    async function postDeleteHandler(e) {
        e.preventDefault();
        const id = e.target.id;
    }
    

    return (
        <div className="details-container">
          <h1>Fish Details</h1>
          <img src={post.imageUrl} alt={post.fishSpecies} />
          
          <h2>Details</h2>
          <p><strong>Angler Name:</strong> {post.anglerName}</p>
          <p><strong>Fish Species:</strong> {post.fishSpecies}</p>
          <p><strong>Fish Length:</strong> {post.fishLength}</p>
          <p><strong>Fish Weight:</strong> {post.fishWeight}</p>
          <p><strong>Catch Method:</strong> {post.catchMethod}</p>
          <p><strong>Location:</strong> {post.location}</p>
          <p><strong>Lure Used:</strong> {post.lure}</p>
          <button className="btn-btn-delete" onClick={postDeleteHandler}>Delete</button>
          <button className="btn-btn-edit" onClick={postEditHandler}>Edit</button>
    
          <h2>Comments</h2>
          <form id="commentForm">
            <label htmlFor="comment">Leave a comment:</label><br />
            <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br />
            <input type="submit" value="Submit" />
          </form>
          {/* Display comments here */}
          <div id="comments">
            {/* Comments will be displayed here */}
            {comments.length > 0 
            ? <ul className="comments">
               {comments.map(comment => (
                <li key={comment._id} className="comment">
                    <p>Name: {comment.name}</p>
                    <p>
                        <span>{comment.text}</span>
                    </p>
                </li>
               ))}
            </ul>
            : <h2>No comments available</h2>}
          </div>
        </div>
      );
}

export default PostDetails;