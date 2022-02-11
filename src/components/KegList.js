import React from 'react';
import Keg from './Keg'
function KegList() {
  return (
    <React.Fragment>
      {props.list.map((keg)=>
        <div>
          <Keg name={keg.name} brand={keg.brand} 
          price={keg.price} alcoholContent = {keg.alcoholContent} />
        </div>
      )}
    </React.Fragment>
  );
}

export default KegList;
