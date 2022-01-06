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
        const newImage = await Image.create(req.body);
        res.json({ newImage })
    })
)




module.exports = router;
