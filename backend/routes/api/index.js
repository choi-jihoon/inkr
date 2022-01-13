const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images');
const artistsRouter = require('./artists');
const favoritesRouter = require('./favorites');
const profilesRouter = require('./profiles');
const reviewsRouter = require('./reviews.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);
router.use('/artists', artistsRouter);
router.use('/favorites', favoritesRouter);
router.use('/profiles', profilesRouter);
router.use('/reviews', reviewsRouter);





module.exports = router;
