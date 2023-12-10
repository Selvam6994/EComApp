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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { addCartContext } from "../Desktop/DesktopApp";

function Fruits() {
  const [cartCount, setCartCount] = useContext(addCartContext);
  const [productFruits, setProductFruits] = useState([]);
  const [sort, setSort] = useState(false);
  const [priceSort, setPriceSort] = useState([]);
  const getfruits = async () => {
    try {
      const data = await fetch("http://localhost:4000/api/products/fruits", {
        headers: { productAuth: sessionStorage.getItem("autt") },
      });
      const jsonData = await data.json();
      setProductFruits(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getfruits();
  }, [productFruits]);
  // const productFruits = [
  //   {
  //     name: "Avacado",
  //     price: "280",
  //     reviews: "5",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319386/samples/ecommerce/Fruits/Avacado_c0zcme.jpg",
  //   },
  //   {
  //     name: "Rambutan",
  //     price: "650",
  //     reviews: "8",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319369/samples/ecommerce/Fruits/Rambutan_ud2nb2.jpg",
  //   },
  //   {
  //     name: "Strawberry",
  //     price: "450",
  //     reviews: "4",
  //     inStock: false,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319368/samples/ecommerce/Fruits/Strawberry_sorkxf.jpg",
  //   },
  //   {
  //     name: "Plums",
  //     price: "280",
  //     reviews: "1",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319362/samples/ecommerce/Fruits/Plums_tpao4s.jpg",
  //   },
  //   {
  //     name: "Peaches",
  //     price: "200",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319342/samples/ecommerce/Fruits/Peaches_bto6m5.jpg",
  //   },
  //   {
  //     name: "Star Fruit",
  //     price: "50",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319289/samples/ecommerce/Fruits/Star_fruit_xoyb38.jpg",
  //   },
  //   {
  //     name: "Oranges",
  //     price: "100",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319255/samples/ecommerce/Fruits/Oranges_wntj7t.jpg",
  //   },
  //   {
  //     name: "Hill Banana",
  //     price: "140",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319230/samples/ecommerce/Fruits/Hill_banana_fqqowi.jpg",
  //   },
  //   {
  //     name: "Cherry",
  //     price: "70",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319230/samples/ecommerce/Fruits/Cherry_lvydpf.jpg",
  //   },
  // ];

  return (
    <div className="productPage">
      <div className="pageTitle">
        <span>Kodai Fruits</span>
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
            setPriceSort(productFruits.sort((a, b) => a.price - b.price)) ||
              setSort(true);
          }}
        >
          {" "}
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setPriceSort(productFruits.sort((a, b) => b.price - a.price)) ||
              setSort(true);
          }}
        >
          {" "}
          <ArrowDownwardIcon />
        </IconButton>
      </div>
      <div className="productSection">
        {!sort
          ? productFruits.map((products) => (
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
                      <IconButton
                        size="small"
                        onClick={() => {
                          setCartCount(cartCount + 1);
                        }}
                      >
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
                      <IconButton
                        size="small"
                        onClick={() => {
                          setCartCount(cartCount + 1);
                        }}
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

export default Fruits;
