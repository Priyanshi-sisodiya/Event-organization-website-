import Hero from "../components/hero";
import Categories from "../components/categories";
import AllEvents from "../components/AllEvents";
import PopularEvents from "../components/PopularEvents";



export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <AllEvents />
      <PopularEvents />
    </div>
  );
}
