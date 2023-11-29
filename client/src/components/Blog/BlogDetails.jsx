import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = (props) => {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/data/fishBlogArticles/${id}`)
        .then(response => response.json())
        .then(data => setArticle(data))
        .catch(error => console.log(error));
    }, []);


    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Article details</h2>
          <img src={article.imageUrl} alt={article.shortDescription}></img>
            <p>Writer name: {article.writerName}</p>
            <p>About: {article.shortDescription}</p>
            <p>{article.text}</p>
            <Link to={`/blog`}>
                <button className="btn-btn-read-more">Return</button>
            </Link>
        
        </div>
      </div>
    )
}

export default BlogDetails;