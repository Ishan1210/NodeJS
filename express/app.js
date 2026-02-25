const express = require('express');
const app = express();

// ✅ Correct way to declare an array of objects
const student = [
    {
        id: 1,
        name: "Ishan",
        class: "B.Tech",
    }
];

// ✅ Route
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'Student data',
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching student data',
            error: error.message
        });
    }
});

// ✅ Start server
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});