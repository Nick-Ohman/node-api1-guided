// import express
const express = require('express'); // similar to import express from express


// create server

const server = express(); // how to parse JSON from the body

//middleware
server.use(express.json())

let lessons = [
    {
        id: 1,
        name: "building apis with express",
        
        
    },
    {
        id: 2,
        name: "server routing with expreess",
    }
]

// a function to handle get requests to /
server.get('/', (req, res) => {
    //req === request
    /// res === response
    res.send('hello web 30!')
});

server.get('/lessons', (req, res) => {
    res.status(200).json(lessons);
});

server.post('/lessons', (req, res) => {
    // axion.post(url, data, options) => the data is in the request body
    const lesson = req.body;
    lessons.push(lesson);

    res.status(201).json(lessons);
})

server.delete('/lessons/:id', (req, res) => {
    const id = req.params.id
    
    lessons = lessons.filter(L => L.id !== Number(id))

    res.status(200).json(lessons)
})

/// need to build the put

// server to listen to incoming requests
const port = 8000;

server.listen(port, () => console.log(`\n == API running on port ${port} == \n`));