const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.use(orderRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB conectado");
})
.catch((err) => {
    console.log("Erro ao conectar", err);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});