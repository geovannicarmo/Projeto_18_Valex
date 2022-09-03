import express, {json} from 'express';

import cors from 'cors';
import router from './routes/indexRoute';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(router)

const PORT = process.env.PORT || 5009

console.log(PORT)

app.listen(PORT, ()=>{console.log(`Server run in PORT ${PORT}`)})