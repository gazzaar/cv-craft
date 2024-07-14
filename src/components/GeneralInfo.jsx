import { useState } from 'react';
const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [headline, setHeadline] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <label htmlFor='name'>Full Name:</label>
      <input
        id='name'
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <label htmlFor='headline'>Headline</label>
      <input
        id='headline'
        type='text'
        value={headline}
        onChange={(event) => setHeadline(event.target.value)}
      ></input>
      <label htmlFor='email'>Email:</label>
      <input
        id='email'
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <label htmlFor='phone'>Phone number:</label>
      <input
        id='phone'
        type='tel'
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      ></input>
    </>
  );
};

export default GeneralInfo;
