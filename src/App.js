import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//import components
// import Loading from "./components/loading/Loading";

//import pages
import AboutUs from "./pages/aboutUs/aboutUs";
import Agreement from "./pages/agreement/agreement";
import DetailPage from "./pages/detailPage/detailPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/agreement" exact component={Agreement} />
                <Route path="/detail" exact component={DetailPage} />
            </Switch>
        </Router>
    );
}

export default App;
