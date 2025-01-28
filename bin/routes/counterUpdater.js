/*
Author: Chase Quinn
*/

const router = require('express').Router();
const counterModel = require("../db/counter").counter

router.get('/', async (req, res) => {
    const currentCounter = await counterModel.findOne();
    if (currentCounter == null) {
        const currentCounter = await counterModel.create({ start: 0, count: 0 });
        const currentCount = currentCounter.count
        res.send(currentCount.toString());
    }
    else {
        const currentCount = currentCounter.count
        res.send(currentCount.toString());
    }
});

module.exports = router;