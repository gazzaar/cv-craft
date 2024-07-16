import '../styles/edit.css';
const Education = ({ educationInfo, setEducationInfo }) => {
  function handleChange(event) {
    const { id, value } = event.target;
    setEducationInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  }

  return (
    <div>
      <div className='form'>
        <h1 className='header'>Education</h1>
        <div>
          <label htmlFor='uniName'>UNI name:</label>
          <input
            id='uniName'
            placeholder='Enter school name'
            type='text'
            value={educationInfo.uniName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='degree'>Degree:</label>
          <input
            id='degree'
            type='text'
            placeholder='Enter Degree '
            value={educationInfo.degree}
            onChange={handleChange}
          ></input>
        </div>
        <div className='date-container'>
          <div>
            <label htmlFor='startDate'>Start Date:</label>
            <input
              id='startDate'
              placeholder='Enter start date'
              type='text'
              value={educationInfo.startDate}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label htmlFor='endDate'>End Date:</label>
            <input
              id='endDate'
              type='text'
              placeholder='Enter end data'
              value={educationInfo.endDate}
              onChange={handleChange}
            ></input>
          </div>
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
      </div>
    </div>
  );
};

export default Education;
