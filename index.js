const express = require('express')
const app = express()
const path = require('path')

// console.log(app);

app.get('/', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if(err){
            console.log(err);
        }
    })
    // res.end()
})

app.get('/api/home', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if(err){
            console.log(err);
        }
    })
    // res.end()
})

app.get('/api/books', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if(err){
            console.log(err);
        }
    })
    // res.end()
})

app.get('/api/cars', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if(err){
            console.log(err);
        }
    })
    // res.end()
})

app.get('/api/laptop', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if(err){
            console.log(err);
        }
    })
    // res.end()
})

app.get('/api/robots', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if(err){
            console.log(err);
        }
    })
    // res.end()
})



try {
    app.listen(3000, () => {
        console.log("Server working on", 3000);
    })
} catch (error) {
    console.log(error);
}