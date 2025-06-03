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

    <div className="center">
        <h2>The NEW way of finding the time for all the things you gotta do</h2>
        <div>
            We are currently in the testing phase, but we'll keep you updated!
        </div>
    </div>
    </>
  );
}

export default home;
