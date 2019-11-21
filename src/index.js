import express from 'express';
import bodyParser from 'body-parser';
import * as motorAnalyzeService from './service/motorAnalyzeService';

const PORT = 8080;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({body: 'Hello Motor analysis.'});
});

app.get('/analyze', motorAnalyzeService.executeAnalysis);

app.listen(PORT, () => {
    console.log(`Express server started at port: ${PORT}`);
});

