import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
const MyProfile = () => {
    const [personalPosts, setPersonalPosts] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch('http://localhost:3030/data/fishCatches')
        .then(response => response.json())
        .then(data => setPersonalPosts(data.filter(post => post._ownerId === user._id).sort((a, b) => a.fishLength - b.fishLength)))
        .catch(error => console.log(error));
    }, [])






    return (
        <div className="myProfile">
            <h1>Personal profile</h1>
            {personalPosts.length <= 0 && (
                <h2>No posts yet, you can post and they will show here.</h2>
            )}
            {personalPosts.length > 0 && (
                <div>
                    <h2>Your best catches sorted by biggest</h2>
                    <ul className="personal-posts">
                        {personalPosts.map(post => (
                            <li className="personal-post" key={post._id}>
                                <p>Fish species: {post.fishSpecies}</p>
                                <p>Fish length: {post.fishLength}</p>
                                <p>Location: {post.location}</p>
                                <p>Lure: {post.lure}</p>
                                <Link to={`/posts/${post._id}/details`}>
                                    <button className="btn-btn-details">Details</button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MyProfile;