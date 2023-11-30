import React, { useState } from "react";
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

function Spices() {
  let productSpices = [
    {
      name: "Poppy Seeds",
      price: "1000",
      reviews: "5",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319797/samples/ecommerce/Spices/Poppy_Seeds_acysnx.jpg",
    },
    {
      name: "Clove",
      price: "562",
      reviews: "8",
      inStock: true,
      quantity: "250",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319781/samples/ecommerce/Spices/Clove_j7krka.jpg",
    },
    {
      name: "Cinnamon",
      price: "720",
      reviews: "4",
      inStock: false,
      quantity: "250",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319777/samples/ecommerce/Spices/cinnamon_ndc5v9.jpg",
    },
    {
      name: "Cumin (jeera)",
      price: "300",
      reviews: "1",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319776/samples/ecommerce/Spices/Cumin_a2itmp.jpg",
    },
    {
      name: "Star Annes",
      price: "720",
      reviews: "7",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319770/samples/ecommerce/Spices/Star_Annes_fkxwq2.jpg",
    },
    {
      name: "White Pepper",
      price: "1000",
      reviews: "7",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319744/samples/ecommerce/Spices/White_Pepper_g8efdr.jpg",
    },
    {
      name: "Black Pepper",
      price: "600",
      reviews: "7",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319727/samples/ecommerce/Spices/Black_Pepper_winygh.jpg",
    },
    {
      name: "Cardamom",
      price: "700",
      reviews: "7",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319700/samples/ecommerce/Spices/Cardamom_po5im3.jpg",
    },
    {
      name: "Fennel",
      price: "315",
      reviews: "7",
      inStock: true,
      quantity: "500",
      unit: "g",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319686/samples/ecommerce/Spices/fennel_xjxgdm.jpg",
    },
  ];
  productSpices.sort((a, b) => a.name.localeCompare(b.name));
  const [sort, setSort] = useState(false);
  const [priceSort, setPriceSort] = useState([]);
  return (
    <div className="productPage">
      <div className="pageTitle">
        <span>Kodai Spices</span>
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
            setPriceSort(productSpices.sort((a, b) => a.price - b.price)) ||
              setSort(true);
          }}
        >
          {" "}
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setPriceSort(productSpices.sort((a, b) => b.price - a.price)) ||
              setSort(true);
          }}
        >
          {" "}
          <ArrowDownwardIcon />
        </IconButton>
      </div>
      <div className="productSection">
        {!sort
          ? productSpices.map((products) => (
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

export default Spices;
