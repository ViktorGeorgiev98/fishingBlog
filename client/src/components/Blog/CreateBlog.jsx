import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const CreateBlog = (props) => {
    const [writer, setWriter] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { getAccessToken } = useAuth();

    async function createArticleHandler(e) {
        e.preventDefault();
        const url = 'http://localhost:3030/data/fishBlogArticles';
        const formData = new FormData(e.target);
        const writerName = formData.get("writerName");
        const shortDescription = formData.get("shortDescription");
        const text = formData.get("text");
        const imageUrl = formData.get("imageUrl");

        if (!writerName || !shortDescription || !text || !imageUrl) {
            return alert("All fields are mandatory!");
        }


        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json",
                        "X-Authorization": getAccessToken()},
                body: JSON.stringify({writerName, shortDescription, text, imageUrl})
            })

            if (response.ok) {
                const data = await response.json();
                console.log({data});
                props.setCreateBlog(!props.createBlog)
            }
        } catch(e) {
            console.log(e.message);
            return alert(e.message);
        }
    }

    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Create blog</h2>
          <form className="post-edit-form" onSubmit={createArticleHandler} >
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" id="imageUrl" onChange={(e) => setImageUrl(e.currentTarget.value)}></input>

            <label htmlFor="writerName">Writer</label>
            <input type="text" id="writerName" name="writerName" 
            onChange={(e) => setWriter(e.currentTarget.value)}
            />

            <label htmlFor="shortDescription">Short description:</label>
            <input type="text" id="shortDescription" name="shortDescription" 
            onChange={(e) => setShortDescription(e.currentTarget.value)}
             />

            <label htmlFor="text">Text</label>
            <textarea id="text" name="text"
            onChange={(e) => setText(e.currentTarget.value)}
             />
             <button className="btn-post" type="submit">Post</button>
            <button className="btn-cancel" type="button" onClick={() => props.setCreateBlog(!props.createBlog)}>Cancel</button>
          </form>
        </div>
      </div>
    )
}

export default CreateBlog;