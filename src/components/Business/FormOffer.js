import axios from "axios";
import "./FormOffer.css";
import React, { useState } from "react";
import { Snackbar } from "@mui/joy";
import { CheckCircle } from "@mui/icons-material";import meal from "../../images/pick-meals-image.png";

function FormOffer({ addOffer, setSelectedTab }) {
 
  const defaultImagePreview = meal;
  const [formData, setFormData] = useState({
    offerName: "",
    category: "",
    quantity: "",
    old_price: "",
    new_price: "",
    expiration_date: "",
    description: "",
    image: null,
    imagePreview: defaultImagePreview,
  });
  const [offerPosted, setOfferPosted] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setFormData({
      ...formData,
      image: null,
      imagePreview: defaultImagePreview,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/buisness/offer";
    //exlcuding images bcz not handled in backend
    const { image, imagePreview, ...offerObj } = formData;
    console.log(offerObj);
    axios
      .post(url, offerObj, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        addOffer(formData);
        setTimeout(() => {
          setSelectedTab("offers");
        }, 2000);
        setOfferPosted(true);
      })
      .catch((err) => {
        console.log(err);
        alert("there was an error creating your offer");
      });
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="containerOfferForm">
          <h2 className="header">Create a new food offer</h2>
          <div className="content">
            <div className="input_field">
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
              <div className="field">
                <label>Original Price:</label>
                <input
                  type="number"
                  name="old_price"
                  value={formData.old_price}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
            </div>
            <div className="input_field">
              <div className="field">
                <label>Quantity Available:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <div className="field">
                <label>Expiration Date:</label>
                <input
                  type="date"
                  name="expiration_date"
                  value={formData.expiration_date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input_field">
              <div className="field">
                <label>Discounted Price:</label>
                <input
                  type="number"
                  name="new_price"
                  value={formData.new_price}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
            </div>
            <div className="input_field">
              <div className="field">
                <label>Product Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className=" field tab-pane fade active show" id="uploadPic">
                <div className="card-body media align-items-center">
                  <img
                    src={formData.imagePreview}
                    alt="User Avatar"
                    className="d-block ui-w-80"
                  />
                  <div className="upload media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input
                        type="file"
                        className="account-settings-fileinput"
                        onClick={handleImageChange}
                      />
                    </label>{" "}
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-default md-btn-flat"
                      onClick={handleResetImage}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="button_container">
              <button className="button_submit" type="submit">
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Snackbar
        variant="soft"
        color="success"
        open={offerPosted}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        startDecorator={<CheckCircle />}
      >
        Your offer was posted successfully
      </Snackbar>
    </>
  );
}

export default FormOffer;
