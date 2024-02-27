const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

// Endpoint to generate JWT token
app.post('/generate-token', (req, res) => {
    const { patient, secretKey } = req.body;
    const token = jwt.sign({
        RegistrationNumber: patient.registrationNumber,
        dob: patient.dob
    }, secretKey, { expiresIn: '1h' });

    res.json({ token });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
