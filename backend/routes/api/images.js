const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image, User, Favorite } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const images = await Image.findAll({
        include: [
            { model: User },
            { model: Favorite }
        ]
    })

    res.json({ images });
}))

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const image = await Image.create(req.body);
        res.json(image);
    })
)

router.patch(
    '/:id(\\d+)',
    asyncHandler(async function (req, res) {
        const image = await Image.update(req.body);
        res.json(image);
    })
)



module.exports = router;
