const express = require('express');

// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });
// app.get('/about', (req, res) => {
//     res.send('About page');
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const student=[(
    id: 1,
    name: "Ishan",
    class: "B.Tech",
)]

app.get('/', (req, res) => {
    try {
        res.status(200).json(message: 'Student data', data: student);
    } catch (error) {
        res.status(500).json(message: 'Error fetching student data', error: error.message);
    }
});

app.listen(8000, () => {
    console.log(`Server running on http://localhost:8000`);
});