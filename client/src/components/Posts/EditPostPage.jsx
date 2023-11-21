const EditPostPage = (props) => {
    

    async function onEditPostHandler() {

    }

    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Edit Post</h2>
          <form onSubmit={onEditPostHandler}>
            <label htmlFor="editAnglerName">Angler Name:</label>
            <input type="text" id="editAnglerName" name="editAnglerName" />
            {/* Add other input fields for editing post details */}
            <button type="submit">Save Changes</button>
            {/* <button type="button" onClick={closeEditModal}>Close</button> */}
          </form>
        </div>
      </div>
    )
}

export default EditPostPage;