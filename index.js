const express = require('express')
const app = express()


const MyCustomMiddleware = (req, res, next) => {
    const date = new Date();
    const h = date.getHours();
    const d = date.getDay();
    if (d === 0 || d === 6 || h < 9 ||  h>17) { res.send(" <h1>Sorry Customer, We are closed. Please comeback Monday from 9am to 5pm </h1>") }
    else {next()}
  };


app.use(MyCustomMiddleware);
app.use(express.static(__dirname+'/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/Views/index.html')
})

app.get('/services', (req, res) => {
    res.sendFile(__dirname+'/Views/services.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/Views/contact.html')
})

const port = 5000

app.listen(port, () => 
console.log(`server is running on port ${port}`));


