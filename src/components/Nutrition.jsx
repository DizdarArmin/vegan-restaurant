import TableRow from "./TableRow";
export default function Nutrition({ data }) {
  const { size, perServing } = data;

  const {
    calories,
    protein,
    carbohydrates,
    dietaryFiber,
    sugars,
    fat,
    saturatedFat,
    vitaminAiu,
    vitaminC,
    folate,
    calcium,
    iron,
    magnesium,
    potassium,
    sodium,
    thiamin,
  } = perServing;

  return (
    <div>
      <h3>Nutrition per serving</h3>

      <table className="table table-striped">
        <thead>
          <TableRow name="Size" amount={size} />
        </thead>
        <tbody>
          <TableRow name="Calories" amount={calories} />
          <TableRow name="Protein" amount={protein} />
          <TableRow name="Carbohydrates" amount={carbohydrates} />
          <TableRow name="Dietary fiber" amount={dietaryFiber} />
          <TableRow name="Sugars" amount={sugars} />
          <TableRow name="Fat" amount={fat} />
          <TableRow name="Saturated fat" amount={saturatedFat} />
          <TableRow name="Vitamin A IU" amount={vitaminAiu} />
          <TableRow name="Vitamin C" amount={vitaminC} />
          <TableRow name="Folate" amount={folate} />
          <TableRow name="Calcium" amount={calcium} />
          <TableRow name="Iron" amount={iron} />
          <TableRow name="Magnesium" amount={magnesium} />
          <TableRow name="Potassium" amount={potassium} />
          <TableRow name="Sodium" amount={sodium} />
          <TableRow name="Thiamin" amount={thiamin} />
        </tbody>
      </table>
    </div>
  );
}
