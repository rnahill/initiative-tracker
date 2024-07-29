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
                        <p className='name'>{formData.name}</p>
                        <h5 className='pb-2 italic'>Initiative: {formData.initiative}</h5>
                        <h5 className='pb-2 italic'>{formData.ac} AC </h5>
                        
                    </div>
                    <div>
                         
                    </div>
                    <div className='hp-box border border-gray-600 rounded p-2'>
                        <p className='pb-2'>{hp} HP</p>
                        <form className='flex flex-row'>
                            <button className="mr-2" onClick={subtractHP}>-</button>
                            <input
                                type='text'
                                name="changeHp"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder='HP'
                                id="add-sub-input"
                                 />
                            <button className='ml-2' onClick={addHP}>+</button>
                        </form>
                    </div>
                    <div>

                    </div>
                    <div>
                        
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