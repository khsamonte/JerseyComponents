import Jersey from "./components/Jersey";

import { jerseySampleAPI, jerseyAPI } from "./api/api";

// This is the Samples panel that displays the five different types of jersey patterns.
const JerseySamplePanel = () => {
  const renderJerseyFrames = () =>
    jerseySampleAPI.map((jersey, idx) => {
      const jerseySrc = Jersey.draw(jersey);

      return (
        <div key={idx} className="jersey-frame">
          {jersey.hasOwnProperty("base") ? (
            <img src={jerseySrc} alt="Jersey" />
          ) : (
            <></>
          )}
        </div>
      );
    });

  let jerseyHeaders = [
    "Plain",
    "Split",
    "Horizontal Stripes",
    "Stripes",
    "Squares",
  ];

  return (
    <>
      <h2>Samples</h2>
      <div className="jersey-sample-panels">
        {jerseyHeaders.map((jerseyHeader) => (
          <div className="jersey-header">{jerseyHeader}</div>
        ))}
        {renderJerseyFrames()}
      </div>
    </>
  );
};

// The panel per team
const JerseyTeamPanel = ({ jerseyDetails }) => {
  const renderJerseyFrames = () =>
    jerseyDetails.jerseys.map((jersey, idx) => {
      // Assigning the properties to the draw() function
      const jerseySrc = Jersey.draw(jersey);

      return (
        <div key={idx} className="jersey-frame">
          {jersey.hasOwnProperty("base") ? (
            <img src={jerseySrc} alt="Jersey" />
          ) : (
            <></>
          )}
        </div>
      );
    });

  let jerseyHeaders = ["Home", "Away", "Third"];
  return (
    <>
      <h2>{jerseyDetails.team}</h2>
      <div className="jersey-panels">
        {jerseyHeaders.map((jerseyHeader) => (
          <div className="jersey-header">{jerseyHeader}</div>
        ))}
        {renderJerseyFrames()}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <div className="sample-container">
        <JerseySamplePanel />
      </div>
      <div className="main-container">
        {jerseyAPI.map((jerseyDetails, idx) => (
          <JerseyTeamPanel key={idx} jerseyDetails={jerseyDetails} />
        ))}
      </div>
    </>
  );
}

export default App;
