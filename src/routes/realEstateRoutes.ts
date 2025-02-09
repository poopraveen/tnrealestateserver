import express, { Request, Response } from 'express';
import RealEstate from '../models/realEstateModel';

const router = express.Router();

// POST request to add form data to the database
router.post('/real-estate', async (req: Request, res: Response) => {
  try {
    const realEstateData = new RealEstate(req.body);
    await realEstateData.save();
    res.status(201).json({ message: 'Real estate data submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

// GET request to fetch all form data from the database
router.get('/real-estate', async (req: Request, res: Response) => {
  try {
    const data = await RealEstate.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

export default router; // This is the correct export syntax for ES modules
