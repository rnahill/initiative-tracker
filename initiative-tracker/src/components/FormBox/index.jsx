import React, { useState } from 'react';


const FormBox = ({ addFormData }) => {

    const [inputValues, setInputValues] = useState({ name: "", initiative: "", hp: "", ac: "" });

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
        setInputValues({ name: "", initiative: "", hp: "", ac: "" });
    };



    return (
        <>
                <form onSubmit={handleSubmit} className='d-flex justify-content-evenly m-5 p-4 border'>
                    <input
                        type="text"
                        name="name"
                        value={inputValues.name}
                        onChange={handleChange}
                        placeholder='Name'
                    />

                    <input
                        type="text"
                        name="initiative"
                        value={inputValues.initiative}
                        onChange={handleChange}
                        placeholder='Initiative'
                    />

                    <input
                        type="text"
                        name="hp"
                        value={inputValues.hp}
                        onChange={handleChange}
                        placeholder='HP'
                    />

                    <input
                        type="text"
                        name="ac"
                        value={inputValues.ac}
                        onChange={handleChange}
                        placeholder='AC'
                    />

                    <button type="submit">Submit</button>
                </form>
        </>
    )
}

export default FormBox;