import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./containers/Signin/signin";
import { Signup } from "./containers/Signup/signup";
import {
  PrivateHome,
  PrivateProducts,
  PrivateCategories,
  RootRoute,
  PrivateInventory,
} from "./componants/HOC/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, getInitdata } from "./actions";
import { Category } from "./containers/Category";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedIn());
    }
    dispatch(getInitdata());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<RootRoute />}>
          <Route path="" />
        </Route>

        <Route element={<PrivateHome />}>
          <Route path="/home" element={<Category />} />
        </Route>

        <Route element={<PrivateCategories />}>
          <Route path="/categories" element={<Category />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
