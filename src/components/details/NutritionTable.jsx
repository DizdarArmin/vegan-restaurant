import Nutrition from "./NutritionRow";
import Line from "./Line";

export default function NutritionTable({ nutrition }) {
  const totalFat = {
    title: "Total Fat",
    weight: nutrition.saturatedFat.weight + nutrition.fat.weight,
    percentage: "23%",
  };

  const totalCarbohydrats = {
    title: "Total Carbohydrates",
    weight: nutrition.dietaryFiber.weight + nutrition.sugars.weight,
    percentage: "23%",
  };
  return (
    <div className="nutrition-table p-1  col-12">
      <h1>Nutrition Facts</h1>
      <h4>{nutrition.size}</h4>
      <Line height={10} />
      <h6>Amount Per Serving</h6>
      <div className="row">
        <h2 className="col ">Calories</h2>

        <h2 className="col text-right">{nutrition.calories.weight}</h2>
      </div>
      <Line height={6} />
      <p className="text-right">% Daily Value*</p>
      <Nutrition data={totalFat} bold={true} />
      <Nutrition data={nutrition.saturatedFat} padding={1} />
      <Nutrition data={nutrition.fat} padding={1} />
      <Nutrition data={nutrition.cholesterol} bold={true} />
      <Nutrition data={nutrition.sodium} bold={true} />
      <Nutrition data={totalCarbohydrats} bold={true} />
      <Nutrition data={nutrition.dietaryFiber} padding={1} />
      <Nutrition data={nutrition.sugars} padding={1} />

      <Nutrition data={nutrition.protein} bold={true} />
      <Line height={10} />
      <Nutrition data={nutrition.vitaminD} />
      <Nutrition data={nutrition.calcium} />
      <Nutrition data={nutrition.iron} />
      <Nutrition data={nutrition.potassium} />
      <Line height={6} />
      <p>
        * The % Daily Value (DV) tells you how much a nutrient in serving of
        food contributes to a daily diet. 2000 calories a day is used for
        general nutrition advice
      </p>
    </div>
  );
}
