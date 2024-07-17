import { MdOutlinePhone } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import '../styles/preview.css';

const Info = ({
  institution,
  className,
  position,
  rule,
  degree,
  dateRange,
  location,
  summary,
}) => {
  return (
    <>
      <div className={className}>
        <h2 className='section-header'>
          {className === 'education-info' ? 'Education' : 'Experience'}
        </h2>
        <h3 className='institution-name'>{institution ? institution : ''}</h3>
        <p className='rule'>{rule ? rule : position}</p>
        <p className='date'>{dateRange ? dateRange : ''} </p>
        <p className={degree ? 'location ' : 'align-location'}>
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
    </>
  );
};

const Preview = ({ personalInfo, educationInfo, experienceInfo }) => {
  const { name, headline, email, phone, address } = personalInfo;
  const { institution, areaOfStudy, degree, dateRange, location, summary } =
    educationInfo;
  const { company, position, companyDateRange, jobSummary, jobLocation } =
    experienceInfo;
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
        <Info
          className='education-info'
          institution={institution}
          degree={degree}
          dateRange={dateRange}
          summary={summary}
          location={location}
          rule={areaOfStudy}
        />
        <Info
          className='experience-info'
          institution={company}
          dateRange={companyDateRange}
          summary={jobSummary}
          location={jobLocation}
          rule={position}
        />
      </div>
    </>
  );
};
export default Preview;
