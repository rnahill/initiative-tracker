import "./style.css";
import React, { useState } from 'react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
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

    // For how-to drawer
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);


    // To add and delete form data
    const [formDataArray, setFormDataArray] = useState([]);

    const addFormData = (newFormData) => {
        setFormDataArray([...formDataArray, newFormData]);
    };

    const deleteFormData = (dataToDelete) => {
        setFormDataArray(formDataArray.filter((_, index) => index != dataToDelete));
    }




    return (
        <div style={style}>
            <div className="flex justify-end">
                {/* <button className="howToBtn">
                    <Link to="/HowTo" style={{ textDecoration: 'none', color: 'black' }}>How To Use</Link>
                </button> */}

                <React.Fragment>
                    <Button onClick={openDrawer} className="how-to-btn rounded">How To Use</Button>
                    <Drawer open={open} onClose={closeDrawer} className="p-4 drawer">
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="indigo-50">
                                How To Use
                            </Typography>
                            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                        <Typography  className="mb-8 pr-4 font-normal">
                            <li>
                            Enter the name of the creature into the first form.
                            </li>
                            <br />
                            <li>
                            Enter the initiative of the creature into the second form.
                            </li>
                            <br />
                            <li>
                            Optionally, enter the HP of the creature into the third form.
                            </li>
                            <br />
                            <li>
                            Optionally, enter the AC of the creature into the fourth form.
                            </li>
                            <br />
                            <li>
                            Click the "CREATE" button.
                            </li>
                            <br />
                            <li>
                            The tracker will automatically organize the creatures in order by initiative.
                            </li>
                            <br />
                            <li>
                            After you have created a creature, choose any conditions, resistances, immunities, or vulnerabilities that the creature may have.
                            </li>
                            <br />
                            <li>
                            Add or subtract HP as needed.
                            </li>
                            <br />
                        </Typography>
                    </Drawer>
                </React.Fragment>



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