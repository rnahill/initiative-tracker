import "./style.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import FormBox from "../../components/FormBox"
import CreatureBox from '../../components/CreatureBox';

export default function HomePage() {

    // Styling
    const style = {
        height: "100vh",
        width: "85%",
        backgroundColor: "#8A739A",
        position: "relative",
        left: "8%"

    }


    // To add and delete form data
    const [formDataArray, setFormDataArray] = useState([]);

    const addFormData = (newFormData) => {
        setFormDataArray([...formDataArray, newFormData]);
    };

    const deleteFormData = (dataToDelete) => {
        setFormDataArray(formDataArray.filter((_, index) => index != dataToDelete));
    }


    // To handle the offcanvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div style={style}>
            <div className=" d-flex justify-content-end">
                {/* <button className="howToBtn">
                    <Link to="/HowTo" style={{ textDecoration: 'none', color: 'black' }}>How To Use</Link>
                </button> */}
                <button className="howToBtn rounded" onClick={handleShow}>
                    How To Use
                </button>

                <Offcanvas show={show} onHide={handleClose} placement="end" className="offCanvas">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>How To Use</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
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