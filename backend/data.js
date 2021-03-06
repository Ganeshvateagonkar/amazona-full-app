import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Ganesh",
      email: "admin@123.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Nike slim shirt",
      slug: "Nike-slim-shirt",
      category: "shirt",
      image: "/images/p1.jpg",
      price: 600,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: "2",
      name: "Adidas slim shirt",
      slug: "adidas-slim-shirt",
      category: "shirt",
      image: "/images/p2.jpg",
      price: 800,
      countInStock: 0,
      brand: "Adidas",
      rating: 3.5,
      numReviews: 19,
      description: "high quality shirt",
    },
    {
      // _id: "3",
      name: "Nike slim pant",
      slug: "Nike-slim-pant",
      category: "pants",
      image: "/images/p3.jpg",
      price: 600,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality pant",
    },
    {
      // _id: "4",
      name: "Adidas fit pant",
      slug: "adidas-fit-pant",
      category: "pant",
      image: "/images/p4.jpg", //679 *829
      price: 600,
      countInStock: 10,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality pant",
    },
  ],
};

export default data;
