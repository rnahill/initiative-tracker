import React from 'react';

const CreatureBox = ({ formData }) => {
  return (
    <div>
      <h2>Form Data:</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Initiative:</strong> {formData.initiative}</p>
      <p><strong>HP:</strong> {formData.hp}</p>
      <p><strong>AC:</strong> {formData.ac}</p>
    </div>
  );
};

export default CreatureBox;