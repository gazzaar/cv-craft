import '../styles/edit.css';
const GeneralInfo = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };
  return (
    <div>
      <div className='form'>
        <h1 className='header'> Personal Details</h1>
        <div>
          <label htmlFor='name'>Full Name:</label>
          <input
            id='name'
            placeholder='Full Name'
            type='text'
            value={personalInfo.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='headline'>Headline:</label>
          <input
            id='headline'
            type='text'
            placeholder='Ex: Back-end Dev'
            value={personalInfo.headline}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            placeholder='someone@mail.com'
            type='email'
            value={personalInfo.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='phone'>Phone number:</label>
          <input
            id='phone'
            type='tel'
            placeholder='Enter your phone number'
            value={personalInfo.phone}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input
            id='address'
            type='text'
            placeholder='Ex: City, Coutnry'
            value={personalInfo.address}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
