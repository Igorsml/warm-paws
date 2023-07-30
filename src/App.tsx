import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Page404 from "./pages/404/Page404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="about"></Route>
          <Route path="slave-master"></Route>
          <Route path="contacts"></Route>
          <Route path="events"></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
