import { Link } from "react-router-dom";


const PostListElement = (props) => {
    return (
        <li  className="post">
            <img src={props.imageUrl} alt={props.fishSpecies}></img>
            <p>Fish Species: {props.fishSpecies}</p>
            <p>Angler Name: {props.anglerName}</p>
            <p>Length: {props.fishLength}</p>
            <p>Method: {props.catchMethod}</p>
            <p>Lure: {props.lure}</p>
            <p>Location:{props.location}</p>
            <Link to={`/posts/${props.id}/details`}>
                <button className="btn-btn-details">Details</button>
            </Link>
        </li>
    )
}

export default PostListElement;