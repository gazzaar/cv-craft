import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className='app'>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
