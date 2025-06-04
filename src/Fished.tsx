import fish from './assets/fish.svg';
import sso from './assets/sso.png';
import nrgrok from './assets/phish_other_terminal.jpg';
import setool from './assets/phish_terminal_w_info.jpg';

function Fished() {
  // want to render an h1 element =
  return (
    <>
    <div className="center">
      <div className="fish-container adaptive">
        <h1 className="fish-text adaptive">You've Been Phished</h1>
        <img className="fish-icon adaptive" src={fish} alt="Fish" />
      </div>
      <div>
        <p>
          Uh oh! You clicked a link you were not supposed to! Lucky for you that this isn't the real deal! But if it was, what would have happened? Well, you might not notice it right away,
          but you would have given us your log in details!
          <br />
          <br />
          So what would have happened?
        </p>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <p>
          At Georgia Tech, Single Sign-on is used so users do not have to repeatedly log into campus applications. As adversaries, we can leverage this by designing our phishing flow to mimic the SSO experience.
          This makes it appear as though users need to login pior to scheduling their meeting. Since this is not atypical, they are less likely to question the legitimacy of the SSO page.
        </p>
        <img className="sso" src={ sso } alt="Georgia Tech's SSO login page" />
        <p>
          While the users "signs in", on the backend we are stealing their username and password. This can be done with the SEToolkit that uses a tunner to open the localhost connection to recevie the credientials by using
          nrgrok, which is a port fowarding tool.
        </p>
        <div className='sideRight'>
          <p>
            Here, we can see the nrgrok tool running.
          </p>
          <img className='sideImg' src={ nrgrok } alt="Nrgrok running on a terminal" />
        </div>
        <br />
        <hr />
        <br />
        <div className='sideRight'>
          <p>
            Here, we can see the SEToolKit running. This is where we can also see the tested username and password.
          </p>
          <img className='sideImg' src={ setool } alt="SEToolKit running, the username and password have been highlighted" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Fished;
