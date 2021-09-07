import { useParams, Link } from "react-router-dom";

export default function Product({ item }) {
  const { category, product } = useParams();
  console.log(product);

  const { name, shortDescription, image, slug } = item;

  return (
    <Link to={`/${category}/${slug}`}>
      <div className="row product-card padding-24">
        <div className="col-12 col-md-3">
          <img
            alt="product"
            className="img img-fluid rounded product-image"
            src={image}
          ></img>
        </div>
        <div className="pt-2 col-12 col-md-9">
          <h3 className="product-name">{name}</h3>
          <br />
          <p className="product-description">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}
