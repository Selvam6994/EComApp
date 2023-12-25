import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductCategory() {
  // const categoriesImage = categories.map((product) => product.image);
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const getData = await fetch(
        "http://localhost:4000/api/get/all/products",
        {
          method: "GET",
          headers: { productAuth: sessionStorage.getItem("autt") },
        }
      );
      const data = await getData.json();
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const fruits = allProducts.filter((fruit) => fruit.category == "fruit");
  const chocolates = allProducts.filter(
    (chocolate) => chocolate.category == "chocolate"
  );
  const spices = allProducts.filter((spice) => spice.category == "spices");
  const oils = allProducts.filter((oil) => oil.category == "oil");
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="productsPage">
      <div className="productPageContent">
        <div className="productsPageTitle">
          <span>Our Products</span>
        </div>
        <div className="subCategory">
          <div className="subCategoryHeaders">
            <span>Fruits</span>
            <Link to="/categories/fruits">
              <Button>
                See All
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </div>
          <Carousel
            className="productCarousel"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {fruits.map((product) => (
              <Paper
                elevation={4}
                className="subCategory_productCards"
                sx={{ borderRadius: "10px" }}
              >
                <img src={product.image} alt={product.name} />
                <div className="subCategory_CardDetails">
                  <span>{product.name}</span>
                  <span>
                    <CurrencyRupeeIcon />
                    {product.price}/-
                  </span>
                </div>
                <Link to={`/categories/${product.category}/${product.name}`}>
                  <Button>View Product</Button>
                </Link>
              </Paper>
            ))}
          </Carousel>
        </div>
        <div className="subCategory">
          <div className="subCategoryHeaders">
            <span>Chocolates</span>
            <Link to="/categories/chocolates">
              <Button>
                See All
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </div>
          <Carousel
            className="productCarousel"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {chocolates.map((product) => (
              <Paper
                elevation={4}
                className="subCategory_productCards"
                sx={{ borderRadius: "10px" }}
              >
                <img src={product.image} alt={product.name} />
                <div className="subCategory_CardDetails">
                  <span>{product.name}</span>
                  <span>
                    <CurrencyRupeeIcon />
                    {product.price}/-
                  </span>
                </div>
                <Link to={`/categories/${product.category}/${product.name}`}>
                  <Button>View Product</Button>
                </Link>
              </Paper>
            ))}
          </Carousel>
        </div>
        <div className="subCategory">
          <div className="subCategoryHeaders">
            <span>Spices</span>
            <Link to="/categories/spices">
              <Button>
                See All
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </div>
          <Carousel
            className="productCarousel"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {spices.map((product) => (
              <Paper
                elevation={4}
                className="subCategory_productCards"
                sx={{ borderRadius: "10px" }}
              >
                <img src={product.image} alt={product.name} />
                <div className="subCategory_CardDetails">
                  <span>{product.name}</span>
                  <span>
                    <CurrencyRupeeIcon />
                    {product.price}/-
                  </span>
                </div>
                <Link to={`/categories/${product.category}/${product.name}`}>
                  <Button>View Product</Button>
                </Link>
              </Paper>
            ))}
          </Carousel>
        </div>
        <div className="subCategory">
          <div className="subCategoryHeaders">
            <span>Natural Oils</span>
            <Link to="/categories/naturalolis">
              <Button>
                See All
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </div>
          <Carousel
            className="productCarousel"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {oils.map((product) => (
              <Paper
                elevation={4}
                className="subCategory_productCards"
                sx={{ borderRadius: "10px" }}
              >
                <img src={product.image} alt={product.name} />
                <div className="subCategory_CardDetails">
                  <span>{product.name}</span>
                  <span>
                    <CurrencyRupeeIcon />
                    {product.price}/-
                  </span>
                </div>
                <Link to={`/categories/${product.category}/${product.name}`}>
                  <Button>View Product</Button>
                </Link>
              </Paper>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
