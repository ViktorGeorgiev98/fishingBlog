const EditPostPage = (props) => {
    

    async function onEditPostHandler() {

    }

    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Edit Post</h2>
          <form className="post-edit-form" onSubmit={onEditPostHandler}>
            <label htmlFor="fishSpecies">Fish species:</label>
            <input type="text" id="fishSpecies" name="fishSpecies" value={props.fishSpecies} />
            <label htmlFor="anglerName">Angler name:</label>
            <input type="text" id="anglerName" name="anglerName" value={props.anglerName} />
            <label htmlFor="fishLength">Fish length:</label>
            <input type="text" id="fishLength" name="fishLength" value={props.fishLength} />
            <label htmlFor="fishWeight">Fish weight:</label>
            <input type="text" id="fishWeight" name="fishWeight" value={props.fishWeight} />
            <label htmlFor="catchMethod">Catch method:</label>
            <input type="text" id="catchMethod" name="catchMethod" value={props.catchMethod} />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={props.location} />
            <label htmlFor="lure">Lure:</label>
            <input type="text" id="lure" name="lure" value={props.lure} />
            <label htmlFor="lure">Image URL:</label>
            <input type="text" id="imageUrl" name="imageUrl" value={props.imageUrl} />
            {/* Add other input fields for editing post details */}
            <button className="btn-edit" type="submit">Edit</button>
            <button className="btn-cancel" type="button" onClick={() => props.setEditPopUp(!props.editPopUp)}>Cancel</button>
          </form>
        </div>
      </div>
    )
}

export default EditPostPage;