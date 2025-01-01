
// //ANOTHER WAY OF WRITING MIDDLEWEAR
// const checkage = (req,res,next) => {
//     if(!req.query.age)
//     {
//         res.send("AGE IS MANDIATORY IN THE URL")
//     }
//     else if(req.query.age < 18)
//     {
//         //alert are not used in node js so
//         res.send("AG IS MANDATIORY !");
//     }
//     else{
//         next();
//     }
// }

//===================================OR===========USING EXPRESS=================


const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const login = require("../Express/Routes/logininRoutes.js");
const sigin = require("../Express/Routes/SiginRoutes.js");
const product =  require("../Express/Routes/ProductsRoutes.js");
const cart = require("../Express/Routes/CartRoutes.js")

const port = 5000; // Use the correct port


const coreOption = {
  origin:"http://localhost:3000",
};

app.use(cors(coreOption)); // Allow all origins by default
app.use(express.json());

require('./conn.js');
app.use("/reg", login.loginRouter);
app.use("/sigin",sigin.SiginRouter);
app.use("/products",product.ProductRouter);
app.use("/getproducts",product.ProductRouter);
app.use("/cart",cart.CartRouter);
app.use("/emailcart",cart.CartRouter);
app.use("/useremail",login.loginRouter);

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});















