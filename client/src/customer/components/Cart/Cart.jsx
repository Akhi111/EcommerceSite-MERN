import { Button } from "@mui/material";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = ()=>{
    navigate("/checkout?step=2")
  }

  return (
    <div className="mt-10">
      <div className=" lg:grid grid-cols-3 lg:px-16 relative">
        <div className=" col-span-2">
          {[1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className=" border shadow-lg rounded-md p-5">
            <p className=" uppercase font-bold opacity-60 pb-4">
              Price details
            </p>
            <hr />
            <div className=" space-y-3 font-semibold mb-10">
              <div className=" flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹607</span>
              </div>
              <div className=" flex justify-between pt-3">
                <span>Discount</span>
                <span className=" text-green-600">-₹2592</span>
              </div>
              <div className=" flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className=" text-green-600">Free</span>
              </div>
              <div className=" flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹607</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              className=" w-full mt-5"
              variant="contained"
              sx={{
                px: "2.5rem",
                py: ".7rem",
                bgcolor: "#f7941f",
                "&:hover": { bgcolor: "#fbc179" },
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
