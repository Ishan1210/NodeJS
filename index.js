const http=require('http');
const myserver=http.createServer((req,res)=>{
    console.log('server1');
    res.end('Hello from server1');
});
myserver.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});

