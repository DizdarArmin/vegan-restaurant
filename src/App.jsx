import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./screens/HomeScreen";
import Products from "./screens/ProductsScreen";
import Details from "./screens/DetailsScreen";
import Contact from "./screens/ContactScreen";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/:category/" exact component={Products} />
            <Route path="/:category/:slug" component={Details} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}
