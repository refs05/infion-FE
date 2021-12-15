import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

//import pages
import AboutUs from "./pages/AboutUs";
import Loading from "./components/loading/Loading";
import Footer from "./components/footer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/About" exact component={AboutUs} />
            </Switch>
        </Router>
    );
}

export default App;
