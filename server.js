import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import stopsHandler from './api/stops.js';
import checkHandler from './api/check.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/stops', stopsHandler);
app.post('/api/check', checkHandler);

app.listen(PORT, () => console.log(`Treasure hunt running on http://localhost:${PORT}`));
