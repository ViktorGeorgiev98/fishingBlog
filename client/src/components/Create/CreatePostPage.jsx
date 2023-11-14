



const CreatePostPage = () => {


    return (
      <>
      <h1>Create Post</h1>
      <div className="create-box">
        <h2>Create form</h2>
        <form>
          <div className="create-box">
            <label>Fish species</label>
            <input type="text" name="fishSpecies" required="" />
          </div>
          <div className="create-box">
            <label>Angler name</label>
            <input type="text" name="anglerName" required="" />
          </div>
          <div className="create-box">
            <label>Fish length</label>
            <input type="text" name="fishLength" required="" />
          </div>
          <div className="create-box">
            <label>Fish weight</label>
            <input type="text" name="fishWeight" required="" />
          </div>
          <div className="create-box">
            <label>Catch method</label>
            <input type="text" name="catchMethod" required="" />
          </div>
          <div className="create-box">
            <label>Lure / bait</label>
            <input type="text" name="lure" required="" />
          </div>
          <div className="create-box">
            <label>Location</label>
            <input type="text" name="location" required="" />
          </div>
          <div className="create-box">
            <label>Image url</label>
            <input type="text" name="imageUrl" required="" />
          </div>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
    
    )
}

export default CreatePostPage;