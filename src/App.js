import "./App.css";

import { Switch, Route, Redirect, HashRouter} from "react-router-dom";

import Homepage from "./Homepage.js";
import Contact from "./Components/Contact.js";
import Cookies from "./Components/Cookies.js";
import Eparent from "./Components/Eparent.js";
import Ivaan1 from "./Components/Ivaan1.js";
import Ivaan2 from "./Components/Ivaan2.js";

function App() {
  
  return (
    <>
    <HashRouter basename="/" >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Eparent" component={Eparent} />
        <Route exact path="/Ivaan1" component={Ivaan1} />
        <Route exact path="/Ivaan2" component={Ivaan2} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cookies" component={Cookies} />
        <Redirect to="/" />
      </Switch>
  </HashRouter>
    </>
  );
}

export default App;
