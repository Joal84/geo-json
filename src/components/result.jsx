export default function Result({ geo, clearResult }) {
  return (
    <>
      <textarea
        value={JSON.stringify(geo)}
        className="result-display"
        readOnly
      ></textarea>
      <button onClick={clearResult} className="clear-btn">
        Clear
      </button>
    </>
  );
}
