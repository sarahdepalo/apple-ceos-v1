'use strict';

const express = require('express');
const router = express.Router();

const ceoModel = require('../model/db');

router.get('/:slug?', (req, res) => {
    if (!!req.params.slug) { //returns true
        const executive = ceoModel.find(ceo => ceo.slug === req.params.slug);
        res.render('template', {
            locals: {
                title: "CEO DETAILS",
                ceo: executive
            },
            partials: {
                body: "partials/ceo-details"
            }
        })

    } else {
        res.render('template', {
            locals: {
                title: 'CEO List',
                data: ceoModel //(data is a variable) ceoModel represents all the data and is an object that you can manipulate
            },
            partials: {
                body: 'partials/ceo-list'
            }
        });
    }
});

module.exports = router;