import './home.css';
import meeting from './images/meeting.svg';
import Nav from '../../components/header/navbar'


function home() {
  // want to render an h1 element =
  return (
    <>
    <Nav />
    <div className='header'>
      <div className='headerLeft'>
        <h1>Ready for a new way to Sync?</h1>
        <div>
            Welcome to StingSync, a GA Tech way of connecting with your peers
        </div>
      </div>
      <img className="meetingImg" src={ meeting } alt="Group of friends talking" />
    </div>
    </>
  );
}

export default home;
