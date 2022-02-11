import React from "react";
import PropTypes from "prop-types";

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
        <form onSubmit={handleEditKegFormSubmission}>
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
        <input
          type='hidden'
          value={props.keg.pintCount}
          name='pintCount' />
        <button type='submit'>Update</button>
      </form>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;