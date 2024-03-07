"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const weatherService_js_1 = require("../services/weatherService.js");
const express_validator_1 = require("express-validator");
/**
* Gets the weather data for a city
* @param req the request object
* @param res the response object
*/
const getWeatherData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    // We will log them and send a 400 status code
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // We will use a try catch block to catch any errors
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        // We will create a variable with a type of WeatherData
        let finalWeatherData;
        // We will use an if statement to check which city was passed in
        if (city === "london") {
            console.log((0, weatherService_js_1.generateLondonWeatherData)());
            finalWeatherData = (0, weatherService_js_1.generateLondonWeatherData)();
        }
        else if (city === "dublin") {
            finalWeatherData = (0, weatherService_js_1.generateDublinWeatherData)();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("City not found");
            return;
        }
        // We will return the weather data as JSON
        res.status(200).json(finalWeatherData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send("Error in fetching weather data");
    }
});
exports.getWeatherData = getWeatherData;
