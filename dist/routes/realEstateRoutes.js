var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import RealEstate from '../models/realEstateModel.js';
const router = express.Router();
// POST request to add form data to the database
router.post('/real-estate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const realEstateData = new RealEstate(req.body);
        yield realEstateData.save();
        res.status(201).json({ message: 'Real estate data submitted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving data' });
    }
}));
// GET request to fetch all form data from the database
router.get('/real-estate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield RealEstate.find();
        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data' });
    }
}));
export default router; // This is the correct export syntax for ES modules
