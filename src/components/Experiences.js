import React, { useState, setActiveTab } from 'react';

const Experience = () => {
  const experienceData = [
    {
      company: 'Royal Supply',
      position: 'IT Technician',
      dayRange: 'Jan 2020 - Dec 2022',
      type: 'Full-time',
      context: ['Worked on managing software and database system to meet the busines\'s need '],
    },
    {
      company: 'Florida Southwestern State College',
      position: 'Academic Tutor',
      dayRange: 'Jan 2020 - Dec 2022',
      context: ['Worked with students on different subjects: Calculus, Physics for Engineering, Chemistry.'],
    },
    {
      company: 'University of Central Florida',
      position: 'Mathematic Learning Assistant - Academic Tutor',
      dayRange: 'Aug 2023 - Present',
      context: ['Worked with students on different subjects: Chemistry and Mathematics.'],
    },
    {
      company: 'JP Morgan & Chase',
      position: 'Software Engineer Intern',
      dayRange: 'Jun 2023 - Aug 2023',
      context: ['Analyzed and built an enterprise-scaled data ingestion.',
                'Provisioning millions of record to internal reporting clients. ',
              ]
},
    // Add more experience data as needed
  ];
  const [activeTab, setActiveTab] = useState(experienceData.length - 1);
  return (
    <div className="experience">
      <h1 id='h1-exp'>Experience</h1>
      <div className="tabs">
        <div className="tab-buttons">
          {experienceData.map((tab, index) => (
           <button
           key={index}
           onClick={() => setActiveTab(index)}
           className={index === activeTab ? 'active' : ''}
         >
           {tab.company}
           <span className="subtitle">({tab.dayRange})</span>
         </button>
          ))}
        </div>
        <div className="tab-content">
          <h2>{experienceData[activeTab].company}</h2>
          <p>{experienceData[activeTab].dayRange}</p>
          <p><strong>{experienceData[activeTab].position}</strong> {experienceData[activeTab].timeFrame}</p>
          <div className="context">
            <ul>
              {experienceData[activeTab].context.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
