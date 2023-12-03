import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditPostPage from "./EditPostPage";
import { useAuth } from "../../context/AuthProvider";


// TODO: 
// 1/ Make the click handlers => DONE
// 2/ The edit handler will be a window popping up on the screen => DONE
// 3/ The delete will be normal
// 4/ Make use effect for the comments => DONE
// 5/ Make comments post request and update the comments after the request
// 6/ Make buttons and logic visible for logged in users and owners or no owners respectively
const PostDetails = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [editPopUp, setEditPopUp] = useState(false);
    const [commentWriter, setCommentWriter] = useState('');
    const [commentText, setCommentText] = useState('');
    const { id } = useParams();
    const baseUrl = `http://localhost:3030/data`;
    const { isAuthenticated, getAccessToken, user } = useAuth();
    

    useEffect(() => {
        fetch(`${baseUrl}/fishCatches/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch((e) => console.log(e));
    }, [editPopUp]);
    useEffect(() => {
        fetch(`${baseUrl}/fishCatchesComments`)
        .then(response => response.json())
        .then(data => setComments(data.filter(comment => comment.refId === id)))
        .catch((e) => console.log(e));
    }, []);

    async function postCommentHandler(e) {
        e.preventDefault();
        const url = `${baseUrl}/fishCatchesComments`;
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const text = formData.get('comment')
        if (!name || !text) {
            return alert('Both name and comment fields are mandatory!');
        }
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Authorization": getAccessToken()
            },
            body: JSON.stringify({name, text, refId: id})
          })

          if (response.ok) {
            const comment = await response.json();
            console.log({comment});
            setComments(prevComments => [...prevComments, comment]);
          } else {
            throw new Error(response.statusText);
          }
        } catch(e) {
          console.log(e.message);
          return alert(e.message);
        }


    }

    async function postEditHandler(e) {
        e.preventDefault();
        const id = e.target.id;
        setEditPopUp(!editPopUp);
    }

    async function postDeleteHandler(e) {
        e.preventDefault();
        const id = e.target.id;
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        if (confirmed) {
          console.log({id});
          try {
            const response = await fetch(`${baseUrl}/fishCatches/${id}`, {
              method: 'DELETE',
              headers: {"Content-Type": "application/json",
              "X-Authorization": getAccessToken()
            }
            });
            if (response.ok) {
              console.log("Deletion was successful");
              navigate("/posts");
            } else {
              throw new Error(response.statusText);
            }
          } catch(e) {
            console.log(e.message);
            return alert(e.message);
          }
        }
       
    }
    

    return (
        <div className="details-container">
          <div className="fish-details">
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
          {isAuthenticated() && user._id === post._ownerId &&
             <div className="post-btns">
                <button className="btn-btn-delete" id={id} onClick={postDeleteHandler}>Delete</button>
                <button className="btn-btn-edit" id={id} onClick={postEditHandler}>Edit</button>
             </div>
          }

          </div>
          {isAuthenticated() &&
            <div>
              <h2>Comments</h2>
              <form id="commentForm" onSubmit={postCommentHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e) => setCommentWriter(e.currentTarget.value)} /> 
                <label htmlFor="comment">Leave a comment:</label><br />
                <textarea id="comment" name="comment" rows="4" cols="50" onChange={(e) => setCommentText(e.currentTarget.value)}></textarea><br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          }
          
          <button className="btn-show-comments" 
          onClick={() => setShowComments(!showComments)}>
            {showComments ? "Hide" : "Show"} comments</button>
          {/* Display comments here */}
          {showComments && 
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
          }

          {editPopUp && 
            <EditPostPage 
            anglerName={post.anglerName} 
            fishSpecies={post.fishSpecies} 
            fishLength={post.fishLength} 
            fishWeight={post.fishWeight} 
            catchMethod={post.catchMethod} 
            location={post.location} 
            lure={post.lure}
            imageUrl={post.imageUrl}
            editPopUp={editPopUp} 
            setEditPopUp={setEditPopUp}
            baseUrl={baseUrl} 
            _id={post._id}/>
          }
          
        </div>
      );
}

export default PostDetails;