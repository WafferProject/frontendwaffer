import React, { useState, useEffect} from 'react';

import "./ProfileSettings.css";
import Alert from '@mui/material/Alert';
function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [userData, setUserData] = useState({
    username: 'nmaxwell',
    name: 'Nelle Maxwell',
    email: 'nmaxwell@mail.com',
    imagePreview: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  });

  const [originalData, setOriginalData] = useState({});
  const [showAlert, setShowAlert] = useState(false);

useEffect(() => {
  
  const fetchedData = {
    username: 'nmaxwell',
    name: 'Nelle Maxwell',
    email: 'nmaxwell@mail.com',
    imagePreview: 'https://bootdey.com/img/Content/avatar/avatar1.png'
  };

  setUserData(fetchedData);
  setOriginalData(fetchedData);
}, []);


  const [editMode, setEditMode] = useState({
    username: false,
    name: false,
    email: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const toggleEditMode = (field) => {
    setEditMode(prevState => ({ ...prevState, [field]: !prevState[field] }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prevState => ({ ...prevState, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setUserData(prevState => ({ ...prevState, imagePreview: "https://bootdey.com/img/Content/avatar/avatar1.png" }));
  };
  const handleSaveChanges = () => {
    
    setOriginalData(userData);
    setShowAlert(true);
    

  
    // Reset the edit modes
    setEditMode({
      username: false,
      name: false,
      email: false
    });
  };
  

  const handleCancel = () => {
    setUserData(originalData);
    setEditMode({
      username: false,
      name: false,
      email: false
    });
  };
  

  const renderEditableField = (field, type = "text") => (
    editMode[field] ? (
      <input
        type={type}
        name={field}
        className="form-control mb-1"
        value={userData[field]}
        onChange={handleChange}
        onBlur={() => toggleEditMode(field)}
      />
    ) : (
      <div onClick={() => toggleEditMode(field)} className="editable-field">
        {userData[field]}
        <span className="edit-icon">&#9998;</span>
      </div>
    )
  );

 
  return (
    <div className="containerProfile">
      {showAlert && (
             <Alert
             severity="success"
             onClose={() => setShowAlert(false)}
             
                style={{
                   position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 9999,
                    transition: 'transform 0.3s ease-in-out',
                    transform: showAlert ? 'translateX(0)' : 'translateX(100%)'
                
             }}
         >
             Changes saved successfully!
         </Alert>

    )}
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>

      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <button onClick={() => setActiveTab('general')} className={`list-group-item list-group-item-action ${activeTab === 'general' ? 'active' : ''}`}>Account information</button>
              <button onClick={() => setActiveTab('change-password')} className={`list-group-item list-group-item-action ${activeTab === 'change-password' ? 'active' : ''}`}>Change password</button>
            </div>
          </div>

          <div className="col-md-9">
            <div className="tab-content">
              {activeTab === 'general' && (
                <div className="tab-pane fade active show" id="account-general">
                  <div className="card-body media align-items-center">
                    <img src={userData.imagePreview} alt="User Avatar" className="d-block ui-w-80" />
                    <div className="upload media-body ml-4">
                      <label className="btn btn-outline-primary">
                        Upload new photo
                        <input type="file" className="account-settings-fileinput" onChange={handleImageChange} />
                      </label> &nbsp;
                      <button type="button" className="btn btn-default md-btn-flat" onClick={handleResetImage}>Reset</button>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      {renderEditableField('username')}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      {renderEditableField('name')}
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      {renderEditableField('email')}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'change-password' && (
                <div className="password-tab" id="account-change-password">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" name="currentPassword" value={userData.currentPassword} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New password</label>
                      <input type="password" className="form-control" name="newPassword" value={userData.newPassword} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Repeat new password</label>
                      <input type="password" className="form-control" name="repeatNewPassword" value={userData.repeatNewPassword} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="button-container mt-3">
        <button type="button" className="btn btn-primary button-spacing" onClick={handleSaveChanges}>Save changes</button>
        <button type="button" className="btn btn-default" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ProfileSettings;
