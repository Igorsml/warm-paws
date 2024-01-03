import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { PetsProvider } from "./contexts/PetsContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PetsProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </PetsProvider>
);
