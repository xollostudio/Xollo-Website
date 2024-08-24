// components/Section.js
import React from 'react';
import Card from './Card';

const Section = ({ title, cards }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Section;
