import data from "../data/contact.json";
import Banner from "../components/details/Banner";
import Hours from "../components/contact/Hours";
import Booking from "../components/contact/Booking";
import Map from "../components/contact/Map";

export default function ContactScreen() {
  const { name, image, hours, lowImage } = data;

  return (
    <div className="container-fluid">
      <Banner image={image} title={name} lowImage={lowImage} />
      <div className="container padding-24 col-12 col-md-4 margin-0">
        <Hours hours={hours} />
        <br />
        <h3>Address</h3>
        <p>Ursviksvägen 28, 172 76 Sundbyberg</p>
        <br />
        <Booking />
      </div>
      <Map />
    </div>
  );
}
