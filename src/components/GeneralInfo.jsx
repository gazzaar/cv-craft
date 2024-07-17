import '../styles/edit.css';
import { MdToggleOn } from 'react-icons/md';
import { MdToggleOff } from 'react-icons/md';
const GeneralInfo = ({
  personalInfo,
  setPersonalInfo,
  isActive,
  setIsActive,
}) => {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };
  return (
    <div className='form'>
      <div className='form-header'>
        <h1 className='header'> Personal Details</h1>
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
