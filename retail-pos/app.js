const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/retail-pos', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});

const SaleSchema = new mongoose.Schema({
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    total: Number,
    date: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', ProductSchema);
const Sale = mongoose.model('Sale', SaleSchema);

app.get('/', (req, res) => {
    res.send('Retail POS System');
});

app.post('/products', async (req, res) => {
    const { name, price, stock } = req.body;
    const product = new Product({ name, price, stock });
    await product.save();
    res.status(201).send(product);
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
});

app.post('/sales', async (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    if (product.stock < quantity) {
        return res.status(400).send('Insufficient stock');
    }
    const total = product.price * quantity;
    product.stock -= quantity;
    await product.save();
    const sale = new Sale({ productId, quantity, total });
    await sale.save();
    res.status(201).send(sale);
});

app.get('/sales', async (req, res) => {
    const sales = await Sale.find().populate('productId');
    res.status(200).send(sales);
});

app.listen(port, () => {
    console.log(`Retail POS app listening at http://localhost:${port}`);
});
