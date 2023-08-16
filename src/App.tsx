import { Route, Routes } from "react-router-dom";
import { Page404 } from "./pages/Page404/Page404";
import { About } from "./pages/About/About";
import { GetPet } from "./pages/GetPet/GetPet";
import { WantHelp } from "./pages/WantHelp/WantHelp";
import { Contacts } from "./pages/Contacts/Contacts";
import { EventsPet } from "./pages/EventsPet/EventsPet";
import { PetsList } from "./pages/PetsList/PetsList";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/get-pet" element={<GetPet />}></Route>
          <Route path="/want-help" element={<WantHelp />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/events" element={<EventsPet />}></Route>
          <Route path="/pets-list" element={<PetsList />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;