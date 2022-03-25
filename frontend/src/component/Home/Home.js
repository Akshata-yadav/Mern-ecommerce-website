import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Hit Refresh</p>
            <h1>Cozy meets colorful in a fresh new lineup of hues</h1>

            <a href="#container">
              <button>
                SHOP<CgMouse />
              </button>
            </a>
          </div>


          

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          
          <div className="crophome">
            <img src="../../img/crophome.jpg" alt="" width="1345"/>
          </div>

          <h2 className="homeHeading">SUSTAINABILITY</h2>
          <div>
            <img src="../../img/materials.png" alt="" width="1300"/>
          </div>

          <div className="cropi.jfif">
            <img src="../../img/cropi.jfif" alt="" width="1345" height="400"/>

          </div>

          <h2 className="homeHeading">New Arrivals</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

         


          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
