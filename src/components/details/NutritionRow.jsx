export default function NutritionRow({ data, padding, bold, italic }) {
  let fontBold,
    fontItalic = `font-weight-normal`;
  let rowPadding = ``;
  if (padding == 1) {
    rowPadding = `pl-3`;
  }
  if (padding == 2) {
    rowPadding = `pl-5`;
  }
  if (bold) {
    fontBold = `font-weight-bold`;
  }
  if (italic) {
    fontItalic = `font-italic`;
  }

  const { title, weight, percentage } = data;
  return (
    <div className={`row bottom-border-thin ${rowPadding}`}>
      <p className={`col ${fontBold} ${fontItalic}`}>
        {title}
        <span className="font-weight-normal ml-1">{weight} g</span>
      </p>
      {percentage && (
        <p className="col text-right font-weight-bold">{percentage}</p>
      )}
    </div>
  );
}
