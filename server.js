const express = require('express');
const path = require('path');
const app = express();

let orders = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Add new order
app.post('/order', (req, res) => {
    const pizza = req.body.pizza;
    if (pizza) orders.push(pizza);
    res.json({ pizza });
});

// Get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
