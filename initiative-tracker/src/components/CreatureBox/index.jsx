import React from 'react';
import "./style.css"

const CreatureBox = ({ formData }) => {
    return (
        <>
        <section className='d-flex flex-row justify-content-evenly p-3 m-4 border form-box'>
            <div>
                <h5>Name:</h5>
                {formData.name}
            </div>
            <div>
                <h5>Initiative:</h5>
                {formData.initiative}
            </div>
            <div>
                <h5>HP:</h5>
                {formData.hp}
            </div>
            <div>
                <h5>AC:</h5>
                {formData.ac}
            </div>
        <button>Delete</button>
        </section>
        </>
    );
};

export default CreatureBox;