import '../styles/edit.css';
const Education = ({ educationInfo, setEducationInfo }) => {
  function handleChange(event) {
    const { id, value } = event.target;
    setEducationInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  }

  return (
    <div className='form'>
      <h1 className='header'>Education</h1>
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
  );
};

export default Education;
