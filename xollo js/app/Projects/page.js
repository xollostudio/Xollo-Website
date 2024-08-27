// pages/page.js
import React from 'react';
import Section from '../components/cardSection';
import sectionsData from '../Components/OurProjectData'; // Importing the data from the external file

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      {sectionsData.map((section, index) => (
        <Section 
          key={index} 
          title={section.title} 
          sectionDescription={section.sectionDescription} 
          cards={section.cards} 
        />
      ))}
    </div>
  );
}
