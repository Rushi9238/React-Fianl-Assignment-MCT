import { combineReducers } from "redux";
import { productcartData } from '../redux/reducer'
import { categaryCartData } from "../redux/categaryReducer";


export default combineReducers({
  productcartData: productcartData,
  categaryCartData:categaryCartData,
});