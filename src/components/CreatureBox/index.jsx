import React, { useState } from 'react';
import Dropdowns from '../Dropdowns';
import { Button }from "@material-tailwind/react";
import "./style.css"

const CreatureBox = ({ formData, onDelete }) => {

    let [hp, setHp] = useState(formData.hp);
    const [inputValue, setInputValue] = useState("");

    const addHP = (e) => {
        e.preventDefault();
        setHp(hp + Number(inputValue));
        setInputValue("");
    };

    const subtractHP = (e) => {
        e.preventDefault();
        setHp(hp - Number(inputValue));
        setInputValue("");
    };




    return (
        <>
            <div className='grid border border-gray-600 rounded creature-box'>
                <section className='border border-gray-600 rounded space-x-20 stat-box'>
                    <div>
                        <h5>Name:</h5>
                        {formData.name}
                    </div>
                    <div>
                        <h5>Initiative:</h5>
                        {formData.initiative}
                    </div>
                    <div className='hp-box'>
                        <h5>HP:</h5>
                        {hp}
                        <form className='flex flex-row'>
                            <button onClick={subtractHP}>-</button>
                            <input
                                type='text'
                                name="changeHp"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                id="add-sub-input"
                                 />
                            <button onClick={addHP}>+</button>
                        </form>
                    </div>
                    <div>

                    </div>
                    <div>
                        <h5>AC:</h5>
                        {formData.ac}
                    </div>
                    <Button onClick={onDelete}>Delete</Button>
                </section>
                <section>
                    <Dropdowns />
                </section>
            </div>
        </>
    );
};

export default CreatureBox;