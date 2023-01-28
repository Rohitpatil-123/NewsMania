import Appbar from "./Components/Appbar";
import Allnews from "./Components/Allnews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tesla from "./Components/Tesla";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />

        <Routes>
          <Route path="/" element={<Tesla />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
