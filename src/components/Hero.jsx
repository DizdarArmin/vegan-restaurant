import lowImage from "../images/hero-low.jpg";
import image from "../images/hero.jpg";
import useProgressiveImg from "./ProgressiveImage";
export default function Hero() {
  let [src, { blur }] = useProgressiveImg(lowImage, image);
  const style = {
    height: `90vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${src})`,

    filter: blur ? "blur(20px)" : "none",
    transition: blur ? "none" : "filter 0.5s ease-in",
    backgroundSize: "cover",
    padding: "24px !important",
  };
  return (
    <div style={style} className="container-fluid text-white">
      <div className="text-right p-5 shadow">
        <h1>The Green Chimney</h1>
        <h3>Vegan restaurant</h3>
      </div>
    </div>
  );
}
