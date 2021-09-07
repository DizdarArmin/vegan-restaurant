export default function Hours({ hours }) {
  return (
    <div className="container">
      <h3>Opening hours</h3>
      <ul>
        <li>
          {hours.mondayToFriday[0]}
          <span className="font-italic ml-2">{hours.mondayToFriday[1]}</span>
        </li>

        <li>
          {hours.saturdays[0]}
          <span className="font-italic ml-2">{hours.saturdays[1]}</span>
        </li>

        <li>
          {hours.sundays[0]}
          <span className="font-italic ml-2">{hours.sundays[1]}</span>
        </li>
      </ul>
    </div>
  );
}
