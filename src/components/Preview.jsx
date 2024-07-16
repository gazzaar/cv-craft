import { MdOutlinePhone } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import '../styles/preview.css';

const Preview = ({ personalInfo, educationInfo, experienceInfo }) => {
  const { name, headline, email, phone, address } = personalInfo;
  const { institution, areaOfStudy, degree, dateRange, location, summary } =
    educationInfo;
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
        <div className='education-info'>
          <h2 className='education-header'>Education</h2>
          <h3 className='institution-name'>{institution ? institution : ''}</h3>
          <p className='area-of-study'>{areaOfStudy ? areaOfStudy : ''}</p>
          <p className='date'>{dateRange ? dateRange : ''} </p>
          <p className='location'>
            {location ? (
              <>
                <MdOutlineLocationOn /> {location}
              </>
            ) : (
              ''
            )}
          </p>
          <p className='degree'>{degree ? degree : ''} </p>
          {summary ? (
            <ul className='summary'>
              <li>{summary ? summary : ''}</li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};
export default Preview;
