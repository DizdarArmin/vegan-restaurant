import Pill from "./Pill";
export default function Ingredients({ data }) {
  return (
    <div className="col-12 ingredients">
      <h3>Ingredients</h3>
      <div>
        {data.map((item, i) => (
          <Pill key={i} title={item}></Pill>
        ))}
      </div>
    </div>
  );
}
