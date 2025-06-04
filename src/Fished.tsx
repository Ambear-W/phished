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
      <br />
      <hr />
      <br />
      <br />

      <div>
        <h2>How we Stole your Login</h2>
        <p className='pad'>
          At Georgia Tech, Single Sign-on is used so users do not have to repeatedly log into campus applications. As adversaries, we can leverage this by designing our phishing flow to mimic the SSO experience.
          This makes it appear as though users need to login pior to scheduling their meeting. Since this is not atypical, they are less likely to question the legitimacy of the SSO page.
        </p>
        <img className="sso" src={ sso } alt="Georgia Tech's SSO login page" />
        <p className='pad'>
          While the users "signs in", on the backend we are stealing their username and password. This can be done with the SEToolkit that uses a tunner to open the localhost connection to recevie the credientials by using
          nrgrok, which is a port fowarding tool.
        </p>

        <div className='sideRight'>
          <p>
            Here, we can see the nrgrok tool running.
          </p>
          <img className='sideImg' src={ nrgrok } alt="Nrgrok running on a terminal" />
        </div>

        <div className='sideRight'>
          <p>
            Here, we can see the SEToolKit running. This is where we can also see the tested username and password.
          </p>
          <img className='sideImg' src={ setool } alt="SEToolKit running, the username and password have been highlighted" />
        </div>
      </div>
      
      <br />
      <br />
      <hr />
      <br />
      <br />

      <div>
        <h2>But I have Two Factor Authenication!</h2>

        <div>
          <p>
            Good job! This is a great way to protect your account!
            <br />
            <br />
            However, there are times where someone can get pass these. Here, we focus on using a "Man-in-the-Middle" attack.
            <br />
            <br />
            Here, we are letting StingSync be the middle man. Since the user goes through the SSO page and gives us their login credientials, we are able to then
            send it to Passport where the user will get a notifcation on their phone and while we send the code back to StingSync to show on screen.
            <br />
            <br />
            From there, the user enters the code into their phone and then we are in!
            <br />
            <br />
            Now we are able to add our own two factor authenication and move into other Georgia Tech systems.
          </p>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <div>
        <h2>What happens now?</h2>
        <p>
          You would be redirected to a calendar to schedule time with Kevin, hiding the fact your credientials were stolen.
        </p>
      </div>
    </div>
    </>
  );
}

export default Fished;
