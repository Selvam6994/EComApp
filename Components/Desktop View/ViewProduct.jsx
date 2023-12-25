import { Paper, Rating,Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ViewProduct = () => {
  const { category, product } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const productData = async () => {
    try {
      const fetchData = await fetch(
        `http://localhost:4000/api/${category}/${product}`,
        {
          method: "GET",
          headers: { productAuth: sessionStorage.getItem("autt") },
        }
      );
      const data = await fetchData.json();
      setProductDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productData();
  }, []);
  console.log(productDetails.reviews);
  return (
    <div className="productViewPage">
      <div className="leftSection">
       
          <Paper
            elevation={6}
            className="imageCard"
            sx={{ borderRadius: "10px" }}
          >
            <img src={productDetails.image} alt={productDetails.name} />
          </Paper>
        
      </div>
      <div className="rightSection">
        <Paper elevation={4} className="productDetailsCard">
          <div className="descriptionText">
            <span>{productDetails.name}</span>
            <p>{productDetails.description}</p>
            {productDetails.category == "oil" ? (
              <span>Benifits</span>
            ) : (
              <span>Nutrients</span>
            )}
            {productDetails.category == "oil" ? (
              <p>{productDetails.benifits}</p>
            ) : (
              <p>{productDetails.nutrition}</p>
            )}
          </div>
          <div className="productDetails">
            <div className="priceAndQty">
              <span>
                Qty : {productDetails.quantity}
                {productDetails.unit}
              </span>
              <span>
                Price :
                <CurrencyRupeeIcon fontSize="20px" />
                {productDetails.price}/-
              </span>
            </div>
            <div className="ratingSec">
              <span>Ratings</span>
              <Rating
                name="half-rating-read"
                value={`${productDetails.reviews}`}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="buttonSec">
                <Button><AddShoppingCartIcon/>Add to Cart</Button>
                <Button variant="contained">Buy Now</Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ViewProduct;
