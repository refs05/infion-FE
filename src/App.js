import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

//import pages
import AboutUs from "./pages/AboutUs";
import Loading from "./components/loading/Loading";
import ListComments from "./components/comment/listComment";

function App() {
    return (
        // <Router>
        //     <Switch>
        //         <Route path="/About" exact component={AboutUs} />
        //     </Switch>
        // </Router>
        <ListComments />
    );
}

export default App;
