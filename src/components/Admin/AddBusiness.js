import React from 'react'
import "./AddBusiness.css"
import Sidebar from "./SideBar.js"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const AddBusiness = () => {
    const [file,setFile]=useState("");

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <div className="topContainer">
            <h1 className="headerTop">Add New Business</h1>
        </div>
        <div className="bottomContainer">
          <div className="leftContainer">
          <img className="AddImage"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="rightContainer">
            <form>
            <div className="formInput">
                    <label htmlFor="file">
                        Image: <DriveFolderUploadOutlinedIcon className="iconImage"/>
                        </label>
                    <input type ="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                </div>
                <div className="formInput">
                    <label>Name</label>
                    <input type ="text" placeholder="john_doe"/>
                </div>
                <div className="formInput">
                    <label>Email </label>
                    <input type ="email" placeholder="john_doe@gmail.com"/>
                </div>
                <div className="formInput">
                    <label>Phone</label>
                    <input type ="text" placeholder="+21659683938"/>
                </div>
                <div className="formInput">
                    <label>Location</label>
                    <input type ="text" placeholder="location"/>
                </div>
                <div className="formInput">
                    <label>Password</label>
                    <input type ="password"/>
                </div>
               <button className="AddButton">Add</button>
            </form>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default AddBusiness
