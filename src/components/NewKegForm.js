import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm"

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcohol.value,
      pintCount: 124,
      id: v4()
    });
  }
  return(
    <React.Fragment>

         <form onSubmit={handleNewKegFormSubmission}>
         <input
           type='text'
           name='name'
           placeholder='Name of keg' />
         <input
           type='text'
           name='brand'
           placeholder='Brand' />
         <input
           type='text'
           name='price'
           placeholder='Price' />
         <input
           type='text'
           name='alcohol'
           placeholder='Alcohol content' />
         <button type='submit'>Add Keg</button>
       </form>
    </React.Fragment>
  );

 
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func

};

export default NewKegForm;