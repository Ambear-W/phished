import fish from './assets/fish.svg';

function Fished() {
  // want to render an h1 element =
  return (
    <>
    <div className="fish-container adaptive">
      <h1 className="fish-text adaptive">You've Been Phished</h1>
      <img className="fish-icon adaptive" src={fish} alt="Fish" />
    </div>
    </>
  );
}

export default Fished;
