const http=require('http');

const server=http.createServer((req,res)=>{
 if(req.url==='/'){
    res.end('WELCOME TO HOMEPAGE');
 }
 else if(req.url==='/about'){
    res.end('here is our history');
 }
 else{res.end(
    `
    <h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    
    `
 )
}

})

server.listen(5000);