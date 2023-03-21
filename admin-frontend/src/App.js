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
import { Home } from "./containers/Dashboard/dashboard";
import { Products } from "./containers/Products";
import { Category } from "./containers/Category";
import { Inventory } from "./containers/inventory";
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
          <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<PrivateProducts />}>
          <Route path="/products" element={<Products />} />
        </Route>

        <Route element={<PrivateCategories />}>
          <Route path="/categories" element={<Category />} />
        </Route>

        <Route element={<PrivateInventory />}>
          <Route path="/inventory" element={<Inventory />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
