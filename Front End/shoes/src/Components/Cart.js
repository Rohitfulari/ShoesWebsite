import React, { useEffect, useState } from 'react';
import '../Components/Cart.css';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const [product, setProduct] = useState([]);

    
    

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                // Fetch the email from the backend if needed
                const result2 = await axios.get("http://localhost:5000/useremail/useremail");
                console.log(result2.data);
                let email = result2.data;

                
                
                
                

                // Fetch cart items by email
                const result = await axios.get(`http://localhost:5000/emailcart/emailcart?email=${email}`);
                setProduct(result.data); 
                console.log("Cart items fetched successfully:", result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchCartData();
    }, []);

    
    return (
        <div className='CartHouse'>
            <h1>CART-ITEAMS</h1>
            {product.map((item, index) => (
                <div className="productxx" key={item.id || index}>
                    
                    <img src={item.img} alt={item.title} />
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                    <div className='delete'>
                        <button>
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
