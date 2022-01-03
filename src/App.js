import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


//import pages
import AboutUs from "./pages/aboutUs/aboutUs";
import Admin from "./pages/adminPage/admin";
import Agreement from "./pages/agreement/agreement";
import DetailPage from "./pages/detailPage/detailPage";
import ListThread from "./pages/listThread/listThread";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/agreement" exact component={Agreement} />
                <Route path="/forum" exact component={DetailPage} />
                <Route path="/threads" exact component={ListThread} />
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;
