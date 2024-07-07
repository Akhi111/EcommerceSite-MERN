import { Box, Modal, Typography } from "@mui/material";
import SignupForm from "./SignupForm";
import { useLocation } from "react-router-dom";
import SigninForm from "./SigninForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  backdropFilter: "blur(20px) brightness(250%)",
  border: "2px solid #f7941f",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/signin" ? <SigninForm /> : <SignupForm />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
