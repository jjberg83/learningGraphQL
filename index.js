import express from 'express';

const PORT = 8080;

const app = express(); // dette er en server

app.get('/', (req, res) => {
    res.send("Dette er beskjeden klienten får når hun gjør sin første http get request til root")
}
);

app.listen(PORT, () => console.log(`Kjører server på localhost:${PORT}/learningGraphQL`));