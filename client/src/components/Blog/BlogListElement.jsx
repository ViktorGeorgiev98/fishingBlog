import { Link } from "react-router-dom";

const BlogListElement = (props) => {


    return (
        <li>
            <img src={props.imageUrl} alt={props.shortDescription}></img>
            <p>Writer name: {props.writerName}</p>
            <p>About {props.shortDescription}</p>
        </li>
    )
}

export default BlogListElement;