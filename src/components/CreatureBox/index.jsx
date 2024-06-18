import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
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
            <div className='border'>
                <section className='d-flex flex-row justify-content-evenly p-3 m-4 form-box'>
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
                        {hp}
                        <form>
                            <button onClick={subtractHP}>-</button>
                            <input
                                type='text'
                                name="changeHp"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)} />
                            <button onClick={addHP}>+</button>
                        </form>
                    </div>
                    <div>

                    </div>
                    <div>
                        <h5>AC:</h5>
                        {formData.ac}
                    </div>
                    <button onClick={onDelete}>Delete</button>
                </section>
                <section className='d-flex flex-row justify-content-center'>
                    
                    {/* Conditions Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Conditions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    {/* Resistances Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Resistances
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    {/* Immunities Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Immunities
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    {/* Vulnerabilities Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Vulnerabilities
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </section>
            </div>
        </>
    );
};

export default CreatureBox;