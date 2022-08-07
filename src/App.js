import "./App.css";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <h1>Login</h1>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <h1>Checkout</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
