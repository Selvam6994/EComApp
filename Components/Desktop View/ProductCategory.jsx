import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCategory() {
  const categories = [
    {
      name: "Fruits",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313302/samples/ecommerce/Carousel%20Images/Avacado_upxwry.jpg",
      route: "/categories/fruits",
    },
    {
      name: "Chocolates",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700292278/samples/ecommerce/Carousel%20Images/Flavour_filled_chocolates_z8gzlq.jpg",
      route: "/categories/chocolates",
    },

    {
      name: "Spices",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313390/samples/ecommerce/Carousel%20Images/pepper-525696_1280_tycina.jpg",
      route: "/categories/spices",
    },
    {
      name: "Coffee Varieties",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313225/samples/ecommerce/Carousel%20Images/Coffee_Berry_crk2nj.jpg",
        route:"/categories/coffee"
    },
    {
      name: "Natural Oils",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313338/samples/ecommerce/Carousel%20Images/Eucalyptus_oil_shvngp.jpg",
        route:'/categories/naturalolis'
    },
    {
      name: "Our Popualr Products",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322023/samples/ecommerce/Natural%20Oils/Jassmin_oil_ov1ymq.webp",
    },
    {
      name: "Check Out Offers",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700372691/samples/ecommerce/Special%20Offer/20667_nauicy.jpg",
    },
  ];
  return (
    <div className="categoriesPage">
      {/* side nav */}
      <Paper
        elevation={8}
        className="categorySideNav"
        // style={{ backgroundColor: "#DEA22F" }}
      >
        <div className="sideNavContent">
          <span>Categories</span>
          <div className="categoriesList">
            {categories.map((item) => (
              <motion.div
                className="navButtons"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {" "}
                <Paper
                  elevation={4}
                  style={{
                    minWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <li style={{ fontSize: 30, listStyle: "none" }}>
                    {item.name}
                  </li>
                </Paper>
              </motion.div>
            ))}
          </div>
        </div>
      </Paper>
      <div className="categoryPageSection">
        <div className="categoryPageTitle">
          <span>Select a Category</span>
        </div>
        <div className="categoryCardSection">
          {categories.map((products) => (
            <motion.div
              className="navButtons"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to={products.route} style={{textDecoration:"none"}}>
                <Card elevation={8} sx={{ minWidth: 280, margin: 5 }}>
                  <CardMedia
                    sx={{ height: 180 }}
                    image={products.image}
                    title={products.name}
                  />
                  <CardContent className="categoryCardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <span>{products.name}</span>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
