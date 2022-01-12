import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//import pages
import AboutUs from "./pages/aboutUs/aboutUs";
import Admin from "./pages/adminPage/admin";
import Agreement from "./pages/agreement/agreement";
import DetailPage from "./pages/detailPage/detailPage";
import ListThread from "./pages/listThread/listThread";
import UserPage from "./pages/userPage/userPage";
import HomeVisitor from "./components/home/homeVisitor";

function App() {
    const [data, setData] = useState({ data: "" });

    const changeRoute = (route) => {
        setData(route);
    };

    return (
        <Router>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/agreement" exact component={Agreement} />
                {/* <Route path={`/forum/:id-${data}`} exact component={DetailPage} /> */}
                <Route path={`/profile/:id`} exact component={UserPage} />
                <Route path={`/forum/:id`} exact component={DetailPage} />
                <Route path="/threads" exact>
                    <ListThread data={changeRoute} />
                </Route>
                <Route path="/admin" exact component={Admin} />
                <Route path="/" exact component={HomeVisitor}/>
            </Switch>
        </Router>
    );
}

export default App;
