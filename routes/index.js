'use strict';

const express = require('express');
const router = express.Router(); //gives you access to the express router. 

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home Page'
        },
        partials: {
            body: 'partials/home' //looks in the views folder by default
        }
    })
})

module.exports = router;