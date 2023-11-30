import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, IconButton } from "@mui/material";
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
  const carouselSlides = [
    {
      name: "Chocolate",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700292278/samples/ecommerce/Carousel%20Images/Flavour_filled_chocolates_z8gzlq.jpg",
      caption:
        "Indulge in the rich flavors of Kodaikanal chocolate, a sweet escape to blissful moments. ",
    },
    {
      name: "Fruits",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313302/samples/ecommerce/Carousel%20Images/Avacado_upxwry.jpg",
      caption:
        "A colorful array of fresh and juicy fruits, a true delight for the senses! ",
    },
    {
      name: "Spices",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313390/samples/ecommerce/Carousel%20Images/pepper-525696_1280_tycina.jpg",
      caption: "Spice up your life with a symphony of flavors! ",
    },
    {
      name: "Kodai Coffee",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313225/samples/ecommerce/Carousel%20Images/Coffee_Berry_crk2nj.jpg",
      caption:
        "Savoring the rich aroma of Kodaikanal coffee, where every sip is a journey through misty hills and lush plantations.",
    },
    {
      name: "Natural Oils",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313338/samples/ecommerce/Carousel%20Images/Eucalyptus_oil_shvngp.jpg",
      caption:
        "Unleashing the power of nature: where beauty meets the essence of natural oils.",
    },
  ];

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
  ];

  const popularProducts = [
    {
      name: "Strawberry Chocolates",
      price: "680",
      reviews: "5",
      inStock: true,
      quantity: "1",
      unit: "kg",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319124/samples/ecommerce/Chocolates/Strawberry_chocolates_wvpycx.jpg",
    },
    {
      name: "Black Pepper",
      price: "1200",
      reviews: "8",
      inStock: true,
      quantity: "1",
      unit: "kg",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319727/samples/ecommerce/Spices/Black_Pepper_winygh.jpg",
    },
    {
      name: "Strawberry",
      price: "450",
      reviews: "4",
      inStock: false,
      quantity: "1",
      unit: "kg",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319368/samples/ecommerce/Fruits/Strawberry_sorkxf.jpg",
    },
    {
      name: "Plums",
      price: "280",
      reviews: "1",
      inStock: true,
      quantity: "1",
      unit: "kg",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319362/samples/ecommerce/Fruits/Plums_tpao4s.jpg",
    },
    {
      name: "Sandle Wood Oil",
      price: "1050",
      reviews: "7",
      inStock: true,
      quantity: "50",
      unit: "ml",
      image:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700322025/samples/ecommerce/Natural%20Oils/Sandlewood_oil_vxgctd.webp",
    },
  ];

  return (
    <div className="homePage">
      <Carousel className="carousel">
        {carouselSlides.map((slides) => (
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
        <div className="categorySection">
          <div className="categorySectionTitle">
            <span>Categories</span>
            <Link to="/categories" style={{textDecoration:"none"}}>
            <Button sx={{ fontWeight: "bold", fontSize: "20px" }}>
              See All <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
            </Button>
            </Link>
          </div>
          <div className="productCardSection">
            {categories.map((products) => (
              <Link to={products.route} style={{textDecoration:"none"}}>
              <Card elevation={8} sx={{ minWidth: 280 }}>
                <CardMedia
                  sx={{ height: 180 }}
                  image={products.image}
                  title={products.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {products.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">View Products</Button>
                </CardActions>
              </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="popularSection">
          <div className="popularSectionTitle">
            <span>Popular Products</span>
            <Button sx={{ fontWeight: "bold", fontSize: "20px" }}>
              See All <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
            </Button>
          </div>
          <div className="popularProductSection">
            {popularProducts.map((products) => (
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
                      {products.unit} / Rs.{products.price}/-
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
                      <span style={{ color: "#1b5e20", fontWeight: "bolder" }}>
                        InStock
                      </span>
                    ) : (
                      <span style={{ color: "#d50000", fontWeight: "bolder" }}>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
