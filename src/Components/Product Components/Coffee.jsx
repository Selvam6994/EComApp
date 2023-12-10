import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Coffee() {
  const [sort, setSort] = useState(false);
  const [priceSort, setPriceSort] = useState([]);
  const [productCoffee, setProductCoffee] = useState([]);
  const getCoffee = async () => {
    try {
      const data = await fetch("http://localhost:4000/api/products/coffee", {
        headers: { productAuth: sessionStorage.getItem("autt") },
      });
      const jsonData = await data.json();
      setProductCoffee(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoffee();
  }, [productCoffee]);
  // let productCoffee = [
  //     {
  //       name: "Green Coffee",
  //       price: "230",
  //       reviews: "5",
  //       inStock: true,
  //       quantity: "1",
  //       unit: "Kg",
  //       image:
  //         "https://res.cloudinary.com/dommwbnzh/image/upload/v1700482005/samples/ecommerce/Coffee%20Verities/Green_coffeed_oprkag.jpg",
  //     },
  //     {
  //       name: "Medium Roasted Coffee",
  //       price: "350",
  //       reviews: "8",
  //       inStock: true,
  //       quantity: "1",
  //       unit: "Kg",
  //       image:
  //         "https://res.cloudinary.com/dommwbnzh/image/upload/v1700482053/samples/ecommerce/Coffee%20Verities/Medium_Roasted_coffee_beans_syrklg.jpg",
  //     },
  //     {
  //       name: "Dark Roasted Coffee",
  //       price: "380",
  //       reviews: "4",
  //       inStock: false,
  //       quantity: "1",
  //       unit: "Kg",
  //       image:
  //         "https://res.cloudinary.com/dommwbnzh/image/upload/v1700482020/samples/ecommerce/Coffee%20Verities/Dark_coffee_beans_wss4xd.jpg",
  //     },
  //     {
  //       name: "Coffee Powder",
  //       price: "350",
  //       reviews: "1",
  //       inStock: true,
  //       quantity: "500",
  //       unit: "g",
  //       image:
  //         "https://res.cloudinary.com/dommwbnzh/image/upload/v1700482002/samples/ecommerce/Coffee%20Verities/Coffee_powder_o39m7r.jpg",
  //     },

  //   ];

  return (
    <div className="productPage">
      <div className="pageTitle">
        <span>Kodai Coffee</span>
        <Link to="/categories">
          <Button sx={{ fontSize: 18, color: "red" }}>
            <KeyboardArrowLeftIcon /> back
          </Button>
        </Link>
      </div>
      <div className="pageFilter">
        <span>Sort by Price :</span>
        <IconButton
          onClick={() => {
            setPriceSort(productCoffee.sort((a, b) => a.price - b.price)) ||
              setSort(true);
          }}
        >
          {" "}
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setPriceSort(productCoffee.sort((a, b) => b.price - a.price)) ||
              setSort(true);
          }}
        >
          {" "}
          <ArrowDownwardIcon />
        </IconButton>
      </div>
      <div className="productSection">
        {!sort
          ? productCoffee.map((products) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to={products.route} style={{ textDecoration: "none" }}>
                  <Card elevation={8} sx={{ minWidth: 280, marginBottom: 10 }}>
                    <CardMedia
                      sx={{ height: 220 }}
                      image={products.image}
                      title={products.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <span>{products.name}</span>
                      </Typography>
                    </CardContent>
                    {/* Price  */}
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        <span>
                          {products.quantity}
                          {products.unit} - Rs.{products.price}/-
                        </span>
                      </Typography>
                      {/*stock status and review */}
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className="reviewStatus"
                      >
                        <div>
                          <StarIcon sx={{ color: yellow[500] }} />
                          {products.reviews}
                        </div>
                        {products.inStock ? (
                          <span
                            style={{ color: "#1b5e20", fontWeight: "bolder" }}
                          >
                            InStock
                          </span>
                        ) : (
                          <span
                            style={{ color: "#d50000", fontWeight: "bolder" }}
                          >
                            Out of Stock
                          </span>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View Product</Button>
                      <IconButton size="small">
                        <AddShoppingCartIcon sx={{ color: green[900] }} />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Link>
              </motion.div>
            ))
          : priceSort.map((products) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to={products.route} style={{ textDecoration: "none" }}>
                  <Card elevation={8} sx={{ minWidth: 280, marginBottom: 10 }}>
                    <CardMedia
                      sx={{ height: 220 }}
                      image={products.image}
                      title={products.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <span>{products.name}</span>
                      </Typography>
                    </CardContent>
                    {/* Price  */}
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        <span>
                          {products.quantity}
                          {products.unit} - Rs.{products.price}/-
                        </span>
                      </Typography>
                      {/*stock status and review */}
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className="reviewStatus"
                      >
                        <div>
                          <StarIcon sx={{ color: yellow[500] }} />
                          {products.reviews}
                        </div>
                        {products.inStock ? (
                          <span
                            style={{ color: "#1b5e20", fontWeight: "bolder" }}
                          >
                            InStock
                          </span>
                        ) : (
                          <span
                            style={{ color: "#d50000", fontWeight: "bolder" }}
                          >
                            Out of Stock
                          </span>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View Product</Button>
                      <IconButton size="small">
                        <AddShoppingCartIcon sx={{ color: green[900] }} />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Link>
              </motion.div>
            ))}
      </div>
    </div>
  );
}

export default Coffee;
