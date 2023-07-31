import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Page404 from "./pages/404/Page404";
import About from "./pages/about/About";
import GetPet from "./pages/getPet/GetPet";
import Contacts from "./pages/contacts/Contacts";
import EventsPet from "./pages/eventsPet/EventsPet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />}></Route>
        <Route path="/get-pet" element={<GetPet />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/events" element={<EventsPet />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
