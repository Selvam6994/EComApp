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

function NaturalOils() {
    let productCoffee = [
        {
          name: "Lavender Oil",
          price: "350",
          reviews: "5",
          inStock: true,
          quantity: "30",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322032/samples/ecommerce/Natural%20Oils/Lavender_oil_b1ytha.jpg",
        },
        {
          name: "Olive Oil",
          price: "360",
          reviews: "8",
          inStock: true,
          quantity: "250",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322032/samples/ecommerce/Natural%20Oils/Olive_Oil_jiyuqh.jpg",
        },
        {
          name: "Herbal Oil",
          price: "500",
          reviews: "4",
          inStock: false,
          quantity: "500",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322031/samples/ecommerce/Natural%20Oils/Herbal_oil_ysbn6f.jpg",
        },
        {
          name: "Rose Oil",
          price: "350",
          reviews: "1",
          inStock: true,
          quantity: "30",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322026/samples/ecommerce/Natural%20Oils/Rose_oil_zgaozs.jpg",
        },
        {
          name: "Sandlewood Oil",
          price: "1050",
          reviews: "7",
          inStock: true,
          quantity: "50",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322025/samples/ecommerce/Natural%20Oils/Sandlewood_oil_vxgctd.webp",
        },
        {
          name: "Jassmin Oil",
          price: "720",
          reviews: "7",
          inStock: true,
          quantity: "75",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322023/samples/ecommerce/Natural%20Oils/Jassmin_oil_ov1ymq.webp",
        },
        {
          name: "Lemon Grass Oil",
          price: "650",
          reviews: "7",
          inStock: true,
          quantity: "250",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322018/samples/ecommerce/Natural%20Oils/Lemon_grass_oil_g9bzaz.jpg",
        },
        {
          name: "Almond Oil",
          price: "350",
          reviews: "7",
          inStock: true,
          quantity: "250",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322010/samples/ecommerce/Natural%20Oils/Almond_oil_jq22aq.jpg",
        },
        {
          name: "Eucalyptus Oil",
          price: "332",
          reviews: "7",
          inStock: true,
          quantity: "250",
          unit: "ml",
          image:
            "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322006/samples/ecommerce/Natural%20Oils/Eucalyptus_oil_cnou0k.jpg",
        },
        {
            name: "Clove Oil",
            price: "150",
            reviews: "7",
            inStock: true,
            quantity: "30",
            unit: "ml",
            image:
              "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322002/samples/ecommerce/Natural%20Oils/Clove_Oil_tbfulj.jpg",
          },
      ];
      productCoffee.sort((a, b) => a.name.localeCompare(b.name));
      const [sort, setSort] = useState(false);
      const [priceSort, setPriceSort] = useState([]);
  return (
    <div className="productPage">
      <div className="pageTitle">
        <span>Natural Oils</span>
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
  )
}

export default NaturalOils