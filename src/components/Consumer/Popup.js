import "./Popup.css";
import Offer from "./Offer";
import Button from "@mui/joy/Button";
import { Check, CheckCircle, CloseOutlined } from "@mui/icons-material";
import { useState, useContext } from "react";
import Modal from "@mui/joy/Modal";
import Snackbar from "@mui/joy/Snackbar";
import { ConsumerContext } from "./ConsumerDashContext";
import Map from "./Map";
const Popup = ({ setProfileOpen }) => {
  const [count, setCount] = useState(1);
  const [isOrderPlaced, setOrderPlaced] = useState(false);
  const { selectedOffer, setSelectedOffer } = useContext(ConsumerContext);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    //background blur div
    <>
      <Modal
        open={true}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        onClose={() => {
          setSelectedOffer(null);
        }}
      >
        {/* Content */}

        <div onClick={(e) => e.stopPropagation()} className="popup-content">
          <Map selectedOffer={selectedOffer} />
          <div className="popup-header">
            <h1 className="popup-title">Offer details</h1>
            {/* close */}
            <div className="popup-close">
              <CloseOutlined
                onClick={() => {
                  setSelectedOffer(null);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#FBFAF5",
              borderRadius: "20px",
            }}
          >
            <Offer offerItem={selectedOffer} setProfileOpen={setProfileOpen} />

            <div style={{ borderLeft: "1px solid grey" }} />

            <div className="description">
              <h3>Description</h3>
              {selectedOffer.description}
              <div style={{position:'absolute',bottom:'40px', display: "flex", marginTop: "60px" }}>
                <div class="counter">
                  Qte
                  <span class="down" onClick={decreaseCount}>
                    -
                  </span>
                  <input type="text" value={count} readOnly />
                  <span class="up" onClick={increaseCount}>
                    +
                  </span>
                </div>
                <Button
                  style={{ width: "150px" }}
                  endDecorator={isOrderPlaced && <Check fontSize="large" />}
                  color="success"
                  variant="plain"
                  onClick={() => {
                    setOrderPlaced(true);
                    setTimeout(() => {
                      setSelectedOffer(null);
                    }, 1700);
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Snackbar
        variant="soft"
        color="success"
        open={isOrderPlaced}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        startDecorator={<CheckCircle />}
      >
        Your order was placed successfully
      </Snackbar>
    </>
  );
};
export default Popup;
