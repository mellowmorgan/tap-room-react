import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcohol.value,
      pintCount: event.target.pintCount.value,
      id: keg.id
    });
  }

  return(
    <React.Fragment>
      <div className="form-holder">
        <h4>Update Keg</h4> 
        <Form onSubmit={handleEditKegFormSubmission}>
          <Form.Group className="mb-3"> 
            <Form.Control className="form-input"
              type='text'
              name='name'
              value={props.keg.name}
              placeholder='Name of keg' />
            <Form.Control className="form-input"
              type='text'
              name='brand'
              value={props.keg.brand}
              placeholder='Brand' />
            <Form.Control className="form-input"
              type='text'
              name='price'
              value={props.keg.price}
              placeholder='Price' />
            <Form.Control className="form-input"
              type='text'
              value={props.keg.alcoholContent}
              name='alcohol'
              placeholder='Alcohol content' />
            <Form.Control className="form-input"
              type='hidden'
              value={props.keg.pintCount}
              name='pintCount' />
            <button className="button-5" type='submit'>Update</button>
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;