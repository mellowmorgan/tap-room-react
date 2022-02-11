import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <React.Fragment>
      <div>
        <h3>Name: {props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol: {props.alcoholContent}</p>
        <p>Pints: {props.pintCount}</p>
        <button onClick={()=> props.whenSoldClicked(props.id)}>Pint Sold</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  pintCount: PropTypes.number,
  whenSoldClicked: PropTypes.func
};

export default Keg;