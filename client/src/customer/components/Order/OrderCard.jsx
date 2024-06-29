import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=" p-5 shadow-md hover:shadow-2xl shadow-[#f7941f] rounded-md">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className=" flex cursor-pointer">
            <img
              className=" w-[5rem] h-[5rem] object-cover object-top"
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21940458/2023/2/11/7ef89e0f-5d36-4d84-8a69-cafccc0392a51676107774601KALINIWomenWhiteEmbroideredStraightKurta7.jpg"
              alt=""
            />
            <div className=" ml-5 space-y-2">
              <p>Floral Embroidered Notch Neck Thread Work Cotton Kurta</p>
              <p className=" opacity-50 text-xs font-semibold">Size: M</p>
              <p className=" opacity-50 text-xs font-semibold">Color: White</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹639</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className=" text-green-600 mr-2 text-sm"
                />
                <span>Delivered on 28 July 2024</span>
              </p>
              <p className=" text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on 29 July 2024</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
