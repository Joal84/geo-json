import { validation } from "../utils/validation";
import Title from "./title";

export default function Bbox({ fetchOSM, setCoord, setUrl, coord }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(
      `https://www.openstreetmap.org/api/0.6/map?bbox=${coord.minLongitude},${coord.minLatitude},${coord.maxLongitude},${coord.maxLatitude}`
    );
    validation(coord);
    //Calling fetch function
    fetchOSM();
  };
  return (
    <div className="coord-container">
      <Title text="Geolocation Box" />
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="min-longitude"
          placeholder="Minimum Longitude"
          value={coord.minLongitude}
          onChange={(e) => setCoord({ ...coord, minLongitude: e.target.value })}
          className="input"
        />
        <input
          type="text"
          name="min-latitude"
          placeholder="Minimum Latitude"
          value={coord.minLatitude}
          onChange={(e) => setCoord({ ...coord, minLatitude: e.target.value })}
          className="input"
        />
        <input
          type="text"
          name="max-longitude"
          placeholder="Maximum Longitude"
          value={coord.maxLongitude}
          onChange={(e) => setCoord({ ...coord, maxLongitude: e.target.value })}
          className="input"
        />
        <input
          type="text"
          name="max-latitude"
          placeholder="Maximum Latitude"
          value={coord.maxLatitude}
          onChange={(e) => setCoord({ ...coord, maxLatitude: e.target.value })}
          className="input"
        />
        {validation(coord) ? (
          <button onClick={handleSubmit} className="subbmit-btn">
            Submit
          </button>
        ) : (
          <button disabled className="subbmit-btn">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
