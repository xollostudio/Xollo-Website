// components/Section.js
import React from 'react';
import Card from './card';

const Section = ({ title, cards, sectionDescription }) => {
  return (
    <div className="py-20">
      <div className="flex h-[60vh] justify-between font-['Archivo-thin']">
        <div className='xl:w-1/2 w-full h-full flex items-start justify-start mt-16'><h2 className="   xl:text-8xl text-xl mb-4">{title}</h2></div>
        <div className='xl:w-1/2 w-full h-full flex flex-col items-end justify-end p-10'>
        <div className="  text-xl w-full  mb-4"><p className='w-2/3'>{sectionDescription}</p></div>
        <button className='font-semibold flex items-start w-full'>View our Projects</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Section;
