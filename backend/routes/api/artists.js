const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image, User, Favorite } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)/images', asyncHandler(async function (req, res) {
    const images = await Image.findAll({
        where: {
            userId: req.params.id
        },
        include: [
            { model: User },
            { model: Favorite }
        ],
        order: [['createdAt', 'DESC']]
    })
    res.json(images);
}))


module.exports = router;
