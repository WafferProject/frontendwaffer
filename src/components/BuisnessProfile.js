import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import "./BuisnessProfile.css";
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BuisnessProfile({setProfileOpen,   ProfileOpen}) {


  return (
    <>
      
      <Dialog
        open={ProfileOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setProfileOpen(false)}
        aria-describedby="alert-dialog-slide-description"
        component={'div'}
        PaperProps={{ sx: { borderRadius: "20px" } }}
      >
        <DialogContent>
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle"> <StorefrontOutlinedIcon/>  &nbsp; YoYo </div>
            <div className="notibody">
              <div className="notibody-container">
                <span>opens at </span>
                <span>8:00</span>
                <span> closes at</span>
                <span>21:00</span>
                <span>Phone n°</span>
                <span>92066519</span>

              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
