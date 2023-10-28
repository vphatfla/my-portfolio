import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: 'Internship 1',
      content: 'Content for Internship 1',
    },
    {
      title: 'Internship 2',
      content: 'Content for Internship 2',
    },
    {
      title: 'Job Description 1',
      content: 'Content for Job Description 1',
    },
    {
      title: 'Job Description 2',
      content: 'Content for Job Description 2',
    },
  ];

  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="tabs">
        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={index === activeTab ? 'active' : ''}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabData[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Experience;
