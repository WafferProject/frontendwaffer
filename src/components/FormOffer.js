import './FormOffer.css';
import React, { useState } from 'react';


function FormOffer({addOffer}) {
  const [imagePreview, setImagePreview] = useState('https://bootdey.com/img/Content/avatar/avatar1.png');
  const [formData, setFormData] = useState({
    offerName: '',
    category: '',
    quantityAvailable: '',
    originalPrice: '',
    discountedPrice: '',
    expirationDate: '',
    productDescription: '',
    imagePreview:imagePreview
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result)
        setImagePreview(reader.result); // Set the preview URL to the result of the FileReader
      };
      reader.readAsDataURL(file);
      console.log(file) // Read the file to get the data URL for preview
    }
  };
  const handleResetImage = () => {
    setImagePreview("https://bootdey.com/img/Content/avatar/avatar1.png"); // Reset to default avatar
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      // If the target is an image input, set the image file and its name
      const uploadedFile = files[0];
      console.log(uploadedFile)
      setFormData({
        ...formData,
        [name]: uploadedFile,
        
        imagePreview: uploadedFile ? uploadedFile.name : '', // Set the file name
      });
      setImagePreview(uploadedFile)
      
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data (formData)...
  
    // Pass the formData to the parent component
    addOffer(formData);
  
    // Clear form fields or reset form state if needed
    // Reset formData state or clear form fields...
  };
  console.log(formData)

  return (
   
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="container">
        <h2 className="header">Create a new food offer</h2>
        <div className="content">
          <div className="input_field">
            <div className="field">
              <label>Offer Name:</label>
              <input
                type="text"
                name="offerName"
                value={formData.offerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Category of Food:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input_field">
  <div className="field">
    <label>Quantity Available:</label>
    <input
      type="number"
      name="quantityAvailable"
      value={formData.quantityAvailable}
      onChange={handleChange}
      min="0"
      required
    />
  </div>
  <div className="field">
    <label>Original Price:</label>
    <input
      type="number"
      name="originalPrice"
      value={formData.originalPrice}
      onChange={handleChange}
      min="0"
      required
    />
  </div>
</div>
<div className="input_field">
  <div className="field">
    <label>Discounted Price:</label>
    <input
      type="number"
      name="discountedPrice"
      value={formData.discountedPrice}
      onChange={handleChange}
      min="0"
      required
    />
  </div>
  <div className="field">
    <label>Expiration Date:</label>
    <input
      type="date"
      name="expirationDate"
      value={formData.expirationDate}
      onChange={handleChange}
      required
    />
  </div>
</div>
<div className="input_field">
  <div className="field">
    <label>Product Description:</label>
    <textarea
      name="productDescription"
      value={formData.productDescription}
      onChange={handleChange}
      required
    />
  </div>
  {/* <div className="field">
  <label htmlFor="imageUpload" className="upload-button">
    Upload Image
  </label>
  <input
    type="file"
    id="imageUpload"
    name="image"
    accept="image/*"
    onChange={handleChange}
    required
  />
  {formData.imageName && (
            <p className="file-name">Selected image: {formData.imageName}</p>
          )}
</div> */}
 <div className=" field tab-pane fade active show" id="account-general">
                <div className="card-body media align-items-center">
                <img src={formData.imagePreview} alt="User Avatar" className="d-block ui-w-80"/>
                  <div className="upload media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input type="file" className="account-settings-fileinput" onClick={handleImageChange}/>
                    </label> &nbsp;
                    <button type="button" className="btn btn-default md-btn-flat" onClick={handleResetImage}>Reset</button>
                    
                  </div>
                </div>
              </div>
          </div>
          <div className="button_container">    
            <button className="button_submit" type="submit"> Add </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormOffer;

