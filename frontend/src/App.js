import './App.css';
import Header from './components/Header';
//import HomePage from './components/HomePage';
//import AddSupplier from './components/AddSupplier';
//import SellerAds from './components/SellerAds';
import SellerAdvertise from './components/SellerAdvertise';
//import SellerAdvertisement from './components/SellerAds';
//import Login from './components/Login';


function App(){
  return(
    <div>
        <Header/>
        {/*<HomePage/>*/}
        {/*<AddSupplier/>*/}
        {/*<SellerAds/>*/}
        <SellerAdvertise/>

   
    </div>
  );
}

export default App;
