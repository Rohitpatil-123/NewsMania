import Appbar from "./Components/Appbar";
import Allnews from "./Components/Allnews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Tesla from "./Components/Tesla";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Nav />
        <Routes>
          <Route path="/" element={<Allnews />} />
          <Route path="/tesla" element={<Tesla />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
