import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
