import { MdOutlinePhone } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import '../styles/preview.css';

const Preview = ({ personalInfo, educationInfo, experienceInfo }) => {
  const { name, headline, email, phone, address } = personalInfo;
  const { schoolName, degree, startDate, endDate, location } = educationInfo;
  return (
    <>
      <div className='preview'>
        <div className='personal-info'>
          <h1 className='name'>{name ? name : ''}</h1>
          <p className='headline'>{headline}</p>
          <div className='contact-info'>
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
    </>
  );
};
export default Preview;
