// components/Card.js
import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 flex items-center justify-center h-64">
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

export default Card;
