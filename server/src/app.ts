import express from 'express';
import cors from 'cors';
import weatherRoutes from './routes/weatherRoutes';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your client's domain
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json());
app.use('/api/weather', weatherRoutes);

export default app;
