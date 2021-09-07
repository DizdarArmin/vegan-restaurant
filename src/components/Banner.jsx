export default function Banner({ image, title, subtitle }) {
  const style = {
    height: `60vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    textShadow: "1px 1px gray ",
    backgroundPosition: "center",
  };

  return (
    <div style={style} className="container-fluid text-white">
      <div className="text-right">
        <h1 className="text-capitalize">{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}
