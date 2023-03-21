import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducers";
import categoryReducers from "./categoryRecuders";
import productReducers from "./productReducers";

const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    category: categoryReducers,
    product: productReducers,
})

export default rootReducer