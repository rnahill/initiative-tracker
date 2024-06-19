import Select from "react-dropdown-select";
import React, { useState } from "react";

export default function Dropdowns() {
    const [conditions, setConditions] = useState([]);
    const [resistances, setResistances] = useState([]);
    const [immunities, setImmunities] = useState([]);
    const [vulnerabilities, setVulnerabilities] = useState([]);

    const options = [
        {
            conditions: ["blinded", "charmed", "deafened", "frightened", "grappled", "incapacitated", "invisible", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned", "unconscious"  ]
        },
        {
            resistances: ["acid", "fire"]
        },
        {
            immunities: ["acid", "fire"]
        },
        {
            vulnerabilities: ["acid", "fire"]
        }
    ];

    const handleConditionsChange = (values) => {
        setConditions(values);
    };

    const handleResistancesChange = (values) => {
        setResistances(values);
    };

    const handleImmunitiesChange = (values) => {
        setImmunities(values);
    };

    const handleVulnerabilitiesChange = (values) => {
        setVulnerabilities(values);
    };

    return (
        <>
            <Select 
                options={options[0].conditions.map((item) => ({ label: item, value: item }))}
                onChange={handleConditionsChange}
            />
            <Select 
                options={options[1].resistances.map((item) => ({ label: item, value: item }))}
                onChange={handleResistancesChange}
            />
            <Select 
                options={options[2].immunities.map((item) => ({ label: item, value: item }))}
                onChange={handleImmunitiesChange}
            />
            <Select 
                options={options[3].vulnerabilities.map((item) => ({ label: item, value: item }))}
                onChange={handleVulnerabilitiesChange}
            />
        </>
    );
}