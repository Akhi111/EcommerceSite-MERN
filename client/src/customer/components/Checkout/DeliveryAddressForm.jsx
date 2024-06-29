import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    console.log("address", address);
  };

  return (
    <div className=" ml-5">
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className=" border rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className=" p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{
                mt: 2,
                color: "white",
                bgcolor: "#f7941f",
                "&:hover": {
                  bgcolor: "#fbc179",
                },
              }}
              size="large"
              varient="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          {/*It takes 12 in small and 7 in large displays */}
          <Box className=" border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="firstName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="lastName"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="address-line"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/ Province/ Region"
                    fullWidth
                    autoComplete="address-line1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/ Postal code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{
                      mt: 2,
                      py: 1.5,
                      color: "white",
                      bgcolor: "#f7941f",
                      "&:hover": {
                        bgcolor: "#fbc179",
                      },
                    }}
                    size="large"
                    varient="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
