import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false,
    };
  } 
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
  

  handleAddingNewKegToList = (newKeg) =>
  {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false});
  }  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} /> 
      buttonText = "Return to Keg List"; 

    }else{
      currentlyVisibleState = <KegList list={this.state.mainKegList}/>
      buttonText = "Add Keg"
    }
    

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
