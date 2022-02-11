import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
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
     <div className="form-holder">
         <Form onSubmit={handleNewKegFormSubmission}>
         <Form.Group className="mb-3">
         <Form.Control 
           type='text'
           name='name'
           placeholder='Name of keg' />
          <Form.Control 
           type='text'
           name='brand'
           placeholder='Brand' />
          <Form.Control 
           type='text'
           name='price'
           placeholder='Price' />
          <Form.Control 
           type='text'
           name='alcohol'
           placeholder='Alcohol content' />
         <button className="button-5" type='submit'>Add Keg</button>
         </Form.Group>
         </Form>
         </div>
    </React.Fragment>
  );

 
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func

};

export default NewKegForm;