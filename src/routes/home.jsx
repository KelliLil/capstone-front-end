import ExploreIcon from "@mui/icons-material/Explore";
import NearMeIcon from "@mui/icons-material/NearMe";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const cuisines = useLoaderData();

  // For Autocomplete, we need just the strings
  const labeledCuisines = cuisines.map((cuisine) => cuisine.name);

  return (
    <Container component="main" maxWidth="xs">
      <h1 className="text-center">👋🏾 Just Pick a Place Already 🥘 📍 🗺️</h1>
      <p>
        Just for U? 🆒 👇🏾 Fill out the form below and you&apos;ll be on your
        way. 😋
      </p>
      <p>
        Want to coordinate with a group? Head <Link to="/sign-in>">here</Link>{" "}
        to register an account 🛂 and start sending out links to your friends.
        Or enemies 🤛🏾 to snare them into a trap 🚩 👿 🤣.
      </p>

      {/* TODO: Add some 'Link' to 'dumb' routes to explain and 'sell' 😵‍💫 this thing! */}

      <form className="my-16 flex flex-col gap-y-4">
        <Autocomplete
          disablePortal
          id="cuisine"
          name="cuisine"
          options={labeledCuisines}
          renderInput={
            // 'params' is used by MUI to control the input value
            (params) => (
              <TextField
                {...params}
                label="What cuisine R U in the mood for? 😋"
              />
            )
          }
        />

        {/* TODO: Allow other inputs such as city 🏙️. */}
        {/* TODO: Use geolocation 🤓 🗺️. */}
        <TextField
          label="Where do you want to head? (5-Digit Zip Code)"
          id="zip"
          name="zipCode"
          // TODO: Improve validation experience 🚸.
          inputProps={{ pattern: "[0-9]{5}" }}
          required
        />

        <div className="flex items-center gap-x-4">
          <NearMeIcon />
          <Slider
            aria-label="Range"
            defaultValue={10}
            getAriaValueText={(value) => `${value} miles`}
            marks
            min={5}
            max={25}
            step={5}
            valueLabelDisplay="on"
          />
          <ExploreIcon />
        </div>

        <Button
          variant="contained"
          color="success"
          type="submit"
          className="max-w-max self-center"
        >
          Go!
        </Button>
      </form>
    </Container>
  );
}
