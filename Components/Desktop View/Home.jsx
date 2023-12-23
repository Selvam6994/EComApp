import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, IconButton, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
function Home() {
  const products = [
    {
      name: "Chocolate",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700292278/samples/ecommerce/Carousel%20Images/Flavour_filled_chocolates_z8gzlq.jpg",
      caption:
        "Indulge in the rich flavors of Kodaikanal chocolate, a sweet escape to blissful moments. ",
      route: "/categories/chocolates",
    },
    {
      name: "Fruits",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313302/samples/ecommerce/Carousel%20Images/Avacado_upxwry.jpg",
      caption:
        "A colorful array of fresh and juicy fruits, a true delight for the senses! ",
      route: "/categories/fruits",
    },
    {
      name: "Spices",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313390/samples/ecommerce/Carousel%20Images/pepper-525696_1280_tycina.jpg",
      caption: "Spice up your life with a symphony of flavors! ",
      route: "/categories/spices",
    },
    {
      name: "Kodai Coffee",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313225/samples/ecommerce/Carousel%20Images/Coffee_Berry_crk2nj.jpg",
      caption:
        "Savoring the rich aroma of Kodaikanal coffee, where every sip is a journey through misty hills and lush plantations.",
      route: "/categories/coffee",
    },
    {
      name: "Natural Oils",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313338/samples/ecommerce/Carousel%20Images/Eucalyptus_oil_shvngp.jpg",
      caption:
        "Unleashing the power of nature: where beauty meets the essence of natural oils.",
      route: "/categories/naturalolis",
    },
  ];

  return (
    <div className="homePage">
      <Carousel className="carousel">
        {products.map((slides) => (
          <Carousel.Item className="carouselItems">
            <img
              className="carouselImage"
              src={slides.image}
              alt={slides.image}
            />

            <Carousel.Caption className="carouselCaption">
              <p>{slides.caption}</p>
              <Button variant="contained">Shop Now!</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="productsSection">
        <div className="popularSection">
          <div className="popularSectionTitle">
            <span>Popular Products</span>
            <Link to="/categories">
              <Button sx={{ fontWeight: "bold", fontSize: "20px" }}>
                See All <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
              </Button>
            </Link>
          </div>
          <div className="popularCategorySection">
            {products.map((products) => (
              <Link to={products.route}>
                <Paper
                  className="categoryCards"
                  elevation={4}
                  sx={{ borderRadius: "10%" }}
                >
                  <motion.div
                    className="navButtons"
                    whileHover={{ scale: 1.1 }}
                    transition={{ stiffness: 400, damping: 17 }}
                  >
                    <img
                      className="cardImage"
                      src={products.image}
                      alt={products.name}
                    />
                  </motion.div>
                  <span>{products.name}</span>
                </Paper>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
