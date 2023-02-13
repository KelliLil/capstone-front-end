import PropTypes from "prop-types";
import Nav from "./nav/nav";

export default function Header({ txt }) {
  return (
    <header className="my-0 bg-gradient-to-r from-purple-500 to-rose-500 pt-8  font-serif text-2xl text-white">
      <h1 className="text-center">{txt}</h1>
      <Nav className="text-right" />
    </header>
  );
}

Header.defaultProps = {
  txt: "Iron Out",
};

Header.propTypes = {
  txt: PropTypes.string,
};
