import { useEffect, useState } from "react";
import osmtogeojson from "osmtogeojson";
import "./App.css";

function App() {
  const url =
    "https://www.openstreetmap.org/api/0.6/map?bbox=13.38640,52.51044,13.40325,52.51604";
  useEffect(() => {
    try {
      fetch(url).then((res) =>
        osmtogeojson(res).then((data) => console.log(data))
      );
    } catch (error) {
      return console.log(error);
    }
  });
  return <div className="App"></div>;
}

export default App;
