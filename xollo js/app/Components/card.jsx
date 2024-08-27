// components/Card.js
import React from 'react';

const Card = ({ title }) => {
  return (
    <>
      <div className='flex flex-col'>
        <div className="bg-gray-200 mx-3 rounded-2xl p-4 flex items-center justify-center h-[619px] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-300 duration-300 ease-in-out">
          {/* Add your card content here */}
        </div>
        <p className="text-gray-500 m-3 ">{title}</p>
      </div>
    </>
  );
};

export default Card;
