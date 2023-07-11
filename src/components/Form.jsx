import { useState, useRef } from 'react';
const Form = () => {
  const UncontrolledForm = () => {
    const ref = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(ref.current.value);
    };
  };
  return (
    <>
      <h1>Uncontrolled form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input type="text" ref={} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
export default Form;
