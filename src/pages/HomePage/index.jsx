import "./style.css";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormBox from "../../components/FormBox"
import CreatureBox from '../../components/CreatureBox';

export default function HomePage() {

    const [formDataArray, setFormDataArray] = useState([]);

    const addFormData = (newFormData) => {
        setFormDataArray([...formDataArray, newFormData]);
    };

    const deleteFormData = (dataToDelete) => {
        setFormDataArray(formDataArray.filter((_, index) => index != dataToDelete));
    }


    return (
        <div>
            <div className=" d-flex justify-content-end">
                <button className="howToBtn">
                    <Link to="/HowTo" style={{ textDecoration: 'none', color: 'black' }}>How To Use</Link>
                </button>
            </div>
            <h1>D&D Initative Tracker</h1>
            <FormBox addFormData={addFormData} />

            {formDataArray
                .sort((a, b) => b.initiative - a.initiative)
                .map((formData, index) => (
                    <CreatureBox
                        key={index}
                        formData={formData}
                        onDelete={() => deleteFormData(index)}
                    />
                ))}

        </div>
    )
}