const express = require('express');
const { getWeather } = require('../controllers/weatherController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather information routes (protected)
 */

router.use(authMiddleware);  // Protect the weather route

/**
 * @swagger
 * /api/weather:
 *   get:
 *     summary: Get weather data for a specific city
 *     tags: [Weather]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: The city name to fetch weather for
 *     responses:
 *       200:
 *         description: Weather data retrieved successfully
 *       400:
 *         description: Missing or invalid city parameter
 *       500:
 *         description: Error fetching weather data
 */
router.get('/', getWeather);

module.exports = router;
