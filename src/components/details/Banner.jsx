import useProgressiveImg from "../ProgressiveImage";
export default function Banner({ image, title, lowImage }) {
  let [src, { blur }] = useProgressiveImg(lowImage, image);
  const style = {
    height: `60vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${src})`,
    filter: blur ? "blur(20px)" : "none",
    transition: blur ? "none" : "filter 0.5s ease-in",
    backgroundSize: "cover",
    textShadow: "1px 1px gray ",
    backgroundPosition: "center",
  };

  return (
    <div style={style} className="container-fluid text-white padding-24">
      <div className="text-right">
        <h1 className="text-capitalize">{title}</h1>
      </div>
    </div>
  );
}
