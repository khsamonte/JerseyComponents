import Jersey from "./components/Jersey";

function App() {
  return (
    <>
      <div className="sample-container">
        <h2>Samples</h2>
        <div className="jersey-sample-panels">
          <div>
            <div className="jersey-header">Plain</div>
            <div className="jersey-frame">
              <img
                src={Jersey.draw({
                  base: "e10000",
                  sleeve: "ffffff",
                  number: "ffffff",
                  squares: false,
                  stripes: false,
                  horizontal_stripes: false,
                  split: false,
                  shirt_type: "short_sleeves",
                  sleeve_detail: "000000",
                })}
                alt="Plain Jersey"
              />
            </div>
          </div>
          <div>
            <div className="jersey-header">Split</div>
            <div className="jersey-frame">
              <img
                src={Jersey.draw({
                  base: "b4eff8",
                  sleeve: "f6f5f5",
                  sleeve_detail: "97f8f6",
                  squares: false,
                  stripes: false,
                  horizontal_stripes: false,
                  split: true,
                  split_color: "f8f8f8",
                  shirt_type: "short_sleeves",
                  number: "ffffff",
                })}
                alt="Split Jersey"
              />
            </div>
          </div>
          <div>
            <div className="jersey-header">Horziontal Stripes</div>
            <div className="jersey-frame">
              <img
                src={Jersey.draw({
                  base: "ffffff",
                  sleeve: "ffffff",
                  sleeve_detail: "eb2f3d",
                  squares: false,
                  stripes: false,
                  horizontal_stripes: true,
                  horizontal_stripes_color: "005dab",
                  split: false,
                  shirt_type: "short_sleeves",
                  number: "ffffff",
                })}
                alt="Horizontal Stripes Jersey"
              />
            </div>
          </div>
          <div>
            <div className="jersey-header">Stripes</div>
            <div className="jersey-frame">
              <img
                src={Jersey.draw({
                  base: "1017da",
                  sleeve: "1017da",
                  sleeve_detail: "1017da",
                  squares: false,
                  stripes: true,
                  stripes_color: "b32919",
                  horizontal_stripes: false,
                  split: false,
                  shirt_type: "short_sleeves",
                  number: "000000",
                })}
                alt="Stripes Jersey"
              />
            </div>
          </div>
          <div>
            <div className="jersey-header">Squares</div>
            <div className="jersey-frame">
              <img
                src={Jersey.draw({
                  type: "squares",
                  base: "cb0b1e",
                  sleeve: "cb0b1e",
                  sleeve_detail: "ffffff",
                  squares: true,
                  squares_color: "ffffff",
                  stripes: false,
                  horizontal_stripes: false,
                  split: false,
                  shirt_type: "short_sleeves",
                  number: "000000",
                })}
                alt="Squares Jersey"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
