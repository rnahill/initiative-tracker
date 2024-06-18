import React, { useState } from 'react';


const FormBox = ({ addFormData }) => {

    const [inputValues, setInputValues] = useState({ name: "", initiative: "", hp: "", ac:""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
          ...inputValues,
          [name]: value
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addFormData(inputValues);
        setInputValues({ name: "", initiative: "", hp: "", ac:""});
      };



    return (
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={inputValues.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Initiative:
        <input
          type="text"
          name="initiative"
          value={inputValues.initiative}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        HP:
        <input
          type="text"
          name="hp"
          value={inputValues.hp}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        AC:
        <input
          type="text"
          name="ac"
          value={inputValues.ac}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    )
}

export default FormBox;