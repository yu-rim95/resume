import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const Main = () => {
  const sections = [
    { content: <Section1 /> },
    { content: <Section2 /> }, 
    { content: <Section3 /> },
    { content: <Section4 /> },
    { content: <Section5 /> },
  ];

  return (
    <>
      <div>
          {sections.map((section, index) => (
            <sections
              key={index}
              className={`section${index + 1}`}
              style={{ height: section.height || 'auto' }}
            >
              <div className="section-content">{section.content}</div>
            </sections>
          ))}
      </div>
    </>
  );
};

export default Main;
