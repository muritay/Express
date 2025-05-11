const express = require('express')
const app =  express()
const port = 3000;

app.use(express.json());

let data = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'}
];

app.get('/', (req, res) => res.send('Hello from Hompage'));

app.get('/item', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id ===id);

    if(item) {
        res.json(item);
    } else {
        res.status(404).send('item not found');
    }
});

app.post('/item', (req, res) => {
    const newItem = {
        id: data.length + 1,
        name: req.body.name
    };
    data.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res)  => {
const id = parseInt (req.params.id)
const itemIndex = data.findIndex(item =>item.id ===id);

if (itemIndex !== -1) {
data[itemIndex].name = req.body.name;
res.json(data[indexIndex]);
} else {
    res.status(404).send('item not found');
}
}); 

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter(item => item.id !==id);
    res.status(204).send();
});

app.listen(port, () => console.log('server running on port: http: //localhost:3000 ${PORT}'));
