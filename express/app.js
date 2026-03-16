// const express = require('express');
// const app = express();

// const student = [
//     {
//         id: 1,
//         name: "Ishan",
//         class: "B.Tech"
//     }
// ];

// // app.get('/', (req, res) => {
// //     try {
// //         res.status(200).json({
// //             message: 'Student data',
// //             data: student
// //         });
// //     } catch (error) {
// //         res.status(500).json({
// //             message: 'Error fetching student data',
// //             error: error.message
// //         });
// //     }
// // });

// // app.listen(8000, () => {
// //     console.log('Server running on http://localhost:8000');
// // });

// app.get('/:id', (req, res) => {
//     try {
//         const studentId =parseInt(req.params.id);

//         const studentData = student.find(s => s.id === studentId);

//         if (studentData) {
//             res.status(200).json({
//                 message: 'Student data found',
//                 data: studentData
//             });
//         } else {
//             res.status(404).json({
//                 message: 'Student data not found'
//             });
//         }

//     } catch (error) {
//         res.status(500).json({
//             message: 'Error fetching student data',
//             error: error.message
//         });
//     }
// });

// // app.listen(8000, () => {
// //     console.log('Server running on http://localhost:8000');
// // });
const express = require('express');
const app = express();
const port = 8080;
const path = require('path')

//Data base (type - JSON)
const student = [{
    id: 1,
    name: "Ishan",
    class: "B.Tech VI"
},
{
    id: 2,
    name: "Nishkarsh",
    class: "B.Tech VI"

}]

//CRUD operations


app.get('/student', (req, res) => {
    res.send(student);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});