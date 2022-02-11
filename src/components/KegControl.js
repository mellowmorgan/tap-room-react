import React from 'react';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false,
      counter: 0
    };
  } 
  

  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    currentlyVisibleState = <KegList />
    buttonText = "Add Keg"

    return ( 
    <React.Fragment>
      <div style={{marginBottom:'16px'}}>Total Kegs Available: {this.state.counter}</div>
      {currentlyVisibleState}
      
      <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
    </React.Fragment>
  );
}

}
export default KegControl;
