import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
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
  handleSoldClicked = (id) =>
  {
    let changedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if (changedKeg.pintCount !== 0){
      changedKeg.pintCount -= 1;
      const changedMainKegList = this.state.mainKegList.filter(keg => keg.id !== id).concat(changedKeg);
      this.setState({
        mainKegist: changedMainKegList})
    }
  }
  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        mainKegList: editedMainKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewKegToList = (newKeg) =>
  {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false});
  }  
  handleChangingSelectedKeg = (id) => {
    const selectedPlay = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null,
      counter: this.state.counter-1
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm 
        keg = {this.state.selectedKeg} 
        onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} /> 
      buttonText = "Return to Keg List"; 

    }
    else if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail 
        onClickingDelete = {this.handleDeletingKeg}  
        onClickingEdit = {this.handleEditClick} 
        keg={this.state.selectedKeg} />
      buttonText = "Return to Keg List";
    }
    else{
      currentlyVisibleState = <KegList onSoldClicked={this.handleSoldClicked} list={this.state.mainKegList}/>
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
