const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image, User, Favorite } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async function(req, res) {
    const faves = await Favorite.findAll({
        where: {
            userId: req.params.id
        },
        include: [
            { model: Image, include: [{model: User}, {model: Favorite}] }
        ],
    })

    const favImages = faves.map(favImage => favImage.Image);
    res.json(favImages);
}))

module.exports = router;
