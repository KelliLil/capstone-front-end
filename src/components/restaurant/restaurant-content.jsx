import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import { Fragment } from "react";

export default function RestaurantContent({ restaurant }) {
  return (
    <CardContent className="text-center">
      <h2>{restaurant.name}</h2>
      <address>
        {restaurant.location.display_address.map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
        {restaurant.phone && (
          <a href={`tel:${restaurant.phone}`}>{restaurant.display_phone}</a>
        )}
      </address>
    </CardContent>
  );
}

RestaurantContent.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    location: PropTypes.shape({
      display_address: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    phone: PropTypes.string,
    display_phone: PropTypes.string,
  }).isRequired,
};
