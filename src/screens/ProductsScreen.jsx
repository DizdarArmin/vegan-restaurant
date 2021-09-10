import Banner from "../components/details/Banner";
import Product from "../components/details/Product";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router";
import data from "../data/data.json";

export default function ProductsScreen() {
  const { category } = useParams();
  const menu = data[category];

  if (!menu) return <PageNotFound />;

  const { name, heroImage, allProducts, description } = menu;

  function MapProducts() {
    if (allProducts) {
      return allProducts.map((item, i) => (
        <Product key={i} item={item} category={category} />
      ));
    }
  }

  return (
    <div>
      <Banner image={heroImage} title={name} />

      <div className="container">
        <p className="row description">{description}</p>
        {MapProducts()}
      </div>
    </div>
  );
}
