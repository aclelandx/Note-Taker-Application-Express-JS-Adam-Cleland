// this page directs the request to the proper location.
const router = require(`express`).Router();
const apiRoutes = require(`./api`)

router.use(`/api`, apiRoutes);

module.exports = router;

