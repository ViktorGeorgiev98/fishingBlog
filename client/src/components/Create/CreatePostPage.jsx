import { useState } from "react";
import { useNavigate } from "react-router-dom";




const CreatePostPage = () => {
    // State management and functions
    const navigate = useNavigate();
    const baseUrl = `http://localhost:3030`;
    const [species, setSpecies] = useState('');
    const [anglerName, setAnglerName] = useState('');
    const [fishLength, setFishLength] = useState('');
    const [fishWeight, setFishWeight] = useState('');
    const [bait, setBait] = useState('');
    const [method, setMethod] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    async function onCreatePostSubmitHandler  (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const fishSpecies = formData.get('fishSpecies');
      const fishLength = formData.get('fishLength')
      const fishWeight = formData.get('fishWeight')
      const catchMethod = formData.get('catchMethod')
      const lure = formData.get('lure')
      const location = formData.get('location')
      const imageUrl = formData.get('imageUrl')
      const anglerName = formData.get('anglerName')

      await validateInput(fishSpecies, fishLength, fishWeight, catchMethod, lure, location, imageUrl, anglerName);
      console.log( {
        fishSpecies, fishLength, fishWeight, catchMethod, lure, location, imageUrl, anglerName
      })

      await makePostCreateRequest(fishSpecies, fishLength, fishWeight, catchMethod, lure, location, imageUrl, anglerName);
      navigate('/posts');
    }


    async function validateInput(fishSpecies, fishLength, fishWeight, catchMethod, lure, location) {
      if (!fishSpecies 
        || !fishLength 
        || !fishWeight 
        || !catchMethod 
        || !lure 
        || !location 
        || !imageUrl 
        || !anglerName) {
          return alert("All fields are mandatory!!!");
        }
    }

    async function makePostCreateRequest(fishSpecies, fishLength, fishWeight, catchMethod, lure, location, imageUrl, anglerName) {
      try {
        const response = await fetch(`${baseUrl}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({
            fishSpecies, fishLength, fishWeight, catchMethod, lure, location, imageUrl, anglerName
          })
      })
      } catch(e) {
        return alert(e.message);
      }
    }



    // Actual component html
    return (
      <>
      <h1>Create Post</h1>
      <div className="create-box">
        <h2>Create form</h2>
        <form onSubmit={onCreatePostSubmitHandler}>
          <div className="create-box">
            <label htmlFor="fishSpecies">Fish species</label>
            <input type="text" 
            name="fishSpecies" 
            required="" 
            onChange={(e) => setSpecies(e.currentTarget.value)} />
          </div>
          <div className="create-box">
            <label htmlFor="anglerName">Angler name</label>
            <input type="text" 
            name="anglerName" 
            required="" 
            onChange={(e) => setAnglerName(e.currentTarget.value)}/>
          </div>
          <div className="create-box">
            <label htmlFor="fishLength">Fish length</label>
            <input type="text" 
            name="fishLength" 
            required="" 
            onChange={(e) => setFishLength(e.currentTarget.value)} />
          </div>
          <div className="create-box">
            <label htmlFor="fishWeight">Fish weight</label>
            <input type="text" 
            name="fishWeight" 
            required="" 
            onChange={(e) => setFishWeight(e.currentTarget.value)} />
          </div>
          <div className="create-box">
            <label htmlFor="catchMethod">Catch method</label>
            <input type="text" 
            name="catchMethod" 
            required="" 
            onChange={(e) => setMethod(e.currentTarget.value)} />
          </div>
          <div className="create-box">
            <label htmlFor="lure">Lure / bait</label>
            <input type="text" 
            name="lure" 
            required="" 
            onChange={(e) => setBait(e.currentTarget.value)} />
          </div>
          <div className="create-box">
            <label htmlFor="location">Location</label>
            <input type="text" 
            name="location" 
            required="" 
            onChange={(e) => setLocation(e.currentTarget.value)} />
          </div>
          <div className="create-box">
            <label htmlFor="imageUrl">Image url</label>
            <input type="text" 
            name="imageUrl" 
            required="" 
            onChange={(e) => setImageUrl(e.currentTarget.value)} />
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