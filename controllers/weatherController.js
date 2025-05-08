const axios = require('axios');

const getWeather = async (req, res, next) => {
    try {
        const { city } = req.query;
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
};

module.exports = { getWeather };
