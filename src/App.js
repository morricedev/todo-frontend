import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "./template/Menu";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Router>
        <Menu />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
