import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import "./BuisnessProfile.css";
import { forwardRef  } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BuisnessProfile({
  setProfileOpen: setProfileClosed,
  profileInfo,
}) {
  return (
    <>
      <Dialog
        open={profileInfo}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setProfileClosed(null)}
        aria-describedby="alert-dialog-slide-description"
        component={"div"}
        PaperProps={{ sx: { borderRadius: "20px" } }}
      >
        <DialogContent>
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle">
              {" "}
              <StorefrontOutlinedIcon /> &nbsp; {profileInfo.name}{" "}
            </div>
            <div className="notibody">
              <div className="notibody-container">
                <span>opens at </span>
                <span>{profileInfo.opening_time}</span>
                <span> closes at</span>
                <span>{profileInfo.closing_time}</span>
                {profileInfo.WorkPhones.map((phone) => (
                  <>
                    <span>Phone n°</span>
                    <span>{phone.phone_number}</span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
