import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
function Keg(props) {

  return (
    <React.Fragment>
      <Card className="card-style"><div onClick = {() => props.whenKegClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol: {props.alcoholContent}</p>
        <p>Pints: {props.pintCount}</p>
      </div>
      <div className="button-holder"><button className="button-gray" onClick={()=> props.whenSoldClicked(props.id)}>Pint Sold</button></div></Card>

      
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
  whenSoldClicked: PropTypes.func,
  whenKegClicked: PropTypes.func
};

export default Keg;