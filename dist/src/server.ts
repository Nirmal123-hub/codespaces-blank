import express from 'express';
import weatherRoute from './routes/weatherRoute.js';
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//our new route
app.use('/api/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
