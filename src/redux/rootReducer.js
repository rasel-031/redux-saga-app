import { combineReducers } from "redux";
import { productReducer } from "./products/productReducer";

export const rootReducer = combineReducers({
  productData: productReducer,
});
