import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";
function KegList(props)  {
  return (
    <React.Fragment>
      <div className="grid-container">
        {props.list.map((keg)=>
          <Keg className="grid-item" whenKegClicked={props.onKegClicked} whenSoldClicked = { props.onSoldClicked } name={keg.name} brand={keg.brand} 
          price={keg.price} alcoholContent = {keg.alcoholContent} pintCount={keg.pintCount} id={keg.id}  key={keg.id}/>
        )}
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  list: PropTypes.string,
  onSoldClicked: PropTypes.func,
  onKegClicked: PropTypes.func
}

export default KegList;
