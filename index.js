const http = require('http')
const fs = require('fs')


const hostname = 'localhost'
const port = 1500

const serve = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case '/':
            getResponse('index.html',req,res)
            
            break;
        case '/contact':
            getResponse('contact.html',req,res)
                
            break;    
    
        default:
            res.statusCode = 400
            res.setHeader('Content-Type', 'text/plain')
            res.end('Erreur 400 :page not found')
            break;
    }
    
    
    
})
function getResponse(filename , req,res){
    fs.readFile(filename,(err,data)=>{

        if(err){
         res.statusCode = 500
         res.setHeader('Content-Type', 'text/plain')
         res.end('Erreur Serveur 500')
        }else{
         res.statusCode = 200
         res.setHeader('Content-Type','text/html')
         res.end(data)
        }
         })
}

serve.listen(port, hostname, () => {
    console.log(`The server is running on http://${hostname}:${port}`);
});