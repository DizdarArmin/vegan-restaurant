export default function Line({ height }) {
  const style = {
    width: "100%",
    height: `${height}px`,
    backgroundColor: "black",
  };
  return <div style={style}></div>;
}
