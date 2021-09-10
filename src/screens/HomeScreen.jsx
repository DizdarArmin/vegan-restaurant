import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";
import data from "../data/data.json";

export default function HomeScreen() {
  const { dishes, drinks, deserts } = data;
  return (
    <div>
      <Hero />
      <HomeSection data={dishes} />
      <HomeSection data={drinks} direction="reverse" />
      <HomeSection data={deserts} />
    </div>
  );
}
