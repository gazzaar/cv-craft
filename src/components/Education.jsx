import '../styles/edit.css';
import { MdToggleOn } from 'react-icons/md';
import { MdToggleOff } from 'react-icons/md';
const Education = ({
  educationInfo,
  setEducationInfo,
  isActive,
  setIsActive,
}) => {
  function handleChange(event) {
    const { id, value } = event.target;
    setEducationInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  }

  return (
    <div className='form'>
      <div className='form-header'>
        <h1 className='header'>Education</h1>
        {isActive ? (
          <MdToggleOff
            onClick={() => setIsActive(!isActive)}
            style={{ fontSize: '3rem', cursor: 'pointer' }}
          />
        ) : (
          <MdToggleOn
            onClick={() => setIsActive(!isActive)}
            style={{ fontSize: '3rem', cursor: 'pointer' }}
          />
        )}
      </div>
      <div className={isActive ? 'toggle__form show' : 'toggle__form hide'}>
        <div>
          <label htmlFor='institution'>Institution:</label>
          <input
            id='institution'
            type='text'
            value={educationInfo.institution}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='areaOfStudy'>Area for study:</label>
          <input
            id='areaOfStudy'
            type='text'
            value={educationInfo.areaOfStudy}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='degree'>Degree:</label>
          <input
            id='degree'
            type='text'
            value={educationInfo.degree}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor='dateRange'>Date or date range</label>
          <input
            id='dateRange'
            type='text'
            placeholder='March 2020 - present'
            value={educationInfo.dateRange}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='location'>Location:</label>
          <input
            id='location'
            type='text'
            placeholder='Enter Location'
            value={educationInfo.location}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='summary'>Summary:</label>
          <textarea
            id='summary'
            type='text'
            placeholder='summary'
            value={educationInfo.summary}
            onChange={handleChange}
          >
            {educationInfo.summary}{' '}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default Education;
