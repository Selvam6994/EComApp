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

function Chocolates() {
  const [sort, setSort] = useState(false);
  const [priceSort, setPriceSort] = useState([]);
  const [productChocolates, setProductChocolates] = useState([]);
  const getChocolate = async () => {
    try {
      const data = await fetch(
        "http://localhost:4000/api/products/chocolates",
        {
          headers: { productAuth: sessionStorage.getItem("autt") },
        }
      );
      const jsonData = await data.json();
      setProductChocolates(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChocolate();
  }, [productChocolates]);
  // const productChocolates = [
  //   {
  //     name: "Whole Nut Chocolates",
  //     price: "600",
  //     reviews: "5",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319130/samples/ecommerce/Chocolates/Whole_nut_chocolates_sqrhq1.jpg",
  //   },
  //   {
  //     name: "White Chocolates",
  //     price: "650",
  //     reviews: "8",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319128/samples/ecommerce/Chocolates/White_chocolates_r6nf8b.jpg",
  //   },
  //   {
  //     name: "Walnut Chocolates",
  //     price: "650",
  //     reviews: "4",
  //     inStock: false,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319126/samples/ecommerce/Chocolates/Walnut_chocolates_eommkm.jpg",
  //   },
  //   {
  //     name: "Wafer Chocolates",
  //     price: "680",
  //     reviews: "1",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319125/samples/ecommerce/Chocolates/Wafer_chocolates_w6od8s.jpg",
  //   },
  //   {
  //     name: "Strawberry Filled Chocolates",
  //     price: "680",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319124/samples/ecommerce/Chocolates/Strawberry_chocolates_wvpycx.jpg",
  //   },
  //   {
  //     name: "Plain Chocolates",
  //     price: "650",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319122/samples/ecommerce/Chocolates/Plain_chocolates_xfya2y.jpg",
  //   },
  //   {
  //     name: "Honey Filled Chocolates",
  //     price: "680",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319121/samples/ecommerce/Chocolates/Honey_chocolates_n3mnrj.jpg",
  //   },
  //   {
  //     name: "Flavour Filled Chocolates",
  //     price: "680",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319118/samples/ecommerce/Chocolates/Flavour_filled_chocolates_wyktlo.jpg",
  //   },
  //   {
  //     name: "Dark Chocolates",
  //     price: "650",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319118/samples/ecommerce/Chocolates/Dark_chocolates_ymdpie.jpg",
  //   },
  //   {
  //     name: "Cherry Top Chocolates",
  //     price: "700",
  //     reviews: "7",
  //     inStock: true,
  //     quantity: "1",
  //     unit: "kg",
  //     image:
  //       "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319117/samples/ecommerce/Chocolates/Cherry_Top_Chocolates_q1mm2l.jpg",
  //   },
  // ];

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
          }}
        >
          {" "}
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setPriceSort(productChocolates.sort((a, b) => b.price - a.price)) ||
              setSort(true);
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

export default Chocolates;
