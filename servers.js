import http from 'http'; //module included with node.js
const PORT = 8000;
const server=http.createServer((req,res)=>{
    res.setHeader("content-type",'type/html');
    res.write('<p>kannah</p>');
    res.end();
});

server.listen(PORT,()=>{
    console.log(`Server runing on port ${PORT}`);
});