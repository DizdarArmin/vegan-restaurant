export default function Ingredients({ data }) {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            <span></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
