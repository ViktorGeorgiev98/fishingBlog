

const BlogListElement = (props) => {
    

    return (
        <li>
            <img src={props.imageUrl} alt={props.shortDescription}></img>
            <p>Writer name: {props.writerName}</p>
            <p>About {props.shortDescription}</p>
            <button className="btn-read-more" onClick={props.setArticleDetails(!props.articleDetails)} id={props.id}>Read more</button>
        </li>
    )
}

export default BlogListElement;