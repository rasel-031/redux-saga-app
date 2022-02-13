import "./App.css";
import { fetchProductsRequest } from "./redux/products/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Skeleton from "./skeleton/Skeleton";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products);

  //hooks
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProductsRequest());
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="main">
      <h1>ShopBay</h1>
      <hr />
      <div className="container">
        {loading ? (
          Array(20).fill(<Skeleton />)
        ) : (
          <div className="container">
            {products.map((data, key) => {
              return (
                <div className="box" key={key}>
                  <img src={data.image} alt="" className="image-box" />
                  <div className="title-box">
                    <h4 style={{ textAlign: "center" }}>{data.title}</h4>
                    <p>
                      <b>Category:</b>&nbsp;
                      {data.category}
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
        )}
      </div>
    </div>
  );
}

export default App;
