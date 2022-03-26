import axios from "axios";
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../store";
import Rating from "./Rating";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHanlder = async (item) => {
    const existItem = cart.cartItems.find((item) => item._id === product._id);

    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/newProduct/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("sorry,product is not in stock");
    }
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    navigate("/cart");
  };
  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>Rs{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button disabled variant="light">
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHanlder(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
