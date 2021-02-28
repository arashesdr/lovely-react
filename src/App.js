import { useEffect } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Tabs from "./components/Tabs";
import config from "./data/configs.json";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = config.title;
  }, []);

  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;
