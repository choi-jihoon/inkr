const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
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
        ]
    })
    res.json({ images });
}))






module.exports = router;
