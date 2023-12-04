import { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import BlogListElement from "./BlogListElement";
import BlogDetails from "./BlogDetails";
import { useAuth } from "../../context/AuthProvider";

const Blog = () => {
    const [createBlog, setCreateBlog] = useState(false);
    const [articles, setArticles] = useState([]);
    const [articleDetails, setArticleDetails] = useState(false);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        fetch('http://localhost:3030/data/fishBlogArticles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setArticles(data))
            .catch(error => {
                console.error('Fetch error:', error);
                // Handle the error gracefully without crashing the app
                setArticles([]);
            });
    }, [createBlog]);
    console.log({articles})
    return (
        <div className="blog-page">
            <h1>Blog</h1>
            {isAuthenticated() && 
                <h3>If you want to add a new article, please click the button
                <button className="add-blog" onClick={() => setCreateBlog(!createBlog)}>Add article</button>
                </h3>
            }
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
                        articleDetails={articleDetails}
                        setArticleDetails={setArticleDetails}
                        key={article._id}
                        writerName={article.writerName} 
                        id={article._id} 
                        shortDescription={article.shortDescription} 
                        imageUrl={article.imageUrl}
                        />
                    ))}
                </ul>
            }
            {/* {articleDetails && 
                <BlogDetails />
            } */}
            
        </div>
    )
}


export default Blog;