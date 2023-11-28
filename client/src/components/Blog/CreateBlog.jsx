const CreateBlog = (props) => {


    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Create blog</h2>
          <form className="post-edit-form" >
            <label htmlFor="writerName">Writer</label>
            <input type="text" id="writerName" name="writerName" 
            />

            <label htmlFor="shortDescription">Angler name:</label>
            <input type="text" id="shortDescription" name="shortDescription" 
             />

            <label htmlFor="text">Text</label>
            <textarea id="text" name="text"
             />
             <button className="btn-post" type="submit">Post</button>
            <button className="btn-cancel" type="button" onClick={() => props.setCreateBlog(!props.createBlog)}>Cancel</button>
          </form>
        </div>
      </div>
    )
}

export default CreateBlog;