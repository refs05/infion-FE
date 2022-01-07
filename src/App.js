import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


//import pages
import AboutUs from "./pages/aboutUs/aboutUs";
import Admin from "./pages/adminPage/admin";
import Agreement from "./pages/agreement/agreement";
import DetailPage from "./pages/detailPage/detailPage";
import ListThread from "./pages/listThread/listThread";

function App() {
    const [data, setData] = useState({data : ""})

    const changeRoute = (route)=> {
        setData(route)
    }

    return (
        <Router>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/agreement" exact component={Agreement} />
                {/* <Route path={`/forum/:id-${data}`} exact component={DetailPage} /> */}
                <Route path={`/forum/:id`} exact component={DetailPage} />
                <Route path="/threads" exact><ListThread data={changeRoute}/></Route>
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;
