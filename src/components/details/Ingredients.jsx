export default function Ingredients({ data }) {
  return (
    <div className="col-12 ingredients">
      <h3>Ingredients</h3>
      <div>
        {data.map((item, i) => (
          <div className="badge badge-pill badge-success" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
