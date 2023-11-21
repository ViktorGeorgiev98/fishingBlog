import { useState } from "react";

const EditPostPage = (props) => {
    const [species, setSpecies] = useState('');
    const [anglerName, setAnglerName] = useState('');
    const [fishLength, setFishLength] = useState('');
    const [fishWeight, setFishWeight] = useState('');
    const [bait, setBait] = useState('');
    const [method, setMethod] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    async function onEditPostHandler(e) {
        e.preventDefault();
        const url = `${props.baseUrl}/fishCatches/${props._id}`
        const formData = new FormData(e.target);
        const fishSpecies = formData.get('fishSpecies');
        const anglerName = formData.get('anglerName');
        const fishLength = formData.get('fishLength');
        const fishWeight = formData.get('fishWeight');
        const bait = formData.get('bait');
        const method = formData.get('method');
        const location = formData.get('location');
        const imageUrl = formData.get('imageUrl');

        if (!fishSpecies || !anglerName || !fishLength || !fishWeight || !bait || !method || !location || !imageUrl) {
            return alert('All fields are mandatory!');
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', 
                  },
                body: JSON.stringify({fishSpecies, anglerName, fishLength, fishWeight, bait, method, location, imageUrl})
            })

            if(response.ok) {
                console.log("PUT request done")
            } else {
                throw new Error(response.statusText);
            }
        } catch(e) {
            alert(e);
            console.log(e);
        }
    }

    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Edit Post</h2>
          <form className="post-edit-form" onSubmit={onEditPostHandler}>
            <label htmlFor="fishSpecies">Fish species:</label>
            <input type="text" id="fishSpecies" name="fishSpecies" defaultValue={props.fishSpecies} 
            onChange={(e) => setSpecies(e.currentTarget.value)} />

            <label htmlFor="anglerName">Angler name:</label>
            <input type="text" id="anglerName" name="anglerName" defaultValue={props.anglerName}
            onChange={(e) => setAnglerName(e.currentTarget.value)} />

            <label htmlFor="fishLength">Fish length:</label>
            <input type="text" id="fishLength" name="fishLength" defaultValue={props.fishLength}
            onChange={(e) => setFishLength(e.currentTarget.value)} />

            <label htmlFor="fishWeight">Fish weight:</label>
            <input type="text" id="fishWeight" name="fishWeight" defaultValue={props.fishWeight}
            onChange={(e) => setFishWeight(e.currentTarget.value)} />

            <label htmlFor="catchMethod">Catch method:</label>
            <input type="text" id="catchMethod" name="catchMethod" defaultValue={props.catchMethod}
            onChange={(e) => setMethod(e.currentTarget.value)} />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" defaultValue={props.location}
            onChange={(e) => setLocation(e.currentTarget.value)} />

            <label htmlFor="lure">Lure:</label>
            <input type="text" id="lure" name="lure" defaultValue={props.lure}
            onChange={(e) => setBait(e.currentTarget.value)} />

            <label htmlFor="imageUrl">Image URL:</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue={props.imageUrl}
            onChange={(e) => setImageUrl(e.currentTarget.value)} />

            {/* Add other input fields for editing post details */}
            <button className="btn-edit" type="submit">Edit</button>
            <button className="btn-cancel" type="button" onClick={() => props.setEditPopUp(!props.editPopUp)}>Cancel</button>
          </form>
        </div>
      </div>
    )
}

export default EditPostPage;