import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//import components
// import Loading from "./components/loading/Loading";

//import pages
import AboutUs from "./pages/AboutUs";
import Agreement from "./pages/agreement/Agreement";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/agreement" exact component={Agreement} />
            </Switch>
        </Router>
    );
}

export default App;
