import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className=" px-5 lg:px-20">
      <div>
        <h1 className=" font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className=" py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className=" space-y-5">
        {[1, 1, 1].map((item, index) => (
          <Grid
            key={index}
            item
            container
            className=" shadow-md rounded-md p-5 border border-[#f7941f] shadow-[#f7941f]"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className=" flex items-center space-x-4">
                <img
                  className=" w-[5rem] h-[5rem] object-cover object-top ml-5"
                  src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21940458/2023/2/11/7ef89e0f-5d36-4d84-8a69-cafccc0392a51676107774601KALINIWomenWhiteEmbroideredStraightKurta7.jpg"
                  alt=""
                />

                <div className=" space-y-2 ml-5">
                  <p className=" font-semibold ">
                    Floral Embroidered Notch Neck Thread Work Cotton Kurta
                  </p>
                  <p className=" space-x-5 opacity-50 text-xs font-semibold ">
                    <span>Color: White</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: KALINI</p>
                  <p>₹639</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
