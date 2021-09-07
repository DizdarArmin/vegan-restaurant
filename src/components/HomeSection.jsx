import { Link } from "react-router-dom";

export default function HomeSection({ direction, title, image, description }) {
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
            <h3 className="text-capitalize">{title}</h3>
            <br />
            <p>{description}</p>
            <br />
            <Link style={linkStyle} to={`/${title}`}>
              View menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
