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
import CreateThread from "./components/thread/createThread";
import editThread from "./components/thread/editThread";
import UserThreads from "./pages/userThreads/userThreads";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" exact component={AboutUs} />
        <Route path="/agreement" exact component={Agreement} />
        <Route path={`/profile/:id`} exact component={UserPage} />
        <Route path={`/forum/:id`} exact component={DetailPage} />
        <Route path="/threads" exact>
          <ListThread />
        </Route>
        <Route path="/admin" exact component={Admin} />
        <Route path="/" exact component={HomeVisitor} />
        <Route path="/createThread" exact component={CreateThread} />
        <Route path="/editThread/:id" exact component={editThread} />
        <Route path="/yourThreads/:id" exact component={UserThreads} />
      </Switch>
    </Router>
  );
}

export default App;
