const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { Profile, User } = require('../../db/models');

const router = express.Router();

const validateProfile = [
    check('profilePic')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid image url.'),
    check('fullName')
        .isLength({ max: 50 })
        .withMessage('Full name cannot be longer than 50 characters.'),
    check('location')
        .isLength({ max: 255 })
        .withMessage('Location cannot be longer than 255 characters.'),
    check('description')
        .isLength({ max: 255 })
        .withMessage('Description cannot be longer than 255 characters.'),
    handleValidationErrors,
];



router.get('/:id(\\d+)', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    const profile = await Profile.findOne({
        where: {
            userId
        },
        include: [{ model: User }]
    });

    res.json(profile);
}))

router.put('/:id(\\d+)', validateProfile, asyncHandler(async function (req, res) {
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
