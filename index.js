import express, { request, response } from 'express';
import{router as SongRouter} from './Routes/song.router.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 4000;

app.use(SongRouter);

app.listen(port, () => {
	console.log(`Server kører på port ${port}`);
})

// app.get('/', (request, response) => {
// 	response.send('Hello World =)');
// })

// app.get('/about', (request, response) => {
// 	response.send('Om os');
// })

// app.get('/Kontakt', (request, response) => {
// 	response.send('Vores e-mail');
// })

// app. listen(4000, ()=> {
// 	console.log('Server kører på port 4000');
// })