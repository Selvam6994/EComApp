import React, { useContext, useEffect, useState } from "react";
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
import { Link, json } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { addCartContext } from "./DesktopApp";
import { scrollToTop } from "../../Functions/Scrollonload";

function Chocolates() {
  const [sort, setSort] = useState(false);
  const [priceSort, setPriceSort] = useState([]);
  const [productChocolates, setProductChocolates] = useState([]);
  const [cartItem, setCartItem] = useContext(addCartContext);
  const getChocolate = async () => {
    try {
      const data = await fetch(
        "http://localhost:4000/api/products/chocolates",
        {
          method: "GET",
          headers: { productAuth: sessionStorage.getItem("autt") },
        }
      );
      const jsonData = await data.json();
      setProductChocolates(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  scrollToTop();
  useEffect(() => {
    getChocolate();
  }, []);

  const userToken = sessionStorage.getItem("ut");

  return (
    <div className="productPage">
      <div className="pageTitle">
        <span>Kodai Chocolates</span>
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
            setPriceSort(productChocolates.sort((a, b) => a.price - b.price)) ||
              setSort(true);
            getChocolate();
          }}
        >
          {" "}
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setPriceSort(productChocolates.sort((a, b) => b.price - a.price)) ||
              setSort(true);
            getChocolate();
          }}
        >
          {" "}
          <ArrowDownwardIcon />
        </IconButton>
      </div>
      <div className="productSection">
        {!sort
          ? productChocolates.map((products) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to={products.route} style={{ textDecoration: "none" }}>
                  <Card elevation={8} sx={{ width: 250, marginBottom: 10 }}>
                    <CardMedia
                      sx={{ height: 150 }}
                      image={products.image}
                      title={products.name}
                    />
                    <CardContent sx={{ height: 50 }}>
                      <Typography gutterBottom variant="h6" component="div">
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
                      {userToken ? (
                        <IconButton
                          size="small"
                          onClick={() => {}}
                          disabled={products.inStock ? false : true}
                        >
                          <AddShoppingCartIcon sx={{ color: green[900] }} />
                        </IconButton>
                      ) : (
                        <Link to="/account/login"> 
                        <IconButton
                          size="small"
                          disabled={products.inStock ? false : true}
                        >
                          <AddShoppingCartIcon sx={{ color: green[900] }} />
                        </IconButton>
                        </Link>
                      )}
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
                  <Card elevation={8} sx={{ width: 250, marginBottom: 10 }}>
                    <CardMedia
                      sx={{ height: 150 }}
                      image={products.image}
                      title={products.name}
                    />
                    <CardContent sx={{ height: 50 }}>
                      <Typography gutterBottom variant="h6" component="div">
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
                      <IconButton
                        size="small"
                        onClick={() => {
                          setCartItem([
                            ...cartItem,
                            {
                              image: products.image,
                              name: products.name,
                              quantity: products.quantity,
                              price: products.price,
                              unit: products.unit,
                            },
                          ]);
                        }}
                        disabled={products.inStock ? false : true}
                      >
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

export default Chocolates;
