import "./Popup.css";
import Offer from "./Offer";
import Button from "@mui/joy/Button";
import { Check, CheckCircle, CloseOutlined } from "@mui/icons-material";
import { useState, useContext } from "react";
import Modal from "@mui/joy/Modal";
import Snackbar from "@mui/joy/Snackbar";
import { ConsumerContext } from "./ConsumerDashContext";
import Map from "./Map";
import axios from "axios";
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
  const url = `http://localhost:8080/api/consumer/order`;
  const order = {
    quantity: count,
    offer_id: selectedOffer.id,
    tax_registration_number: selectedOffer.tax_registration_number,
  };
  const postOrder = () => {
    axios
      .post(url, order, { withCredentials: true })
      .then((response) => {
        console.log("order added successfuly" + JSON.stringify(response.data));
        setOrderPlaced(true);
        setTimeout(() => {
          setSelectedOffer(null);
          window.location.reload();
        }, 1700);
      })
      .catch((error) => {
        console.log("error  " + JSON.stringify(error.response));
        if (error.response.status === 400) {
          return alert("not enough quantity remaining");
        } else if (error.response.status === 404) {
          alert("offer not found or may be expired");
        }
      });
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
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  display: "flex",
                  marginTop: "60px",
                }}
              >
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
                  onClick={postOrder}
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
