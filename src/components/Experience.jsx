import '../styles/edit.css';
import { MdToggleOn } from 'react-icons/md';
import { MdToggleOff } from 'react-icons/md';
const Experience = ({
  experienceInfo,
  setExperienceInfo,
  isActive,
  setIsActive,
}) => {
  function handleChange(event) {
    const { id, value } = event.target;
    setExperienceInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  }

  return (
    <div className='form'>
      <div className='form-header'>
        <h1 className='header'>Experience </h1>
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
          <label htmlFor='company'>Company:</label>
          <input
            id='company'
            type='text'
            value={experienceInfo.company}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='position'>Position:</label>
          <input
            id='position'
            type='text'
            value={experienceInfo.position}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor='companyDateRange'>Date or date range</label>
          <input
            id='companyDateRange'
            type='text'
            placeholder='March 2020 - present'
            value={experienceInfo.companyDateRange}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='jobLocation'>Location:</label>
          <input
            id='jobLocation'
            type='text'
            placeholder='Enter Location'
            value={experienceInfo.jobLocation}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='jobSummary'>Summary:</label>
          <textarea
            id='jobSummary'
            type='text'
            placeholder='summary'
            value={experienceInfo.jobSummary}
            onChange={handleChange}
          >
            {experienceInfo.jobSummary}{' '}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default Experience;
