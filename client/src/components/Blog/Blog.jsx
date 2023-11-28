import { useState } from "react";
import CreateBlog from "./CreateBlog";

const Blog = () => {
    const [createBlog, setCreateBlog] = useState(false);



    return (
        <div className="blog-page">
            <h1>Blog</h1>
            <h3>If you want to add a new article, please click the button
                <button className="add-blog" onClick={() => setCreateBlog(!createBlog)}>Add article</button>
            </h3>
            {createBlog  &&
                <CreateBlog createBlog={createBlog} setCreateBlog={setCreateBlog} />
            }
        </div>
    )
}


export default Blog;