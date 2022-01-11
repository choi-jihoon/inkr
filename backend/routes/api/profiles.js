const express = require('express');
const asyncHandler = require('express-async-handler');
const { Profile, User } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    const profile = await Profile.findOne({
        where: {
            userId
        },
        include: [ { model: User }]
    });

    res.json(profile);
}))

router.put('/:id(\\d+)', asyncHandler(async function (req, res) {
    await Profile.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    const editedProfile = await Profile.findByPk(req.params.id, {
        include: [{ model: User }]
    });
    res.json(editedProfile);
}))


module.exports = router;
