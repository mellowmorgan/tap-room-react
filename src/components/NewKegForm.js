import React, { useRef, useEffect } from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';

function NewKegForm(props) {
  const myRef = useRef(null)
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
  useEffect(()=>{
    window.scrollTo(0, myRef.current.offsetTop)
  });
  return(

    <React.Fragment>
      <div ref={myRef} className="form-holder">
        <h4>Add A Keg</h4> 
        <Form onSubmit={handleNewKegFormSubmission}>
          <Form.Group className="mb-3">
            <Form.Control className="form-input"
              type='text'
              name='name'
              placeholder='Name of keg' />
            <Form.Control className="form-input"
              type='text'
              name='brand'
              placeholder='Brand' />
            <Form.Control className="form-input"
              type='text'
              name='price'
              placeholder='Price' />
            <Form.Control className="form-input"
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