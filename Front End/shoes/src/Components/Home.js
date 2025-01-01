import React, { useEffect, useState } from 'react';
import '../Components/Home.css';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa'; 

const Home = () => {
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0); 
  const [em,setem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/getproducts/getproducts");
        console.log(result.data);
        setproducts(result.data);
      } catch (error) {
        console.log("GETTING DATA IS IN TROUBLE:", error);
      }

      try {
        const result2 = await axios.get("http://localhost:5000/useremail/useremail");
        console.log(result2.data);
        setem(result2.data);
        
        
      } catch (error) {
        console.log("NOT GETTING EMAIL:",error)
        
      }
    };
    fetchData();
  }, []);

  const Cart = async (product) => {
    setcount((prevCount) => prevCount + 1);

    try {
      // const email = localStorage.getItem("email"); 
      // if (!email) {
      //   console.error("No email found. User must have a email to add items to the cart.");
      //   return;
      // }

      //backedn is working but from frontend it not getting the loginid slove it
      const CartData = await axios.post("http://localhost:5000/cart/cart", {
        email:em,
        img: product.img,
        title: product.title,
        price: product.price,
      });

      console.log("The cart data has been sent to the backend!");
      console.log(CartData);
    } catch (error) {
      console.error("Error sending cart data to backend:", error);
    }
  };

  return (
    <div className='Home'>
      <header>
        <h1>ӄʀɨֆɦ</h1>
      </header>

      <nav className="navbar">
        <a className="cart-icon" href="/cart">
          <FaShoppingCart />
          <button>{count}</button> 
        </a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/reg">Login</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h2>Welcome to Store</h2>
      </section>

      <section className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={() => Cart(product)}>Add to Cart</button>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2024 My E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
