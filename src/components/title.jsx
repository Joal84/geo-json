export default function Title({ text, size }) {
  if (size === "h1") {
    return <h1>{text}</h1>;
  } else {
    return <h2>{text}</h2>;
  }
}
