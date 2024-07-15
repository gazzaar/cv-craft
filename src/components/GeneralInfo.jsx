import { useState } from 'react';
import { MdOutlinePhone } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import '../styles/general_info.css';
const GeneralInfo = () => {
  const [name, setName] = useState('Fathy Elgazzar');
  const [headline, setHeadline] = useState('Front-end Dev');
  const [email, setEmail] = useState('mail@mail.com');
  const [phone, setPhone] = useState('+012345678999');
  const [address, setAddress] = useState('Berlin, Germany');

  return (
    <div className='container'>
      <div className='form'>
        <h1 className='header-general-info'> Personal Details</h1>
        <div>
          <label htmlFor='name'>Full Name:</label>
          <input
            id='name'
            placeholder='Full Name'
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='headline'>Headline:</label>
          <input
            id='headline'
            type='text'
            placeholder='Ex: Back-end Dev'
            value={headline}
            onChange={(event) => setHeadline(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            placeholder='someone@mail.com'
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='phone'>Phone number:</label>
          <input
            id='phone'
            type='tel'
            placeholder='Enter your phone number'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input
            id='address'
            type='text'
            placeholder='Ex: City, Coutnry'
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
        </div>
      </div>
      <div className='preview'>
        <h1 className='name'>{name ? name : ''}</h1>
        <p className='headline'>{headline}</p>
        <div className='personal-info'>
          <p className='email'>
            {email ? (
              <>
                {' '}
                <MdMailOutline /> {email}{' '}
              </>
            ) : (
              ''
            )}
          </p>
          <p className='phone-number'>
            {phone ? (
              <>
                {' '}
                <MdOutlinePhone /> {phone}{' '}
              </>
            ) : (
              ''
            )}
          </p>
          <p className='address'>
            {address ? (
              <>
                <MdOutlineLocationOn /> {address}
              </>
            ) : (
              ''
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
