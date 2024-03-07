import express from "express";
import weatherRoute from "./routes/weatherRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());

//our new route
app.use("/api/weather", weatherRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
