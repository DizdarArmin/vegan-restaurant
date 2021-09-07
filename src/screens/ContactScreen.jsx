import data from "../data/contact.json";
import Banner from "../components/Banner";
import Hours from "../components/Hours";
import Booking from "../components/Booking";
import Map from "../components/Map";

export default function ContactScreen() {
  const { name, image, hours } = data;

  return (
    <div className="container-fluid">
      <Banner image={image} title={name} />
      <div className="container padding-24 col-12 col-md-4 margin-0">
        <Hours hours={hours} />
        <Booking />
      </div>
      <Map />
    </div>
  );
}
