import data from "../data/data.json";
import { useParams } from "react-router";

import BackButton from "../components/details/BackButton";
import Banner from "../components/details/Banner";
import PageNotFound from "./PageNotFound";
import Ingredients from "../components/details/Ingredients";
import NutritionTable from "../components/details/NutritionTable";

export default function Details() {
  const { category, slug } = useParams();

  const products = data[category].allProducts;

  const item = products.find((item) => item.slug === slug);
  const { image, name, description, ingredients, nutrition } = item;

  if (!item) return <PageNotFound />;

  return (
    <div>
      <Banner image={image} title={name} />
      <div className="container-fluid">
        <div className="padding-24 container details">
          <p>{description}</p>
          <div className="row align-center">
            {ingredients && <Ingredients data={ingredients} />}
            {nutrition && <NutritionTable nutrition={nutrition} />}
          </div>
          <div className="row">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
}
