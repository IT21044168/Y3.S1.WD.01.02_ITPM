import "./App.css";
import Header from "./components/Header";
import ViewBuyerPost from "./components/ViewBuyerPost";
import AddBuyerPost from "./components/AddBuyerPost";
import UpdateBuyerPost from "./components/updateBuyerPost";
import PrintBuyerDetails from "./components/PrintBuyerDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/buyer" element={<Header />} />  
        <Route exact path="/buyer/allPosts" element={<ViewBuyerPost />} />
        <Route exact path="/buyer/addPost" element={<AddBuyerPost />} />
        <Route exact path="/buyer/updatePost" element={<UpdateBuyerPost />} />
        <Route exact path="/buyer/PrintBuyerDetails" element={<PrintBuyerDetails />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;