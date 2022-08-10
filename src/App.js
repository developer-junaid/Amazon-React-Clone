import { useEffect } from "react";

// Styles
import "./App.css";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

// Context
import { useStateValue } from "./StateProvider";

// Firebase
import { onAuthStateChanged, auth } from "./firebase";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...

        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out
        // ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Any cleanup operations
    return () => {
      unsubscribe(); // Detach a listener
    };
  }, []);

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
              <Login />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
