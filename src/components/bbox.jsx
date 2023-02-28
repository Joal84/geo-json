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
        <div className="field-label">
          <label htmlFor="min-longitude">Min-Longitude</label>
          <input
            type="text"
            name="min-longitude"
            placeholder="13.38640"
            value={coord.minLongitude}
            onChange={(e) =>
              setCoord({ ...coord, minLongitude: e.target.value })
            }
            className="input"
          />
        </div>
        <div className="field-label">
          <label htmlFor="min-latitude">Min-Latitude</label>
          <input
            type="text"
            name="min-latitude"
            placeholder="52.51044"
            value={coord.minLatitude}
            onChange={(e) =>
              setCoord({ ...coord, minLatitude: e.target.value })
            }
            className="input"
          />
        </div>
        <div className="field-label">
          <label htmlFor="max-longitude">Max-Longitude</label>
          <input
            type="text"
            name="max-longitude"
            placeholder="13.40325"
            value={coord.maxLongitude}
            onChange={(e) =>
              setCoord({ ...coord, maxLongitude: e.target.value })
            }
            className="input"
          />
        </div>
        <div className="field-label">
          <label htmlFor="max-latitude">Max-Latitude</label>
          <input
            type="text"
            name="max-latitude"
            placeholder="52.51604"
            value={coord.maxLatitude}
            onChange={(e) =>
              setCoord({ ...coord, maxLatitude: e.target.value })
            }
            className="input"
          />
        </div>
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
