// const http=require('http');
// const myserver=http.createServer((req,res)=>{
//     // console.log('server1');
//     // res.end('Hello from server1');
//     if(req.url=='/'){
//         res.writeHead(200, { "Content-Type": "text/html" });

//         res.end(`
//                 <img src="https://th.bing.com/th/id/OIP._mVfeIz_M5OghcDn9HD8RgAAAA?w=121&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="ABES Logo"/>
//                 <h1>We are students of ABES</h1>
//                     `);

//     }
//     else if(req.url=='/about'){
//         res.end('We are students of ABESEC');
//     } 
//     else if(req.url=='/contact'){
//         res.end('Student Contact: 1234567890');
//     }
//     else if(req.url=='/class'){
//         res.end('Class is IT-A');
//     }  
//     else{
//         res.end('404 Page Not Found');
//     }
// });
// myserver.listen(3000,()=>{
//     console.log('Server is listening on port 3000');
// });

// const fs=require('fs');
// // fs.writeFileSync('./it-a.txt','We are student of IT');
// // fs.writeFileSync('./ABES.txt','We are student of ABES');
// const result=fs.readFileSync('./it-a.txt','utf-8');
// console.log(result);

const fs=require('fs');
// fs.writeFile('./it-a.txt','We are student of IT',()=>{});
// fs.readFile('./it-a.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync('./it-a.txt',' and we are smart');

// fs.appendFile('./it-a.txt',' as well as intelligent',()=>{
//     console.log('Data appended successfully');
// });

// fs.cpSync('./a1.txt','./b1.txt');
fs.cp('./a1.txt','./b1.txt',()=>{
    console.log('File copied successfully');
});