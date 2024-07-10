import React, { useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Chip,
    Checkbox
} from "@material-tailwind/react";
import "./style.css"

export default function Dropdowns() {


    //For dismissable chips
    // const [open, setOpen] = React.useState(true);


    const [selectedItems, setSelectedItems] = useState([]);

    // const [conditions, setConditions] = useState([]);
    // const [resistances, setResistances] = useState([]);
    // const [immunities, setImmunities] = useState([]);
    // const [vulnerabilities, setVulnerabilities] = useState([]);

    const options = [
        {
            conditions: ["blinded", "charmed", "deafened", "frightened", "grappled", "incapacitated", "invisible", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned", "unconscious"]
        },
        {
            resistances: ["piercing", "bludgeoning", "slashing", "cold", "fire", "lightning", "thunder", "poison", "acid", "necrotic", "radiant", "force", "psychic"]
        },
        {
            immunities: ["piercing", "bludgeoning", "slashing", "cold", "fire", "lightning", "thunder", "poison", "acid", "necrotic", "radiant", "force", "psychic"]
        },
        {
            vulnerabilities: ["piercing", "bludgeoning", "slashing", "cold", "fire", "lightning", "thunder", "poison", "acid", "necrotic", "radiant", "force", "psychic"]
        }
    ];


    const conditions = options[0].conditions;
    const resistances = options[1].resistances;
    const immunities = options[2].immunities;
    const vulnerabilities = options[3].vulnerabilities;

    const handleCheckboxChange = (condition) => {
        setSelectedItems((prev) =>
            prev.includes(condition)
                ? prev.filter((item) => item !== condition)
                : [...prev, condition]
        );
    };

    // const handleConditionsChange = (values) => {
    //     setConditions(values.map(v => v.value));
    //     // setOpen(true);
    // };

    // const handleResistancesChange = (values) => {
    //     setResistances(values.map(v => v.value));
    //     // setOpen(true);
    // };

    // const handleImmunitiesChange = (values) => {
    //     setImmunities(values.map(v => v.value));
    //     // setOpen(true);
    // };

    // const handleVulnerabilitiesChange = (values) => {
    //     setVulnerabilities(values.map(v => v.value));
    //     // setOpen(true);
    // };

    return (
        <>
            <div>

                <section>

                {/* Conditions */}
                <div>
                    <Menu
                        dismiss={{
                            itemPress: false,
                        }}
                    >
                        <MenuHandler>
                            <Button>Conditions</Button>
                        </MenuHandler>
                        <MenuList>
                            {conditions.map((condition) => (
                                <MenuItem key={condition} className="p-0">
                                    <label
                                        htmlFor={condition}
                                        className="flex cursor-pointer items-center gap-2 p-2"
                                    >
                                        <Checkbox
                                            ripple={false}
                                            id={condition}
                                            containerProps={{ className: "p-0" }}
                                            className="hover:before:content-none"
                                            onChange={() => handleCheckboxChange(condition)}
                                        />
                                        {condition}
                                    </label>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>


                {/* Resistances */}
                <div>
                    <Menu
                        dismiss={{
                            itemPress: false,
                        }}
                    >
                        <MenuHandler>
                            <Button>Resistances</Button>
                        </MenuHandler>
                        <MenuList>
                            {resistances.map((resistance) => (
                                <MenuItem key={resistance} className="p-0">
                                    <label
                                        htmlFor={resistance}
                                        className="flex cursor-pointer items-center gap-2 p-2"
                                    >
                                        <Checkbox
                                            ripple={false}
                                            id={resistance}
                                            containerProps={{ className: "p-0" }}
                                            className="hover:before:content-none"
                                            onChange={() => handleCheckboxChange(condition)}
                                        />
                                        {resistance}
                                    </label>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>


                {/* Immunities */}
                <div>

                <Menu
                        dismiss={{
                            itemPress: false,
                        }}
                    >
                        <MenuHandler>
                            <Button>Immunities</Button>
                        </MenuHandler>
                        <MenuList>
                            {immunities.map((immunity) => (
                                <MenuItem key={immunity} className="p-0">
                                    <label
                                        htmlFor={immunity}
                                        className="flex cursor-pointer items-center gap-2 p-2"
                                    >
                                        <Checkbox
                                            ripple={false}
                                            id={immunity}
                                            containerProps={{ className: "p-0" }}
                                            className="hover:before:content-none"
                                            onChange={() => handleCheckboxChange(condition)}
                                        />
                                        {immunity}
                                    </label>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>

                </div>

                
                {/* Vulnerabilities */}
                <div>

                <Menu
                        dismiss={{
                            itemPress: false,
                        }}
                    >
                        <MenuHandler>
                            <Button>Vulnerabilities</Button>
                        </MenuHandler>
                        <MenuList>
                            {vulnerabilities.map((vulnerability) => (
                                <MenuItem key={vulnerability} className="p-0">
                                    <label
                                        htmlFor={vulnerability}
                                        className="flex cursor-pointer items-center gap-2 p-2"
                                    >
                                        <Checkbox
                                            ripple={false}
                                            id={vulnerability}
                                            containerProps={{ className: "p-0" }}
                                            className="hover:before:content-none"
                                            onChange={() => handleCheckboxChange(condition)}
                                        />
                                        {vulnerability}
                                    </label>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>

                </div>

                </section>

            </div>
        </>
    );
}