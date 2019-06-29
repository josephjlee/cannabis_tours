require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const ContactForm = require('../models/contact')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/contact', (req, res)=> {
    console.log('contact  :', req.body)
        const contact = new ContactForm(req.body);
        contact.save().then(()=> {
            res.status(201).send(contact);
        }).catch((e)=> {
            res.status(400).send(e)
        })
});

app.listen(port, ()=> {
    console.log('listening on port ', port)
});