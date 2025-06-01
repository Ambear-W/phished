import fish from './assets/fish.svg';

function Fished() {
  // want to render an h1 element =
  return (
    <>
    <div className="center">
      <div className="fish-container adaptive">
        <h1 className="fish-text adaptive">You've Been Phished</h1>
        <img className="fish-icon adaptive" src={fish} alt="Fish" />
      </div>
      <p>
        Uh oh! You clicked a link you were supposed to! Lucky for you that this isn't the real deal! But if it was, what would have happened? Well, you might not notice it right away,
        but you would have given us your log in details!
        <br />
        <br />
        Read more below:
      </p>
    </div>
    </>
  );
}

export default Fished;
