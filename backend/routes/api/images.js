const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image, User, Favorite } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const images = await Image.findAll({
        include: [
            { model: User },
            { model: Favorite }
        ],
        order: [['createdAt', 'DESC']]
    })

    res.json(images);
}))

router.post(
    '/',
    singleMulterUpload('image'),
    asyncHandler(async function (req, res) {
        const { userId, tags } = req.body;
        const imageUrl = await singlePublicFileUpload(req.file);
        const newImage = await Image.create({
            userId,
            imageUrl,
            tags
        });

        const image = await Image.findByPk(newImage.id, {
            include: [
                { model: User },
                { model: Favorite }
            ],
        })
        res.json(image);
    })
)

router.put(
    '/:id(\\d+)',
    asyncHandler(async function (req, res) {
        await Image.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        const image = await Image.findByPk(req.params.id, {
            include: [
                { model: User },
                { model: Favorite }
            ],
        });
        res.json(image);
    })
)

router.delete(
    '/:id(\\d+)',
    asyncHandler(async function (req, res) {
        const image = await Image.findByPk(req.params.id);
        await image.destroy();
        res.status(204).end();
    })
)

// update favoriteCount
router.put(
    '/:id(\\d+)/favorites',
    asyncHandler(async function (req, res) {
        await Image.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        const image = await Image.findByPk(req.params.id);


        res.json(image);
    })
)

// add to favorites table with updated favoriteCount
router.post(
    '/:id(\\d+)/favorites',
    asyncHandler(async function (req, res) {
        const favorite = await Favorite.create(req.body);
        res.json(favorite);
    })
)

// delete from favorites table
router.delete(
    '/:id(\\d+)/favorites',
    asyncHandler(async function (req, res) {
        const favorite = await Favorite.findOne({
            where: {
                imageId: req.params.id,
                userId: req.body.userId
            }
        })

        await favorite.destroy();
        res.status(204).end();
    })
)


module.exports = router;
