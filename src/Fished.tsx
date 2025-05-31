import fish from './assets/fish.svg';

function Fished() {
  // want to render an h1 element =
  return (
    <>
    <div className="fish-container">
      <h1 className="fish-text">You've Been Phished</h1>
      <img className="fish-icon" src={fish} alt="Fish" />
    </div>
    </>
  );
}

export default Fished;
