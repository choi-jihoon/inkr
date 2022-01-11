const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image, User, Favorite, Profile, Review } = require('../../db/models');

const router = express.Router();

router.get('/:artistId(\\d+)', asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
        where: {
            artistId: req.params.artistId
        },
        include: [
            { model: User }
        ]
    })
    res.json(reviews);
}))

router.post('/', asyncHandler(async function (req, res) {
    const newReview = await Review.create(req.body);
    const review = await Review.findByPk(newReview.id, {
        include: [
            { model: User }
        ]
    });
    res.json(review);
}))

module.exports = router;
