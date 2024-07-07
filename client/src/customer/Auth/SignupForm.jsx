import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userData", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              type="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className=" bg-[#f7941f] w-full"
              type="submit"
              variant="content"
              size="large"
              sx={{
                padding: ".8rem 0",
                bgcolor: "#f7941f",
                "&:hover": { bgcolor: "#fbc179" },
              }}
            >
              {/*padding x y */}
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className=" flex justify-center flex-col items-center">
        <div className=" py-3 flex items-center">
          <p>if you have already account</p>
          <Button
            onClick={() => navigate("/signin")}
            className=" ml-5"
            size="small"
          >
            SignIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
