import { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import BlogListElement from "./BlogListElement";

const Blog = () => {
    const [createBlog, setCreateBlog] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/fishBlogArticles')
        .then(response => response.json())
        .then(data => setArticles(data))
        .catch(error => console.log(error));
    }, [createBlog])

    return (
        <div className="blog-page">
            <h1>Blog</h1>
            <h3>If you want to add a new article, please click the button
                <button className="add-blog" onClick={() => setCreateBlog(!createBlog)}>Add article</button>
            </h3>
            {createBlog  &&
                <CreateBlog createBlog={createBlog} setCreateBlog={setCreateBlog} />
            }
            {articles.length <= 0 &&
                <h2>No articles at the moment</h2>
            }
            {articles.length >= 0 &&
                <ul className="articles">
                    {articles.map(article => (
                        <BlogListElement 
                        key={article._id}
                        writerName={article.writerName} 
                        id={article._id} 
                        shortDescription={article.shortDescription} 
                        imageUrl={article.imageUrl}
                        />
                    ))}
                </ul>
            }
            
        </div>
    )
}


export default Blog;