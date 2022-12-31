import { Route, Routes } from "react-router-dom";
import HomeApp from "./components/Home/HomeApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        {/* <Route path="/footer" element={<FooterIndex />} /> */}
      </Routes>
    </>
  );
}

export default App;
