import { Link } from "react-router-dom";

export default function HomeSection({ data, direction }) {
  const { name, description, image } = data;
  const linkStyle = {
    color: "green",
  };
  return (
    <div className="container-fluid section">
      <div className={`row flex-row-${direction}`}>
        <div className="col-12 col-md-6">
          <img
            className="img img-fluid section-image "
            alt="beverages"
            src={image}
          ></img>
        </div>
        <div className="col-12 col-md-6 text-wrapper">
          <div>
            <h3 className="text-capitalize">{name}</h3>
            <br />
            <p>{description}</p>
            <br />
            <Link style={linkStyle} to={name}>
              <div className="btn btn-success menu-btn">View {name}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
