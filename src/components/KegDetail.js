import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
const {keg} = props;

  return(
    <React.Fragment>
      <h2>Name: { keg.name}</h2>
      <h3>Brand: {keg.brand}</h3>
      <h3>Price: {keg.price}</h3>
      <h3>Alcohol content: {keg.alcoholContent}</h3>
      <h3>Pints: {keg.pintCount}</h3>
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