import HeroImage from "../images/hero.jpg";
export default function Hero() {
  const style = {
    height: `90vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    padding: "24px !important",
  };
  return (
    <div style={style} className="container-fluid text-white">
      <div className="text-right p-5">
        <h1>The Green Chimney</h1>
        <h3>Vegan restaurant</h3>
      </div>
    </div>
  );
}
