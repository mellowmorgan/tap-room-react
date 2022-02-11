import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
const {keg} = props;

  return(
    <React.Fragment>
      <h3>Name: { keg.name}</h3>
      <h4>Brand: {keg.brand}</h4>
      <h4>Price: {keg.price}</h4>
      <h4>Alcohol content: {keg.alcoholContent}</h4>
      <h4>Pints: {keg.pintCount}</h4>
      <hr />
      <button onClick={ props.onClickingEdit }>Update</button>
      <button onClick={()=>props.onClickingDelete(keg.id)}>Delete</button>
    </React.Fragment>

  );

}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;