import React from 'react';

const CreatureBox = ({ formData }) => {
    return (
        <>
        <section className='d-flex flex-row justify-content-evenly p-3 m-4 border'>
            <div>
                <h4>Name:</h4>
                {formData.name}
            </div>
            <div>
                <h4>Initiative:</h4>
                {formData.initiative}
            </div>
            <div>
                <h4>HP:</h4>
                {formData.hp}
            </div>
            <div>
                <h4>AC:</h4>
                {formData.ac}
            </div>
        </section>
        </>
    );
};

export default CreatureBox;