/*
Author: Chase Quinn
*/

const router = require('express').Router();
const url = require('url');
const counterModel = require("../db/counter").counter

router.get('/', async (req, res) => {
    const query = url.parse(req.url, true).query;
    let notification = "null"
    if (query.notification) {
        if (query.notification == 'archive success') {
            notification = {type: 'success', message: 'Archive successful!'}
        }
    }
    let currentCounter = await counterModel.findOne();
    let currentCount = 0
    let currentTarget = 0
    if (currentCounter == null) {
        const currentCounter = await counterModel.create({ start: 0, count: 0 });
        currentCount = currentCounter.count
        currentTarget = currentCounter.start
    } else {
        currentCount = currentCounter.count
        currentTarget = currentCounter.start
    }

    res.render('counter', { TARGET: currentTarget, notification: notification.type, notificationMessage: notification.message });
});

module.exports = router;