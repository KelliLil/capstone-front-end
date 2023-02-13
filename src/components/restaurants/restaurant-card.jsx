import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import RestaurantContent from "./restaurant-content";

export default function RestaurantCard({ restaurant }) {
  return (
    <Card>
      <CardMedia
        image={restaurant.image_url}
        title={restaurant.name}
        className="h-48"
      />
      <RestaurantContent restaurant={restaurant} />
    </Card>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};
