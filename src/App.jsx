import './styles/App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Fathy Elgazzar',
    headline: 'Front-end Dev',
    email: 'Something@mail.com',
    phone: '+0123456789',
    address: 'Berlin, Germany',
  });
  const [educationInfo, setEducationInfo] = useState({
    institution: 'MIT',
    areaOfStudy: 'Computer Science',
    degree: 'Bachelor',
    dateRange: 'Sep 2021 - Jun 2025',
    location: 'Floridda',
    summary:
      'In-depth coursework in algorithms, data structures, software engineering, and database systems.',
  });
  const [experienceInfo, setExperienceInfo] = useState({
    company: 'Apple',
    position: 'Software Engineer',
    companyDateRange: 'Sep 2023 - Present',
    jobLocation: 'Silicon Vally',
    jobSummary:
      'Designed, developed, and maintained web applications using technologies such as React, Node.js, and Express.',
  });
  const [activePersonalForm, setActivePersonalForm] = useState(true);
  const [activeEduForm, setEduActiveForm] = useState(false);
  const [activeExForm, setExActiveForm] = useState(false);
  return (
    <div className='app container'>
      <div className='edit-section'>
        <GeneralInfo
          isActive={activePersonalForm}
          setIsActive={setActivePersonalForm}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Education
          isActive={activeEduForm}
          setIsActive={setEduActiveForm}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <Experience
          isActive={activeExForm}
          setIsActive={setExActiveForm}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
      </div>
      <div className='preview'>
        <Preview
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
