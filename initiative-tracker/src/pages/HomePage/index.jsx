import "./style.css";
import React, { useState } from 'react';
import FormBox from "../../components/FormBox"
import CreatureBox from '../../components/CreatureBox';

export default function HomePage() {

    const [formDataArray, setFormDataArray] = useState([]);

    const addFormData = (newFormData) => {
        setFormDataArray([...formDataArray, newFormData]);
      };


    return (
        <div>
            <h1>D&D Initative Tracker</h1>
            <FormBox addFormData={addFormData} />

            {formDataArray
            .sort((a, b) => b.initiative - a.initiative)
            .map((formData, index) => (
                <CreatureBox key={index} formData={formData} />
            ))}

        </div>
    )
}