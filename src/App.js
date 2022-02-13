import "./App.css";
import { fetchProductsRequest } from "./redux/products/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Rating } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);

  return (
    <>
      <h1>ShopBay</h1>
      <hr />
      <div className="container">
        {products.map((data, key) => {
          return (
            <div className="box">
              <img src={data.image} alt="" className="image-box" />
              <div className="title-box">
                <h4 style={{ textAlign: "center" }}>{data.title}</h4>
                <p>
                  <b>Category:</b>&nbsp;{data.category}
                </p>
                <p>
                  <b>Price:</b>&nbsp;{data.price}$
                </p>
              </div>
              <div className="rating">
                <Rating
                  name="half-rating-read"
                  defaultValue={data.rating.rate}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
