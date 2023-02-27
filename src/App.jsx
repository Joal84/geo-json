import { useState } from "react";
import osmtogeojson from "osmtogeojson";

import Title from "./components/title";
import Bbox from "./components/bbox";
import Result from "./components/result";
import "./App.css";

function App() {
  const [geo, setGeo] = useState(
    "Enter the coordinates in the geolocation box below"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [coord, setCoord] = useState({
    minLongitude: "",
    minLatitude: "",
    maxLongitude: "",
    maxLatitude: "",
  });
  // Clear result
  const clearResult = () => {
    setGeo("");
  };

  const fetchOSM = () => {
    setIsLoading(true);
    try {
      fetch(url).then((res) => {
        if (res.status !== 200) {
          alert("No data found with those coordinates");
          setIsLoading(false);
          return;
        }
        res.text().then((text) => {
          let domParser = new DOMParser();
          let xml = domParser.parseFromString(text, "text/xml");
          let geoJson = osmtogeojson(xml, {
            flatProperties: true,
            uninterestingTags: {
              tag_name: true,
            },
          });
          setGeo(geoJson);
          setIsLoading(false);
        });
      });
    } catch (error) {
      setIsLoading(false);
      return alert(error);
    }
  };

  return (
    <div className="App">
      <Title size="h1" text="OSM to GeoJson Converter" />
      <Result geo={geo} clearResult={clearResult} />
      <Bbox
        fetchOSM={fetchOSM}
        setUrl={setUrl}
        setCoord={setCoord}
        coord={coord}
      />

      {isLoading ? <span className="loading">Loading...</span> : ""}
    </div>
  );
}

export default App;
