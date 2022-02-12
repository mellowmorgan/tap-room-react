import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
const {keg} = props;

  return(
    <React.Fragment>
      <div style={{marginLeft:'auto',marginRight:'auto',width:'50%'}}>
        <div className="content-detail">
          <h4>Name: { keg.name}</h4>
          <h4>Brand: {keg.brand}</h4>
          <h4>Price: {keg.price}</h4>
          <h4>Alcohol content: {keg.alcoholContent}</h4>
          <h4>Pints: {keg.pintCount}</h4>
        </div>
     
        <hr />
        <div className="detail-btn-space">
          <button className="button-gray" onClick={ props.onClickingEdit }>Update</button>
  
          <button className="button-gray" onClick={()=>props.onClickingDelete(keg.id)}>Delete</button>
        </div>
      </div>
      
    </React.Fragment>

  );

}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;
