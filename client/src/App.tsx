import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Home, ImageGen, Navbar } from "./components/index";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<ImageGen />} />
      </Routes>
      <Footer />
    </div>
  );
}
