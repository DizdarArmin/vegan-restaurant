import "./App.css";
import data from "./data/data.json";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Products from "./screens/ProductsScreen";
import Details from "./screens/DetailsScreen";
import Contact from "./screens/ContactScreen";

export default function App() {
  const Home = () => {
    return <HomeScreen data={data} />;
  };

  console.log(data);
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/:category/" exact component={Products} />
          <Route path="/:category/:slug" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
