import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className=" text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className=" space-y-2">
            <div>
              <p className=" font-semibold text-lg">Amey</p>
              <p className=" opacity-70">July 5, 2024</p>
            </div>
          </div>

          <Rating value={2.5} name="half-rating" readOnly precision={.5} />
          <p className="">
            The kurta is wonderful and fits so well. Nice thread work in white
            which makes it look elegant. The material is nice and comfortable
            and durable too.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
