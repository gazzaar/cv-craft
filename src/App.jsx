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
    uniName: 'MIT',
    degree: 'Bachelor',
    startDate: '23/4/2020',
    endDate: '1/7/2025',
    location: 'Floridda',
  });
  const [experienceInfo, setExperienceInfo] = useState({});
  return (
    <div className='app container'>
      <div className='edit-section'>
        <GeneralInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Education
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <Experience setExperienceInfo={setExperienceInfo} />
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
