import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import realEstateRoutes from './routes/realEstateRoutes.js';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', realEstateRoutes);
mongoose
    .connect('mongodb+srv://Pooprav:8igvJKHVlWNlhk5g@poopravcluster0.clos40k.mongodb.net/real-estate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
app.listen(5000, () => {
    console.log('Server running on port 3000');
});
