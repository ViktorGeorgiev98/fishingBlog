const BlogDetails = (props) => {


    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Article details</h2>
          <img src={props.imageUrl} alt={props.shortDescription}></img>
            <p>Writer name: {props.writerName}</p>
            <p>About: {props.shortDescription}</p>
            <p>{props.text}</p>
            <button className="btn-return" onClick={props.setArticleDetails(!props.articleDetails)}>Return</button>
        
        </div>
      </div>
    )
}

export default BlogDetails;