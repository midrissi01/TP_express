//mongodb+srv://moulhaj430:Usht7hazZeLRZHGQ@cluster0.usaa3js.mongodb.net/?retryWrites=true&w=majority
//Usht7hazZeLRZHGQ
const express = require("express");

const app = express();
const productrouter = require("./routes/products.routes");

app.use(express.urlencoded());

app.use("/products", productrouter);

app.listen(3000, () => console.log(`Server Running`));
