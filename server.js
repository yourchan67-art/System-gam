const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// প্রজেক্টের মূল ফোল্ডারে থাকা সব স্ট্যাটিক ফাইল (html, css, js) লোড করার জন্য
app.use(express.static(path.join(__dirname, './')));

// মূল পেজে ভিজিট করলে index.html ফাইল দেখাবে
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
