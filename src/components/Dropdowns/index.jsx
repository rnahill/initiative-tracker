import Select from "react-dropdown-select";
import React, { useState } from "react"; 3
import "./style.css"

export default function Dropdowns() {
    const [conditions, setConditions] = useState([]);
    const [resistances, setResistances] = useState([]);
    const [immunities, setImmunities] = useState([]);
    const [vulnerabilities, setVulnerabilities] = useState([]);

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

    const handleConditionsChange = (values) => {
        setConditions(values.map(v => v.value));
    };

    const handleResistancesChange = (values) => {
        setResistances(values.map(v => v.value));
    };

    const handleImmunitiesChange = (values) => {
        setImmunities(values.map(v => v.value));
    };

    const handleVulnerabilitiesChange = (values) => {
        setVulnerabilities(values.map(v => v.value));
    };

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <h5 style={{ marginLeft: "10%" }}>Conditions</h5>
                    <Select
                        options={options[0].conditions.map((item) => ({ label: item, value: item }))}
                        onChange={handleConditionsChange}
                        className="dropdown"
                        closeOnClickInput="true"
                        searchable="true"
                    />
                    <p>Selected Conditions: {conditions.join(', ')}</p>
                    <h5 style={{ marginLeft: "10%" }}>Damage Resistances</h5>
                    <Select
                        options={options[1].resistances.map((item) => ({ label: item, value: item }))}
                        onChange={handleResistancesChange}
                        className="dropdown"
                        closeOnClickInput="true"
                        searchable="true"
                    />
                    <p>Selected Resistances: {resistances.join(', ')}</p>
                </div>
                <div className="col-3">
                    <h5 style={{ marginLeft: "10%" }}>Damage Immunities</h5>
                    <Select
                        options={options[2].immunities.map((item) => ({ label: item, value: item }))}
                        onChange={handleImmunitiesChange}
                        className="dropdown"
                        closeOnClickInput="true"
                        searchable="true"
                    />
                     <p>Selected Immunities: {immunities.join(', ')}</p>
                    <h5 style={{ marginLeft: "10%" }}>Damage Vulnerabilities</h5>
                    <Select
                        options={options[3].vulnerabilities.map((item) => ({ label: item, value: item }))}
                        onChange={handleVulnerabilitiesChange}
                        className="dropdown"
                        closeOnClickInput="true"
                        searchable="true"
                    />
                    <p>Selected Vulnerabilities: {vulnerabilities.join(', ')}</p>
                    {/* Look at bootstrap close button */}
                </div>
            </div>
        </>
    );
}