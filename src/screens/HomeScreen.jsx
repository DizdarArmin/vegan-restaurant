import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";

export default function HomeScreen({ data }) {
  const { dishes, drinks, deserts } = data;
  return (
    <div>
      <Hero />
      <HomeSection
        title={dishes.name}
        description={dishes.description}
        image={dishes.image}
      />
      <HomeSection
        direction="reverse"
        title={drinks.name}
        description={drinks.description}
        image={drinks.image}
      />
      <HomeSection
        title={deserts.name}
        description={deserts.description}
        image={deserts.image}
      />
    </div>
  );
}
