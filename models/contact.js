const mongoose = require('mongoose')

const ContactForm = mongoose.model('contact', {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    }
})

module.exports = ContactForm