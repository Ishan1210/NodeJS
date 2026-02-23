const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server is running');
});
app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});