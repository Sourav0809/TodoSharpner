import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isEditing, setIsEditing] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length !== 0) {
      setIsEditing(true)

    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsEditing(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // if the btn is invalid (input field empty)

  const btnNotValid = !isEditing ? 'btn-invalid' : ''
  console.log(btnNotValid)
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isEditing ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" btnInvalid={btnNotValid}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
