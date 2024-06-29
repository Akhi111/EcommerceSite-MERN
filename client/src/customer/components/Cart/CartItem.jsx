import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md mb-4">
      <div className=" flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className=" w-full h-full object-cover object-top"
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21940458/2023/2/11/7ef89e0f-5d36-4d84-8a69-cafccc0392a51676107774601KALINIWomenWhiteEmbroideredStraightKurta7.jpg"
            alt=""
          />
        </div>

        <div className=" ml-5 space-y-1">
          <p className=" font-semibold">
            Floral Embroidered Notch Neck Thread Work Cotton Kurta
          </p>
          <p className=" opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: KALINI</p>

          <div className=" flex space-x-5 items-center text-gray-900 pt-6">
            <p className=" font-semibold">₹639</p>
            <p className=" opacity-50 line-through">₹3199</p>
            <p className=" text-green-600 font-semibold">80% OFF</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center lg:space-x-10 pt-4">
        <div className=" flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className=" py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{color:"#f7941f"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button sx={{color:"#f7941f"}}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
