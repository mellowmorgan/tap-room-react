import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.list.map((keg)=>
          <Keg whenSoldClicked = { props.onSoldClicked } name={keg.name} brand={keg.brand} 
          price={keg.price} alcoholContent = {keg.alcoholContent} kegCount={keg.kegCounter} id={keg.id}  key={keg.id}/>
      )}
    </React.Fragment>
  )
}

Keg.propTypes = {
  list: PropTypes.string,
  onSoldClicked: PropTypes.func
}

export default KegList;
