import data from "../data/data.json";
import { useParams } from "react-router";

import Banner from "../components/Banner";
import PageNotFound from "./PageNotFound";
import Ingredients from "../components/Ingredients";
import Nutrition from "../components/Nutrition";

export default function Details() {
  const { category, slug } = useParams();
  const products = data[category].allProducts;

  const item = products.find((item) => item.slug === slug);
  const { image, name, description, ingredients, nutrition } = item;

  if (!item) return <PageNotFound />;

  return (
    <div className="">
      <Banner image={image} />

      <div className="padding-24 margin-0 col-12 col-md-6">
        <h3>{name}</h3>
        <p>{description}</p>
        {ingredients && <Ingredients data={ingredients} />}
        {nutrition && <Nutrition data={nutrition} />}
      </div>
    </div>
  );
}
