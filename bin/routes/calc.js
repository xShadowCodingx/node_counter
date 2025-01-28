/*
Author: Chase Quinn
*/

const router = require('express').Router();
const counterModel = require("../db/counter").counter;
const archiveModel = require("../db/archive").counterArchive;
const url = require('url');

router.get('/', async (req, res) => {
    const query = url.parse(req.url, true).query;
    const currentCount = await counterModel.findOne();
    if (query.type == 'minus') {
        if (currentCount.count > 0) {
            const newCount = currentCount.count - 1
            await currentCount.update({ count: newCount });
            res.status(200).send(newCount.toString());
        } else {
            var zeroCurrent = 0
            res.status(200).send(zeroCurrent.toString());
        }
    }
    else if (query.type == 'plus') {
        const newCount = currentCount.count + 1
        await currentCount.update({ count: newCount });
        res.status(200).send(newCount.toString());
    }
    else if (query.type == 'new') {
        if (currentCount == null) {
            const currentCounterInstance = await counterModel.create({ start: 0, count: 0 });
            res.send(currentCounterInstance.count.toString());
        } else {
            await currentCount.update({start: query.target, count: query.target});
            res.send(currentCount.start.toString());
        }
    }
    else if(query.type == 'archive') {
        const currentCounter = await counterModel.findOne();
        const newArchive = await archiveModel.create({target: currentCounter.start, actual: currentCounter.count, date: new Date()});
        await currentCounter.update({start: 0, count: 0});
        res.send(currentCounter.count.toString());
    }
});

module.exports = router;