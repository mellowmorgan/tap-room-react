import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.list.map((keg)=>
          <Keg name={keg.name} brand={keg.brand} 
          price={keg.price} alcoholContent = {keg.alcoholContent} />
      )}
    </React.Fragment>
  )
}

Keg.propTypes = {
  list: PropTypes.string
}

export default KegList;
