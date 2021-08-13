import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import PageTemplate from "./components/page-template/PageTemplate";
function App() {
  return (
    <Router>
      <PageTemplate>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </PageTemplate>
    </Router>
  );
}

export default App;
