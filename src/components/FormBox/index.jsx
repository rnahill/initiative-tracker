import React, { useState } from 'react';
import { Button }from "@material-tailwind/react";
import "./style.css"


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
                <form onSubmit={handleSubmit} className='flex justify-evenly flex-row flex-wrap m-5 pb-3 border border-gray-800 rounded'>
                    <input
                        type="text"
                        name="name"
                        value={inputValues.name}
                        onChange={handleChange}
                        placeholder='Name'
                        className='form-input'

                    />

                    <input
                        type="text"
                        name="initiative"
                        value={inputValues.initiative}
                        onChange={handleChange}
                        placeholder='Initiative'
                        className='form-input'
                    />

                    <input
                        type="text"
                        name="hp"
                        value={inputValues.hp}
                        onChange={handleChange}
                        placeholder='HP'
                        className='form-input'
                    />

                    <input
                        type="text"
                        name="ac"
                        value={inputValues.ac}
                        onChange={handleChange}
                        placeholder='AC'
                        className='form-input'
                    />

                    <Button type="submit" className='submit-btn rounded'>Create</Button>
                </form>
        </>
    )
}

export default FormBox;