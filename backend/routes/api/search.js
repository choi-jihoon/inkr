const { Op } = require('sequelize');
const asyncHandler = require('express-async-handler');
const express = require('express');
const { Image, User, Favorite } = require('../../db/models');


const router = express.Router();



router.get('/:id', asyncHandler(async (req, res, next) => {
    const searchQuery = req.params.id;

    try {
        const results = await Image.findAll({
            where: {
                tags: { [Op.contains]: [searchQuery] }
            },
            include: [
                { model: User },
                { model: Favorite }
            ]
        })

        res.status(201).json(results)

    } catch (e) {
        next(e)
    }
}))

module.exports = router;
